/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar component test", () => {
  it("should render navbar component", () => {
    const navbar = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(navbar).toBeDefined();
  });

  it("should check navbar active classname", () => {
    const { getAllByTestId } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(getAllByTestId("nav-link")[0]).toHaveClass("active");
  });

  it("should check navbar inactive classname", () => {
    const { getAllByTestId } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(getAllByTestId("nav-link")[1]).not.toHaveClass("active");
  });
});
