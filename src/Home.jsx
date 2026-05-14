import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  let isAdmin = true;
  return (
    <div>
        <nav>
            <Link to={"/home"}>Home</Link>|{" "}
            <Link to={"/about-us"}>About us</Link>|{" "}
            {isAdmin ? (<Link to={"/admin"}>Admin</Link>) : (<Link to ={"/user"}> User</Link>)} |{" "}
            
        </nav>
        <h1>Welcome To Home Page...</h1>
    </div>
    
  )
}
