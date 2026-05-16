import { secondSectionContent } from "./scripts/policy.js";
import { useState, useEffect, useRef } from "react";
function PolicySecondSection() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      { threshold: 0.4 },
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
        className={
          show ? "policy-second-section ringCircles" : "policy-second-section"
        }
        ref={sectionRef}
      >
        <ul>
          {secondSectionContent.map((item, index) => (
            <li key={index}>
              <div className="ring-border">
                <img src={item.src} alt={item.alt + "-image"} />
              </div>
              <div>
                {item.description.map((text, i) => (
                  <p key={i}>{text.paragraph}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default PolicySecondSection;
