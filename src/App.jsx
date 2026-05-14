import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hello from './Hello'
import './App.css'
import StateDemo from './StateDemo'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'

import Form from './Form'
import Dashboard from './Dashboard'

function App() {
  const [count, setCount] = useState(0)
  let isLoggedin = false;
  return (
    <>
      {/* <h1>Hello MERN Stack</h1> 
      <Hello name="Paavan" dept="Computer Science"></Hello> */}
      {/* <StateDemo></StateDemo>
      <Form></Form> */}

      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedin ? <Dashboard /> : <Home/>}></Route>
          <Route path="/home" element={<Home  />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
