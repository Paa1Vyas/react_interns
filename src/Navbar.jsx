import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar">
            <h1>My MERN Stack App</h1>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}
