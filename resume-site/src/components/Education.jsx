import data from '../data/portfolioData';

function Education() {
  return (
    <section id="education" className="section">
      <h2>Education</h2>

      <div className="card-container">
        {data.education.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.college}</h3>

            <p>{item.degree}</p>

            <p>{item.duration}</p>

            <strong>{item.score}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;