function Contact({ contact }) {

  return (

    <div className="zp-contact-box">

      <h2 className="zp-main-heading">
        Contact
      </h2>

      <p>
        📧 {contact.email}
      </p>

      <p>
        📞 {contact.phone}
      </p>

      <p>
        💻 {contact.github}
      </p>

      <p>
        🔗 {contact.linkedin}
      </p>

    </div>
  )
}

export default Contact  