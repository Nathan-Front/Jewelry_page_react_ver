import { tiaraData } from "./scripts/shopSeventhSection.js";

function ShopSeventhSection() {
  return (
    <>
      <section className="shop-item-section" id="tiara-section">
        <article>
          <h2>Tiara</h2>
          <ul className="shop-item-list-wrap">
            {tiaraData.map((item, index) => (
              <li
                data-article="Tiara"
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
                    data-item="tiara"
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

export default ShopSeventhSection;
