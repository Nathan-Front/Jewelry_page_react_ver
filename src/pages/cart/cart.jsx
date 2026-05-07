import { paymentCards } from "../shop/shopInner/scripts/paymentCard.js";
import { useEffect } from "react";
function Cart({ isCart, setIsCart, isCartCount }) {
  useEffect(() => {
    if (isCart) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isCart]);

  return (
    <>
      <dialog
        className={
          isCart ? "cart-container cart-container-active" : "cart-container"
        }
      >
        <div className="upper-portion">
          <div className="cart-dialog">
            <p>
              Your cart{" "}
              <span>
                {isCartCount}
                {isCartCount > 1 ? " items" : " item"}
              </span>
            </p>
            <button type="button" onClick={() => setIsCart(false)}>
              Close
            </button>
          </div>

          <ul className="cart-items-list" id="your-cart"></ul>
          <p>Your order is eligible for free shipping.</p>
        </div>
        <div className="lower-portion">
          <div>
            <p className="sub-total">
              Sub total: $<span className="sub-total-span">0.00</span>
            </p>
            <button type="button" id="to-checkout">
              Proceed to Checkout
            </button>
          </div>
          <div className="payment-methods">
            <p>We accept:</p>
            <ul>
              {paymentCards.map((item, index) => {
                <li key={index}>
                  <img src={item.src} alt={item.alt} />
                </li>;
              })}
            </ul>
          </div>
        </div>
      </dialog>
      <div className={isCart ? "overlay activeOverlay" : "overlay"}></div>
    </>
  );
}

export default Cart;
