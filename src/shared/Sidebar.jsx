import React from "react";
import { BiHelpCircle } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { FaTasks } from "react-icons/fa";
import { GoHome, GoProjectSymlink } from "react-icons/go";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const myMenu = [
    {
      id: 1,
      level: "Dashboard",
      link: "/",
      icon: <GoHome />,
    },
    {
      id: 2,
      level: "Projects",
      link: "/projects",
      icon: <GoProjectSymlink />,
    },
    {
      id: 3,
      level: "Tasks",
      link: "/tasks",
      icon: <FaTasks />,
    },
    {
      id: 4,
      level: "Settings",
      link: "/settings",
      icon: <CiSettings />,
    },
    {
      id: 5,
      level: "Help",
      link: "/help",
      icon: <BiHelpCircle />,
    },
  ];
  return (
    <div className="bg-gray-300 min-h-screen">
      <ul>
        {myMenu.map((item, index) => (
          <li key={index}>
            <NavLink
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#12A3E3" : "",
                  color: isActive ? "white" : "black",
                  padding: "10px",
                };
              }}
              to={item.link}
              className="flex items-center gap-2 mb-2 px-2 py-1"
            >
              <span>{item.icon}</span>
              <span> {item.level}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
