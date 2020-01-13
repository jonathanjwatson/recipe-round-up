import React from "react";
import { render, cleanup } from '@testing-library/react';
import StatusBar from "./StatusBar";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<StatusBar />);
  expect(asFragment()).toMatchSnapshot();
});
