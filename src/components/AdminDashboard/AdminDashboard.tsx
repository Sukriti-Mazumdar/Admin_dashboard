import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import RevenueChart from "./RevenueChart";
import UserCard from "./UserCard";
import Settings from "./Settings";
import AllFilings from "../AllFilings";
import Operators from "../Operators"; 

import { FaUser, FaUsers, FaClock, FaFileAlt } from "react-icons/fa";
import "./AdminDashboard.css";

interface AdminDashboardProps {
  onLogout: () => void;
}

function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activePage, setActivePage] = useState<string>("dashboard");

  return (
    <div className="page-wrap">
      {/* Sidebar */}
      <Sidebar onMenuClick={setActivePage} activePage={activePage} onLogout={onLogout} />

      {/* Main Content */}
      <div className="main">
        {/* Topbar */}
        <Topbar activePage={activePage} />

        {/* Content */}
        <div className="content">
          {activePage === "dashboard" && (
            <>
              {/* Dashboard Header */}
              <div className="dashboard-header">
                <div className="dashboard-title">
                  <h1>Admin Dashboard</h1>
                  <p>Monitor and manage your tax filing operations</p>
                </div>
                <button className="generate-report-btn">
                  Generate Report
                </button>
              </div>

              {/* Summary Cards */}
              <div className="summary-cards">
                <div className="summary-card blue">
                  <div className="summary-info">
                    <p className="summary-label">Total Clients</p>
                    <h2 className="summary-value">1,247</h2>
                  </div>
                  <div className="summary-icon">
                    <FaUser />
                  </div>
                </div>
                <div className="summary-card green">
                  <div className="summary-info">
                    <p className="summary-label">Total Operators</p>
                    <h2 className="summary-value">45</h2>
                  </div>
                  <div className="summary-icon">
                    <FaUsers />
                  </div>
                </div>
                <div className="summary-card orange">
                  <div className="summary-info">
                    <p className="summary-label">Pending Requests</p>
                    <h2 className="summary-value">23</h2>
                  </div>
                  <div className="summary-icon">
                    <FaClock />
                  </div>
                </div>
                <div className="summary-card purple">
                  <div className="summary-info">
                    <p className="summary-label">Ongoing Filings</p>
                    <h2 className="summary-value">156</h2>
                  </div>
                  <div className="summary-icon">
                    <FaFileAlt />
                  </div>
                </div>
              </div>

              {/* Grid Content */}
              <div className="grid">
                {/* Revenue Chart */}
                <div className="card revenue-card">
                  <h3>Monthly Revenue</h3>
                  <RevenueChart />
                </div>

                {/* Users Awaiting Operator Assignment */}
                <div className="card awaiting">
                  <h3>Users Awaiting Operator Assignment</h3>
                  <p className="muted">4 pending assignments</p>
                  <div className="users-list">
                    <UserCard
                      name="Bessie Cooper"
                      email="bagchi.bhavanshu@gmail.com"
                      phone="+91 9039443124"
                      price="₹999.00"
                      filingType="Individual filing"
                    />
                    <UserCard
                      name="Bessie Cooper"
                      email="bagchi.bhavanshu@gmail.com"
                      phone="+91 9039443124"
                      price="₹999.00"
                      filingType="Individual filing"
                    />
                    <UserCard
                      name="Bessie Cooper"
                      email="bagchi.bhavanshu@gmail.com"
                      phone="+91 9039443124"
                      price="₹999.00"
                      filingType="Individual filing"
                    />
                  </div>
                  <button className="view-all-btn">View all requests</button>
                </div>
              </div>
            </>
          )}

          {activePage === "allFilings" && <AllFilings />}

          {activePage === "operators" && <Operators />}

          {activePage === "settings" && <Settings />}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
