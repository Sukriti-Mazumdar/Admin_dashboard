import React from "react";
import {
  FaTachometerAlt,
  FaFileAlt,
  FaUsers,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";
import "./Sidebar.css";

interface SidebarProps {
  onMenuClick: (page: string) => void;
  activePage: string;
  onLogout: () => void;
}

function Sidebar({ onMenuClick, activePage, onLogout }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        TAX <span className="admin-text">ADMIN</span>
      </div>

      <nav className="sidebar-nav">
        <button
          className={`nav-btn ${activePage === "dashboard" ? "active" : ""}`}
          onClick={() => onMenuClick("dashboard")}
        >
          <FaTachometerAlt className="icon" /> Dashboard
        </button>

        <button
          className={`nav-btn ${activePage === "allFilings" ? "active" : ""}`}
          onClick={() => onMenuClick("allFilings")}
        >
          <FaFileAlt className="icon" /> All Filings
        </button>

        <button
          className={`nav-btn ${activePage === "operators" ? "active" : ""}`}
          onClick={() => onMenuClick("operators")}
        >
          <FaUsers className="icon" /> Operators
        </button>

        <button
          className={`nav-btn ${activePage === "settings" ? "active" : ""}`}
          onClick={() => onMenuClick("settings")}
        >
          <FaCog className="icon" /> Settings
        </button>
      </nav>

      <button className="logout-btn" onClick={onLogout}>
        <FaSignOutAlt className="icon" /> Logout
      </button>
    </aside>
  );
}

export default Sidebar;
