import { useState } from "react";

export default function DashboardStats() {
    const [timeRange, setTimeRange] = useState("week");
    
    const statsData = {
        week: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            users: [120, 135, 148, 162, 158, 175, 189],
            revenue: [2100, 2350, 2580, 2890, 2650, 3100, 3420]
        },
        month: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            users: [450, 520, 480, 610],
            revenue: [8500, 9800, 9200, 12400]
        },
        year: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            users: [1200, 1450, 1380, 1620, 1890, 2100],
            revenue: [24000, 28500, 26800, 31200, 35600, 42000]
        }
    };

    const currentData = statsData[timeRange];

    return (
        <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
            <h2>📈 Detailed Statistics</h2>
            <p>Route: <code>/dashboard/stats</code></p>
            
            <div style={{ 
                marginBottom: "2rem", 
                padding: "1rem", 
                backgroundColor: "#e9ecef", 
                borderRadius: "8px"
            }}>
                <label htmlFor="timeRange" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
                    Select Time Range:
                </label>
                <select
                    id="timeRange"
                    value={timeRange}
                    onChange={(e) => setTimeRange(e.target.value)}
                    style={{ 
                        padding: "0.5rem", 
                        border: "1px solid #ccc", 
                        borderRadius: "4px",
                        marginRight: "1rem"
                    }}
                >
                    <option value="week">Last Week</option>
                    <option value="month">Last Month</option>
                    <option value="year">Last Year</option>
                </select>
            </div>
            
            <div style={{ 
                display: "flex", 
                gap: "2rem", 
                marginTop: "2rem"
            }}>
                {/* Users Chart */}
                <div style={{ flex: 1, border: "1px solid #eee", borderRadius: "8px", padding: "1.5rem" }}>
                    <h3>User Growth</h3>
                    <div style={{ 
                        height: "200px", 
                        backgroundColor: "#f8f9fa", 
                        borderRadius: "4px", 
                        marginTop: "1rem",
                        position: "relative"
                    }}>
                        {/* Simple bar chart representation */}
                        {currentData.labels.map((label, index) => (
                            <div 
                                key={index} 
                                style={{ 
                                    position: "absolute", 
                                    bottom: "20px", 
                                    left: `${(index / currentData.labels.length) * 100}%`, 
                                    width: `${80 / currentData.labels.length}%`,
                                    backgroundColor: "#007bff",
                                    height: `${(currentData.users[index] / Math.max(...currentData.users)) * 80}%`,
                                    display: "flex",
                                    alignItems: "flex-end",
                                    justifyContent: "center"
                                }}
                            >
                                <div style={{ 
                                    backgroundColor: "white", 
                                    padding: "2px 4px", 
                                    borderRadius: "2px", 
                                    fontSize: "0.75rem"
                                }}>
                                    {currentData.users[index]}
                                </div>
                            </div>
                        ))}
                        {/* X-axis labels */}
                        {currentData.labels.map((label, index) => (
                            <div 
                                key={label} 
                                style={{ 
                                    position: "absolute", 
                                    bottom: "0", 
                                    left: `${(index / currentData.labels.length) * 100}%`, 
                                    transform: "translateX(-50%)", 
                                    width: `${80 / currentData.labels.length}%`,
                                    textAlign: "center",
                                    fontSize: "0.75rem",
                                    color: "#6c757d"
                                }}
                            >
                                {label}
                            </div>
                        ))}
                    </div>
                    <p style={{ textAlign: "center", marginTop: "1rem", color: "#6c757d" }}>
                        Total Users: {currentData.users.reduce((a, b) => a + b, 0).toLocaleString()}
                    </p>
                </div>
                
                {/* Revenue Chart */}
                <div style={{ flex: 1, border: "1px solid #eee", borderRadius: "8px", padding: "1.5rem" }}>
                    <h3>Revenue Trends</h3>
                    <div style={{ 
                        height: "200px", 
                        backgroundColor: "#f8f9fa", 
                        borderRadius: "4px", 
                        marginTop: "1rem",
                        position: "relative"
                    }}>
                        {/* Simple bar chart representation */}
                        {currentData.labels.map((label, index) => (
                            <div 
                                key={index} 
                                style={{ 
                                    position: "absolute", 
                                    bottom: "20px", 
                                    left: `${(index / currentData.labels.length) * 100}%`, 
                                    width: `${80 / currentData.labels.length}%`,
                                    backgroundColor: "#28a745",
                                    height: `${(currentData.revenue[index] / Math.max(...currentData.revenue)) * 80}%`,
                                    display: "flex",
                                    alignItems: "flex-end",
                                    justifyContent: "center"
                                }}
                            >
                                <div style={{ 
                                    backgroundColor: "white", 
                                    padding: "2px 4px", 
                                    borderRadius: "2px", 
                                    fontSize: "0.75rem"
                                }}>
                                    ${currentData.revenue[index].toLocaleString()}
                                </div>
                            </div>
                        ))}
                        {/* X-axis labels */}
                        {currentData.labels.map((label, index) => (
                            <div 
                                key={label} 
                                style={{ 
                                    position: "absolute", 
                                    bottom: "0", 
                                    left: `${(index / currentData.labels.length) * 100}%`, 
                                    transform: "translateX(-50%)", 
                                    width: `${80 / currentData.labels.length}%`,
                                    textAlign: "center",
                                    fontSize: "0.75rem",
                                    color: "#6c757d"
                                }}
                            >
                                {label}
                            </div>
                        ))}
                    </div>
                    <p style={{ textAlign: "center", marginTop: "1rem", color: "#6c757d" }}>
                        Total Revenue: ${currentData.revenue.reduce((a, b) => a + b, 0).toLocaleString()}
                    </p>
                </div>
            </div>
            
            <div style={{ 
                marginTop: "2rem", 
                padding: "1.5rem", 
                backgroundColor: "#f8f9fa", 
                borderRadius: "8px"
            }}>
                <h2>Key Insights</h2>
                <div style={{ 
                    display: "grid", 
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
                    gap: "1.5rem", 
                    marginTop: "1.5rem" 
                }}>
                    <div style={{ 
                        border: "1px solid #eee", 
                        borderRadius: "8px", 
                        padding: "1.5rem"
                    }}>
                        <h4>📈 Growth Trend</h4>
                        <p>User engagement has increased by 23% compared to the previous period.</p>
                    </div>
                    <div style={{ 
                        border: "1px solid #eee", 
                        borderRadius: "8px", 
                        padding: "1.5rem"
                    }}>
                        <h4>💰 Revenue Performance</h4>
                        <p>Revenue shows steady growth with peak performance on weekends.</p>
                    </div>
                    <div style={{ 
                        border: "1px solid #eee", 
                        borderRadius: "8px", 
                        padding: "1.5rem"
                    }}>
                        <h4>🎯 User Retention</h4>
                        <p>87% of users return within 7 days of their first visit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}