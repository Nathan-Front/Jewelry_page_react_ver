function FourthSection() {
  return (
    <>
      <section className="home-fourth-section">
        <div>
          <h3>Get in Touch</h3>
          <p>We love to hear from you!</p>
        </div>
        <form action="" id="form">
          <label htmlFor="name-input">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="userName"
            id="name-input"
            required
          />
          <label htmlFor="mail-input">Email address</label>
          <input
            type="text"
            placeholder="Enter email"
            name="userEmail"
            id="mail-input"
            required
          />
          <label htmlFor="contact-input">Contact number</label>
          <input
            type="text"
            placeholder="Enter contact"
            name="userContact"
            id="contact-input"
            required
          />
          <textarea
            name="userMessage"
            id="message-input"
            placeholder="Message"
            required
          ></textarea>
          <input
            type="text"
            name="_honey"
            id="honey"
            tabIndex="-1"
            autoComplete="off"
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}

export default FourthSection;
