import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";

const Navbar = () => {
  const [colorMode, setToggleColorMode] = useState(false);

  function handleToggleColorMode() {
    setToggleColorMode(!colorMode);
  }

  return (
    <nav
      className={`${
        colorMode ? "bg-white text-black" : "bg-black text-white"
      } w-full bg-blue-950 px-10 py-3 flex justify-between min-h-[6vh]`}
    >
      <div className="text-sky-500 font-bold text-xl">
        <Link to={"/"}>PRODUCT STORE</Link>
      </div>
      <div className="flex justify-between w-20">
        <Link
          className="w-9  border-1 rounded-lg text-center bg-sky-950"
          to={"/create"}
        >
          <button className="text-md font-bold text-sky-500 cursor-pointer">
            +
          </button>
        </Link>
        <button
          className="border-1 rounded-lg  bg-sky-950 cursor-pointer"
          onClick={handleToggleColorMode}
        >
          <p className="text-sky-500 font-bold w-9">
            {colorMode ? "🌙" : "🌞"}
          </p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
