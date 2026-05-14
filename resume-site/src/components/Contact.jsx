import data from '../data/portfolioData';

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>

      <p>Email: {data.personalInfo.email}</p>

      <p>Phone: {data.personalInfo.phone}</p>

      <p>Location: {data.personalInfo.location}</p>
    </section>
  );
}

export default Contact;