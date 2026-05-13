import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

function Skills() {

  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },

    {
      name: "CSS",
      icon: <FaCss3Alt />,
    },

    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },

    {
      name: "React.js",
      icon: <FaReact />,
    },

    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },

    {
      name: "Python",
      icon: <FaPython />,
    },

    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },

    {
      name: "MySQL",
      icon: <SiMysql />,
    },

    {
      name: "Git",
      icon: <FaGitAlt />,
    },
  ];

  return (
    <div>

      <h2>Skills</h2>

      <div className="skillsGrid">

        {skills.map((skill, index) => (

          <div className="skillCard" key={index}>

            <div className="skillIcon">
              {skill.icon}
            </div>

            <p>{skill.name}</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Skills;