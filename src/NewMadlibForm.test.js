import React from "react";
import { render } from "@testing-library/react";
import NewMadLibForm from "./NewMadLibForm";

it("renders without crashing", function() {
  render(<NewMadLibForm />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<NewMadLibForm />);
  expect(asFragment()).toMatchSnapshot();
});