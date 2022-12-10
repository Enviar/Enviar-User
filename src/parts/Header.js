import React from "react";

export default function Header({ currentPage }) {
  return (
    <div className="flex justify-between bg-white h-header px-28 pt-14">
      <div className="block text-dark-grey text-left">
        <h1 className="font-semibold text-6xl pt-11">
          {currentPage === "services"
            ? "Our Services"
            : currentPage === "about"
            ? "About Us"
            : "Prices"}
        </h1>
        <p className="text-2xl font-medium">
          {currentPage === "services"
            ? "Any kinds of services for any types of packages"
            : currentPage === "about"
            ? "Everything you need to know about Enviar Us"
            : "How much it cost to use our products & services"}
        </p>
      </div>
      <img
        alt=""
        src={
          currentPage === "services"
            ? "/images/ontheway.svg"
            : currentPage === "about"
            ? "/images/engineering.svg"
            : "/images/office.svg"
        }
      />
    </div>
  );
}
