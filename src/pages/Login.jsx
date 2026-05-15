import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate();
    const handleLogin = () => {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/profile");
    };
    return (
        <div>
            <h1>🔐 Login</h1>
            <p>Route: <code>/login</code></p>
            <p>Simulates auth. Sets flag in localStorage, then redirects.</p>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}