import { quickLinks, mediaLinks } from "./scripts/footerData.js";
import { useState } from "react";
import { validateEmail } from "../../assets/script/emailValidator.js";
function Footer() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwm8k3mSFHtNzcpodXp6UQWqXAbt4oypaxsEHwLsO8UkXvrcCBYqKuXjRTThLTvLqtW/exec";

  const [isEmail, setIsEmail] = useState(false);
  const subscribeMail = () => {
    const result = validateEmail();
  };

  return (
    <>
      <footer>
        <div className="upper-footer">
          <div className="footer-title">
            <p className="footer-web-title">LUMINOSUS</p>
            <p>Timeless elegance in every piece.</p>
          </div>
          <div className="footer-links-wrap">
            <ul className="quick-links">
              {quickLinks.map((item, index) => (
                <>
                  <li key={index}>
                    {item.maintitle && <h5>{item.maintitle}</h5>}
                  </li>
                  {item.details.map((quick, i) => (
                    <li key={i}>
                      {quick.link && (
                        <a href="index.html" key={i}>
                          <img
                            src={quick.src}
                            alt={quick.src + "-image"}
                            loading="lazy"
                          />
                          {quick.link}
                        </a>
                      )}
                    </li>
                  ))}
                </>
              ))}
            </ul>
            <ul className="footer-media-wrap">
              {mediaLinks.map((item, index) => (
                <>
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
                </>
              ))}
            </ul>
          </div>
          <div className="footer-form-wrap">
            <form action="" id="subscribe-form">
              <label htmlFor="subscribe-input">Stay Updated</label>
              <input
                type="text"
                placeholder="enter email"
                name="Subscribers"
                id="subscribe-input"
                required
              />
              <input
                type="text"
                className="honey_pot"
                name="_honey"
                tabIndex="-1"
                autoComplete="off"
              />
              <button type="submit" id="submit-button">
                <span id="loader" className="spinner hidden"></span>
                <span id="btn-text">Subscribe</span>
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
