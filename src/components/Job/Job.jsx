import React from "react";

const Job = ({ job }) => {
  const { name, picture, jobs } = job;
  return (
    <div className="bg-gray-200 px-6 py-4 rounded-lg">
      <img className="h-12 w-12 rounded-lg" src={picture} alt="" />
      <p className="text-xl font-semibold">{name}</p>
      <p>{jobs}</p>
    </div>
  );
};

export default Job;
