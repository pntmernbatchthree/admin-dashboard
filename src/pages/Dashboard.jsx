import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

const Dashboard = () => {
  const day = moment().format("ddd, MM MMM, YYYY");

  const news = [
    {
      id: 1,
      title: "This is 1st news",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, accusamus?",
    },
    {
      id: 2,
      title: "This is 2nd news",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, accusamus?",
    },
    {
      id: 3,
      title: "This is 3rd news",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, accusamus?",
    },
    {
      id: 4,
      title: "This is 4th news",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, accusamus?",
    },
    {
      id: 5,
      title: "This is 5th news",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, accusamus?",
    },
  ];

  const recentNews = [...news].reverse().slice(0, 3);

  return (
    <div className="w-full flex items-start justify-between gap-10">
      <div className="w-full md:w-[75%]">
        <div className="flex items-start justify-between">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <div className="bg-blue-600 text-white rounded-md p-2">
            <p>{day}</p>
          </div>
        </div>
        <div className="mt-5 relative">
          <div>
            <img src="banner.png" alt="" className="w-full" />
          </div>
          <div className="absolute w-1/2 top-[35%] right-[10%]">
            <h1 className="text-3xl font-bold">Hello Mr. X</h1>
            <p className="text-white">
              Welcome To Admin Panel.Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Iure, voluptate!
            </p>
          </div>
        </div>
        <div className="w-full flex items-center gap-5 mt-5">
          <div className="w-full items">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-white">Event</h1>
              <FaCalendarAlt className="size-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">12</h1>
            </div>
          </div>
          <div className="w-full items">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-white">News</h1>
              <FaCalendarAlt className="size-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">12</h1>
            </div>
          </div>
          <div className="w-full items">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-white">Blogs</h1>
              <FaCalendarAlt className="size-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">12</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[25%] bg-gray-300 p-3">
        <div className="w-full flex flex-col items-center">
          <div>
            <img src="avatar.png" alt="" className="size-16" />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold">Mr. X</h1>
            <p>Founder, XYZ LTD</p>
          </div>
        </div>

        <div className="mt-3">
          <div>
            <div className="flex justify-between items-center mb-3">
              <div>
                <h1 className="text-xl font-bold">Recent News</h1>
              </div>
              <div>
                <Link to="/" className="text-blue-500">
                  View More
                </Link>
              </div>
            </div>
            {recentNews.map((item, index) => (
              <div className="flex items-center gap-1 mb-2">
                <div>
                  <img
                    className="size-16 rounded-full"
                    src="https://ui-avatars.com/api/?name=John+Doe"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="text-md font-bold">{item.title}</h1>
                  <p>{item.description.slice(0, 20)}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
