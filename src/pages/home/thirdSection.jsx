import { thirdSectionContent } from "./scripts/thirdSection.js";
import { Link } from "react-router-dom";
import React from "react";
function ThirdSection() {
  return (
    <>
      <section className="home-third-section">
        {thirdSectionContent.map((item, index) => (
          <React.Fragment key={index}>
            <article className="our-story-wrap">
              <h2>{item.title}</h2>
              <p>{item.paragraph}</p>
              <Link to="/about">{item.btnLink}</Link>
            </article>
            <div className="our-story-image-wrap">
              <img src={item.src} alt={item.alt + "-image"} loading="lazy" />
            </div>
          </React.Fragment>
        ))}
      </section>
    </>
  );
}

export default ThirdSection;
