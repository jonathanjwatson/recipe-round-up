import React from 'react';
import './App.css';
import ItemsInventory from "./components/ItemsInventory/ItemsInventory";
import PendingOrders from "./components/PendingOrders/PendingOrders";

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>top bar</h1>
      <div className="row">
        <div className="col-sm-8">
          <PendingOrders/>
        </div>
        <div className="col-sm-4">
          <ItemsInventory/>
        </div>
      </div>
    </div>
  );
}

export default App;
