import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-[#f8f9fa]">
      {/* Sidebar (Fixed Left) */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Header (Fixed Top) */}
        <Header />

        {/* Dynamic Page Content */}
        <main className="flex-1 p-8 mt-16 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
