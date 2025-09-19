import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Have something to say?</h1>
      <h4 style={{ textAlign: "center", color: "#555", marginBottom: "20px" }}>
        Use this form to get in touch
      </h4>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button type="submit" style={{
          padding: "12px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          cursor: "pointer"
        }}>
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
