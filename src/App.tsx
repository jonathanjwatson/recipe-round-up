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
  //TODO: Consider moving these out into Redux store.
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
      qty: "",
      colorString: ""
    }
  ]);

  const [itemHashMap, setItemHashMap] = useState({});

  useEffect(() => {
    getItems();
  }, []);

  /**
   * Takes in the recipe object, compares required items to items in stock.
   * If insufficient items in stock, alert the user.
   * Otherwise, makes API Call to back-end to create an order.
   * @param recipe
   */
  const createOrder = recipe => {
    for (let i = 0; i < recipe.items.length; i++) {
      //TODO: Create task for back-end team to update "quntity"
      if (itemHashMap[recipe.items[i].id] < recipe.items[i].quntity) {
        alert("Insufficient items in stock to make this recipe!");
        return;
      }
    }
    API.createOrder(recipe.number)
      .then(response => {
        alert("Order successfully created!");
        //TODO: Make API call to back-end to update items used in recipe
        // then, set that updated array on state.
        // for now . . .
        getItems();
      })
      .catch(err => {
        console.log(err);
      });
  };

  /**
   * Makes the API call to get items
   * converts the colors array into a more-easily-searchable string
   * sets items on state hook
   * generates the items hashmap for faster lookup later
   * sets items hashmap on state hook
   */
  const getItems = () => {
    API.getItems()
      .then(response => {
        //TODO: Create story for back-end team to fix typo "itens".
        let tempItems = response.data.itens.map(item => {
          if (Array.isArray(item.colors)) {
            let colorString = item.colors.join(", ");
            item.colorString = colorString;
          } else {
            item.colorString = "";
          }
          return item;
        });
        setItems(tempItems);
        let tempItemHashMap = {};
        for (let i = 0; i < response.data.itens.length; i++) {
          tempItemHashMap[response.data.itens[i].id] =
            response.data.itens[i].qty;
        }
        setItemHashMap(tempItemHashMap);
      })
      .catch(err => {
        console.log(err);
      });
  };

  /**
   * Takes in an array of order objects and generates the status hashmap, setting it on state hook.
   * @param orders
   */
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
            <NewRecipe createOrder={recipe => createOrder(recipe)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
