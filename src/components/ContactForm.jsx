import { useState } from "react";

function ContactForm() {

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {

    e.preventDefault();

    console.log(data);

    alert("Message Submitted");

    setData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <div className="contactForm">

      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={data.name}
          onChange={handleChange}
          className="input"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={data.email}
          onChange={handleChange}
          className="input"
        />

        <textarea
          name="message"
          placeholder="Enter Your Message"
          value={data.message}
          onChange={handleChange}
          className="textarea"
        />

        <button className="button">
          Submit
        </button>

      </form>

    </div>
  );
}

export default ContactForm;