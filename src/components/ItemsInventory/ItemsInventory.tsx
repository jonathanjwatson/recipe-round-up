import React from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Item from "../../interfaces/Item.interface";

interface ItemProps {
  items: Array<Item>
}

const ItemInventory: React.FC<ItemProps> = (props: ItemProps) => {

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
            {props.items.map((item, i: number) => (
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
