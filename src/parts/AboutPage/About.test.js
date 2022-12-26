/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import About from "./About";

describe("About Component Test", () => {
  it("should render about component", () => {
    const about = render(<About />);
    expect(about).toBeDefined();
  });

  it("should render about title page", () => {
    const { getByText } = render(<About />);
    expect(getByText("Our Journey")).toBeInTheDocument();
  });
});
