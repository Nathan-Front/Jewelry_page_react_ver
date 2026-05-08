import { aboutThirdContentImg } from "./scripts/about.js";

function AboutThirdSection() {
  return (
    <>
      <section className="about-third-section">
        <ul className="item-carousel">
          {aboutThirdContentImg.map((item) => (
            <li key={item.id}>
              <img src={item.src} alt={item.alt + "-image"} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default AboutThirdSection;
