import { contactThirdContent } from "./scripts/contact.js";
import React from "react";
import { useState, useRef } from "react";
function ContactThirdSection() {
  const answerRefs = useRef([]);

  const [currentAnswer, setCurrentAnswer] = useState(null);
  const faqHandler = (index) => {
    answerRefs.current.forEach((answer, i) => {
      if (!answer) return;
      if (i === index) {
        if (currentAnswer === index) {
          answer.style.maxHeight = null;
          setCurrentAnswer(null);
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px";
          setCurrentAnswer(index);
        }
      } else {
        answer.style.maxHeight = null;
      }
    });
  };
  return (
    <>
      <section className="contact-third-section">
        {contactThirdContent.map((item, index) => (
          <React.Fragment key={index}>
            <h3>{item.title}</h3>
            <p>{item.subTitle}</p>
            <ul className="faq-wrap" id="faq">
              {item.faq.map((faqs, i) => (
                <li className="faq-list" key={i}>
                  <button
                    type="button"
                    className="faq-button"
                    onClick={() => faqHandler(i)}
                  >
                    <span>{faqs.question}</span>
                    <span className="plus-icon">+</span>
                  </button>
                  <p
                    ref={(el) => (answerRefs.current[i] = el)}
                    className="faq-answer active"
                  >
                    {faqs.answer}
                  </p>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </section>
    </>
  );
}

export default ContactThirdSection;
