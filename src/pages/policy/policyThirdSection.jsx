import { thirdSectionTitle, thirdSectionContent } from "./scripts/policy.js";
import React from "react";
import { useState, useEffect, useRef } from "react";
function PolicyThirdSection() {
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
      { threshold: 0.2 },
    );
    const current = textRef.current;
    if (current) {
      observer.observe(current);
    }
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);
  const articleRef = useRef([]);
  const [showArticles, setShowArticles] = useState([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);

          if (entry.isIntersecting) {
            setShowArticles((prev) => [...new Set([...prev, index])]);
          } else {
            setShowArticles((prev) => prev.filter((item) => item !== index));
          }
        });
      },
      {
        threshold: 0.2,
      },
    );
    articleRef.current.forEach((article) => {
      if (article) observer.observe(article);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <section className="policy-third-section">
        {thirdSectionTitle.map((item, index) => (
          <React.Fragment key={index}>
            <p
              className={show ? "third-title activeP" : "third-title"}
              ref={textRef}
            >
              {item.title}
            </p>
            <p
              className={
                show ? "third-description activeP" : "third-description"
              }
              ref={textRef}
            >
              {item.subTitle}
            </p>
          </React.Fragment>
        ))}

        <ul className="policy-lists">
          {thirdSectionContent.map((item, index) => (
            <li
              key={index}
              ref={(el) => (articleRef.current[index] = el)}
              data-index={index}
              className={showArticles.includes(index) ? "activeArticle" : ""}
            >
              <div className="policy-list-image">
                <img src={item.src} alt={item.alt + "-image"} />
              </div>
              <div className="policy-articles">
                {item.description.map((text, i) => (
                  <React.Fragment key={i}>
                    {text.text && (
                      <p className="policy-list-titles">{text.title}</p>
                    )}
                    {text.text?.map((txt, i) => (
                      <React.Fragment key={i}>
                        {txt.paragraph !== "" ? (
                          <p>
                            {txt.paragraph}
                            {txt.subText?.map((subtxt, h) => (
                              <React.Fragment key={h}>
                                {subtxt.spanTxt1 !== "" ? (
                                  <span>
                                    {" "}
                                    {subtxt.spanTxt1}
                                    <a href="mailto:luminosus@lumi.co">
                                      {" "}
                                      {subtxt.aTxt}{" "}
                                    </a>
                                    {subtxt.spanTxt2}
                                  </span>
                                ) : null}
                              </React.Fragment>
                            ))}
                          </p>
                        ) : null}
                      </React.Fragment>
                    ))}
                    {text.listClass && (
                      <ul className={text.listClass}>
                        {text.list?.map((txtList, l) => (
                          <li key={l}>{txtList.listTxt}</li>
                        ))}
                      </ul>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default PolicyThirdSection;
