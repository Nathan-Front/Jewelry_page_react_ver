import { necklaceData } from "./scripts/shopThirdSection.js";
function ShopThirdSection() {
  return (
    <>
      <section className="shop-item-section" id="necklaces-section">
        <article>
          <h2>Necklace</h2>
          <ul className="shop-item-list-wrap">
            {necklaceData.map((item, index) => (
              <li
                data-article="Necklace"
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
                  <p>price: ${item.price}</p>
                </div>
                <div className="button-wrap">
                  <p>{item.description}</p>
                  <button
                    type="button"
                    className="buy-now-btn"
                    data-item="necklace"
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

export default ShopThirdSection;
