function Skills({ skills }) {

  return (

    <div className="zp-skills-section">

      <h2>
        Skills
      </h2>

      <div className="zp-skills-grid">

        {
          skills.map((skill, index) => (

            <div
              key={index}
              className="zp-skill-card"
            >
              {skill}
            </div>

          ))
        }

      </div>

    </div>
  )
}

export default Skills