import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="flex justify-between py-16 px-36">
      <h1 className="font-extrabold text-4xl">
        Tribe<span className="text-accentBlue">NINE</span>
      </h1>
      <div className="flex gap-8">
        <Link href={"#"} className="text-2xl font-bold">
          Home
        </Link>
        <Link href={"#"} className="text-2xl font-bold">
          About
        </Link>
        <Link href={"#"} className="text-2xl font-bold">
          Contact
        </Link>
      </div>
    </div>
  );
};
