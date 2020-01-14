import React from "react";
import { render, cleanup } from '@testing-library/react';
import PendingOrders from "./PendingOrders";

afterEach(cleanup);

const getOrderStatusMap = jest.fn();

it("renders", () => {
  const { asFragment } = render(<PendingOrders getOrderStatusMap={() => getOrderStatusMap}/>);
  expect(asFragment()).toMatchSnapshot();
});
