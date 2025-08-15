import React, { useState } from "react";
import "./Settings.css";

function Settings() {
  const [activeTab, setActiveTab] = useState("notifications");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(true);

  const handleSave = () => {
    alert("Settings saved!");
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
                  onChange={() => setEmailNotifications(!emailNotifications)}
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
                  onChange={() => setSmsNotifications(!smsNotifications)}
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
                  onChange={() => setPushNotifications(!pushNotifications)}
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
                  onChange={() => setWeeklyReports(!weeklyReports)}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
