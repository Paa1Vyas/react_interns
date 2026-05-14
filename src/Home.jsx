import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page-container">
      <div className="hero">
        <h1>Welcome to the MERN Experience</h1>
        <p>A premium React application built with modern glassmorphism design and robust routing.</p>
        <div className="hero-actions">
            <a href="https://react.dev" target="_blank" rel="noreferrer" className="btn-outline">Learn React</a>
        </div>
      </div>
    </div>
  )
}
