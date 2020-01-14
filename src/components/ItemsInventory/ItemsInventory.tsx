import React, { useEffect, useState } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Item from "../../interfaces/Item.interface";

interface ItemProps {
  items: Array<Item>;
}

const ItemInventory: React.FC<ItemProps> = (props: ItemProps) => {
  const { items } = props;

  const [filteredItems, setFilteredItems] = useState(props.items);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  /**
   * Takes in search criteria from the input box and filters the passed items array.
   * @param searchCriteria
   */
  const filterItemColors = (searchCriteria: string) => {
    //TODO: Add debouncing for faster performance
    const filteredArray = items.filter(item => {
      const regex = new RegExp(searchCriteria, "gi");
      return item.colorString.match(regex);
    });
    setFilteredItems(filteredArray);
  };

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
                <input
                  type="text"
                  placeholder="Filter by color"
                  onChange={e => {
                    filterItemColors(e.target.value);
                  }}
                />
              </th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item, i: number) => (
              <tr key={i}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.colorString}</td>
                <td>{item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ErrorBoundary>
    </>
  );
};

export default ItemInventory;
