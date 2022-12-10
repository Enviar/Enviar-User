import axios from "axios";
import React, { useState } from "react";
import moment from "moment";

export default function TrackPackage() {
  const [resi, setResi] = useState("");
  const [trigger, setTrigger] = useState("");
  const [status, setStatus] = useState([]);
  const [destination, setDestination] = useState("");
  const getResi = async () => {
    // console.log(resi);
    try {
      const response = await axios.get(
        `https://enviar-be.herokuapp.com/statusReceipt/${resi}`
      );
      console.log(response.data);
      setStatus(response.data.data);
      setDestination(response.data.destinationCity);
      setTrigger("done");
      console.log(response.data.data);
    } catch (err) {
      console.log("error testt".err);
      setTrigger("error");
      console.log(trigger);
    }
  };

  const token = "?alt=media&token=24a75af7-07c2-4703-bc38-950a9fbc95c2";

  const statusNotesFinished = (stat) => {
    var notes = "";
    switch (stat.notes) {
      case "disiapkan":
        notes = ` Package was being prepared by ${
          stat.Product.senderName + " from " + stat?.City?.name
        }`;
        break;
      case "siap_dikirim":
        notes = ` Package was ready to sent for ${stat.Product.recipientName} at ${stat.Product.recipientAddress}`;
        break;
      case "sedang dikirim":
        notes = ` Package was on it's way to ${stat.Product.recipientAddress}, ${stat?.City?.name}`;
        break;
      case "transit_diterima":
        notes = ` Package was received at ${stat.City?.name} transit`;
        break;
      case "transit_dikirim":
        notes = ` Package was sent ${stat?.City?.name}`;
        break;
      case "selesai":
        notes = "Package has arrived to recipient address.";
        break;
      default:
        notes = null;
        break;
    }
    return (
      <div
        className={`${
          notes ? "flex items-center justify-between mb-7 h-[80px]" : "hidden"
        }`}
      >
        <div className="flex items-center opacity-80 w-2/3">
          <div className="bg-active-btn-green h-2 w-5/6 rounded-lg mx-3"></div>
          <div className="bg-active-btn-green w-8 h-8 rounded-full flex items-center justify-center">
            <div className="animate-ping w-1.5 h-1.5 bg-body rounded-full"></div>
          </div>
        </div>
        <div className="text-right text-lg w-2/4">
          <p className={`${notes ? "font-semibold" : "hidden"}`}>
            {moment(stat.createdAt.split("T")[0]).format("LL")}
          </p>
          {notes}
        </div>
      </div>
    );
  };

  const statusNotes = (stat) => {
    var notes = "";
    switch (stat.notes) {
      case "disiapkan":
        notes = ` Package was being prepared by ${
          stat.Product.senderName + " from " + stat?.City?.name
        }`;
        break;
      case "siap_dikirim":
        notes = ` was ready to sent for ${stat.Product.recipientName} at ${stat.Product.recipientAddress}`;
        break;
      case "sedang dikirim":
        notes = ` Package was on it's way to ${stat.Product.recipientAddress}, ${stat?.City?.name}`;
        break;
      case "transit_diterima":
        notes = ` Package was received at ${stat.City?.name} transit`;
        break;
      case "transit_dikirim":
        notes = ` was sent ${stat?.City?.name}`;
        break;
      default:
        break;
    }
    return notes;
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

      <div className="py-20">
        {trigger === "done" ? (
          status.length ? (
            <div className="px-48 bg-slate-100 py-17">
              <div className="text-left text-lg flex justify-between items-center">
                <div>
                  <p className="font-semibold mr-3">Package Details:</p>
                  <p className="w-2/4 mb-8">
                    Package ID {status[0].Product.receiptNumber}, Will be sent
                    to {destination}, For {status[0].Product.recipientName},
                    Sent by {status[0].Product.senderName} from{" "}
                    {status[0].City.name}
                  </p>
                </div>
                <div
                  className={`${
                    status[0]?.notes === "selesai"
                      ? "block text-right text-lg mb-10"
                      : "hidden"
                  }`}
                >
                  <p className="font-semibold">
                    Package has been accepted by {status[1]?.notes} at
                    <br />
                    {moment(status[0].createdAt.split("T")[0]).format("LT")}
                  </p>
                  <div className="mx-auto">
                    <img
                      alt="package pic"
                      width={200}
                      className="rounded-sm ml-auto my-3"
                      src={`https://firebasestorage.googleapis.com/v0/b/uploading-file-60deb.appspot.com/o/${
                        status[2]?.notes + token
                      }`}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                {status.map((el, i) => {
                  if (status[0]?.notes === "selesai") {
                    return statusNotesFinished(el);
                  } else {
                    return (
                      <div className="flex justify-between mb-7">
                        <div className="flex items-center opacity-80 w-3/5">
                          <div className="bg-active-btn-green h-2 w-5/6 rounded-lg mx-3"></div>
                          <div className="bg-active-btn-green w-8 h-8 rounded-full flex items-center justify-center">
                            <div className="animate-ping w-1.5 h-1.5 bg-body rounded-full"></div>
                          </div>
                        </div>
                        <div className="text-right text-lg w-1/3">
                          <p className="font-semibold">
                            {moment(el.createdAt.split("T")[0]).format("LL")}
                          </p>
                          {statusNotes(el)}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          ) : (
            <div className="w-2/4 mx-auto">
              <img
                src="./images/package_lost.svg"
                alt="lost"
                width={370}
                className="mx-auto opacity-80"
              />
              <h1 className="font-medium text-xl mt-8">
                We can't track your package,
                <br /> make sure to input the numbers correctly.
              </h1>
            </div>
          )
        ) : !resi ? (
          <h1 className="font-semibold text-xl">
            Please insert your recipient numbers.
          </h1>
        ) : (
          <div className="w-2/4 mx-auto">
            <img
              src="./images/package_lost.svg"
              alt="lost"
              width={370}
              className="mx-auto opacity-80"
            />
            <h1 className="font-medium text-xl mt-8">
              We can't track your package,
              <br /> make sure to input the numbers correctly.
            </h1>
          </div>
        )}
      </div>
    </>
  );
}
