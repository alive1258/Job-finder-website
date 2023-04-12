import React from "react";
import { Link } from "react-router-dom";

const CardFeaturedJobs = ({ featuredjob }) => {
  const {
    _id,
    picture,
    jobTitle,
    jobType1,
    jobType2,
    company,
    location,
    salary,
  } = featuredjob;
  return (
    <div className="border-2 px-4 py-8 rounded-lg">
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
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>

          <p>{location}</p>
        </div>
        <div className="flex gap-2 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <p>Salary : {salary}</p>
        </div>
      </div>
      <div className="mt-4">
        <Link
          to={`/job/${_id}`}
          className="bg-[#7E90FE] text-white font-semibold  p-4 rounded-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CardFeaturedJobs;
