import React from "react";

const CardFeaturedJobs = ({ featuredjob }) => {
  const { picture, jobTitle, jobType1, jobType2, company, location, salary } =
    featuredjob;
  return (
    <div className="border-2 px-8 py-6 rounded-lg">
      <img className="h-24 w-24" src={picture} alt="" />
      <p className="text-xl font-semibold">{jobTitle}</p>
      <p>{company}</p>
      <div className="flex gap-4 mt-2">
        <button className="border-2 rounded-lg border-blue-300 px-4 text-[#7E90FE] ">
          {jobType1}
        </button>
        <button className="border-2 rounded-lg border-blue-300 px-4 text-[#7E90FE] ">
          {jobType2}
        </button>
      </div>
      <div className="flex gap-4 mt-2">
        <p>{location}</p>
        <p>Salary : {salary}</p>
      </div>
      <div className="mt-4">
        <button className="bg-[#7E90FE] text-white font-semibold  p-4 rounded-lg">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CardFeaturedJobs;
