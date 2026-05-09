import { paymentCards } from "../shop/shopInner/scripts/paymentCard";
import { returnPolicyData } from "./scripts/policy.js";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState, useMemo, useEffect } from "react";
function Checkout({ cartContent }) {
  const [formData, setFormData] = useState({
    contact: "",
    address: "",
    address2: "",
  });

  const initialOptions = {
    "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,

    currency: "USD",
    intent: "capture",
  };

  const grandTotal = useMemo(
    () => cartContent.reduce((sum, item) => sum + item.subTotal * 1.1, 0),
    [cartContent],
  );

  const [paymentMessage, setPaymentMessage] = useState("");
  //Message after successful payment
  useEffect(() => {
    const savedMessage = sessionStorage.getItem("paymentMessage");
    if (savedMessage) {
      const timer = setTimeout(() => {
        setPaymentMessage(savedMessage);
        sessionStorage.removeItem("paymentMessage");
        setTimeout(() => {
          setPaymentMessage("");
        }, 5000);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <>
      <section className="summary-section">
        <div className="form-summary-wrap">
          <PayPalScriptProvider options={initialOptions}>
            <div className="checkout-container">
              <p className="container-title">Shipping Info:</p>
              {/* Your Form Inputs */}
              <label htmlFor="contact">Contact:</label>
              <input
                id="contact"
                value={formData.contact}
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
                placeholder="Contact Info"
                required
              />
              <label htmlFor="address">Address 1:</label>
              <input
                id="address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                placeholder="Postal, City, Street/block"
                required
              />
              <label htmlFor="address2">Address 2:</label>
              <input
                id="address2"
                value={formData.address2}
                onChange={(e) =>
                  setFormData({ ...formData, address2: e.target.value })
                }
                placeholder="Building, room number etc"
                required
              />

              <div id="paypal-button-container">
                {paymentMessage && ( //Message after successful payment
                  <div className="payment-popup">{paymentMessage}</div>
                )}
                <PayPalButtons
                  style={{ layout: "vertical", shape: "rect", color: "gold" }}
                  //Validation Logic
                  onClick={(data, actions) => {
                    if (!formData.contact.trim() || !formData.address.trim()) {
                      alert("Please fill the form first");
                      return actions.reject();
                    }
                    if (cartContent.length === 0) {
                      alert("You dont have item in your cart.");
                      return actions.reject();
                    }
                    return actions.resolve();
                  }}
                  //Create Order (Backend Call)
                  createOrder={async () => {
                    const cartItem =
                      JSON.parse(sessionStorage.getItem("cartItem")) || [];
                    const response = await fetch(
                      "http://localhost:8080/api/orders",
                      {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          cart: cartItem.map((item) => ({
                            id: item.itemID,
                            name: item.name,
                            price: item.price,
                            quantity: item.quantity,
                          })),
                          customerInfo: {
                            contact: formData.contact,
                            address1: formData.address,
                            address2: formData.address2,
                          },
                        }),
                      },
                    );
                    const data = await response.json();
                    return data.id; //PayPal Order ID from backend
                  }}
                  //Capture Payment
                  onApprove={async (data) => {
                    try {
                      const response = await fetch(
                        `http://localhost:8080/api/orders/${data.orderID}/capture`,
                        { method: "POST" },
                      );

                      const captureData = await response.json();

                      if (
                        captureData.paypal &&
                        captureData.paypal.status === "COMPLETED"
                      ) {
                        sessionStorage.setItem(
                          "paymentMessage",
                          `Payment Successful!
                            Order ID:
                          ${captureData.googleSheet.orderId}`,
                        );
                        sessionStorage.removeItem("cartItem");
                        window.location.reload();
                        console.log(captureData);
                      } else {
                        setPaymentMessage("Payment failed to capture.");
                      }
                    } catch (error) {
                      console.error("Capture Error:", error);
                      alert("An error occurred during payment.");
                    }
                  }}
                />
              </div>
            </div>
          </PayPalScriptProvider>
          <div className="summary-header">
            <p className="container-title">Checkout Summary:</p>
            <div className="display-summary">
              <div>Article</div>
              <div>Item</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Sub Total</div>
              <ul id="cart-items-summary">
                {cartContent.map((item, index) => (
                  <li key={index}>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>${item.price.toFixed(2)}</p>
                    <p>{item.quantity}</p>
                    <p>${item.subTotal.toFixed(2)}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="payment-summary-card">
              <p>
                Sub Total: $
                <span>
                  {cartContent
                    .reduce((sum, item) => sum + item.subTotal, 0)
                    .toFixed(2)}
                </span>
              </p>
              <p className="shipping-fee">
                Shipping Fee: <span id="shippingFee">free</span>
              </p>
              <p className="tax">
                Tax: <span id="tax-amount">10%</span>
              </p>
              <p className="total">
                Total: $<span>{grandTotal.toFixed(2)}</span>
              </p>
            </div>

            <div className="payment-methods">
              <p>We accept:</p>
              <ul>
                {paymentCards.map((item, index) => (
                  <li key={index}>
                    <img src={item.src} alt={item.alt} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="refund-policy-main-wrap">
          <div className="refund-policy-wrap">
            <p className="title-policy">Return & Refund Policy</p>
            <p>
              At LUMINOSUS, we want you to feel confident in every piece you
              purchase. If something isn’t quite right, we’re here to help.
            </p>
            {returnPolicyData.map((section, index) => (
              <div key={index}>
                <p className="title-sub-policy">{section.title}</p>

                <ul>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <p>
              For more details, please read our
              <a href="policy.html">Return & Refund Policy</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
