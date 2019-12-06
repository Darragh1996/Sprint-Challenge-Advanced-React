import React from "react";
// import { render } from '@testing-library/react';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders an element with specific text", () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.queryByText(/hello/i);
  expect(element).toBeInTheDocument();
});
