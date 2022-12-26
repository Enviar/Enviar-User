/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Price from "./Price";

describe("Price Component Test", () => {
  it("should render price component", () => {
    const price = render(
      <BrowserRouter>
        <Price />
      </BrowserRouter>
    );
    expect(price).toBeDefined();
  });

  it("should render price text component", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Price />
      </BrowserRouter>
    );
    expect(getByText("Calculate Your Shipment")).toBeInTheDocument();
  });

  it("should render price select component", () => {
    const price = render(
      <BrowserRouter>
        <Price />
      </BrowserRouter>
    );
    const select = screen.getByTestId("origin-list");
    fireEvent.click(select);
    expect(select).toBeDefined();
  });

  it("should render price recipient text component", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Price />
      </BrowserRouter>
    );
    expect(getByTestId("recipient-text")).toBeInTheDocument();
  });
});
