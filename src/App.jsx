import './App.css'

const profile = {
  name: 'Dev Barot',
  email: 'devbarot2010@gmail.com',
  phone: '+917698826718',
  location: 'Navsari, Gujarat',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'GitHub', href: 'https://github.com/' },
  ],
}

const summary =
  'Frontend Developer and Computer Engineering student with hands-on experience building responsive, user-friendly web applications using React.js, Tailwind CSS, HTML, and CSS. Comfortable working across the full stack with basic backend knowledge. Passionate about clean UI design, writing maintainable code, and continuously improving through real-world projects.'

const education = [
  {
    school: 'Madhuben & Bhanubhai Patel institute of technology, Anand',
    degree: 'B.Tech in Computer Engineering',
    date: 'Jun 2024 – May 2027',
    result: 'CGPA: 8.5',
  },
  {
    school: 'Government polytechnic college, Waghai',
    degree: 'Diploma in Computer Engineering',
    date: 'May 2021 – Feb 2024',
    result: 'CGPA: 7.6',
  },
  {
    school: 'D.E Italiya high school, Chikhli',
    degree: 'SSC Board Exam',
    date: 'Jun 2017 – March 2018',
    result: 'PR: 57.16%',
  },
]

const skills = [
  ['Languages', 'HTML5, CSS3, JavaScript'],
  ['Frameworks & Libraries', 'React.js, RadixUI, Redux, Tailwind CSS'],
  ['Tools & Platforms', 'Git, GitHub, VS Code, Claude, GPT-4o'],
  ['Core Competencies', 'Responsive Web Design, UI/UX Principles'],
  ['Database', 'SQL, MongoDB'],
]

const projects = [
  {
    title: 'HerbHex – Herbal Skin Care Products Website',
    points: [
      'Developed a responsive herbal skincare e-commerce platform using React.js and Tailwind CSS.',
      'Built product pages, category filtering, and reusable UI components for a smooth user experience.',
      'Focused on modern UI design, mobile responsiveness, and optimized frontend performance.',
    ],
  },
  {
    title: 'AI Powered Personal Finance Dashboard',
    points: [
      'Created an AI-powered finance dashboard for expense tracking, budgeting, and financial insights.',
      'Designed interactive analytics cards and responsive dashboard layouts using React.js.',
      'Implemented clean UI/UX with efficient state management and real-time data updates.',
    ],
  },
  {
    title: 'E-Commerce Application',
    points: [
      'Developed a responsive e-commerce web application using React.js and Tailwind CSS.',
      'Built product listings, category filtering, shopping cart features, and reusable UI components.',
      'Focused on clean UI/UX design, mobile responsiveness, and smooth user navigation.',
    ],
  },
]

const achievements = [
  <>
    Completed <strong>Outskill Program</strong>, gaining hands-on experience in technical skill
    development and real-world problem-solving
  </>,
  <>
    Participated in <strong>Smart India Hackathon</strong>, working in a collaborative team
    environment to develop innovative solutions under strict deadlines
  </>,
  <>
    Participated in <strong>CVMC Hackathon</strong>, showcasing coding, teamwork, and analytical
    skills in a competitive setting
  </>,
]

function Section({ title, children }) {
  return (
    <section className="resume-section">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function BulletList({ children, className = '' }) {
  return <ul className={`resume-list ${className}`}>{children}</ul>
}

function App() {
  return (
    <main className="resume-page" aria-label="Resume for Dev Barot">
      <header className="resume-header">
        <h1>{profile.name}</h1>
        <p className="contact-line">
          {profile.email} | {profile.phone} | {profile.location}
        </p>
        <nav className="profile-links" aria-label="Profile links">
          {profile.links.map((link, index) => (
            <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
              {link.label}
              {index < profile.links.length - 1 && <span aria-hidden="true"> |</span>}
            </a>
          ))}
        </nav>
      </header>

      <Section title="Professional Summary">
        <BulletList>
          <li>{summary}</li>
        </BulletList>
      </Section>

      <Section title="Education">
        <BulletList className="education-list">
          {education.map((item) => (
            <li className="education-item" key={item.school}>
              <div className="education-main">
                <strong>{item.school}</strong>
                <em>{item.degree}</em>
              </div>
              <div className="education-meta">
                <span>{item.date}</span>
                <strong>{item.result}</strong>
              </div>
            </li>
          ))}
        </BulletList>
      </Section>

      <Section title="Technical Skills">
        <BulletList>
          {skills.map(([name, value]) => (
            <li key={name}>
              <strong>{name}:</strong> {value}
            </li>
          ))}
        </BulletList>
      </Section>

      <Section title="Projects">
        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <h3>{project.title}</h3>
              <BulletList>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </BulletList>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Certifications and Achievements">
        <BulletList>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </BulletList>
      </Section>
    </main>
  )
}

export default App
