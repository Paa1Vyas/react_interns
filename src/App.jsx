import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hello from './Hello'
import './App.css'
import StateDemo from './StateDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Hello MERN Stack</h1> 
      <Hello name="Paavan" dept="Computer Science"></Hello> */}
      <StateDemo></StateDemo>
    </>
  )
}

export default App
