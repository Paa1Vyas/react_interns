import React from 'react'

export default function Navbar() {
    let isLoggedIn = true;
  return (
    <div>
        <nav className="navbar">
            <h1>My MERN Stack App</h1>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li>{isLoggedIn ? <a href="/profile">Profile</a> : <a href="/login">Login</a>}</li>
            </ul>
        </nav>
    </div>
  )
}
