import { paymentCards } from "./scripts/paymentCard.js";
import { modalImages } from "./scripts/modalImg.js";
import { addToCart } from "./scripts/addItemCart.js";

import { useEffect, useState } from "react";
function CheckItem({
  isModal,
  setIsModal,
  isCount,
  setIsCount,
  setIsCartCount,
  setCartContent,
}) {
  const modal = modalImages(isModal?.category) || [];
  useEffect(() => {
    if (isModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isModal]);

  const [clickedImage, setClickedImage] = useState("");
  const mainImage = clickedImage || isModal?.src;
  const addItemToCart = () => {
    const result = addToCart(isModal, isCount);
    if (!result.success) {
      alert("Same item already in your cart.");
      setIsModal("");
      setClickedImage("");
    }
    if (result?.success) {
      alert("Item added in your cart.");
      setIsCartCount(result.cartCount);
      setCartContent(result.cartContent);
      setIsModal("");
      setClickedImage("");
      setIsCount(1);
    }
  };

  return (
    <>
      <article
        className={isModal ? "modal-article activePopup" : "modal-article"}
      >
        <div className="left-side">
          <div>
            <img src={mainImage} alt="Main image" id="main-image-display" />
          </div>
          <ul id="popup-list-img">
            {modal.map((item, index) => (
              <li key={index}>
                <button type="button" onClick={() => setClickedImage(item.src)}>
                  <img src={item.src} alt={item.alt} />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="right-side">
          <h4 className="article-name">{isModal.article}</h4>
          <p>
            Price: <span className="article-price">{isModal.price}</span>
          </p>
          <span>Free Shipping</span>
          <div className="right-side-count">
            <button
              type="button"
              className="decrease-count"
              onClick={() => setIsCount((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <span>{isCount}</span>
            <button
              type="button"
              className="increase-count"
              onClick={() => setIsCount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <div className="right-side-cart-button">
            <button
              type="button"
              onClick={() => {
                setIsModal("");
                setClickedImage("");
                setIsCount(1);
              }}
            >
              Cancel
            </button>
            <button type="button" onClick={addItemToCart}>
              Add to Cart
            </button>
          </div>
          <ul>
            {paymentCards.map((item, index) => (
              <li key={index}>
                <img src={item.src} alt={item.alt} />
              </li>
            ))}
          </ul>
        </div>
      </article>
      <div className={isModal ? "overlay activeOverlay" : "overlay"}></div>
    </>
  );
}

export default CheckItem;
