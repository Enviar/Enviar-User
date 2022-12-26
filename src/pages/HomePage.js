import React from "react";
import Footer from "../parts/Footer";
import Header from "../parts/HomePage/Header";
import TrackPackage from "../parts/HomePage/TrackPackage";

export default function HomePage() {
  return (
    <>
      <Header data-testid="header-page" />
      <TrackPackage />
      <Footer />
    </>
  );
}
