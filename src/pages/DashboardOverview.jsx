import { useState } from "react";

export default function DashboardOverview() {
    const [stats, setStats] = useState({
        totalUsers: 1247,
        activeToday: 89,
        revenue: 24500,
        growth: 12.5
    });

    return (
        <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
            <h2>📊 Dashboard Overview</h2>
            <p>Route: <code>/dashboard</code></p>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1.5rem",
                marginTop: "2rem"
            }}>
                <div style={{
                    border: "1px solid #eee",
                    borderRadius: "8px",
                    padding: "1.5rem",
                    textAlign: "center",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                }}>
                    <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>👥</div>
                    <h3>Total Users</h3>
                    <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#007bff" }}>{stats.totalUsers.toLocaleString()}</p>
                    <p style={{ color: "#6c757d", fontSize: "0.9rem" }}>{stats.activeToday} active today</p>
                </div>

                <div style={{
                    border: "1px solid #eee",
                    borderRadius: "8px",
                    padding: "1.5rem",
                    textAlign: "center",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                }}>
                    <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>💰</div>
                    <h3>Monthly Revenue</h3>
                    <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#28a745" }}>${stats.revenue.toLocaleString()}</p>
                    <p style={{ color: stats.growth >= 0 ? "#28a745" : "#dc3545", fontSize: "0.9rem" }}>
                        {stats.growth >= 0 ? "+" : ""}{stats.growth}% vs last month
                    </p>
                </div>

                <div style={{
                    border: "1px solid #eee",
                    borderRadius: "8px",
                    padding: "1.5rem",
                    textAlign: "center",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                }}>
                    <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>📈</div>
                    <h3>System Health</h3>
                    <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#6f42c1" }}>99.9%</p>
                    <p style={{ color: "#28a745", fontSize: "0.9rem" }}>All systems operational</p>
                </div>

                <div style={{
                    border: "1px solid #eee",
                    borderRadius: "8px",
                    padding: "1.5rem",
                    textAlign: "center",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                }}>
                    <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>⚡</div>
                    <h3>Performance</h3>
                    <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#fd7e14" }}>1.2s</p>
                    <p style={{ color: "#6c757d", fontSize: "0.9rem" }}>Avg. load time</p>
                </div>
            </div>

            <div style={{
                marginTop: "2rem",
                padding: "1.5rem",
                backgroundColor: "black",
                borderRadius: "8px"
            }}>
                <h2>Welcome Back!</h2>
                <p>Here's a quick overview of your activity and system metrics:</p>
                <ul style={{ lineHeight: "1.6", marginTop: "1rem" }}>
                    <li><strong>Today's Activity:</strong> You've visited 3 pages and spent 12 minutes on the platform</li>
                    <li><strong>Recommendations:</strong> Check out our new product arrivals in the catalog</li>
                    <li><strong>Notifications:</strong> You have 2 unread messages from our support team</li>
                    <li><strong>Quick Actions:</strong> Update your profile or explore dashboard settings</li>
                </ul>
            </div>
        </div>
    );
}