import { validateEmail } from "../../assets/script/emailValidator.js";
import { useState } from "react";
function FourthSection() {
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

  return (
    <>
      <section className="home-fourth-section">
        <div>
          <h3>Get in Touch</h3>
          <p>We love to hear from you!</p>
        </div>
        <form action="" id="form" onSubmit={submitHandler}>
          <label htmlFor="name-input">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="userName"
            id="name-input"
            value={isInput.userName}
            onChange={inputHandler}
            required
          />
          <label htmlFor="mail-input">Email address</label>
          <input
            type="text"
            placeholder="Enter email"
            name="userEmail"
            id="mail-input"
            className={`${isError ? "input-error" : ""}`}
            value={isInput.userEmail}
            onChange={inputHandler}
            required
          />
          <label htmlFor="contact-input">Contact number</label>
          <input
            type="text"
            placeholder="Enter contact"
            name="userContact"
            id="contact-input"
            value={isInput.userContact}
            onChange={inputHandler}
            required
          />
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
            <span id="btn-text"> {isSending ? "Sending..." : "Submit"}</span>
          </button>
        </form>
      </section>
    </>
  );
}

export default FourthSection;
