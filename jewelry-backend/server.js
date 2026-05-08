/* global process, require */
const express = require("express");
const cors = require("cors");
const { Buffer } = require("buffer");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const pendingOrders = {};
const {
  PAYPAL_CLIENT_ID,
  PAYPAL_CLIENT_SECRET,
  PORT = 8080,
  GOOGLE_SCRIPT_URL,
} = process.env;

const base = "https://api-m.sandbox.paypal.com";

async function generateAccessToken() {
  const auth = Buffer.from(
    PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET
  ).toString("base64");

  const response = await fetch(`${base}/v1/oauth2/token`, {
    method: "POST",
    body: "grant_type=client_credentials",
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });

  const data = await response.json();

  return data.access_token;
}

//CREATE ORDER
app.post("/api/orders", async (req, res) => {
  try {
    //Item info and input elements content
    const { cart, customerInfo  } = req.body;

    if (!cart || !Array.isArray(cart)) {
      return res.status(400).json({
        error: "Cart is required",
      });
    }

    const totalAmount = cart
      .reduce((sum, item) => {
        return sum + item.price * item.quantity * 1.1;
      }, 0)
      .toFixed(2);

    const accessToken = await generateAccessToken();

    const response = await fetch(`${base}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: totalAmount,
            },
          },
        ],
      }),
    });

    const data = await response.json();

    console.log("Created Order:", data);

    pendingOrders[data.id] = {
        cart,
        customerInfo,
        grandTotal: totalAmount,
    };

    res.json({
      id: data.id,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to create order",
    });
  }
});

//CAPTURE ORDER
app.post("/api/orders/:orderID/capture", async (req, res) => {
  try {
    const { orderID } = req.params;

    const accessToken = await generateAccessToken();

    const response = await fetch(
      `${base}/v2/checkout/orders/${orderID}/capture`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data = await response.json();

    console.log("Captured Order:", data);

    //EXTRACT CUSTOMER INFO
    const customerOrder = {
      paypalId: orderID,
      name: data.payer.name.given_name,
      surname: data.payer.name.surname,
      email: data.payer.email_address,
      grandTotal: 
        data.purchase_units[0]
          .payments.captures[0]
          .amount.value,
      address:
        data.purchase_units[0]
          .shipping.address.address_line_1,
      area1:
        data.purchase_units[0]
          .shipping.address.admin_area_1,
      area2:
        data.purchase_units[0]
          .shipping.address.admin_area_2,
      country:
        data.purchase_units[0]
          .shipping.address.country_code,
      postal:
        data.purchase_units[0]
          .shipping.address.postal_code,
      status: "PAID",
    };

    console.log("order details", customerOrder);
    //Get the product and input elements info
    const savedOrder = pendingOrders[orderID];

    const mergedData = {
        ...customerOrder,
        ...savedOrder
    }
    console.log(mergedData);

    const scriptURL = GOOGLE_SCRIPT_URL;

    const scriptResponse = await fetch(scriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mergedData),
    });

    const scriptData = await scriptResponse.json();
    console.log(scriptData);
    res.json({
      paypal: data,
      googleSheet: scriptData,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to capture order",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});