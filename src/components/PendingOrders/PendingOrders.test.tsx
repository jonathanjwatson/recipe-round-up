import React from "react";
import { render, cleanup } from '@testing-library/react';
import PendingOrders from "./PendingOrders";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<PendingOrders />);
  expect(asFragment()).toMatchSnapshot();
});
