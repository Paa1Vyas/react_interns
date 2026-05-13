import { useState } from "react"

function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    alert("Form Submitted Successfully")

    setFormData({
      name: "",
      email: "",
      message: ""
    })
  }

  return (

    <div className="zp-contact-form-section">

      <h2>
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="zp-contact-form"
      >

        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          placeholder="Enter Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  )
}

export default ContactForm