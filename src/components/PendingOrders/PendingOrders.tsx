import React, { useEffect, useState } from "react";
import API from "../../API/API";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const PendingOrders: React.FC = () => {
  const [orders, setOrders] = useState([
    {
      pending: null,
      recipe: null
    }
  ]);

  useEffect(() => {
    API.getOrders()
      .then(response => {
        setOrders(response.data.orders);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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
                <th scope="row">{order.recipe}</th>
                {order.pending && <td>Pending</td>}
                {order.recipe && <td>100</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </ErrorBoundary>
    </>
  );
};

export default PendingOrders;
