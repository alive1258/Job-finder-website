import React from "react";
import { useLoaderData } from "react-router-dom";
import JobList from "../JobList/JobList";

const AppliedJob = () => {
  const { jobArray } = useLoaderData();
  console.log(jobArray)

  return (

        <div className="mt-28">
          <ul className="flex flex-col  ">
            {
              jobArray.map(addJob => <JobList 
              addJob={addJob}
              key={addJob._id}
              ></JobList>)
            }
          </ul>
        </div>
  
  );
};

export default AppliedJob;
