import React, { useState, useMemo } from "react";
import "./AllFilings.css";

const TABS = [
  { key: "all", label: "All" },
  { key: "waiting", label: "Waiting for Operator" },
  { key: "assigned", label: "Assigned" },
  { key: "inprogress", label: "In progress" },
  { key: "completed", label: "Completed" },
];

const filingsData = [
  {
    client: "Arpita Bagchi",
    email: "arpita@email.com",
    filingYear: "2023-24",
    itr: "ITR 1",
    status: "assigned",
    progress: 10,
  },
  {
    client: "Rahul Kumar",
    email: "rahul@email.com",
    filingYear: "2023-24",
    itr: "ITR 3",
    status: "waiting",
    progress: 0,
  },
  {
    client: "Vikram Singh",
    email: "vikram@email.com",
    filingYear: "2023-24",
    itr: "ITR 2",
    status: "waiting",
    progress: 0,
  },
  {
    client: "Sneha Reddy",
    email: "sneha@email.com",
    filingYear: "2023-24",
    itr: "ITR 2",
    status: "completed",
    progress: 100,
  },
  {
    client: "Kavya Iyer",
    email: "kavya@email.com",
    filingYear: "2023-24",
    itr: "ITR 2",
    status: "inprogress",
    progress: 67,
  },
  {
    client: "Amit Patel",
    email: "amit@email.com",
    filingYear: "2023-24",
    itr: "ITR 1",
    status: "inprogress",
    progress: 50,
  },
];

function AllFilings() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter filings based on active tab and search term
  const filteredFilings = useMemo(() => {
    let filtered = filingsData;

    if (activeTab !== "all") {
      filtered = filtered.filter((f) => f.status === activeTab);
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((f) =>
        f.client.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [activeTab, searchTerm]);

  // Pagination logic
  const totalPages = Math.ceil(filteredFilings.length / itemsPerPage);
  const paginatedFilings = filteredFilings.slice(
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

  return (
    <div className="all-filings">
      <div className="header">
        <h2>All Filings</h2>
        <p className="subtitle">
          Manage all customer filing requests and their status
        </p>
        <button className="export-btn">Export Data</button>
      </div>

      <div className="tabs">
        {TABS.map(({ key, label }) => (
          <button
            key={key}
            className={`tab ${activeTab === key ? "active" : ""}`}
            onClick={() => handleTabClick(key)}
          >
            {label} <span className="count">{tabCounts[key] || 0}</span>
          </button>
        ))}
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by client name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <table className="filings-table">
        <thead>
          <tr>
            <th>Document name</th>
            <th>Filing Year</th>
            <th>ITR</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedFilings.length === 0 ? (
            <tr>
              <td colSpan="6" className="no-data">
                No filings found.
              </td>
            </tr>
          ) : (
            paginatedFilings.map((f, i) => (
              <tr key={i}>
                <td>
                  <strong>{f.client}</strong>
                  <br />
                  <span className="email">{f.email}</span>
                </td>
                <td>{f.filingYear}</td>
                <td>
                  <span className="itr-badge">{f.itr}</span>
                </td>
                <td>
                  <span className={`status-badge ${f.status}`}>
                    {f.status === "waiting"
                      ? "Waiting for Operator"
                      : f.status.charAt(0).toUpperCase() + f.status.slice(1)}
                  </span>
                </td>
                <td>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${f.progress}%` }}
                    ></div>
                    <span className="progress-percent">{f.progress}%</span>
                  </div>
                </td>
                <td>
                  <button className="view-btn">View Workspace</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`page-btn ${currentPage === page ? "active" : ""}`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AllFilings;
