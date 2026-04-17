import React from "react";
import "./sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>

      <ul className="sidebar-menu">
        <li className="sidebar-item active">Overview</li>
        <li className="sidebar-item">Performance</li>
        <li className="sidebar-item">Users</li>
        <li className="sidebar-item">Errors</li>
        <li className="sidebar-item">Admin</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
