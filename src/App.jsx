import { useEffect, useState } from "react"
import Header from "./components/Header"
import Contact from "./components/Contact"
import Summary from "./components/Summary"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Projects from "./components/Projects"
import ContactForm from "./components/ContactForm"
import "./App.css"

function App() {

  const [resumeData, setResumeData] = useState(null)

  useEffect(() => {

   const data = {
  name: "Zaid Pathan",

  location: "Dahod, Gujarat",

  contact: {
    email: "zaidpathan622006@gmail.com",
    phone: "+91 7984546436",
    github: "https://github.com/zaidpathann",
    linkedin: "https://linkedin.com"
  },

  summary:
    "Motivated pre-final year Computer Engineering student with strong foundation in Full Stack Web Development. Skilled in React, JavaScript, Python, Django, MongoDB and MySQL with interest in building modern web applications.",

  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Angular JS",
    "Python",
    "Django",
    "Node JS",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub"
  ]
}

    setTimeout(() => {
      setResumeData(data)
    }, 1000)

  }, [])

  if (!resumeData) {
    return (
      <h1 className="zp-loading">
        Loading Resume...
      </h1>
    )
  }

  return (

    <div className="zp-container">

      <div className="zp-resume-card">

        <Header
          name={resumeData.name}
          location={resumeData.location}
        />

        <Contact contact={resumeData.contact} />

        <Summary summary={resumeData.summary} />

        <Skills skills={resumeData.skills} />

        <Education />

        <Projects />

        <ContactForm />

      </div>

    </div>
  )
}

export default App