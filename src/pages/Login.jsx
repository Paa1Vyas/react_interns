import { useNavigate } from "react-router-dom"

function Login({ setIsLoggedIn }) {

  const navigate = useNavigate()

  const handleLogin = () => {

    setIsLoggedIn(true)

    navigate("/")
  }

  return (

    <div className="zp-page">

      <div className="zp-login-card">

        <h1>
          Login Page
        </h1>

        <p>
          Click below to login instantly
        </p>

        <button
          className="zp-login-btn"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </div>
  )
}

export default Login
