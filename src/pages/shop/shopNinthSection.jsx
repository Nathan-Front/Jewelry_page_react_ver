import { otherData } from "./scripts/shopNinthSection.js";

function ShopNinthSection() {
  return (
    <>
      <section className="shop-item-section" id="other-section">
        <article>
          <h2>Others</h2>
          <ul className="shop-item-list-wrap">
            {otherData.map((item, index) => (
              <li
                data-article="Other"
                data-date={item.date}
                data-rating={item.rating}
                data-price={item.price}
                key={index}
              >
                <div className="item-wrap">
                  <img
                    src={item.src}
                    alt={item.article + "-image"}
                    loading="lazy"
                  />
                  <h3>{item.article}</h3>
                  <p>Price: ${item.price}</p>
                </div>
                <div className="button-wrap">
                  <p>{item.description}</p>
                  <button
                    type="button"
                    className="buy-now-btn"
                    data-item="other"
                  >
                    Buy now
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
}

export default ShopNinthSection;
