import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Hello from "./Hello";
import "./App.css";
import StateDemo from "./StateDemo";
import Form from "./Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from './Login'
import Admin from "./admin";
import User from "./User";

function App() {
  const [count, setCount] = useState(0);
  let isAdmin = false;

  return (
    <>
      {/* <h1>Hello MERN Stack</h1> 
      <Hello name="Paavan" dept="Computer Science"></Hello> */}
      {/* <StateDemo></StateDemo> */}
      <BrowserRouter>
        {/* <Form></Form> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
