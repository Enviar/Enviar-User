import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const RenderApp = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

test("renders learn react link", () => {
  render(<RenderApp />);
  const linkElement = screen.getByText(/Deliver Your Goods/i);
  expect(linkElement).toBeInTheDocument();
});
