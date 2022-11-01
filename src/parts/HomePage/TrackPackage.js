// import React from "react";
import axios from "axios";
import React, { useState } from "react";

export default function TrackPackage() {
  const [resi, setResi] = useState("");
  const [trigger, setTrigger] = useState("");
  const [status, setStatus] = useState([]);
  const [destination, setDestination] = useState("");
  const [origin, setOrigin] = useState("");
  const getResi = async () => {
    // console.log(resi);
    try {
      const response = await axios.get(
        `http://localhost:3000/statusReceipt/${resi}`
      );
      setStatus(response.data.data);
      setDestination(response.data.destinationCity);
      setOrigin(response.data.originCity);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setTrigger("done");
    }
  };

  return (
    <>
      <div className="tracking py-72">
        <div className="tracking-form">
          <h1 className="text-2xl font-semibold">
            Your Package is Safe With Us, <br /> Let’s Track It!
          </h1>

          <br></br>
          <br></br>

          <input
            type="text"
            id="fname"
            name="fname"
            className="track-input px-8 focus:outline-none bg-neutral-300 rounded-lg"
            placeholder="Recipient Number Here..."
            onChange={(e) => setResi(e.target.value)}
          />
          <br />
          <button
            onClick={(e) => getResi(e)}
            className="track-button font-semibold text-white rounded-lg mt-20 tracking-wide bg-primary-green"
          >
            Track
          </button>
        </div>
      </div>

      {trigger === "done" ? (
        status.length ? (
          <div>
            <table>
              <tr>
                <th>Receipt Number</th>
                <th>Services</th>
                <th>Tujuan</th>
                <th>Recipient</th>
                <th>Arrived Date</th>
                <th>Receiver Package</th>
                <th>Shipping Price</th>
                <th>Status</th>
              </tr>
              <tr>
                <td>{status[0].Product.receiptNumber}</td>
                <td>Regular</td>
                <td>{destination}</td>
                <td>{status[0].Product.recipientName}</td>
                {status[status.length - 1].notes === "selesai" ? (
                  <td>{status[status.length - 1].createdAt.split("T")[0]}</td>
                ) : (
                  <td>-</td>
                )}
                {status[status.length - 1].notes === "selesai" ? (
                  <td>{status[status.length - 2].notes}</td>
                ) : (
                  <td>-</td>
                )}
                <td>{status[0].Product.shipmentPrice}</td>
                {status[status.length - 1].notes === "selesai" ? (
                  <td>finish</td>
                ) : (
                  <td>On Process</td>
                )}
              </tr>
              <tr></tr>
            </table>
            <br></br>
            <div>
              <h3>Tracking details</h3>
              <h4>Tanggal Pengiriman</h4>
              <p>{status[0].createdAt.split("T")[0]}</p>
              <h4>Pengirim</h4>
              <p>{status[0].Product.senderName}</p>
              <h4>Asal</h4>
              <p>{status[0].City.name}</p>
              <h4>Penerima</h4>
              <p>{status[0].Product.recipientName}</p>
              <h4>Tujuan</h4>
              <p>{destination}</p>
            </div>
            <div>
              <h3>History</h3>
              {status.map((el) => {
                return (
                  <>
                    <p>Tanggal</p>
                    <p>{el.createdAt.split("T")[0]}</p>
                    <p>Keterangan</p>
                    <p>{el.notes}</p>
                    <p>Location</p>
                    <p>{el.City.name}</p>
                  </>
                );
              })}
            </div>
          </div>
        ) : (
          <h1>product not found</h1>
        )
      ) : (
        <></>
      )}
      {}
    </>
  );
}
