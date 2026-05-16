import {
  contactSecondContent,
  contactSecondContentImg,
} from "./scripts/contact.js";
import React from "react";
import { useState, useEffect, useRef } from "react";
function ContactSecondSection() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const oberver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        } else {
          setShow(false);
        }
      },
      { threshold: 0.5, rootMargin: "-50px 0px" },
    );
    const current = sectionRef.current;
    if (current) {
      oberver.observe(current);
    }
    return () => {
      if (current) oberver.unobserve(current);
    };
  }, []);
  return (
    <>
      <section
        className={
          show ? "contact-second-section showContact" : "contact-second-section"
        }
        ref={sectionRef}
      >
        {contactSecondContentImg.map((item, index) => (
          <React.Fragment key={index}>
            <img src={item.src} alt={item.alt + "-image"} />
          </React.Fragment>
        ))}

        {contactSecondContent.map((item, index) => (
          <div key={index}>
            {item.title && <h3>{item.title}</h3>}
            <ul>
              {item.description.map((text, i) => (
                <li key={i}>
                  <img src={text.src} alt={text.alt + "-image"} />
                  <p>
                    {text.paragraph}
                    {text.aTag?.map((innerTxt, j) => (
                      <React.Fragment key={j}>
                        {innerTxt.innerText && (
                          <a href="mailto:luminosus_support@lumi.co">
                            {innerTxt.innerText}
                          </a>
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}

export default ContactSecondSection;
