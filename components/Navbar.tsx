import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/app/constants/constants.index";
import Menu from "./Menu/Menu";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 w-full relative top-0 z-30 py-5">
      <Link href="/" className="pt-3">
        {/* <Image src="/hilink-logo.svg" width={74} height={29} alt="logo" /> */}
        <p className="text-xl font-semibold">
          Wander<span className="text-green-600">City</span>
        </p>
      </Link>
      <ul className="hidden h-full gap-12 rounded-xl px-4 py-2 shadow-xl  lg:flex lg:flex-row text-black">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer transition-all pb-1.5 hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="">
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
