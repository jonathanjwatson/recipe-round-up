import React, { useEffect, useState } from "react";
import "./App.css";
import API from "./API/API";
import StatusBar from "./components/StatusBar/StatusBar";
import ItemsInventory from "./components/ItemsInventory/ItemsInventory";
import PendingOrders from "./components/PendingOrders/PendingOrders";

const App: React.FC = () => {
  const [orders, setOrders] = useState([
    {
      pending: false,
      cancelled: false,
      inProgress: false,
      fulfilled: false,
      recipe: 0
    }
  ]);
  const [orderStatusMap, setOrderStatusMap] = useState({
    pending: 0,
    cancelled: 0,
    inProgress: 0,
    fulfilled: 0
  });

  useEffect(() => {
    API.getOrders()
      .then(response => {
        setOrders(response.data.orders);
        let tempOrderStatusMap = {
          cancelled: 0,
          pending: 0,
          inProgress: 0,
          fulfilled: 0
        };
        for (let i = 0; i < orders.length; i++) {
          if (orders[i].pending) {
            tempOrderStatusMap.pending++;
          } else if (orders[i].cancelled) {
            tempOrderStatusMap.cancelled++;
          } else if (orders[i].inProgress) {
            tempOrderStatusMap.inProgress++;
          } else if (orders[i].fulfilled) {
            tempOrderStatusMap.fulfilled++;
          }
        }
        setOrderStatusMap(tempOrderStatusMap);
      })
      .catch(err => {
        console.log(err);
      });
  }, [orders]);

  return (
    <>
      <StatusBar />
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <PendingOrders />
          </div>
          <div className="col-sm-8">
            <ItemsInventory />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
