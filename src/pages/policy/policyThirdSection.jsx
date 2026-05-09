import { thirdSectionContent } from "./scripts/policy.js";
import React from "react";

function PolicyThirdSection() {
  return (
    <>
      <section className="policy-third-section">
        <p className="third-title">POLICY DETAILS</p>
        <p className="third-description">Easy returns, hastle-free</p>
        <ul className="policy-lists">
          {thirdSectionContent.map((item, index) => (
            <li key={index}>
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
