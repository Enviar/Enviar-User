import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./parts/HomePage/Header";

const RenderApp = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

it("renders jumbotron link", () => {
  render(<RenderApp />);
  const linkElement = screen.getByText(/Deliver Your Goods/i);
  expect(linkElement).toBeInTheDocument();
});

it("renders jumbotron link", () => {
  render(<RenderApp />);
  const jumboBtn = screen.getByTestId("jumbo-btn");
  expect(jumboBtn).toBeInTheDocument();
});
