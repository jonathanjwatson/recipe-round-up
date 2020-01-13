import React from "react";
import { render, cleanup } from '@testing-library/react';
import ItemsInventory from "./ItemsInventory";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<ItemsInventory />);
  expect(asFragment()).toMatchSnapshot();
});
