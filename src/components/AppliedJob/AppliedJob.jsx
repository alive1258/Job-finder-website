import React from "react";
import { useLoaderData } from "react-router-dom";
import JobList from "../JobList/JobList";

const AppliedJob = () => {
  const { jobArray } = useLoaderData();
  console.log(jobArray)

  return (

      <div>
         <h1 className='text-center p-4 font-bold text-4xl mt-12'>Applied Jobs</h1>
          <div className="mt-28">
                     
          <ul className="flex flex-col p-4 ">
            {
              jobArray.map(addJob => <JobList 
              addJob={addJob}
              key={addJob._id}
              ></JobList>)
            }
          </ul>
        </div>
      </div>
  
  );
};

export default AppliedJob;
