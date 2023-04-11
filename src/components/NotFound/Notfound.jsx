import React from "react";
import notfound from "../img/notFound-r.png";
import { Link, useRouteError } from "react-router-dom";


const Notfound = () => {
  const { error, status } = useRouteError;
  return (
    <div>
      <div className="flex justify-center items-center">
        <img className="mt-2 w-96" src={notfound} alt="" />
      </div>

      <p className="text-center text-4xl font-bold text-red-700">Error</p>
      <div className="text-center w-36 p-2 font-semibold rounded-lg bg-cyan-400 text-white">
        <Link to='/'>Back to HomePage</Link>
      </div>
    </div>
  );
};

export default Notfound;
