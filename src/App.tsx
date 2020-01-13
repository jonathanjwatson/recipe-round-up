import React, { useEffect, useState } from "react";
import "./App.css";
import API from "./API/API";
import StatusBar from "./components/StatusBar/StatusBar";
import ItemsInventory from "./components/ItemsInventory/ItemsInventory";
import PendingOrders from "./components/PendingOrders/PendingOrders";
import NewRecipe from "./components/NewRecipe/NewRecipe";

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
        let recipeMap = {};
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
          //TODO: Add typing to this.
          // if(recipeMap[currentOrder.recipe){
          //   recipeMap[currentOrder.recipe]++
          // }else{
          //   recipeMap[currentOrder.recipe] = 1;
          // }
        }
        //TODO: Loop back through orders again and add total number of times a recipe is called to the object.
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
          <div className="col-md-6">
            <PendingOrders />
          </div>
          <div className="col-md-6">
            <ItemsInventory />
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
