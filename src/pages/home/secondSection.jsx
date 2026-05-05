import { secondData } from "./scripts/secondSection.js";
function SecondSection() {
  return (
    <>
      <section className="home-second-section">
        <ul className="item-list-wrap">
          {secondData.map((item, index) => (
            <li key={index}>
              <div className="change-on-hover">
                <img
                  src={item.src}
                  alt={item.title + "-image"}
                  loading="lazy"
                />
                <div className="change-over">
                  <ul>
                    {item.details.map((detail, i) => (
                      <li key={i}>
                        {detail.maintitle && <p>{detail.maintitle}</p>}

                        {detail.subtitle && (
                          <p>
                            <span>{detail.subtitle}</span> {detail.info}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="to-shop-item"
                    data-category="earrings"
                  >
                    Check Item
                  </button>
                </div>
              </div>
              <p>Earrings</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default SecondSection;
