import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hello from './Hello'
import './App.css'
import StateDemo from './StateDemo'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'

import Form from './Form'
import Dashboard from './Dashboard'
import ApiFetchDemo from './ApiFetchDemo'

function App() {
  const [count, setCount] = useState(0)
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
        
        <Routes>
          <Route path="/" element={isLoggedin ? <Dashboard /> : <Home/>}></Route>
          
          {isLoggedin ? (
            <>
              <Route path="/home" element={<Home  />}></Route>
              <Route path="/form" element={<Form />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/api-fetch" element={<ApiFetchDemo />}></Route>
            </>
          ) : (
            <Route path="*" element={<Navigate to="/" replace />} />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
