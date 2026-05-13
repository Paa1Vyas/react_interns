function Projects() {

  const projects = [

    {
      title: "Smart Workforce Resource Allocation System (SWRAS)",

      description:
        "Built a full stack platform for managing employee attendance, payroll, leave and task distribution with role-based access control using React, Node.js and MongoDB.",

      tags: ["React", "Node.js", "MongoDB"]
    },

    {
      title: "Smart City Management System",

      description:
        "Designed a web-based solution for reporting infrastructure issues and monitoring complaint progress with administrative management features.",

      tags: ["React", "Admin Panel", "Web App"]
    },

    {
      title: "Service Management System",

      description:
        "Created an application to manage customer service workflows and implemented CRUD operations with backend integration.",

      tags: ["CRUD", "Backend", "Database"]
    }
  ]

  return (

    <div className="zp-project-section">

      <h2 className="zp-main-heading">
        Projects
      </h2>

      {
        projects.map((project, index) => (

          <div
            key={index}
            className="zp-project-card"
          >

            <div className="zp-project-top">

              <h3>
                {project.title}
              </h3>

              <div className="zp-project-icons">
                ⚛️ 🟢 💻
              </div>

            </div>

            <p className="zp-project-description">
              {project.description}
            </p>

            <div className="zp-project-tags">

              {
                project.tags.map((tag, index) => (

                  <span
                    key={index}
                    className="zp-tag"
                  >
                    {tag}
                  </span>

                ))
              }

            </div>

          </div>

        ))
      }

    </div>
  )
}

export default Projects