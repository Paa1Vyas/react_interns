import { useEffect, useState } from "react";

const Form = () => {

    const [time, setTime] = useState(10);

    useEffect(() => {

        const interval = setInterval(() => {

            setTime((prevTime) => {

                if (prevTime <= 1) {
                    clearInterval(interval);
                    alert("Session expired! Please submit the form within 10 seconds.");
                    return 0;
                }

                return prevTime - 1;
            });

        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
    };

    return (
        <form onSubmit={handleSubmit}>


            <input type="text" name="name" placeholder="Enter name" />
            <br />

            <input type="email" name="email" placeholder="Enter email" />
            <br />

            <textarea name="message" placeholder="Enter message" />
            <br />

            <button type="submit">Submit</button>
            <br />

            <button type="reset">Reset</button>

            <h2 style={{ color: "red" }}>Time Left: {time}</h2>


        </form>
    );
};

export default Form;