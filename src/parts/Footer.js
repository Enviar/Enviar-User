import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full footer flex justify-between px-24 pt-12 pb-16 font-semibold text-left bg-white">
      <div className="logo-trademark text-left">
        <img src="/images/enviar-logo.png" alt="" width={176} />
        <p className="font-semibold text-lg mt-16">
          &#169; ENVIAR. All Rights Reserved
        </p>
      </div>
      <div className="visit-us">
        <h3 className="text-lg text-primary-green">Visit Us</h3>
        <Link
          to=""
          className="mt-2 flex items-start"
          data-testid="address-link"
        >
          <img src="/images/location.svg" alt="" className="mr-1 mt-0.5" />
          Jl. Diponegoro No. 22, <br />
          Citarum, Kec. Bandung <br />
          Wetan, Kota Bandung, <br />
          Jawa Barat 40115
        </Link>
      </div>
      <div className="business">
        <h3 className="text-lg text-primary-green">Business Inquiries</h3>
        <Link to="" className="mt-2 flex items-start" data-testid="email-link">
          <img src="/images/email.svg" alt="" className="mr-1.5 mt-1" />
          enviar@shipping.com
        </Link>
      </div>
      <div className="follow-us">
        <h3 className="text-lg text-primary-green">Follow Us</h3>
        <Link to="" className="mt-2 flex items-start">
          <img src="/images/instagram.svg" alt="" className="mr-2 mt-0.5" />
          Instagram
        </Link>
        <Link to="" className="flex items-start mt-3">
          <img src="/images/facebook.svg" alt="" className="mr-2 mt-0.5" />
          Facebook
        </Link>
        <Link to="" className="flex items-start mt-3">
          <img src="/images/twitter.svg" alt="" className="mr-2 mt-0.5" />
          Twitter
        </Link>
      </div>
    </footer>
  );
}
