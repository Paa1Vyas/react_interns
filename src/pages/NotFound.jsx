import { useNavigate } from "react-router-dom";
export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <h1 style={{ fontSize: "4rem", color: "#6d28d9" }}>404</h1>
            <p>Page Not Found</p>
            <p>Catch-all <code>*</code> route triggered.</p>
            <button onClick={() => navigate("/")}>← Home</button>
        </div>
    );
}