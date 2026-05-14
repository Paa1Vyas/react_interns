import data from '../data/portfolioData';

function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>

      <p>{data.about}</p>
    </section>
  );
}

export default About;