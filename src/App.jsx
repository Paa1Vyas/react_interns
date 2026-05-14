import { useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Form from "./pages/Form"
import Profile from "./pages/Profile"

import "./App.css"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (

    <div className="zp-app">

      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <Routes>

        <Route
          path="/"
          element={
            <Home isLoggedIn={isLoggedIn} />
          }
        />

        <Route
          path="/login"
          element={

            isLoggedIn
            ?
            <Navigate to="/" />

            :

            <Login
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />

        <Route
          path="/form"
          element={

            isLoggedIn
            ?
            <Form />

            :

            <Navigate to="/login" />
          }
        />

        <Route
          path="/profile"
          element={

            isLoggedIn
            ?
            <Profile />

            :

            <Navigate to="/login" />
          }
        />

      </Routes>

    </div>
  )
}

export default App
