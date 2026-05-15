import { contactFirstSection } from "./scripts/contact.js";
import React from "react";
function ContactFirstSection() {
  return (
    <>
      <section className="contact-first-section">
        {contactFirstSection.map((item, index) => (
          <React.Fragment key={index}>
            <span className="contact-main-title-left">{item.leftTitle}</span>
            <span className="contact-main-title-right">{item.rightTitle}</span>
          </React.Fragment>
        ))}
      </section>
    </>
  );
}

export default ContactFirstSection;
