import { getShoppingCart } from "../components/utilities/fakedb";

const ApplyJobs = async () => {
  const loddedApplyJobs = await fetch("featuredjobs.json");
  const applyJobs = await loddedApplyJobs.json();

  const storedJob = getShoppingCart();
  console.log(storedJob);
  const savedJob = [];
  for (let id in storedJob) {
    const addedJobs = applyJobs.find((pd) => pd._id === id);
    if (addedJobs) {
      const qunatity = storedJob[_id];
      addedJobs.qunatity = qunatity;
      savedJob.push(addedJobs)
    }
  }

  // console.log(applyJob);
  return savedJob;
};
export default ApplyJobs;
