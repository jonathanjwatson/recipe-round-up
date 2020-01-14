import React, { useEffect, useState } from "react";
import "./App.css";
import API from "./API/API";
import StatusBar from "./components/StatusBar/StatusBar";
import ItemsInventory from "./components/ItemsInventory/ItemsInventory";
import PendingOrders from "./components/PendingOrders/PendingOrders";
import NewRecipe from "./components/NewRecipe/NewRecipe";
import OrderStatusMap from "./interfaces/OrderStatusMap.interface";
import Order from "./interfaces/Order.interface";

const App: React.FC = () => {
  const [orderStatusMap, setOrderStatusMap] = useState<OrderStatusMap>({
    pending: null,
    cancelled: null,
    inProgress: null,
    fulfilled: null
  });
  const [items, setItems] = useState([
    {
      name: "",
      id: "",
      colors: [],
      qty: ""
    }
  ]);

  useEffect(() => {
    API.getItems()
      .then(response => {
        console.log(response.data.itens);
        //TODO: Create story for back-end team to fix typo.
        //TODO: Change colors to simple string. This will help with filter. Comma separate them.
        setItems(response.data.itens);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const getOrderStatusMap = (orders: [Order]) => {
    let tempOrderStatusMap = {
      cancelled: 0,
      pending: 0,
      inProgress: 0,
      fulfilled: 0
    };
    for (let i = 0; i < orders.length; i++) {
      let currentOrder = orders[i];
      if (currentOrder.pending) {
        tempOrderStatusMap.pending++;
      } else if (currentOrder.cancelled) {
        tempOrderStatusMap.cancelled++;
      } else if (currentOrder.inProgress) {
        tempOrderStatusMap.inProgress++;
      } else if (currentOrder.fulfilled) {
        tempOrderStatusMap.fulfilled++;
      }
      setOrderStatusMap(tempOrderStatusMap);
    }
  };

  return (
    <>
      <StatusBar {...orderStatusMap} />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <PendingOrders
              getOrderStatusMap={orders => getOrderStatusMap(orders)}
            />
          </div>
          <div className="col-md-6">
            <ItemsInventory items={items} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <NewRecipe />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
