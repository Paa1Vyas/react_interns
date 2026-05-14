
import { Link, useNavigate } from "react-router-dom"

function Navbar({ isLoggedIn, setIsLoggedIn }) {

  const navigate = useNavigate()

  const handleLogout = () => {

    setIsLoggedIn(false)

    navigate("/")
  }

  return (

    <nav className="zp-navbar">

      <h2 className="zp-logo">
        ZP Portal
      </h2>

      <div className="zp-nav-links">

        <Link to="/">
          <button>
            Home
          </button>
        </Link>

        {

          !isLoggedIn ?

            <Link to="/login">
              <button>
                Login
              </button>
            </Link>

            :

            <>

              <Link to="/form">
                <button>
                  Form
                </button>
              </Link>

              <Link to="/profile">
                <button>
                  Profile
                </button>
              </Link>

              <button onClick={handleLogout}>
                Logout
              </button>

            </>

        }

      </div>

    </nav>
  )
}

export default Navbar


