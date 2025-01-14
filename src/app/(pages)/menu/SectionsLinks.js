"use client";
import { Link } from "react-scroll";
import { menu_data } from "./data";
import { useState } from "react";

export default function SectionsLinks() {
  const [active, setActive] = useState("");

  const handleSetActive = (to) => {
    setActive(to);
  };

  return (
    <ul className="space-y-10 sticky h-fit top-20 min-w-max max-lg:hidden">
      {menu_data.map(({ section }) => (
        <li key={section}>
          <Link
            activeClass="active"
            className="text-Gray cursor-pointer flex items-center gap-2 font-semibold"
            smooth
            duration={1000}
            spy
            onSetActive={handleSetActive}
            to={section}
          >
            <span
              className={`${
                active != section ? "!w-0" : "w-4"
              } h-[2px] bg-black rounded-full transition-all duration-500`}
            ></span>
            {section}
          </Link>
        </li>
      ))}
    </ul>
  );
}
