/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Header from "./Header";

describe("Header component test", () => {
  it("should render header component", () => {
    const header = render(<Header />);
    expect(header).toBeDefined();
  });

  it("should render services page", () => {
    render(<Header currentPage="services" />);
    const title = screen.getByTestId("header-title");
    expect(title.innerHTML).toBe("Our Services");
  });

  it("should render services page", () => {
    render(<Header currentPage="about" />);
    const title = screen.getByTestId("header-title");
    expect(title.innerHTML).toBe("About Us");
  });

  it("should render prices page", () => {
    render(<Header currentPage="" />);
    const title = screen.getByTestId("header-title");
    expect(title.innerHTML).toBe("Prices");
  });

  it("should render prices page", () => {
    render(<Header currentPage="services" />);
    const title = screen.getByTestId("header-desc");
    expect(title.innerHTML).toBe(
      "Any kinds of services for any types of packages"
    );
  });
});
