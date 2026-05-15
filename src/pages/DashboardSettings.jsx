import { useState } from "react";

export default function DashboardSettings() {
    const [settings, setSettings] = useState({
        notifications: {
            email: true,
            push: true,
            newsletter: false
        },
        theme: "light",
        language: "en",
        timezone: "UTC",
        privacy: {
            profileVisible: true,
            activityVisible: false
        }
    });

    const [saveStatus, setSaveStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        
        // Handle nested objects
        if (name.includes(".")) {
            const [parent, child] = name.split(".");
            setSettings(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: newValue
                }
            }));
        } else {
            setSettings(prev => ({
                ...prev,
                [name]: newValue
            }));
        }
    };

    const handleSave = () => {
        setSaveStatus("saving");
        // Simulate API call
        setTimeout(() => {
            setSaveStatus("success");
            setTimeout(() => {
                setSaveStatus(null);
            }, 2000);
        }, 1000);
    };

    return (
        <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
            <h2>⚙️ Dashboard Settings</h2>
            <p>Route: <code>/dashboard/settings</code></p>
            
            {saveStatus === "success" && (
                <div style={{ 
                    padding: "1rem", 
                    backgroundColor: "#d4edda", 
                    color: "#155724", 
                    borderRadius: "4px", 
                    marginBottom: "1.5rem"
                }}>
                    Settings saved successfully!
                </div>
            )}
            {saveStatus === "saving" && (
                <div style={{ 
                    padding: "1rem", 
                    backgroundColor: "#fff3cd", 
                    color: "#856404", 
                    borderRadius: "4px", 
                    marginBottom: "1.5rem"
                }}>
                    Saving settings...
                </div>
            )}

            <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "2rem"
            }}>
                
                {/* Notifications Section */}
                <fieldset style={{ 
                    border: "1px solid #eee", 
                    borderRadius: "8px", 
                    padding: "1.5rem"
                }}>
                    <legend style={{ 
                        fontSize: "1.25rem", 
                        fontWeight: "bold", 
                        color: "#333",
                        padding: "0 0.5rem"
                    }}>
                        📧 Notification Preferences
                    </legend>
                    
                    <div style={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        gap: "1rem"
                    }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <input
                                type="checkbox"
                                id="email-notifications"
                                name="notifications.email"
                                checked={settings.notifications.email}
                                onChange={handleChange}
                            />
                            <label htmlFor="email-notifications" style={{ 
                                marginLeft: "0.75rem", 
                                fontWeight: "500"
                            }}>
                                Email Notifications
                            </label>
                        </div>
                        
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <input
                                type="checkbox"
                                id="push-notifications"
                                name="notifications.push"
                                checked={settings.notifications.push}
                                onChange={handleChange}
                            />
                            <label htmlFor="push-notifications" style={{ 
                                marginLeft: "0.75rem", 
                                fontWeight: "500"
                            }}>
                                Push Notifications
                            </label>
                        </div>
                        
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <input
                                type="checkbox"
                                id="newsletter"
                                name="notifications.newsletter"
                                checked={settings.notifications.newsletter}
                                onChange={handleChange}
                            />
                            <label htmlFor="newsletter" style={{ 
                                marginLeft: "0.75rem", 
                                fontWeight: "500"
                            }}>
                                Monthly Newsletter
                            </label>
                        </div>
                    </div>
                </fieldset>

                {/* Appearance Section */}
                <fieldset style={{ 
                    border: "1px solid #eee", 
                    borderRadius: "8px", 
                    padding: "1.5rem"
                }}>
                    <legend style={{ 
                        fontSize: "1.25rem", 
                        fontWeight: "bold", 
                        color: "#333",
                        padding: "0 0.5rem"
                    }}>
                        🎨 Appearance
                    </legend>
                    
                    <div style={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        gap: "1rem"
                    }}>
                        <div>
                            <label htmlFor="theme-select" style={{ 
                                display: "block", 
                                marginBottom: "0.5rem", 
                                fontWeight: "bold"
                            }}>
                                Color Theme
                            </label>
                            <select
                                id="theme-select"
                                name="theme"
                                value={settings.theme}
                                onChange={handleChange}
                                style={{ 
                                    padding: "0.5rem", 
                                    border: "1px solid #ccc", 
                                    borderRadius: "4px"
                                }}
                            >
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                                <option value="auto">Auto (System)</option>
                            </select>
                        </div>
                        
                        <div>
                            <label htmlFor="language-select" style={{ 
                                display: "block", 
                                marginBottom: "0.5rem", 
                                fontWeight: "bold"
                            }}>
                                Language
                            </label>
                            <select
                                id="language-select"
                                name="language"
                                value={settings.language}
                                onChange={handleChange}
                                style={{ 
                                    padding: "0.5rem", 
                                    border: "1px solid #ccc", 
                                    borderRadius: "4px"
                                }}
                            >
                                <option value="en">English</option>
                                <option value="es">Spanish</option>
                                <option value="fr">French</option>
                                <option value="de">German</option>
                                <option value="ja">Japanese</option>
                            </select>
                        </div>
                        
                        <div>
                            <label htmlFor="timezone-select" style={{ 
                                display: "block", 
                                marginBottom: "0.5rem", 
                                fontWeight: "bold"
                            }}>
                                Timezone
                            </label>
                            <select
                                id="timezone-select"
                                name="timezone"
                                value={settings.timezone}
                                onChange={handleChange}
                                style={{ 
                                    padding: "0.5rem", 
                                    border: "1px solid #ccc", 
                                    borderRadius: "4px"
                                }}
                            >
                                <option value="UTC">UTC</option>
                                <option value="EST">Eastern Standard Time</option>
                                <option value="PST">Pacific Standard Time</option>
                                <option value="GMT">Greenwich Mean Time</option>
                                <option value="JST">Japan Standard Time</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                {/* Privacy Section */}
                <fieldset style={{ 
                    border: "1px solid #eee", 
                    borderRadius: "8px", 
                    padding: "1.5rem"
                }}>
                    <legend style={{ 
                        fontSize: "1.25rem", 
                        fontWeight: "bold", 
                        color: "#333",
                        padding: "0 0.5rem"
                    }}>
                        🔒 Privacy & Security
                    </legend>
                    
                    <div style={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        gap: "1rem"
                    }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <input
                                type="checkbox"
                                id="profile-visibility"
                                name="privacy.profileVisible"
                                checked={settings.privacy.profileVisible}
                                onChange={handleChange}
                            />
                            <label htmlFor="profile-visibility" style={{ 
                                marginLeft: "0.75rem", 
                                fontWeight: "500"
                            }}>
                                Make my profile visible to others
                            </label>
                        </div>
                        
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <input
                                type="checkbox"
                                id="activity-visibility"
                                name="privacy.activityVisible"
                                checked={settings.privacy.activityVisible}
                                onChange={handleChange}
                            />
                            <label htmlFor="activity-visibility" style={{ 
                                marginLeft: "0.75rem", 
                                fontWeight: "500"
                            }}>
                                Show my activity status
                            </label>
                        </div>
                    </div>
                    
                    <div style={{ 
                        marginTop: "1.5rem", 
                        padding: "1rem", 
                        backgroundColor: "#f8f9fa", 
                        borderRadius: "4px"
                    }}>
                        <p style={{ margin: "0", fontSize: "0.9rem", color: "#6c757d" }}>
                            <strong>Note:</strong> Changing privacy settings may affect how others see your information and activity.
                        </p>
                    </div>
                </fieldset>

                {/* Action Buttons */}
                <div style={{ 
                    display: "flex", 
                    gap: "1rem", 
                    marginTop: "2rem"
                }}>
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
                        Save Settings
                    </button>
                    
                    <button 
                        type="button"
                        onClick={() => {
                            // Reset to original settings (in a real app, this would fetch from server)
                            setSaveStatus(null);
                        }}
                        style={{ 
                            padding: "0.75rem 1.5rem", 
                            backgroundColor: "#6c757d", 
                            color: "white", 
                            border: "none", 
                            borderRadius: "4px", 
                            cursor: "pointer",
                            fontSize: "1rem"
                        }}
                    >
                        Reset
                    </button>
                </div>
            </form>

            <div style={{ 
                marginTop: "2rem", 
                padding: "1.5rem", 
                backgroundColor: "#e9ecef", 
                borderRadius: "8px"
            }}>
                <h2>Account Information</h2>
                <div style={{ 
                    display: "grid", 
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
                    gap: "1.5rem", 
                    marginTop: "1.5rem" 
                }}>
                    <div>
                        <h4>👤 Profile</h4>
                        <p><strong>Username:</strong> current_user</p>
                        <p><strong>Email:</strong> user@example.com</p>
                        <p><strong>Member since:</strong> January 2026</p>
                    </div>
                    
                    <div>
                        <h4>🔐 Security</h4>
                        <p><strong>Last login:</strong> Today, 10:30 AM</p>
                        <p><strong>Two-factor auth:</strong> Disabled</p>
                        <p><strong>Password changed:</strong> March 15, 2026</p>
                    </div>
                    
                    <div>
                        <h4>📊 Usage</h4>
                        <p><strong>Storage used:</strong> 2.4 GB / 10 GB</p>
                        <p><strong>API calls today:</strong> 1,245</p>
                        <p><strong>Bandwidth:</strong> 15.2 GB / 100 GB</p>
                    </div>
                </div>
            </div>
        </div>
    );
}