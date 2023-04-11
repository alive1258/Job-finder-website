import React from "react";
import janko from "../img/janko-preview.png";
import './Home.css'
import JobCategory from "../JobCategory/JobCategory";
import FeaturedJobs from "../FeaturedJob/FeaturedJobs";


const Home = () => {

  return (
    <div className="px-8 py-8 ">
      <header className="md:flex md:flex-row mt-8">
        <div className="pt-16">
          <h1 className="md:text-7xl font-bold">
            One Step <br /> Closer To Your <br />
            <span className="text-[#7E90FE]">Dream Job</span>
          </h1>
          <p className="mt-8 md:text-lg">
            Explore thousands of job opportunities with all the <br />
            information you need. Its your future. Come find it. Manage all your
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
      <JobCategory></JobCategory>
      <FeaturedJobs></FeaturedJobs>
      <div>
      
      </div>
    </div>
  );
};

export default Home;
