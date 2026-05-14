import data from '../data/portfolioData';

function Hero() {
  return (
    <section className="hero">
      <h1>{data.personalInfo.name}</h1>

      <h2>{data.personalInfo.role}</h2>

      <p>{data.personalInfo.location}</p>

      <div className="hero-buttons">
        <a href="/resume.pdf" className="btn">
          Download Resume
        </a>

        <a href={data.personalInfo.github} className="btn">
          GitHub
        </a>

        <a href={data.personalInfo.linkedin} className="btn">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Hero;