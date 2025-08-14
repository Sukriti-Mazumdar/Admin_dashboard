import React from "react";
import "./Operators.css";

const Operators = () => {
  const operators = [
    {
      initials: "CRG",
      name: "Rajesh Gupta",
      status: "Available",
      experience: 8,
      rating: 4.8,
      speciality: "Corporate Tax",
      tasksDone: 8,
      totalTasks: 12,
      filings: 245,
    },
    {
      initials: "CMS",
      name: "Meera Singh",
      status: "Available",
      experience: 10,
      rating: 4.9,
      speciality: "Individual Returns",
      tasksDone: 10,
      totalTasks: 12,
      filings: 320,
    },
    {
      initials: "OperatorN",
      name: "Arjun Nair",
      status: "Busy",
      experience: 6,
      rating: 4.7,
      speciality: "GST & Compliance",
      tasksDone: 8,
      totalTasks: 12,
      filings: 180,
    },
    {
      initials: "CKI",
      name: "Kavya Iyer",
      status: "Available",
      experience: 5,
      rating: 4.6,
      speciality: "Audit & Assurance",
      tasksDone: 6,
      totalTasks: 12,
      filings: 125,
    },
  ];

  return (
    <div className="operators-container">
      <h2 className="operators-title">Operators</h2>
      <p className="operators-subtitle">
        Manage your certified accountants and their workload
      </p>

      {/* Stats Section */}
      <div className="operators-stats">
        <div className="stat-card total-operators">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <p>Total Operators</p>
            <h3>4</h3>
          </div>
        </div>
        <div className="stat-card available">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <p>Available</p>
            <h3>3</h3>
          </div>
        </div>
        <div className="stat-card avg-rating">
          <div className="stat-icon">⭐</div>
          <div className="stat-content">
            <p>Avg Rating</p>
            <h3>4.8</h3>
          </div>
        </div>
        <div className="stat-card total-filings">
          <div className="stat-icon">📄</div>
          <div className="stat-content">
            <p>Total Filings</p>
            <h3>870</h3>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="search-filters-section">
        <div className="search-container">
          <div className="search-icon">🔍</div>
          <input
            type="text"
            placeholder="Search by client name..."
            className="search-input"
          />
        </div>
        <div className="filter-tabs">
          <button className="filter-tab active">All 4</button>
          <button className="filter-tab">Available 3</button>
          <button className="filter-tab">Busy 1</button>
        </div>
      </div>

      {/* Operator Cards Grid */}
      <div className="operators-grid">
        {operators.map((op, index) => (
          <div className="operator-card" key={index}>
            <div className="operator-header">
              <div className="operator-avatar">{op.initials}</div>
              <div className="operator-info">
                <h4 className="operator-name">{op.name}</h4>
                <span className={`status-badge ${op.status.toLowerCase()}`}>
                  {op.status}
                </span>
              </div>
            </div>
            
            <div className="operator-details">
              <div className="detail-row">
                <span className="detail-label">Experience</span>
                <span className="detail-value"><strong>{op.experience} years</strong></span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Specialisation</span>
                <span className="detail-value"><strong>{op.speciality}</strong></span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Rating</span>
                <span className="detail-value">★ {op.rating}</span>
              </div>
            </div>

            <div className="workload-section">
              <div className="workload-header">
                <span>Current Load</span>
              </div>
              <div className="progress-container">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${(op.tasksDone / op.totalTasks) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="progress-text">{op.tasksDone}/{op.totalTasks}</span>
              </div>
              <div className="filings-completed">
                {op.filings} completed filings
              </div>
            </div>

            <div className="operator-actions">
              <button className="view-btn">
                <span className="btn-icon">👁️</span>
                View Profile
              </button>
              <button className="edit-btn">
                <span className="btn-icon">✏️</span>
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Operators;
