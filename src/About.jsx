import React from 'react'
import { Link } from 'react-router-dom'
export default function About() {
    let isAdmin = false
  return (
    <div>
        <nav>
            <Link to={"/home"}>Home</Link>|{" "}
            <Link to={"/about-us"}>About us</Link>|{" "}
                        {isAdmin ? (<Link to={"/admin"}>Admin</Link>) : (<Link to ={"/user"}> User</Link>)} |{" "}
            
        </nav>
      <h1>Skill - Issue</h1>
      <div>Our Company make your software in reliable way.</div>
    </div>
  )
}
