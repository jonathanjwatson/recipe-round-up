import React, { useEffect, useState } from "react";
import API from "../../API/API";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const ItemInventory: React.FC = () => {
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
        //TODO: Create story for back-end team to fix typo.
        console.log(response.data.itens);
        //TODO: Change colors to simple string. This will help with filter. Comma separate them.
        setItems(response.data.itens);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Item Inventory</h1>
      <ErrorBoundary>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">
                {/* TODO: Convert this to an input that filters state values. */}
                <input type="text" placeholder="Filter by color" />
              </th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i: number) => (
              <tr key={i}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.colors && <Colors colors={item.colors} />}</td>
                <td>{item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ErrorBoundary>
    </>
  );
};

const Colors: React.FC<{ colors: Array<string> }> = ({ colors }) => {
  return (
    <>
      {colors.map((color: string, i: number) => (
        <span key={i}>{color} </span>
      ))}
    </>
  );
};

export default ItemInventory;
