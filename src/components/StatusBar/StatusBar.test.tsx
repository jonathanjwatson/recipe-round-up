import React from "react";
import { render, cleanup } from '@testing-library/react';
import StatusBar from "./StatusBar";

afterEach(cleanup);

const orderStatusMap = {
  pending: 1,
  cancelled: 1, 
  fulfilled: 1,
  inProgress: 1
}

it("renders", () => {
  const { asFragment } = render(<StatusBar {...orderStatusMap}/>);
  expect(asFragment()).toMatchSnapshot();
});
