/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

describe("Footer Component Test", () => {
  it("should render footer component", () => {
    const footer = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(footer).toBeDefined();
  });

  it("should render Footer text component", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(getByText(/All Rights Reserved/i)).toBeInTheDocument();
  });

  it("should render Footer email link component", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const email = screen.getByTestId("email-link");
    expect(email).toHaveAttribute("href", "/");
  });

  it("should render Footer address link component", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const address = screen.getByTestId("address-link");
    expect(address).toHaveAttribute("href", "/");
  });
});
