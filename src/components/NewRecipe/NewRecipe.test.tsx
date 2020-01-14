import React from "react";
import { render, cleanup } from '@testing-library/react';
import NewRecipe from "./NewRecipe";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<NewRecipe />);
  expect(asFragment()).toMatchSnapshot();
});
