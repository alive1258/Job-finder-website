import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const JobCategory = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/jobCategory.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-24">
        <h1 className="md:text-6xl font-semibold">Job Category List</h1>
        <p className="mt-4 md:text-lg">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-4 mt-8 ">
        {jobs.map((job) => (
          <Job key={job._id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
