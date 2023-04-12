import React from "react";
import { Link } from "react-router-dom";

const JobList = ({ addJob }) => {
  const {
    _id,
    picture,
    jobType1,
    jobType2,
    jobTitle,
    company,
    location,
    salary,
  } = addJob;
//   const [jobApply, setJobApply] = addJob(jobType1);

//   const filterItem = (remoteJob) => {
//     const updateJobs = addJob.filter((currentJob) => {
//       return currentJob.jobType1 === remoteJob;
//     });
//     setJobApply(updateJobs)
//   };
  return (
    <div>
      <div className="flex gap-4 ">
        <button >Remote</button>
        <button>Onsite</button>
      </div>
      <div className="border-2 border-gray-400 w-full  p-4 m-4">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <img className="w-28 h-28" src={picture} alt="" />
            <div>
              <p>{jobTitle}</p>
              <p>{company}</p>
              <div className="flex gap-4">
                <p className="border-2 border-[#7E90FE] text-[#9873FF] px-2">
                  {jobType1}
                </p>
                <p className="border-2 border-[#7E90FE] text-[#9873FF] px-2">
                  {jobType2}
                </p>
              </div>
              <div className="flex mt-2 gap-4">
                <div>
                  <p className="flex gap-2">
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
                    {location}
                  </p>
                </div>
                <div>
                  <p className="flex gap-2">
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
                    {salary}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <Link
              to={`/job/${_id}`}
              className="p-4 bg-[#7E90FE] text-white rounded-lg"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;
