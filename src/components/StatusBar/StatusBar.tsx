import React from "react";
import "./StatusBar.css";

const StatusBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1 className="site-title">Recipe Round Up</h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">Cancelled: 0</li>
          <li className="nav-item">Pending: 0</li>
          <li className="nav-item">In Progress: 0</li>
          <li className="nav-item">Fulfilled: 0</li>
        </ul>
      </div>
    </nav>
  );
};

export default StatusBar;
