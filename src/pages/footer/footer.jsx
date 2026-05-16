import { footerTitle, quickLinks, mediaLinks } from "./scripts/footerData.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { validateEmail } from "../../assets/script/emailValidator.js";
function Footer() {
  const initialForm = {
    subscribers: "",
    _honey: "",
  };
  const [isEmail, setIsEmail] = useState(initialForm);

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setIsEmail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const subscribeMail = async (e) => {
    e.preventDefault();
    if (isEmail._honey) {
      console.log("Bot submission detected.");
      return;
    }
    const result = validateEmail(isEmail.subscribers);
    if (!result) {
      setIsError(true);
      return;
    }
    setIsSending(true);
    const data = { email: isEmail.subscribers };
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwm8k3mSFHtNzcpodXp6UQWqXAbt4oypaxsEHwLsO8UkXvrcCBYqKuXjRTThLTvLqtW/exec";
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.text();
      if (result === "Duplicate") {
        alert("Email already subscribed!");
        setIsError(false);
        setIsEmail(initialForm);
      } else {
        alert("Thank you for subscribing!");
        setIsError(false);
        setIsEmail(initialForm);
      }
    } catch (e) {
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <footer>
        <div className="upper-footer">
          <div className="footer-title">
            {footerTitle.map((item, index) => (
              <React.Fragment key={index}>
                <p className="footer-web-title">{item.title}</p>
                <p>{item.subTitle}</p>
              </React.Fragment>
            ))}
          </div>
          <div className="footer-links-wrap">
            <ul className="quick-links">
              {quickLinks.map((item, index) => (
                <React.Fragment key={index}>
                  <li>{item.maintitle && <h5>{item.maintitle}</h5>}</li>
                  {item.details.map((quick, i) => (
                    <li key={i}>
                      {quick.link && (
                        <Link to={quick.path} key={i}>
                          <img
                            src={quick.src}
                            alt={quick.src + "-image"}
                            loading="lazy"
                          />
                          {quick.link}
                        </Link>
                      )}
                    </li>
                  ))}
                </React.Fragment>
              ))}
            </ul>
            <ul className="footer-media-wrap">
              {mediaLinks.map((item, index) => (
                <React.Fragment key={index}>
                  <li key={index}>
                    {item.maintitle && <h5>{item.maintitle}</h5>}
                  </li>
                  {item.details.map((media, i) => (
                    <li key={i}>
                      <a href="">
                        <img
                          src={media.src}
                          alt={media.link + "-image"}
                          loading="lazy"
                        />
                        {media.link}
                      </a>
                    </li>
                  ))}
                </React.Fragment>
              ))}
            </ul>
          </div>
          <div className="footer-form-wrap">
            <form action="" id="subscribe-form" onSubmit={subscribeMail}>
              <label htmlFor="subscribe-input">Stay Updated</label>
              <input
                type="text"
                placeholder="enter email"
                name="subscribers"
                id="subscribe-input"
                value={isEmail.subscribers}
                onChange={handleInput}
                className={`${isError ? "input-error" : ""}`}
                required
              />
              <input
                type="text"
                name="_honey"
                value={isEmail._honey}
                onChange={handleInput}
                style={{
                  position: "absolute",
                  left: "-999999px",
                }}
                tabIndex="-1"
                autoComplete="off"
              />
              <button type="submit" id="submit-button" disabled={isSending}>
                <span
                  id="loader"
                  className={`${isSending ? "spinner" : ""}`}
                ></span>
                <span id="btn-text">
                  {" "}
                  {isSending ? "Sending..." : "Subscribe"}
                </span>
              </button>
            </form>
          </div>
        </div>
        <div className="lower-footer">
          <p>© May 2026 LUMINOSUS - Alright reserved</p>
          <p>
            Create by Jonathan (Github:
            <a href="https://github.com/Nathan-Front">Nathan-Front</a>)
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
