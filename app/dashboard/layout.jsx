import React from "react";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9F5F6] ">
      {/* Header */}
      <Header />
      
      {/* Layout with Sidebar and Content */}
      <div className="flex flex-grow  ">
        {/* Sidebar */}
        <SideNav />
        
        {/* Main Content */}
        <main className="flex-grow mx-5 md:mx-20 lg:mx-36 mt-5">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
