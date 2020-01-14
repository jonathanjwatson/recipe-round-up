import React from "react";
import { render, cleanup } from '@testing-library/react';
import ItemsInventory from "./ItemsInventory";

afterEach(cleanup);

const items=[];

it("renders", () => {
  const { asFragment } = render(<ItemsInventory items={items}/>);
  expect(asFragment()).toMatchSnapshot();
});
