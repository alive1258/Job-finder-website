import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const marksExam = [
    {
      id: 1,
      name: "assignment- 1",
      mark: 60,
    },
    {
      id: 2,
      name: "assignment- 2",
      mark: 59,
    },
    {
      id: 3,
      name: "assignment- 3",
      mark: 60,
    },
    {
      id: 4,
      name: "assignment- 4",
      mark: 53,
    },
    {
      id: 5,
      name: "assignment- 5",
      mark: 59,
    },
    {
      id: 6,
      name: "assignment- 6",
      mark: 50,
    },
    {
      id: 7,
      name: "assignment- 7",
      mark: 60,
    },
  ];
  return (
    <div className="mt-36">
      <h1 className="mb-12 text-center font-bold text-4xl">
        Assignment Marks Rechart
      </h1>
      <AreaChart width={1100} height={400} data={marksExam}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default Statistics;
