import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CardFeaturedJobs from "../CardFeaturedJobs/CardFeaturedJobs";

const FeaturedJobs = () => {
  const featuredjobs = useLoaderData();
  const [visible, setVisible] = useState(4);

  const seeAllJobs = () => {
    setVisible((prevValue) => prevValue + 2);
  };

  return (
    <div>
      <div className="text-center mt-24">
        <h1 className="md:text-6xl font-semibold">Featured Jobs</h1>
        <p className="mt-4 md:text-lg">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        {featuredjobs.slice(0, visible).map((featuredjob) => (
          <CardFea
          turedJobs
            key={featuredjob._id}
            featuredjob={featuredjob}
          ></CardFea>
        ))}
      </div>
      <div className="mt-4 text-center">
        <button
          onClick={seeAllJobs}
          className="bg-[#7E90FE] text-white font-semibold  p-4 rounded-lg"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
