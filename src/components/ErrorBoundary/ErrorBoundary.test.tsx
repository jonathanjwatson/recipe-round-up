import React from "react";
import { render } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";


afterEach(() => {
  jest.clearAllMocks();
});

//TODO: Add type checking here.

function Bomb({ shouldThrow }) {
  if (shouldThrow) {
    throw new Error("💣");
  } else {
    return null;
  }
}

test("calls reportError and renders that there was a problem", () => {
  const { rerender } = render(
    <ErrorBoundary>
      <Bomb shouldThrow={false}/>
    </ErrorBoundary>
  );

  rerender(
    <ErrorBoundary>
      <Bomb shouldThrow={true} />
    </ErrorBoundary>
  );

  const error = expect.any(Error);
  const info = { componentStack: expect.stringContaining("Bomb") };

});

// this is only here to make the error output not appear in the project's output
// even though in the course we don't include this bit and leave it in it's incomplete state.
beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});
