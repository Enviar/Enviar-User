/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import TrackPackage from "./TrackPackage";

describe("Track component test", () => {
  it("should render track component", () => {
    const track = render(<TrackPackage />);
    expect(track).toBeDefined();
  });

  it("should render track component", () => {
    const { getByTestId } = render(<TrackPackage />);
    expect(getByTestId("track-title")).toBeInTheDocument();
  });
});
