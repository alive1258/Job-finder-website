import React, { useEffect, useState } from "react";

import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobDeatils = useLoaderData();
  //   console.log(jobDeatils);

  let { jobId } = useParams();
  console.log(jobId);
  const [job, setJob] = useState([]);

  useEffect(() => {
    const jobData = jobDeatils.find((jobDeatil) => jobDeatil._id === jobId);
    setJob(jobData);
    console.log(jobData);
  }, []);

  return (
    <div>
      <h1 className="text-center mt-24 text-4xl font-bold"> Job Details</h1>
      <div className="px-16 py-4 mt-24">
        <div className="flex gap-4">
          <div>
            {/* <p>company:{job.company}</p> */}
            <p>
              <span className="text-lg font-semibold my-4">
                Job Description:
              </span>
              {job.jobDescription}
            </p>
            <div className="mt-4">
              <p>
                <span className="text-lg font-semibold mb-4">
                  Job Responsibility:
                </span>
                {job.jobResponsibility}
              </p>
            </div>
            <div className="mt-6">
              <p className="text-lg font-semibold">Educational Requirements:</p>
              <p>{job.educationalRequirements}</p>
            </div>
            <div className="mt-6">
              <p className="text-lg font-semibold">Experiences:</p>
              <p>{job.experiences}</p>
            </div>
          </div>
          <div>
            <div className="px-4 py-4 bg-gray-200 w-full rounded-lg">
              <h1 className="font-semibold text-lg px-4 py-4">Job Details</h1>
              <div className=" border-b-2 border-indigo-200"></div>
              <div className="mt-4">
                <p>
                  <span className="font-semibold px-3 py-2">Salary:</span>
                  {job.salary}
                </p>
                <p>
                  <span className="font-semibold px-3 py-2">Job Title:</span>
                  {job.jobTitle}
                </p>
              </div>
              <div>
                <h1 className="font-semibold text-lg px-3 py-4">
                  Contact Information
                </h1>
                <div className=" border-b-2 border-indigo-200"></div>
                <p>
                  <span className="font-semibold px-3 py-2">Phone:</span>
                  {job.phone}
                </p>
                <p>
                  <span className="font-semibold px-3 py-2">Email:</span>
                  {job.email}
                </p>
                <p>
                  <span className="font-semibold px-3 py-2">Address:</span>
                  {job.address}
                </p>
              </div>
            </div>
            <div className="bg-[#7E90FE] rounded-lg p-2 mt-4 text-center text-white font-semibold">
              <button>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
