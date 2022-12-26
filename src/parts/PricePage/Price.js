import React from "react";
import axios from "axios";
import DatalistInput from "react-datalist-input";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function Price() {
  const [city, setCity] = useState([]);
  const [origin, setOrigin] = useState(0);
  const [destination, setDestination] = useState(0);
  const [weight, setWeight] = useState(0);
  const [output, setOutput] = useState(0);
  const [exist, isExist] = useState("render");
  // const
  const getCity = async () => {
    try {
      const response = await axios.get(
        `https://enviar-be.herokuapp.com/getCity`
      );
      // console.log(response.data.data);
      setCity(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const chooseOrigin = (e) => {
    // console.log(e);
    setOrigin(e.id);
  };

  const chooseDestination = (e) => {
    setDestination(e.id);
  };

  const checkPrice = async () => {
    // console.log(origin);
    // console.log(destination);
    // console.log(weight);
    try {
      if (!origin || !destination || !weight) {
        return Swal.fire("Error", `Please fill all field`, "error");
      }
      const response = await axios.post(
        "https://enviar-be.herokuapp.com/checkPrice",
        {
          origin: origin,
          destination: destination,
          weight: weight,
        }
      );
      console.log(response.data.data);
      setOutput(response.data.data);
      isExist("finished");
    } catch (err) {
      console.log(err);
      isExist("error");
    }
  };
  useEffect(() => {
    getCity();
    // console.log(exist);
  }, []);
  if (city) {
    return (
      <div className="px-84 pt-20 text-dark-grey">
        <h1 className="text-5xl font-bold text-center">
          Calculate Your Shipment
        </h1>
        <div className="mt-20 w-full mx-auto">
          <p className="font-bold text-xl text-left">Location details</p>
          <div className="flex justify-between">
            <div>
              <p className="font-medium text-lg mt-2 mb-1 text-left">
                Sender Location
              </p>
              <DatalistInput
                data-testid="origin-list"
                className=""
                placeholder=""
                onSelect={(e) => chooseOrigin(e)}
                items={city.map((x) => {
                  return {
                    id: x.id,
                    value: x.name,
                  };
                })}
              />
            </div>
            <div>
              <p
                className="font-medium text-lg mt-2 mb-1 text-left"
                data-testid="recipient-text"
              >
                Recipient Location
              </p>
              <DatalistInput
                placeholder=""
                onSelect={(e) => chooseDestination(e)}
                items={city.map((x) => {
                  return {
                    id: x.id,
                    value: x.name,
                  };
                })}
              />
            </div>
          </div>
          <p className="font-bold text-xl text-left mt-7">Package details</p>
          <div className="flex justify-between">
            <div className="">
              <p className="font-medium text-lg mt-2 mb-1 text-left">
                Package Weight (kg)
              </p>
              <input
                type="number"
                name="weight(kg)"
                className="w-field h-field outline-none rounded-lg bg-text-field pl-4"
                placeholder=""
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="">
              <p className="font-medium text-lg mt-2 mb-1 text-left">
                Package Type
              </p>
              <input
                type={"text"}
                className="w-field h-field outline-none rounded-lg bg-text-field pl-4"
              />
            </div>
          </div>
          <button
            className="bg-primary-green w-full h-field rounded-lg text-white text-lg font-semibold my-14 tracking-wide active:bg-active-btn-green"
            onClick={(e) => checkPrice()}
            data-testid="calc-btn"
          >
            Calculate
          </button>
        </div>
        <div className="mt-4">
          {output.regular > 0 && exist === "finished" ? (
            <div className="font-semibold">
              <h3 className="text-xl text-left mb-4">Price Estimation:</h3>
              <ul className="bg-primary-green h-field text-white flex justify-around items-center rounded-t-lg">
                <li className="font-semibold tracking-wide">Service Type</li>
                <li className="font-semibold tracking-wide">Package Weight</li>
                <li className="font-semibold tracking-wide">Total Price</li>
              </ul>
              <div className="flex justify-between px-20 pb-6 rounded-b-lg text-left mb-16 bg-white">
                <ul className="">
                  <li className="pt-4">Aldo</li>
                  <li className="pt-3">Estupendo</li>
                  <li className="pt-3">Medio</li>
                  <li className="pt-3">Carga</li>
                </ul>
                <ul className="pr-17">
                  <li className="pt-4">{weight}</li>
                  <li className="pt-3">{weight}</li>
                  <li className="pt-3">{weight}</li>
                  <li className="pt-3">{weight}</li>
                </ul>
                <ul className="px-8">
                  <li className="pt-4">{output.regular}</li>
                  <li className="pt-3">{output.extra}</li>
                  <li className="pt-3">{output.regular}</li>
                  <li className="pt-3">{output.extra}</li>
                </ul>
              </div>
            </div>
          ) : exist === "error" ? (
            <p>Service for the selected area is currently unavailable</p>
          ) : null}
        </div>
      </div>
    );
  }
}
