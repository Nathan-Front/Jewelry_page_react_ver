import { firstSectionContent } from "./scripts/firstSection.js";
import React from "react";
function FirstSection() {
  return (
    <>
      <section className="home-first-section">
        {firstSectionContent.map((item, index) => (
          <React.Fragment key={index}>
            <h1>{item.title}</h1>
            <p>{item.text}</p>
            <a href="shop.html">{item.btn}</a>
          </React.Fragment>
        ))}
      </section>
    </>
  );
}

export default FirstSection;
