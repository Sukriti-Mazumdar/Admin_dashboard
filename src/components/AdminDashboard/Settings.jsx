/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Settings.css";

function Settings() {
  // Tab state
  const [activeTab, setActiveTab] = useState("notifications");

  // Notification Preferences state
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(true);

  // Tax Slabs State
  const [regime, setRegime] = useState("Old");
  const [taxSlabs, setTaxSlabs] = useState([
    { incomeRange: "0 - 2,50,000", taxRate: "0%", surcharge: "0%" },
    { incomeRange: "2,50,001 - 5,00,000", taxRate: "5%", surcharge: "0%" },
    { incomeRange: "5,00,001 - 10,00,000", taxRate: "20%", surcharge: "0%" },
    { incomeRange: "10,00,001+", taxRate: "30%", surcharge: "10%" },
  ]);

  // Admin Roles State
  const [superAdminEmail] = useState("superadmin@domytaxes.in");
  const [supportAdminEmailMain] = useState("support@domytaxes.in");
  const [adminEmail, setAdminEmail] = useState("");
  const [supportAdminEmail, setSupportAdminEmail] = useState("");
  const [adminList, setAdminList] = useState([
    { type: "Admin", email: "admin@domytaxes.in" },
    { type: "Support Admin", email: "support@domytaxes.in" },
  ]);

  // For adding a new admin
  const handleAddAdmin = () => {
    if (adminEmail.trim() !== "") {
      setAdminList([...adminList, { type: "Admin", email: adminEmail }]);
      setAdminEmail("");
    }
    if (supportAdminEmail.trim() !== "") {
      setAdminList([...adminList, { type: "Support Admin", email: supportAdminEmail }]);
      setSupportAdminEmail("");
    }
  };

  const handleSave = () => {
    alert("Settings saved!");
  };

  const handleDeleteSlab = (index) => {
    setTaxSlabs(taxSlabs.filter((_, i) => i !== index));
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <div>
          <h2>Admin Settings</h2>
          <p>Configure system preferences and settings</p>
        </div>
        <button className="save-btn" onClick={handleSave}>
          Save All Changes
        </button>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "notifications" ? "tab active" : "tab"}
          onClick={() => setActiveTab("notifications")}
        >
          Notifications
        </button>
        <button
          className={activeTab === "taxslabs" ? "tab active" : "tab"}
          onClick={() => setActiveTab("taxslabs")}
        >
          Tax Slabs
        </button>
        <button
          className={activeTab === "adminroles" ? "tab active" : "tab"}
          onClick={() => setActiveTab("adminroles")}
        >
          Admin Roles
        </button>
      </div>

      {/* Notifications Tab */}
      {activeTab === "notifications" && (
        <div className="card">
          <h3>Notification Preferences</h3>
          <div className="grid">
            <div className="preference">
              <div>
                <h4>Email Notifications</h4>
                <p>Receive notifications via email</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={emailNotifications}
                  onChange={() =>
                    setEmailNotifications(!emailNotifications)
                  }
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="preference">
              <div>
                <h4>SMS Notifications</h4>
                <p>Receive notifications via SMS</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={smsNotifications}
                  onChange={() =>
                    setSmsNotifications(!smsNotifications)
                  }
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="preference">
              <div>
                <h4>Push Notifications</h4>
                <p>Browser push notifications</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={pushNotifications}
                  onChange={() =>
                    setPushNotifications(!pushNotifications)
                  }
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="preference">
              <div>
                <h4>Weekly Reports</h4>
                <p>Receive weekly performance reports</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={weeklyReports}
                  onChange={() =>
                    setWeeklyReports(!weeklyReports)
                  }
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Tax Slabs Tab */}
      {activeTab === "taxslabs" && (
        <div className="card">
          <h3>Tax Slabs Configuration</h3>
          <div style={{ marginBottom: "14px" }}>
            <button
              className={regime === "Old" ? "toggle-btn active" : "toggle-btn"}
              onClick={() => setRegime("Old")}
            >
              Old Regime
            </button>
            <button
              className={regime === "New" ? "toggle-btn active" : "toggle-btn"}
              onClick={() => setRegime("New")}
              style={{ marginLeft: "5px" }}
            >
              New Regime
            </button>
          </div>
          <button className="add-btn">
            + Add Tax Slab
          </button>
          <table className="tax-table">
            <thead>
              <tr>
                <th>Income Range</th>
                <th>Tax Rate</th>
                <th>Surcharge</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {taxSlabs.map((slab, idx) => (
                <tr key={idx}>
                  <td>{slab.incomeRange}</td>
                  <td>
                    <a href="#">{slab.taxRate}</a>
                  </td>
                  <td>
                    <a href="#">{slab.surcharge}</a>
                  </td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteSlab(idx)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Admin Roles Tab */}
      {activeTab === "adminroles" && (
        <div className="card">
          <h3>Admin Role Management</h3>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "30px", marginBottom: "10px" }}>
            <div>
              <label>Super Admin Email</label>
              <input
                type="text"
                value={superAdminEmail}
                disabled
                style={{ width: "100%", marginBottom: "5px", background: "#ececec" }}
              />
              <div style={{ color: "#888", fontSize: "13px", marginBottom: "18px" }}>
                You do not have sufficient permission to change this
              </div>
            </div>
            <div>
              <label>Support Admin Email</label>
              <input
                type="text"
                value={supportAdminEmailMain}
                disabled
                style={{ width: "100%", marginBottom: "5px", background: "#ececec" }}
              />
              <div style={{ color: "#888", fontSize: "13px", marginBottom: "18px" }}>
                You do not have sufficient permission to change this
              </div>
            </div>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "30px", marginBottom: "20px" }}>
            <div>
              <label>Admin Email</label>
              <input
                type="text"
                value={adminEmail}
                onChange={e => setAdminEmail(e.target.value)}
                placeholder="admin@domytaxes.in"
                style={{ width: "100%", marginBottom: "5px" }}
              />
            </div>
            <div>
              <label>Support Admin Email</label>
              <input
                type="text"
                value={supportAdminEmail}
                onChange={e => setSupportAdminEmail(e.target.value)}
                placeholder="support@domytaxes.in"
                style={{ width: "100%", marginBottom: "5px" }}
              />
            </div>
          </div>
          <button className="add-btn" onClick={handleAddAdmin}>
            + Add Admin
          </button>
          {/* List of Admins */}
          <div style={{ marginTop: "28px" }}>
            {adminList.map((admin, idx) => (
              <div key={idx} style={{
                display: "flex",
                alignItems: "center",
                background: "#f8f9fb",
                borderRadius: "6px",
                padding: "10px 13px",
                marginBottom: "7px",
                width: "fit-content"
              }}>
                <span style={{
                  fontWeight: 500,
                  color: "#0b0b3b",
                  marginRight: "12px"
                }}>{admin.type}:</span>
                <span style={{ color: "#333" }}>{admin.email}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
