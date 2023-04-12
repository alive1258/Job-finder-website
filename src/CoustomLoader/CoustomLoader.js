import { getApplyJob } from "../Utility/fakeDB";

export const jobAllData = async () => {
  const jobsData = await fetch("/featuredjobs.json");
  const jobsAll = await jobsData.json();

  const savedJob = getApplyJob();
  let jobArray = [];
  for (let _id in savedJob) {
    const foundJob = jobsAll.find((jb) => jb._id === _id);
    if (foundJob) {
      foundJob.quantity = savedJob[_id];
      jobArray.push(foundJob);
    }
  }
  return { jobArray, jobsAll };
};
