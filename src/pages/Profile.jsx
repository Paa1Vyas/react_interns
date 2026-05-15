export default function Profile() {
    return (
        <div>
            <h1>👤 Profile</h1>
            <p>Route: <code>/profile</code></p>
            <p style={{ color: "#4ade80" }}>✅ Protected route. Access granted.</p>
            <button onClick={() => { localStorage.removeItem("isLoggedIn"); window.location.href = "/login"; }}>
                Logout
            </button>
        </div>
    );
}