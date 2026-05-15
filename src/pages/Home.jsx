import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
            <h1>Welcome to Our Application</h1>
            <p>Discover amazing products and manage your dashboard with ease.</p>

            <div style={{ display: "flex", gap: "1.5rem", marginTop: "2rem" }}>
                <div style={{ flex: 1, padding: "1.5rem", border: "1px solid #eee", borderRadius: "8px" }}>
                    <h3>📦 Product Catalog</h3>
                    <p>Browse our collection of products with detailed views and pricing.</p>
                    <button onClick={() => navigate("/products")} style={{ padding: "0.5rem 1rem", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                        Explore Products
                    </button>
                </div>

                <div style={{ flex: 1, padding: "1.5rem", border: "1px solid #eee", borderRadius: "8px" }}>
                    <h3>📊 Personal Dashboard</h3>
                    <p>Get personalized insights and manage your profile settings.</p>
                    <button onClick={() => navigate("/dashboard")} style={{ padding: "0.5rem 1rem", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                        Go to Dashboard
                    </button>
                </div>
            </div>

            <div style={{ marginTop: "2rem", padding: "1.5rem", backgroundColor: "black", borderRadius: "8px" }}>
                <h3>Quick Start Guide</h3>
                <ol>
                    <li>Explore our product catalog to see what we offer</li>
                    <li>Click on any product to view detailed information</li>
                    <li>Visit your dashboard to see personalized insights</li>
                    <li>Update your profile settings as needed</li>
                </ol>
            </div>
        </div>
    );
}