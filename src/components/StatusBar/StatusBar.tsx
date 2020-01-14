import React from "react";
import "./StatusBar.css";
import OrderStatusMap from "../../interfaces/OrderStatusMap.interface"

// interface OrderStatusMap{
//   pending: number;
//   cancelled: number;
//   inProgress: number;
//   fulfilled: number;
// }

const StatusBar: React.FC<OrderStatusMap> = ({cancelled, fulfilled, inProgress, pending}) => {
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
          <li className="nav-item">Cancelled: {cancelled}</li>
          <li className="nav-item">Pending: {pending}</li>
          <li className="nav-item">In Progress: {inProgress}</li>
          <li className="nav-item">Fulfilled: {fulfilled}</li>
        </ul>
      </div>
    </nav>
  );
};

export default StatusBar;
