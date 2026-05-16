import { contactThirdContent } from "./scripts/contact.js";
import React from "react";
import { useState, useEffect, useRef } from "react";
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

  const sectionRef = useRef(null);
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
          show ? "contact-third-section showFaq" : "contact-third-section"
        }
        ref={sectionRef}
      >
        {contactThirdContent.map((item, index) => (
          <React.Fragment key={index}>
            <h3>{item.title}</h3>
            <p>{item.subTitle}</p>
            <ul className="faq-wrap" id="faq">
              {item.faq.map((faqs, i) => (
                <li className="faq-list" key={i}>
                  <button
                    type="button"
                    className={
                      currentAnswer === i
                        ? "faq-button activeAnswer"
                        : "faq-button"
                    }
                    onClick={() => faqHandler(i)}
                  >
                    <span>{faqs.question}</span>
                    <span
                      className={
                        currentAnswer === i ? "plus-icon plus" : "plus-icon "
                      }
                    >
                      {currentAnswer === i ? "－" : "＋"}
                    </span>
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
