function Education() {

  const educationData = [
    {
      degree: "Bachelor of Technology - Computer Engineering",
      college:
        "Charutar Vidya Mandal University | Madhuben and Bhanubhai Patel Institute of Technology",
      location: "Anand, Gujarat",
      score: "CGPA: 7.97/10",
      year: "2023 - 2027"
    },

    {
      degree: "12th - Gujarat Board (GSHSEB)",
      college: "Smt M. Y. High School",
      location: "Dahod, Gujarat",
      score: "53.69%",
      year: "2023"
    },

    {
      degree: "10th - Gujarat Board (GSHSEB)",
      college: "Smt M. Y. High School",
      location: "Dahod, Gujarat",
      score: "64.83%",
      year: "2021"
    }
  ]

  return (

    <div className="zp-education-section">

      <h2 className="zp-main-heading">
        Education
      </h2>

      {
        educationData.map((item, index) => (

          <div
            key={index}
            className="zp-education-card"
          >

            <div className="zp-education-top">

              <h3>
                {item.degree}
              </h3>

              <span className="zp-year-badge">
                {item.year}
              </span>

            </div>

            <p className="zp-college-name">
              {item.college}
            </p>

            <p className="zp-college-location">
              {item.location}
            </p>

            <h4 className="zp-score">
              {item.score}
            </h4>

          </div>

        ))
      }

    </div>
  )
}

export default Education