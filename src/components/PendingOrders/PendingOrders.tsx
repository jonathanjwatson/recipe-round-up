import React, { useEffect, useState } from "react";
import API from "../../API/API";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

interface Props {
  getOrderStatusMap: (orders) => void;
}

const PendingOrders: React.FC<Props> = ({ getOrderStatusMap }) => {
  const [orders, setOrders] = useState([
    {
      pending: null,
      recipe: null,
      totalTimesMade: null
    }
  ]);

  useEffect(() => {
    API.getOrders()
      .then(response => {
        const orderArrayWithTotals = calculateTotalRecipeUsage(
          response.data.orders
        );
        setOrders(orderArrayWithTotals);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getOrderStatusMap(orders);
  }, [orders]);

  const calculateTotalRecipeUsage = orders => {
    const ordersClone = [...orders];
    let recipeMap = {};
    for (let i = 0; i < orders.length; i++) {
      if (recipeMap[orders[i].recipe]) {
        recipeMap[orders[i].recipe]++;
      } else {
        recipeMap[orders[i].recipe] = 1;
      }
    }
    for (let i = 0; i < orders.length; i++) {
      ordersClone[i].totalTimesMade = recipeMap[ordersClone[i].recipe];
    }
    return ordersClone;
  };

  return (
    <>
      <h1>Pending Orders</h1>
      <ErrorBoundary>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Order Index</th>
              <th scope="col">Recipe Number</th>
              <th scope="col">Status</th>
              <th scope="col">Total Times Made</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i: number) => (
              <tr key={i}>
                <th scope="row">{order.recipe && i}</th>
                <td>{order.recipe}</td>
                {order.pending && <td>Pending</td>}
                <td>{order.totalTimesMade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ErrorBoundary>
    </>
  );
};

export default PendingOrders;
