import { paymentCards } from "../shop/shopInner/scripts/paymentCard.js";
import { useEffect } from "react";
function Cart({
  isCart,
  setIsCart,
  isCartCount,
  cartContent,
  quantityHandler,
  deleteHandler,
}) {
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
          <ul className="cart-items-list" id="your-cart">
            {cartContent.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name + "-image"} />
                <div>
                  <h4>{item.name}</h4>
                  <p>Price: ${item.price}</p>
                  <div className="cart-counter-button">
                    <button
                      type="button"
                      className="decrease-quantity"
                      onClick={() => quantityHandler(item.name, "minus")}
                    >
                      <img
                        src="./images/shop/cart/minus-svgrepo-com.svg"
                        alt="plus"
                      />
                    </button>
                    <span className="item-quantity">{item.quantity}</span>
                    <button
                      type="button"
                      className="increase-quantity"
                      onClick={() => quantityHandler(item.name, "plus")}
                    >
                      <img
                        src="./images/shop/cart/plus-svgrepo-com.svg"
                        alt="minus"
                      />
                    </button>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => deleteHandler(item.itemID)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p>Your order is eligible for free shipping.</p>
        </div>
        <div className="lower-portion">
          <div>
            <p className="sub-total">
              Sub total: $
              <span className="sub-total-span">
                {cartContent
                  .reduce((sum, subTotal) => sum + subTotal.subTotal, 0)
                  .toFixed(2)}
              </span>
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
                  <img src={item.src} alt={item.alt + "-image"} />
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
