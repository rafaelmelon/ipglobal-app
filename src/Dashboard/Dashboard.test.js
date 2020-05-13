import React from "react";
import { render } from "@testing-library/react";
import Dashboard from ".";

test("render title", () => {
  const { container, getByText } = render(<Dashboard />);
  expect(getByText("Film List")).toBeInTheDocument();
});
