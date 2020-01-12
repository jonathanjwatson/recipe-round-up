import React, { useEffect, useState } from "react";
import API from "../../API/API";

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
        console.log(response.data.itens);
        setItems(response.data.itens);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Item Inventory</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">
              <select className="custom-select" id="inputGroupSelect01">
                <option selected>Color(s)</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
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
    </div>
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
