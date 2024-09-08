"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  const MENULIST = [
    { name: "Home", href: "/dashboard" },
    { name: "Project", href: "/dashboard/project" },
    { name: "Skills", href: "/dashboard/skills" },
    { name: "Contact", href: "/dashboard/contact" },
  ];

  return (
    <div className="flex p-8 items-center justify-between bg-[#C8A1E0] shadow-sm">
      <div className="text-3xl font-bold text-[#fcfcfc] ">Mayank Aggarwal</div>
      <ul className="hidden md:flex gap-6">
        {MENULIST.map((item, index) => (
          <Link key={index} href={item.href}>
            <li
              className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
                path === item.href && "text-primary font-bold"
              }`}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
     
    </div>
  );
}

export default Header;
