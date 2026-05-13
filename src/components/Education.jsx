function Education() {

  const educationData = [

    {
      degree: "Bachelor of Technology · Computer Engineering",
      year: "2023 – 2027",
      institute:
        "Charutar Vidhya Mandal University | Madhuben and Bhanubhai Patel Institute of Technology",
      score: "CGPA: 8.09/10.0",
    },

    {
      degree: "12th · Gujarat Board - CBSE",
      year: "2023",
      institute:
        "Jawahar Navodaya Vidhyalaya | Anand, Gujarat",
      score: "84%",
    },

    {
      degree: "10th · Gujarat Board - CBSE",
      year: "2021",
      institute:
        "Jawahar Navodaya Vidhyalaya | Anand, Gujarat",
      score: "76%",
    },
  ];

  return (
    <div>

      <h2>Education</h2>

      <div className="educationContainer">

        {educationData.map((item, index) => (

          <div className="educationCard" key={index}>

            <div className="educationTop">

              <h3>{item.degree}</h3>

              <span>{item.year}</span>

            </div>

            <p className="institute">
              {item.institute}
            </p>

            <p className="score">
              {item.score}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Education;