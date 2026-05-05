import { bangleData } from "./scripts/shopSixthSection.js";

function ShopSixthSection() {
  return (
    <>
      <section className="shop-item-section" id="bangles-section">
        <article>
          <h2>Bangle</h2>
          <ul className="shop-item-list-wrap">
            {bangleData.map((item, index) => (
              <li
                data-article="Bangle"
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
                    data-item="bangle"
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

export default ShopSixthSection;
