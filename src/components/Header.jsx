import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      {/* Navigation Links */}
      <nav className="flex gap-4">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <DarkModeSwitch />
        {/* Logo */}
        <Link href="/" className="flex gap-3 items-center">
          <span className="text-2xl font-bold bg-green-500 text-white py-1 px-2 rounded-lg">
            CinemaLk
          </span>
          <span className="text-xl hidden sm:inline">MovieHub</span>
        </Link>
      </div>
    </header>
  );
}
