import React from "react";
import { useLoaderData } from "react-router-dom";

const AppliedJob = () => {
  const applyJobs = useLoaderData();
  console.log(applyJobs);


  return <div>AppliedJob </div>;
};

export default AppliedJob;
