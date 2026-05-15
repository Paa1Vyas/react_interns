import { Outlet, NavLink } from "react-router-dom";
export default function Dashboard() {
    return (
        <div>
            <h1>📊 Dashboard</h1>
            <p><strong>Nested route layout.</strong> Parent stays mounted. Child routes render inside <code>&lt;Outlet /&gt;</code>.</p>
            <div className="subnav">
                <NavLink to="/dashboard" end>Overview</NavLink>
                <NavLink to="/dashboard/stats">Stats</NavLink>
                <NavLink to="/dashboard/settings">Settings</NavLink>
            </div>
            <div className="card">
                <Outlet />
            </div>
        </div>
    );
}