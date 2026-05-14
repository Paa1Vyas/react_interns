import React from 'react'

export default function Login() {
  return (
    <div className="page-container">
        <div className="glass-card">
            <h1>Login to Account</h1>
            <p>Enter your credentials to access the dashboard.</p>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-input" placeholder="name@example.com" />
                </div>
                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-input" placeholder="••••••••" />
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn-primary">Sign In</button>
                </div>
            </form>
        </div>
    </div>
  )
}
