import { aboutSecondContent, aboutSecondContentImg } from "./scripts/about.js";
import React from "react";

function AboutSecondSection() {
  return (
    <>
      <section className="about-second-section">
        {aboutSecondContentImg.map((item, index) => (
          <React.Fragment key={index}>
            <img src={item.src} alt={item.alt + "-image"} />
          </React.Fragment>
        ))}

        <article>
          {aboutSecondContent.map((item, index) => (
            <React.Fragment key={index}>
              {item.title && <h3>{item.title}</h3>}
              {item.description.map((text) => (
                <p>{text.paragraph}</p>
              ))}
            </React.Fragment>
          ))}
        </article>
      </section>
    </>
  );
}

export default AboutSecondSection;
