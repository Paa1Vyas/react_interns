import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const nevigate = useNavigate();
    function isLoggedIn(){
        nevigate("/home");
    }
  return (
    <div>
        <button onClick={isLoggedIn}>Login</button>
    </div>

  )
}
