import data from '../data/portfolioData';

function Leadership() {
  return (
    <section id="leadership" className="section">
      <h2>Leadership</h2>

      {data.leadership.map((item, index) => (
        <div className="card" key={index}>
          <h3>{item.role}</h3>

          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Leadership;