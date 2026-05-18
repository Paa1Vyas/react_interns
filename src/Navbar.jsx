import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ isLoggedin, setIsLoggedin }) {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <h1>MERN Stack</h1>
      <ul className="nav-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        </li>
        {isLoggedin && (
          <>
            <li>
              <Link to="/form" className={location.pathname === '/form' ? 'active' : ''}>Form</Link>
            </li>
            <li>
              <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>Profile</Link>
            </li>
            <li>
              <Link to="/api-fetch" className={location.pathname === '/api-fetch' ? 'active' : ''}>API Fetch</Link>
            </li>
          </>
        )}
        <li>
          <button 
            className={isLoggedin ? "btn-outline" : "btn-primary"}
            onClick={() => setIsLoggedin(!isLoggedin)}
          >
            {isLoggedin ? 'Logout' : 'Login'}
          </button>
        </li>
      </ul>
    </nav>
  );
}
