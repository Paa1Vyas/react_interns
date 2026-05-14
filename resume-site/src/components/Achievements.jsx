import data from '../data/portfolioData';

function Achievements() {
  return (
    <section id="achievements" className="section">
      <h2>Achievements</h2>

      <ul className="achievement-list">
        {data.achievements.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;