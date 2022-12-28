import React from "react";

const services = [
  {
    key: 1,
    image: "/images/product_location.svg",
    title: "Aldo",
    text: "Sign up for our regular package service and never worry about missed deliveries or inconvenient pickup times again, as we'll handle the rest and deliver your packages to your doorstep on the schedule you choose.",
  },
  {
    key: 2,
    image: "/images/product_shopping.svg",
    title: "Estupendo",
    text: "Experience the convenience and reliability of our great package service, where your packages are expertly handled and delivered to you with care and efficiency",
  },
  {
    key: 3,
    image: "/images/product_holding.svg",
    title: "Medio",
    text: "With our medium package service, you can expect timely and efficient delivery of your packages, along with a range of additional benefits and options to suit your needs.",
  },
  {
    key: 4,
    image: "/images/product_service.svg",
    title: "Carga",
    text: "Trust us to handle all of your cargo shipping needs with our reliable and efficient package service, featuring competitive rates and a range of options to meet your specific requirements.",
  },
];

export default function Service() {
  return (
    <div className="mt-36 mb-28">
      {services.map((service) =>
        service.key % 2 === 1 ? (
          <div
            className="flex justify-between items-center text-left px-28 mt-28"
            key={service.key}
          >
            <div className="block">
              <h1 className="text-5xl text-dark-grey font-bold">
                {service.title}
              </h1>
              <p className="mt-4 w-9/12 text-xl">{service.text}</p>
            </div>
            <img
              data-testid="service-img"
              src={service.image}
              width={500}
              className="rounded-img"
              alt=""
            />
          </div>
        ) : (
          <div
            className="flex justify-between items-center text-right px-28 mt-28"
            key={service.key}
          >
            <img
              src={service.image}
              width={500}
              className="rounded-img"
              alt=""
            />
            <div className="block">
              <h1 className="text-5xl text-dark-grey font-bold">
                {service.title}
              </h1>
              <p className="mt-4 w-9/12 ml-auto text-xl">{service.text}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
