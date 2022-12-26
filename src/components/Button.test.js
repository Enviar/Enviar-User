/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Button from "./Button";

describe("Button component test", () => {
  it("should render button text", () => {
    render(
      <BrowserRouter>
        <Button btn_destination={"/"} btn_text="button test 1" />
      </BrowserRouter>
    );
    const text = screen.getByText("button test 1");
    expect(text).toBeInTheDocument();
  });

  it("should render button destination", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Button btn_destination="/navtest" btn_text="button test 1" />
      </BrowserRouter>
    );
    expect(getByTestId("btn-nav")).toHaveAttribute("href", "/navtest");
  });
});
