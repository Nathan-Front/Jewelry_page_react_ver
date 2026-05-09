import { aboutStory } from "./scripts/about.js";
import React from "react";
function AboutFirstSection() {
  return (
    <>
      <section className="about-first-section">
        <article className="our-story-wrap">
          {aboutStory.map((item, index) => (
            <React.Fragment key={index}>
              {item.title && <h1>{item.title}</h1>}
              {item.description.map((text, i) => (
                <p key={i}>{text.paragraph}</p>
              ))}
            </React.Fragment>
          ))}
        </article>
      </section>
    </>
  );
}

export default AboutFirstSection;
