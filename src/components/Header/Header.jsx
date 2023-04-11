import React, { useState } from "react";
import { Link } from "react-router-dom";

import Home from "../Home/Home";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="head-container px-8 py-4">
      <div className="md:hidden " onClick={() => setOpen(!open)}>
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-[#7E90FE]" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-[#7E90FE]" />
          )}
        </span>
      </div>
      <nav
        className={`container pl-8 duration-500 md:static absolute md:flex md:justify-between md:items-center ${
          open ? "top-10" : "-top-36"
        }`}
      >
        <div>
          <h1 className="font-bold md:text-3xl ">Finder</h1>
        </div>
        <div className="md:flex gap-4">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/statistics">Statistics</Link>
          </p>
          <p>
            <Link to="/appliedjobs">Applied Jobs</Link>
          </p>
          <p>
            <Link to="/blog">Blog</Link>
          </p>
        </div>
        <div>
          <button className="bg-[#7E90FE] text-white font-semibold  md:p-4 rounded-lg">
            Star Applying
          </button>
        </div>
      </nav>
  
    </div>
  );
};

export default Header;
