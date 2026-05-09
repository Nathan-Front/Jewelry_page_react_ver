import { secondSectionContent } from "./scripts/policy.js";

function PolicySecondSection() {
  return (
    <>
      <section className="policy-second-section">
        <ul>
          {secondSectionContent.map((item, index) => (
            <li key={index}>
              <div className="ring-border">
                <img src={item.src} alt={item.alt + "-image"} />
              </div>
              <div>
                {item.description.map((text, i) => (
                  <p key={i}>{text.paragraph}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default PolicySecondSection;
