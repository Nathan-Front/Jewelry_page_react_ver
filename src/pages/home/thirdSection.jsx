import { thirdSectionContent } from "./scripts/thirdSection.js";
import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect, useRef } from "react";
function ThirdSection() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );
    const current = sectionRef.current;
    if (current) {
      observer.observe(current);
    }
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);
  return (
    <>
      <section
        className={show ? "home-third-section slideIn" : "home-third-section"}
        ref={sectionRef}
      >
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
