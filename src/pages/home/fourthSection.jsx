import {
  personalizeTop,
  personalizeTitles,
  personalizeIcon,
  personalizeProcess,
  personalizeContact,
} from "./scripts/fourthSection.js";
import React from "react";

function FourthSection() {
  return (
    <>
      <section className="home-fifth-section">
        <div className="fifth-upper-wrap">
          <div>
            {personalizeTop.map((item, index) => (
              <React.Fragment key={index}>
                <span>{item.txt1}</span>
                <span>{item.txt2}</span>
                <span className="divider-star"></span>
              </React.Fragment>
            ))}
          </div>
          {personalizeTitles.map((item, index) => (
            <React.Fragment key={index}>
              <h2 className="personalize-title">{item.title}</h2>
              <span className="personalize">{item.personal}</span>
              <p className="personalize-subtitle">{item.subTitle}</p>
              <p>{item.txt1}</p>
              <p>{item.txt2}</p>
              <p>{item.txt3}</p>
            </React.Fragment>
          ))}

          <ul className="personalize-cards">
            {personalizeIcon.map((item, index) => (
              <li key={index}>
                <img src={item.src} alt={item.alt + "-image"} loading="lazy" />
                <span>{item.txt}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="personalize-divider">
          <div className="how-it-work-divider-left"></div>
          <div>HOW IT WORKS</div>
          <div className="how-it-work-divider-right"></div>
        </div>
        <div className="fifth-lower-wrap">
          <ul>
            {personalizeProcess.map((item, index) => (
              <li key={index}>
                <div>
                  <img
                    src={item.src}
                    alt={item.alt + "-image"}
                    loading="lazy"
                  />
                </div>
                <span>{item.order}</span>
                <span>{item.txt1}</span>
                <p>{item.txt2}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="personalize-contact-wrap">
          <ul>
            {personalizeContact.map((item, index) => (
              <li key={index}>
                <div>
                  <img src={item.src} alt={item.alt + "-image"} />
                </div>
                <div>
                  <span>{item.txt1}</span>
                  {item.alt === "star" ? (
                    <p>{item.txt2}</p>
                  ) : (
                    <a href="#">{item.txt2}</a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default FourthSection;
