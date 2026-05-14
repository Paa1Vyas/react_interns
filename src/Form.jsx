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
        <div className="page-container">
            <div className="glass-card">
                <h1>Contact Support</h1>
                <p>Please fill out the form below. Hurry, you only have a limited time!</p>
                
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input type="text" name="name" className="form-input" placeholder="Enter your name" required />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input type="email" name="email" className="form-input" placeholder="Enter your email" required />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Message</label>
                        <textarea name="message" className="form-input" placeholder="How can we help you?" required></textarea>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn-primary">Submit Form</button>
                        <button type="reset" className="btn-outline">Clear</button>
                    </div>
                </form>

                <div className="badge">Time Left: {time}s</div>
            </div>
        </div>
    );
};

export default Form;