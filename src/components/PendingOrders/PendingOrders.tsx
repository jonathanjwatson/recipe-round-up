import React, { useEffect, useState } from "react";
import API from "../../API/API";

const PendingOrders: React.FC = () => {
  const [orders, setOrders] = useState([
    {
      pending: false,
      recipe: 0
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
    <div>
      <h1>Pending Orders</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Order Index</th>
            <th scope="col">Recipe Number</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i: number) => (
            <tr key={i}>
              <th scope="row">{i}</th>
              <th scope="row">{order.recipe}</th>
              {order.pending && <td>Pending</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingOrders;
