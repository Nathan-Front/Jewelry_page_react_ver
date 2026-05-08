import { aboutStory, aboutStoryImg } from "./scripts/about.js";
import React from "react";
function AboutFirstSection() {
  return (
    <>
      <section className="about-first-section">
        <article className="our-story-wrap">
          {aboutStory.map((item, index) => (
            <React.Fragment key={index}>
              {item.title && <h1>{item.title}</h1>}
              {item.description.map((text) => (
                <p>{text.paragraph}</p>
              ))}
            </React.Fragment>
          ))}
        </article>
        {aboutStoryImg.map((item, index) => (
          <React.Fragment key={index}>
            <img src={item.src} alt={item.alt + "-image"} />
          </React.Fragment>
        ))}
      </section>
    </>
  );
}

export default AboutFirstSection;
