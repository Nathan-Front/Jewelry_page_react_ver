import { braceletData } from "./scripts/shopFourthSection.js";
function ShopFourthSection() {
  return (
    <>
      <section className="shop-item-section" id="bracelets-section">
        <article>
          <h2>Bracelet</h2>
          <ul className="shop-item-list-wrap">
            {braceletData.map((item, index) => (
              <li
                data-article="Bracelet"
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
                    data-item="bracelet"
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

export default ShopFourthSection;
