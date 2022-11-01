import React from "react";
import { Link } from "react-router-dom";

export default function Button({ btn_text, btn_destination }) {
  return (
    <div>
      <Link
        className="px-9 py-3 tracking-wide bg-black font-normal text-base text-white rounded-lg hover:duration-100 hover:bg-primary-green"
        to={btn_destination}
      >
        {btn_text}
      </Link>
    </div>
  );
}
