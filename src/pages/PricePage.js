import { useState, useEffect } from "react";
import axios from "axios";
import DatalistInput from "react-datalist-input";
import Navbar from "../parts/Navbar";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
// import 'react-datalist-input/dist/styles.css';

export default function PricePage() {
  const [city, setCity] = useState([]);
  const [origin, setOrigin] = useState(0);
  const [destination, setDestination] = useState(0);
  const [weight, setWeight] = useState(0);
  const [output, setOutput] = useState(0);
  // const
  const getCity = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/getCity`);
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
      const response = await axios.post("http://localhost:3000/checkPrice", {
        origin: origin,
        destination: destination,
        weight: weight,
      });
      console.log(response.data.data);
      setOutput(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCity();
  }, []);
  if (city) {
    return (
      <>
        <Navbar />
        <Header currentPage="price" />
        <h1>ini price page</h1>
        <div className="border-2 mt-4">
          <h1>Hitung mau dari mana</h1>

          <div className="form-box mx-20">
            <DatalistInput
              placeholder="Origin"
              onSelect={(e) => chooseOrigin(e)}
              items={city.map((x) => {
                return {
                  id: x.id,
                  value: x.name,
                };
              })}
            />
          </div>
          <h1>Hitung mau kemana</h1>

          <div className="form-box mx-20">
            <DatalistInput
              placeholder="Origin"
              onSelect={(e) => chooseDestination(e)}
              items={city.map((x) => {
                return {
                  id: x.id,
                  value: x.name,
                };
              })}
            />
          </div>
          <h1>Beratnya brp weh</h1>
          <input
            type="number"
            name="weight(kg)"
            className="border border-slate-300"
            placeholder="Weight(kg)"
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
          onClick={(e) => checkPrice()}
        >
          Cek bos
        </button>
        <div className="border-2 mt-4">
          {output.regular > 0 ? (
            <h3>
              Regular: {output.regular} <br /> Extra: {output.extra}
            </h3>
          ) : null}
        </div>
        <Footer />
      </>
    );
  }
}
