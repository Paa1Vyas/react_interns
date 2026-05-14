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

import Form from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Hello MERN Stack</h1> 
      <Hello name="Paavan" dept="Computer Science"></Hello> */}
      {/* <StateDemo></StateDemo>
      <Form></Form> */}

      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/form" element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
