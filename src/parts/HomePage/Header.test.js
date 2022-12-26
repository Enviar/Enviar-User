/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Header Component Test", () => {
  it("should render header component", () => {
    const header = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(header).toBeDefined();
  });

  it("should render header title component", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(
      getByText("Deliver Your Goods. With No Worries.")
    ).toBeInTheDocument();
  });
});
