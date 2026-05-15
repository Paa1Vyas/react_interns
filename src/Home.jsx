import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of our MERN stack application.</p>
        <p>To go to the Form page, <Link to="/form">Click here</Link></p>
    </div>
  )
}
