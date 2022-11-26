import React from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Navbar from "../parts/Navbar";
import Service from "../parts/ServicePage/Service";

export default function ServicePage() {
  return (
    <>
      <Navbar />
      <Header currentPage="services" />
      <Service />
      <Footer />
    </>
  );
}
