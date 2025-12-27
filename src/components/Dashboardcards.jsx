import React from "react";

export default function Dashboardcards() {
  return (
    <div className="cards">
      <div className="card">
        <h3>Total Logs</h3>
        <p>124</p>
      </div>
      <div className="card">
        <h3>Suspicious Events</h3>
        <p>12</p>
      </div>
      <div className="card">
        <h3>High Severity</h3>
        <p>5</p>
      </div>
    </div>
  );
}
