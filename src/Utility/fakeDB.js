const addToDB = (job) => {
  let applyJob = getApplyJob();

  const quantity = applyJob[job._id];
  if (!quantity) {
    applyJob[job._id] = 1;
  } else {
    const newQuantity = quantity + 1;
    applyJob[job._id] = newQuantity;
  }
  localStorage.setItem("apply-job", JSON.stringify(applyJob));
};

const getApplyJob = () => {
  let applyJob = {};

  const storedCart = localStorage.getItem("apply-job");
  if (storedCart) {
    applyJob = JSON.parse(storedCart);
  }
  return applyJob;
};

export { addToDB, getApplyJob };
