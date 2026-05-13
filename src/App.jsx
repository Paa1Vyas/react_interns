import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hello from './Hello'
import './App.css'
// import StateDemo from './StateDemo'
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="container">

      <div className="card">

        <h1>Sahil Belim</h1>

        <p>Anand, Gujarat</p>

        <Contact />

        <hr />

        <h2>Professional Summary</h2>

        <p>
          Pre-final year Computer Engineering student interested
          in web development and real-world projects.
        </p>

        <Skills />

        <Education />

        <Projects />

        <ContactForm />

      </div>
    </div>
  );
}

export default App;