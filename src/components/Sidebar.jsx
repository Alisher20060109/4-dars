import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <ul className=" fixed left-0 top-0 flex flex-col  bg-gray-800 gap-6 h-screen  max-w-75 transform -translate-x-full sm:translate-x-0     w-full p-5">
      <li>
        <Link className="text-white rounded-2xl  text-[24px] bg-red-500 inline-block p-2  w-62.5 " to="/teachers">Teachers</Link>
      </li>
      <li>
        <Link className="text-white rounded-2xl  text-[24px] bg-red-500 inline-block p-2  w-62.5 " to="/students">Students</Link>
      </li>
    </ul>
  );
}
