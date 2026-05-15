import { fourthSectionContent } from "./scripts/fifthSection.js";
import React from "react";
import { validateEmail } from "../../assets/script/emailValidator.js";
import { useState, useEffect, useRef } from "react";
function FifthSection() {
  const initialForm = {
    userName: "",
    userEmail: "",
    userContact: "",
    userMessage: "",
    _honey: "",
  };
  const [isInput, setIsInput] = useState(initialForm);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setIsInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (isInput._honey) {
      console.log("Bot detected");
      return;
    }
    const result = validateEmail(isInput.userEmail);
    if (!result) {
      setIsError(true);
      return;
    }
    setIsSending(true);
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxTuHkao0mbf-4Om6zcoUdXFpd-cY3tfYAmZ29SuEPeWUJxcmhewotR7EvdvD4SyYue/exec";
    const data = {
      name: isInput.userName,
      email: isInput.userEmail,
      contact: isInput.userContact,
      message: isInput.userMessage,
    };
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.text();
      if (result === "Success") {
        alert("Thank you for your message!");
        setIsError(false);
        setIsInput(initialForm);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  const appearRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-100px 0px" },
    );

    const current = appearRef.current;

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
        className={show ? "home-fourth-section show" : "home-fourth-section"}
        ref={appearRef}
      >
        {fourthSectionContent.map((item, index) => (
          <React.Fragment key={index}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.txt}</p>
              <img src={item.src} alt={item.alt + "-image"} />
            </div>
            <form action="" id="form" onSubmit={submitHandler}>
              <div>
                {item.formContent.map((inpt, i) => (
                  <React.Fragment key={i}>
                    <label htmlFor={inpt.inputId}>{inpt.labelTag}</label>
                    <input
                      type="text"
                      placeholder={inpt.holder}
                      name={inpt.inputName}
                      id={inpt.inputId}
                      className={
                        inpt.inputId === "mail-input" && isError
                          ? "input-error"
                          : ""
                      }
                      value={isInput[inpt.inputName]}
                      onChange={inputHandler}
                      required
                    />
                  </React.Fragment>
                ))}
                <textarea
                  name="userMessage"
                  id="message-input"
                  placeholder="Message"
                  value={isInput.userMessage}
                  onChange={inputHandler}
                  required
                ></textarea>
                <input
                  type="text"
                  name="_honey"
                  value={isInput._honey}
                  onChange={inputHandler}
                  style={{
                    position: "absolute",
                    left: "-999999px",
                  }}
                  tabIndex="-1"
                  autoComplete="off"
                />
                <button type="submit" disabled={isSending}>
                  <span
                    id="message-loader"
                    className={`${isSending ? "spinner" : ""}`}
                  ></span>
                  <span id="btn-text">
                    {" "}
                    {isSending ? "Sending..." : "Submit"}
                  </span>
                </button>
              </div>
            </form>
          </React.Fragment>
        ))}
      </section>
    </>
  );
}

export default FifthSection;
