import React from 'react'

export default function Profile() {
  return (
    <div className="page-container">
        <div className="glass-card">
            <h1>User Profile</h1>
            <div style={{ textAlign: 'left', marginTop: '1.5rem', marginBottom: '2rem', padding: '0 1rem' }}>
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> john@example.com</p>
                <p><strong>Role:</strong> Administrator</p>
            </div>
            <button className="btn-primary">Edit Profile</button>
        </div>
    </div>
  )
}
