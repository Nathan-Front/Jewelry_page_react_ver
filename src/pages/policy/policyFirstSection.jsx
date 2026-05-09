import { firstSectionContent } from "./scripts/policy.js";
import React from "react";
function PolicyFirstSection() {
  return (
    <>
      <section className="policy-first-section">
        {firstSectionContent.map((item, index) => (
          <React.Fragment key={index}>
            {item.title && <h2>{item.title}</h2>}
            {item.description.map((text, i) => (
              <p key={i}>{text.paragraph}</p>
            ))}
          </React.Fragment>
        ))}
      </section>
    </>
  );
}

export default PolicyFirstSection;
