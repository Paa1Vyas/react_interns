import { useEffect, useState } from "react"

function Form() {

  const [timer, setTimer] = useState(10)

  useEffect(() => {

    if (timer === 0) {

      alert("⏰ 10 Seconds Completed!")

      return
    }

    const interval = setInterval(() => {

      setTimer((prev) => prev - 1)

    }, 1000)

    return () => clearInterval(interval)

  }, [timer])

  return (

    <div className="zp-page">

      <h1>
        Student Form
      </h1>

      <form className="zp-form">

        <input
          type="text"
          placeholder="Enter Name"
        />

        <input
          type="email"
          placeholder="Enter Email"
        />

        <input
          type="text"
          placeholder="Enter Course"
        />

        <button type="submit">
          Submit
        </button>

      </form>

      <h2 className="zp-timer">
        ⏳ Timer: {timer}s
      </h2>

    </div>
  )
}

export default Form


