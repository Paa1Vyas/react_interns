import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
} from "react-icons/si";

function Projects() {

  const projects = [

    {
      title:
        "Smart Workforce Resource Allocation System (SWRAS)",

      description:
        "Built a full stack platform for managing employee attendance, payroll, leave and task distribution. Integrated role-based access control and connected client side with server using React, Node.js and MongoDB.",

      tech: [
        "React",
        "Node.js",
        "MongoDB",
      ],
    },

    {
      title:
        "Smart City Management System",

      description:
        "Designed a web-based solution for reporting infrastructure issues and monitoring complaint progress. Established an administrative panel to oversee requests, announcements and service activities.",

      tech: [
        "React",
        "Admin Panel",
        "Web App",
      ],
    },

    {
      title:
        "Service Management System",

      description:
        "Created an application to organize customer requests and service workflows with status tracking. Managed data handling operations including create, update, retrieve and delete functionality through backend integration.",

      tech: [
        "CRUD",
        "Backend",
        "Database",
      ],
    },
  ];

  return (
    <div>

      <h2>Projects</h2>

      <div className="projectsContainer">

        {projects.map((project, index) => (

          <div className="projectCard" key={index}>

            <div className="projectHeader">

              <h3>{project.title}</h3>

              <div className="projectIcons">

                <FaReact />

                <FaNodeJs />

                <SiMongodb />

              </div>

            </div>

            <p className="projectDescription">
              {project.description}
            </p>

            <div className="techStack">

              {project.tech.map((item, i) => (

                <span key={i}>
                  {item}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Projects;