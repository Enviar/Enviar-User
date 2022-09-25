import React, { useState } from "react";
import axios from "axios";
import Header from "../parts/HomePage/Header";
import TrackPackage from "../parts/HomePage/TrackPackage";
import Footer from "../parts/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <TrackPackage />
      <Footer />
    </>
  );
}
