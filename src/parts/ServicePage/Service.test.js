/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Service from "./Service";

describe("Service Component Test", () => {
  it("should render service component", () => {
    const service = render(
      <BrowserRouter>
        <Service />
      </BrowserRouter>
    );
    expect(service).toBeDefined();
  });

  it("should render service type component 1", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Service />
      </BrowserRouter>
    );
    expect(getByText("Aldo")).toBeInTheDocument();
  });

  it("should render service type component 2", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Service />
      </BrowserRouter>
    );
    expect(getByText("Estupendo")).toBeInTheDocument();
  });

  it("should render service type component 3", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Service />
      </BrowserRouter>
    );
    expect(getByText("Medio")).toBeInTheDocument();
  });

  it("should render service image component with certain classname", () => {
    const { getAllByTestId } = render(
      <BrowserRouter>
        <Service />
      </BrowserRouter>
    );
    expect(getAllByTestId("service-img")[0]).toHaveClass("rounded-img");
  });
});
