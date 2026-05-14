import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className="page-container">
        <div className="glass-card">
            <h1>Dashboard Overview</h1>
            <p>Welcome back! Here is your quick overview of the current status.</p>
            <div style={{ marginTop: '2rem' }}>
                <Link to="/profile" className="btn-primary">View Profile</Link>
            </div>
        </div>
    </div>
  )
}
