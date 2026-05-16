import { aboutSecondContent, aboutSecondContentImg } from "./scripts/about.js";
import React from "react";
import { useState, useEffect, useRef } from "react";
function AboutSecondSection() {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        } else {
          setShow(false);
        }
      },
      { threshold: 0.5, rootMargin: "-50px 0px" },
    );
    const current = imageRef.current;
    const currentTxt = textRef.current;
    if (current) {
      observer.observe(current);
    }
    if (currentTxt) {
      observer.observe(current);
    }
    return () => {
      if (current) observer.unobserve(current);
    };
  });

  return (
    <>
      <section className="about-second-section">
        {aboutSecondContentImg.map((item, index) => (
          <React.Fragment key={index}>
            <img
              src={item.src}
              alt={item.alt + "-image"}
              className={show ? "slideImg" : ""}
              ref={imageRef}
            />
          </React.Fragment>
        ))}

        <article className={show ? "slideTxt" : ""} ref={textRef}>
          {aboutSecondContent.map((item, index) => (
            <React.Fragment key={index}>
              {item.title && <h3>{item.title}</h3>}
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

export default AboutSecondSection;
