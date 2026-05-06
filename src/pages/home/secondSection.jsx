import { secondData } from "./scripts/secondSection.js";
import { useNavigate } from "react-router-dom";
function SecondSection() {
  const childLinks = [
    { link: "earrings-section" },
    { link: "necklaces-section" },
    { link: "bracelets-section" },
    { link: "ring-section" },
    { link: "bangles-section" },
    { link: "tiara-section" },
    { link: "anklet-section" },
    { link: "other-section" },
  ];
  const navigate = useNavigate();
  const linkHandler = (index) => {
    const clickedIndex = childLinks[index].link;
    navigate(`/shop#${clickedIndex}`);
  };
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
                    onClick={() => linkHandler(index)}
                  >
                    Check Item
                  </button>
                </div>
              </div>
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default SecondSection;
