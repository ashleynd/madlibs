import React from "react";
import { render } from "@testing-library/react";
import Madlib from "./Madlib";

it("renders without crashing", function() {
  render(<Madlib />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Madlib />);
  expect(asFragment()).toMatchSnapshot();
});