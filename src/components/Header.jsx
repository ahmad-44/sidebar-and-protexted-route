import React from "react";

function Header() {
  return (
    <nav className="font-normal bg-slate-900 h-[100px] text-white flex items-center justify-between px-20">
      <img src="../../public/vite.svg" />
      <ul className="flex gap-10 items-center h-full">
        <li className="hover:text-purple cursor-pointer transition duration-300">
          About
        </li>
        <li className="hover:text-purple cursor-pointer transition duration-300">
          Shop
        </li>
        <li className="hover:text-purple cursor-pointer transition duration-300">
          Contact Us
        </li>
      </ul>
    </nav>
  );
}

export default Header;
