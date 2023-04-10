import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
import Home from "../Home/Home";

const Header = () => {
  return (
    <div className="head-container px-8 py-4" >
      <nav className="container md:flex md:justify-between md:items-center ">
        <div>
          <h1 className="font-bold text-3xl ">Finder</h1>
        </div>
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/appliedjobs">Applied Jobs</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div>
          <button className="bg-[#7E90FE] text-white font-semibold  p-4 rounded-lg">
            Star Applying
          </button>
        </div>
      </nav>
    {/* <Home></Home> */}
    </div>
  );
};

export default Header;
