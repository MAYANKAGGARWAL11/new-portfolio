"use client";
import { Home, Folder, Briefcase, Mail, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function SideNav() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const MENULIST = [
    {
      name: "Home",
      icon: Home,
      href: "/dashboard",
    },
    {
      name: "Project",
      icon: Folder,
      href: "/dashboard/project",
    },
    {
      name: "Skills",
      icon: Briefcase,
      href: "/dashboard/skills",
    },
    {
      name: "Contact",
      icon: Mail,
      href: "/dashboard/contact",
    },
  ];

  const path = usePathname();

  return (
    <div
      className={`h-screen relative p-5 shadow-sm border transition-width duration-300 bg-[#C8A1E0] ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex justify-between items-center border-b-2 py-2">
        <button onClick={toggleCollapse}>
          <Menu className="h-6 w-6 cursor-pointer" />
        </button>
      </div>
      <div className="mt-5">
        {MENULIST.map((item, index) => (
          <Link key={index} href={item.href}>
            <div
              className={`flex gap-2 p-3 mb-3 rounded-lg hover:bg-primary hover:text-white cursor-pointer items-center select-none transition-colors duration-200 ${
                path === item.href && "bg-primary text-black"
              }`}
            >
              <item.icon className="h-6 w-6 " />
              {!isCollapsed && <h2 className="text-lg">{item.name}</h2>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
