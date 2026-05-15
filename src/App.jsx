import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hello from './Hello'
import './App.css'
import StateDemo from './StateDemo'
import Home from './Home'
import About from './About'
import Contect from './Contect'
import Login from './Login'
import { BrowserRouter , Route , Routes} from 'react-router-dom'

function App() {
  
  const [count, setCount] = useState(0)
  let isLoggin  = false;


  return (
    <>
      {/* <h1>Hello MERN Stack</h1> 
      <Hello name="Paavan" dept="Computer Science"></Hello> */}
      {/* <StateDemo></StateDemo> */}
<BrowserRouter>
<Routes>
  <Route path='/' element = {isLoggin ? <Home></Home> : <Login></Login> }></Route>
  <Route path='/Home' element={<Home></Home>}></Route>
  <Route path='/about' element={<About></About>}></Route>
  <Route path='/contect' element={<Contect></Contect>}></Route>
  <Route path='/dashboard' element={<Login></Login>}></Route>
</Routes>
</BrowserRouter>
      
    </>
  )
}

export default App
