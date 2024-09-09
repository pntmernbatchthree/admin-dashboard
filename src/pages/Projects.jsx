import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("projectData")) || [];
    setData(existingData);
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="mb-5 text-2xl font-bold">Projects</h1>
        <button className="bg-blue-600 px-4 py-2 rounded-md text-white">
          <Link to="/add-project">Add Project</Link>
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Banner
              </th>
              <th scope="col" className="px-6 py-3">
                Project Title
              </th>
              <th scope="col" className="px-6 py-3">
                Details
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4">
                  <img
                    src={item.image}
                    alt=""
                    className="w-32 h-24 rounded-md"
                  />
                </td>
                <td className="px-6 py-4">{item.title}</td>
                <td className="px-6 py-4">{item.details}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                  <button className="text-red-700 ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
