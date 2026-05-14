import data from '../data/portfolioData';

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="card-container">
        {data.projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;