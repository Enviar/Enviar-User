import React from "react";
import Button from "../../components/Button";
import Navbar from "../Navbar";

export default function Header() {
  return (
    <>
      <Navbar />
      <div className="jumbotron bg-auto bg-center">
        <div className="jumbotron-content text-left px-24 pt-44">
          <h1 className="header-text text-6xl text-white font-semibold">
            Deliver Your <br /> Goods. <br /> With No Worries.
          </h1>
          <div className="pt-7">
            <Button btn_text="Check Our Prices" />
          </div>
        </div>
      </div>
    </>
  );
}
