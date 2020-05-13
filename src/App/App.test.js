import React from "react";
import { render } from "@testing-library/react";
import App from ".";

test("render APP welcome", () => {
  const { container, getByText } = render(<App />);
  expect(getByText("IP Global APP")).toBeInTheDocument();
});
