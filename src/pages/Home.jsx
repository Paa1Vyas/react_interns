import { useState } from "react"

function Home({ isLoggedIn }) {

  const [showProfile, setShowProfile] = useState(false)

  return (

    <div className="zp-page">

      <h1>
        Welcome To Home Page
      </h1>

      <p>
        React Router DOM Task
      </p>

      {

        isLoggedIn && (

          <button
            className="zp-profile-btn"
            onClick={() => setShowProfile(!showProfile)}
          >
            View Profile
          </button>

        )

      }

      {

        showProfile && (

          <div className="zp-profile-card">

            <h2>
              Zaid Pathan
            </h2>

            <p>
              📧 zaidpathan622006@gmail.com
            </p>

            <p>
              📍 Dahod, Gujarat
            </p>

            <p>
              💻 MERN Stack Developer
            </p>

          </div>

        )

      }

    </div>
  )
}

export default Home


