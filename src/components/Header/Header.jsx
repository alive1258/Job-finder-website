import React from "react";
import { Link } from "react-router-dom";
import janko from "../img/janko-preview.png";
import './Header.css'

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
      <header className="md:flex md:flex-row  mt-8">
        <div className="pt-16">
          <h1 className="md:text-7xl font-bold">
            One Step <br /> Closer To Your <br />
            <span className="text-[#7E90FE]">Dream Job</span>
          </h1>
          <p className="mt-8 md:text-lg">
            Explore thousands of job opportunities with all the <br />
            information you need. Its your future. Come find it. Manage all  your
            job application from start to finish.
          </p>
          <button className="bg-[#7E90FE] mt-8 text-white font-semibold  p-4 rounded-lg">
            Get Started
          </button>
        </div>
        <div>
          <img className="md:h-[520px] md:w-[750px]  " src={janko} alt="" />
        </div>
      </header>
    </div>
  );
};

export default Header;
