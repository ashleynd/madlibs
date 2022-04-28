import React from "react";
import { render } from "@testing-library/react";
import Madliblist from "./Madliblist";

it("renders without crashing", function() {
  render(<Madliblist />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Madliblist />);
  expect(asFragment()).toMatchSnapshot();
});