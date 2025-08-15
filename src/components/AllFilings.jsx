import React, { useState, useMemo } from "react";
import "./AllFilings.css";

const TABS = [
  { key: "all", label: "All", icon: "📋" },
  { key: "waiting", label: "Waiting for Operator", icon: "⏳" },
  { key: "assigned", label: "Assigned", icon: "👤" },
  { key: "inprogress", label: "In Progress", icon: "🔄" },
  { key: "completed", label: "Completed", icon: "✅" },
];

const filingsData = [
  {
    id: 1,
    client: "Arpita Bagchi",
    email: "arpita.bagchi@email.com",
    phone: "+91 98765 43210",
    filingYear: "2023-24",
    itr: "ITR 1",
    status: "assigned",
    progress: 25,
    operator: "Rahul Sharma",
    priority: "High",
    lastUpdated: "2 hours ago",
    amount: "₹1,499"
  },
  {
    id: 2,
    client: "Rahul Kumar",
    email: "rahul.kumar@email.com",
    phone: "+91 87654 32109",
    filingYear: "2023-24",
    itr: "ITR 3",
    status: "waiting",
    progress: 0,
    operator: null,
    priority: "Medium",
    lastUpdated: "1 day ago",
    amount: "₹2,999"
  },
  {
    id: 3,
    client: "Vikram Singh",
    email: "vikram.singh@email.com",
    phone: "+91 76543 21098",
    filingYear: "2023-24",
    itr: "ITR 2",
    status: "waiting",
    progress: 0,
    operator: null,
    priority: "Low",
    lastUpdated: "3 days ago",
    amount: "₹1,999"
  },
  {
    id: 4,
    client: "Sneha Reddy",
    email: "sneha.reddy@email.com",
    phone: "+91 65432 10987",
    filingYear: "2023-24",
    itr: "ITR 2",
    status: "completed",
    progress: 100,
    operator: "Priya Patel",
    priority: "Medium",
    lastUpdated: "1 week ago",
    amount: "₹1,999"
  },
  {
    id: 5,
    client: "Kavya Iyer",
    email: "kavya.iyer@email.com",
    phone: "+91 54321 09876",
    filingYear: "2023-24",
    itr: "ITR 2",
    status: "inprogress",
    progress: 67,
    operator: "Amit Kumar",
    priority: "High",
    lastUpdated: "4 hours ago",
    amount: "₹1,999"
  },
  {
    id: 6,
    client: "Amit Patel",
    email: "amit.patel@email.com",
    phone: "+91 43210 98765",
    filingYear: "2023-24",
    itr: "ITR 1",
    status: "inprogress",
    progress: 50,
    operator: "Neha Singh",
    priority: "Medium",
    lastUpdated: "6 hours ago",
    amount: "₹1,499"
  },
  {
    id: 7,
    client: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 32109 87654",
    filingYear: "2023-24",
    itr: "ITR 4",
    status: "assigned",
    progress: 15,
    operator: "Rajesh Kumar",
    priority: "High",
    lastUpdated: "1 hour ago",
    amount: "₹3,999"
  },
  {
    id: 8,
    client: "Rajesh Verma",
    email: "rajesh.verma@email.com",
    phone: "+91 21098 76543",
    filingYear: "2023-24",
    itr: "ITR 1",
    status: "waiting",
    progress: 0,
    operator: null,
    priority: "Low",
    lastUpdated: "2 days ago",
    amount: "₹1,499"
  }
];

function AllFilings() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("client");
  const [sortOrder, setSortOrder] = useState("asc");
  const itemsPerPage = 6;

  // Filter and sort filings
  const filteredAndSortedFilings = useMemo(() => {
    let filtered = filingsData;

    if (activeTab !== "all") {
      filtered = filtered.filter((f) => f.status === activeTab);
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((f) =>
        f.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.phone.includes(searchTerm)
      );
    }

    // Sorting
    filtered.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      if (sortBy === "priority") {
        const priorityOrder = { "High": 3, "Medium": 2, "Low": 1 };
        aValue = priorityOrder[aValue];
        bValue = priorityOrder[bValue];
      }
      
      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [activeTab, searchTerm, sortBy, sortOrder]);

  // Pagination logic
  const totalPages = Math.ceil(filteredAndSortedFilings.length / itemsPerPage);
  const paginatedFilings = filteredAndSortedFilings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Count for each tab
  const tabCounts = useMemo(() => {
    const counts = { all: filingsData.length };
    TABS.forEach(({ key }) => {
      if (key !== "all") {
        counts[key] = filingsData.filter((f) => f.status === key).length;
      }
    });
    return counts;
  }, []);

  const handleTabClick = (key) => {
    setActiveTab(key);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High": return "#ef4444";
      case "Medium": return "#f59e0b";
      case "Low": return "#10b981";
      default: return "#6b7280";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "waiting": return "⏳";
      case "assigned": return "👤";
      case "inprogress": return "🔄";
      case "completed": return "✅";
      default: return "📋";
    }
  };

  return (
    <div className="all-filings">
      <div className="header">
        <div className="header-content">
          <h2>All Filings</h2>
          <p className="subtitle">
            Manage all customer filing requests and track their progress
          </p>
        </div>
        <div className="header-actions">
          <button className="filter-btn">
            <span>🔍</span> Filters
          </button>
          <button className="export-btn">
            <span>📊</span> Export Data
          </button>
        </div>
      </div>

      <div className="stats-cards">
        <div className="stat-card">
          <div className="stat-icon">📋</div>
          <div className="stat-info">
            <h3>Total Filings</h3>
            <p>{filingsData.length}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏳</div>
          <div className="stat-info">
            <h3>Waiting</h3>
            <p>{tabCounts.waiting || 0}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🔄</div>
          <div className="stat-info">
            <h3>In Progress</h3>
            <p>{tabCounts.inprogress || 0}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-info">
            <h3>Completed</h3>
            <p>{tabCounts.completed || 0}</p>
          </div>
        </div>
      </div>

      <div className="tabs">
        {TABS.map(({ key, label, icon }) => (
          <button
            key={key}
            className={`tab ${activeTab === key ? "active" : ""}`}
            onClick={() => handleTabClick(key)}
          >
            <span className="tab-icon">{icon}</span>
            {label} <span className="count">{tabCounts[key] || 0}</span>
          </button>
        ))}
      </div>

      <div className="search-container">
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by client name, email, or phone..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
        <div className="search-stats">
          Showing {paginatedFilings.length} of {filteredAndSortedFilings.length} results
        </div>
      </div>

      <div className="table-container">
        <table className="filings-table">
          <thead>
            <tr>
              <th onClick={() => handleSort("client")} className="sortable">
                Client Details {sortBy === "client" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th onClick={() => handleSort("filingYear")} className="sortable">
                Filing Year {sortBy === "filingYear" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th onClick={() => handleSort("itr")} className="sortable">
                ITR Type {sortBy === "itr" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th onClick={() => handleSort("status")} className="sortable">
                Status {sortBy === "status" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th onClick={() => handleSort("priority")} className="sortable">
                Priority {sortBy === "priority" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th>Progress</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedFilings.length === 0 ? (
              <tr>
                <td colSpan="8" className="no-data">
                  <div className="no-data-content">
                    <span className="no-data-icon">📭</span>
                    <p>No filings found matching your criteria.</p>
                    <small>Try adjusting your search or filter options.</small>
                  </div>
                </td>
              </tr>
            ) : (
              paginatedFilings.map((f) => (
                <tr key={f.id} className="filing-row">
                  <td className="client-cell">
                    <div className="client-info">
                      <div className="client-avatar">
                        {f.client.charAt(0).toUpperCase()}
                      </div>
                      <div className="client-details">
                        <strong>{f.client}</strong>
                        <span className="email">{f.email}</span>
                        <span className="phone">{f.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="year-badge">{f.filingYear}</span>
                  </td>
                  <td>
                    <span className="itr-badge">{f.itr}</span>
                  </td>
                  <td>
                    <div className="status-container">
                      <span className={`status-badge ${f.status}`}>
                        {getStatusIcon(f.status)} {f.status === "waiting" ? "Waiting" : f.status.charAt(0).toUpperCase() + f.status.slice(1)}
                      </span>
                      {f.operator && (
                        <small className="operator-info">Assigned to {f.operator}</small>
                      )}
                    </div>
                  </td>
                  <td>
                    <span 
                      className="priority-badge" 
                      style={{ backgroundColor: getPriorityColor(f.priority) }}
                    >
                      {f.priority}
                    </span>
                  </td>
                  <td>
                    <div className="progress-section">
                      <div className="progress-bar-container">
                        <div
                          className="progress-bar"
                          style={{ width: `${f.progress}%` }}
                        ></div>
                      </div>
                      <span className="progress-percent">{f.progress}%</span>
                      <small className="last-updated">{f.lastUpdated}</small>
                    </div>
                  </td>
                  <td>
                    <span className="amount-badge">{f.amount}</span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="view-btn" title="View Details">
                        👁️ View
                      </button>
                      <button className="edit-btn" title="Edit Filing">
                        ✏️ Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className="page-btn" 
            onClick={() => handlePageClick(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            ← Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`page-btn ${currentPage === page ? "active" : ""}`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          ))}
          
          <button 
            className="page-btn" 
            onClick={() => handlePageClick(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

export default AllFilings;
