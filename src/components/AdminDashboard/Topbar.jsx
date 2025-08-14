import React from "react";
import { FaBell, FaCog, FaQuestionCircle, FaChevronDown, FaPlus } from "react-icons/fa";
import "./Topbar.css";

function Topbar({ activePage }) {
  return (
    <>
      <header className="topbar">
        <div className="topbar-left">
          <span className="logo">TAX <span className="admin-text" style={{color: '#6c757d', fontWeight: '400', marginLeft: '4px'}}>ADMIN</span></span>
        </div>
        <div className="topbar-center">
          <div className="user-name">
            Jayeetra Bhattacharjee <FaChevronDown className="dropdown-icon" />
          </div>
        </div>
        <div className="topbar-right">
          <button className="icon-btn" title="Need help?">
            <FaQuestionCircle />
          </button>
          <button className="icon-btn" title="Notifications">
            <FaBell />
          </button>
          <button className="icon-btn" title="Settings">
            <FaCog />
          </button>
        </div>
      </header>
      {activePage === "operators" && (
        <div className="topbar-bottom" style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 30px', backgroundColor: '#fff', borderBottom: '1px solid #dee2e6' }}>
          <button className="add-operator-btn" style={{ backgroundColor: '#1976d2', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaPlus />
            Add New Operator
          </button>
        </div>
      )}
      {activePage === "dashboard" && (
        <div className="topbar-bottom" style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 30px', backgroundColor: '#fff', borderBottom: '1px solid #dee2e6' }}>
          <button className="generate-report-btn" style={{ backgroundColor: '#1f2a6b', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: '600' }}>
            Generate Report
          </button>
        </div>
      )}
    </>
  );
}

export default Topbar;
