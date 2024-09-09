import React from "react";
import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";
import AppRoutes from "../routes/AppRoutes";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex items-start">
        <div className="w-[15%]">
          <Sidebar />
        </div>
        <div className="w-[85%] p-5">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
