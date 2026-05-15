import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitStatus, setSubmitStatus] = useState(null); // null: idle, 'success', 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation
        if (!formData.name || !formData.email || !formData.message) {
            setSubmitStatus('error');
            return;
        }
        // Simulate successful submission
        setSubmitStatus('success');
        // Reset form after a short delay
        setTimeout(() => {
            setFormData({ name: "", email: "", message: "" });
            setSubmitStatus(null);
        }, 3000);
    };

    return (
        <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
            <h1>📬 Contact Us</h1>
            <p>Route: <code>/contact</code></p>

            {submitStatus === 'success' && (
                <div style={{ padding: "1rem", backgroundColor: "#d4edda", color: "#155724", borderRadius: "4px", marginBottom: "1.5rem" }}>
                    Thank you for your message! We'll get back to you soon.
                </div>
            )}
            {submitStatus === 'error' && (
                <div style={{ padding: "1rem", backgroundColor: "#f8d7da", color: "#721c24", borderRadius: "4px", marginBottom: "1.5rem" }}>
                    Please fill in all fields.
                </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "500px" }}>
                <div>
                    <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
                        title="Please enter your full name"
                    />
                </div>
                <div>
                    <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
                        title="Please enter a valid email address"
                    />
                </div>
                <div>
                    <label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        required
                        rows="5"
                        style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
                        title="Please enter your message"
                    />
                </div>
                <button
                    type="submit"
                    style={{ 
                        padding: "0.75rem 1.5rem", 
                        backgroundColor: "#007bff", 
                        color: "white", 
                        border: "none", 
                        borderRadius: "4px", 
                        cursor: "pointer",
                        fontSize: "1rem"
                    }}
                >
                    Send Message
                </button>
            </form>

            <div style={{ marginTop: "2rem", padding: "1.5rem", backgroundColor: "black", borderRadius: "8px" }}>
                <h2>Contact Information</h2>
                <p><strong>Email:</strong> <a href="mailto:support@example.com" style={{ color: "#007bff", textDecoration: "none" }}>support@example.com</a></p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Hours:</strong> Monday-Friday, 9AM-5PM EST</p>
                <p style={{ fontSize: "0.9rem", color: "#666" }}>
                    We typically respond within 24 hours.
                </p>
            </div>
        </div>
    );
}