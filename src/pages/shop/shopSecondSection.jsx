import { earringData } from "./scripts/shopSecondSection.js";
function ShopSecondSection() {
  return (
    <>
      <section className="shop-item-section" id="earrings-section">
        <article>
          <h2>Earring</h2>
          <ul className="shop-item-list-wrap">
            {earringData.map((item, index) => (
              <li
                data-article="Earring"
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
                    data-item="earring"
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

export default ShopSecondSection;
