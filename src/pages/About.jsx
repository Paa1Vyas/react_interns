export default function About() {
    return (
        <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
            <h1>About Our Application</h1>
            <p>We're building a modern React application with intuitive navigation and useful features.</p>

            <div style={{ marginTop: "2rem" }}>
                <h2>Our Features</h2>
                <ul style={{ lineHeight: "1.6" }}>
                    <li><strong>Product Catalog:</strong> Browse and view detailed information about our products</li>
                    <li><strong>Personal Dashboard:</strong> Get personalized insights and manage your settings</li>
                    <li><strong>User Profiles:</strong> Secure login and personalized experience</li>
                    <li><strong>Responsive Design:</strong> Works seamlessly on desktop and mobile devices</li>
                </ul>
            </div>

            <div style={{ marginTop: "2rem", padding: "1.5rem", backgroundColor: "black", borderRadius: "8px" }}>
                <h2>Technology Stack</h2>
                <p><strong>Frontend:</strong> React 19 with Vite for fast development</p>
                <p><strong>Routing:</strong> React Router DOM for client-side navigation</p>
                <p><strong>Styling:</strong> CSS with responsive design principles</p>
            </div>
        </div>
    );
}