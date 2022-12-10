import React from "react";
import axios from "axios";
import DatalistInput from "react-datalist-input";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function About() {
  return (
    <div className="px-28 py-24 flex justify-between">
      <div className="w-[500px]">
        <h1 className="font-bold text-5xl">Our Journey</h1>
        <p className="mt-10 text-xl font-medium">
          Gathered together in one rented house where we have a vision that can
          make a tool that can advance an UMKM, which consists of Ardi members
          as the project manager team, Ravi as Devlead, and Zaidan as frontend
          team. Being part of the Enviar team is a matter of pride in being able
          to help a lot of people and being able to create a program that works
          according to a desired target and can deliver on what we have created.
        </p>
      </div>
      <div className="w-2/5">
        <img
          className="mx-auto"
          src="./images/dall-e.png"
          alt="founder of Enviar"
          width={388}
        />
        <img
          className="mt-16"
          src="./images/ship.png"
          alt="shipping"
          width={600}
        />
      </div>
    </div>
  );
}
