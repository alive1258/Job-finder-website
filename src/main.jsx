import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./components/Layout/Main";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Statistics from "./components/Statistics/Statistics";
import AppliedJob from "./components/AppliedJob/AppliedJob";
import JobDetails from "./components/JobDetails/JobDetails";
import ApplyJobs from "./Loaders/ApplyJobs";
import Notfound from "./components/NotFound/Notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/featuredjobs.json"),
      },
      {
        path: "/job/:jobId",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch("/featuredjobs.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/appliedjobs",
        element: <AppliedJob></AppliedJob>,
        // loader: ApplyJobs,
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path:'*',
        element:<Notfound></Notfound>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
