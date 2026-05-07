import { paymentCards } from "../shop/shopInner/scripts/paymentCard";
import { returnPolicyData } from "./scripts/policy.js";
function Checkout({ cartContent }) {
  return (
    <>
      <section className="summary-section">
        <div className="form-summary-wrap">
          <form action="" className="checkout-form" id="checkout-form">
            <p className="container-title">Billing Info:</p>
            <label htmlFor="contact">Contact:</label>
            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="Contact number"
              required
            />
            <label htmlFor="address">Address 1:</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address 1 (State, city, block/street, building #, etc.)"
              required
            />
            <label htmlFor="address2">Address 2:</label>
            <input
              type="text"
              id="address2"
              name="address2"
              placeholder="Address 2 (optional)"
            />
            <input
              type="text"
              name="_honey"
              style={{
                position: "absolute",
                left: "-999999px",
              }}
              tabIndex="-1"
              autoComplete="off"
            />
            <div className="divider"></div>
            <p className="container-title payment-method-title">
              Payment Method:
            </p>
            <div
              className="paypal-container"
              id="paypal-button-container"
            ></div>
            <p id="result-message"></p>
          </form>
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
                Sub Total: $<span id="sub-total-price-summary">0</span>
              </p>
              <p className="shipping-fee">
                Shipping Fee: <span id="shippingFee">free</span>
              </p>
              <p className="tax">
                Tax: <span id="tax-amount">10%</span>
              </p>
              <p className="total">
                Total: $<span id="total-price-summary">0.00</span>
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
