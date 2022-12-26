import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Home",
    url: "/",
    key: 1,
  },
  {
    name: "Services",
    url: "/services",
    key: 2,
  },
  {
    name: "About",
    url: "/about",
    key: 3,
  },
  {
    name: "Price",
    url: "/price",
    key: 4,
  },
];

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-32 px-25">
      <img src="/images/enviar-logo.png" alt="" width={176} />
      <div className="flex font-semibold text-lg">
        {links.map((link) => {
          return (
            <NavLink
              data-testid="nav-link"
              key={link.key}
              to={link.url}
              className="pr-6 pl-6 hover:px-6 pb-3 pt-4 hover:bg-btn-hover duration-200 hover:rounded-md"
              style={({ isActive }) =>
                isActive ? { fontWeight: "bold" } : { fontWeight: "inherit" }
              }
            >
              {link.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
