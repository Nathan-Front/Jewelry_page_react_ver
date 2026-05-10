import React from "react";

function FifthSection() {
  return (
    <>
      <section className="home-fifth-section">
        <div className="fifth-upper-wrap">
          <div>
            <span>PERSONAL TOUCH.</span>
            <span>TIMELESS TREASURE.</span>
            <span className="divider-star"></span>
          </div>
          <h2 className="personalize-title">Jewelry</h2>
          <span className="personalize">Personalization</span>
          <p className="personalize-subtitle">Made just for you</p>
          <p>Turn your story into something beautiful.</p>
          <p>
            Personalize your jewelry with names, initials, dates, or a special
            message.
          </p>
          <p>Because every piece should mean something.</p>
          <ul className="personalize-cards">
            <li>
              <img
                src="./images/policy/diamond-01-svgrepo-com.svg"
                alt="premium"
              />
              <span>Premium Quality</span>
            </li>
            <li>
              <img
                src="./images/home/fifthSection/pen-2-svgrepo-com.svg"
                alt="expert"
              />
              <span>Expert Engraving</span>
            </li>
            <li>
              <img
                src="./images/home/fifthSection/gift-box-with-lace-svgrepo-com.svg"
                alt="perfect"
              />
              <span>Perfect for Gifting</span>
            </li>
            <li>
              <img
                src="./images/home/fifthSection/heart-alt-svgrepo-com.svg"
                alt="made"
              />
              <span>Made with Love</span>
            </li>
          </ul>
        </div>
        <div className="personalize-divider">
          <div className="how-it-work-divider-left"></div>
          <div>HOW IT WORKS</div>
          <div className="how-it-work-divider-right"></div>
        </div>
        <div className="fifth-lower-wrap">
          <ul>
            <li>
              <div>
                <img
                  src="./images/home/fifthSection/ring-svgrepo-com.svg"
                  alt="piece"
                />
              </div>
              <span>01</span>
              <span>CHOOSE YOUR PIECE</span>
              <p>Select your favorite jewelry from our collections.</p>
            </li>
            <li>
              <div>
                <img
                  src="./images/home/fifthSection/pen-svgrepo-com.svg"
                  alt="personalize"
                />
              </div>
              <span>02</span>
              <span>PERSONALIZE IT</span>
              <p>Add names, initials, dates or special message.</p>
            </li>
            <li>
              <div>
                <img
                  src="./images/home/fifthSection/craft.svg"
                  alt="personalize"
                />
              </div>
              <span>03</span>
              <span>WE CRAFT IT</span>
              <p>Our experts engrave your piece with precision and care.</p>
            </li>
            <li>
              <div>
                <img
                  src="./images/home/fifthSection/gift-box-with-lace-svgrepo-com.svg"
                  alt="deliver"
                />
              </div>
              <span>04</span>
              <span>DELIVERED TO YOU</span>
              <p>Recieve your one-of-a-kind jewelry, beautifully packaged.</p>
            </li>
          </ul>
        </div>
        <div className="personalize-contact-wrap">
          <ul>
            <li>
              <div>
                <img src="./images/home/fifthSection/star.svg" alt="star" />
              </div>
              <div>
                <span>Have a special request?</span>
                <p>We're here to bring your vission to life.</p>
              </div>
            </li>
            <li>
              <div>
                <img src="./images/home/fifthSection/mail.svg" alt="mail" />
              </div>
              <div>
                <span>Contact us at</span>
                <a href="#">luminosus@lumi.co</a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default FifthSection;
