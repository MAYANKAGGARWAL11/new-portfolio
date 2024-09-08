"use client"
import React from 'react'
import Link from "next/link";
import { projectData } from './_component/projectData';


function Project() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 ">
          {projectData.map((project) => (
            <Link key={project.slug} href={`/dashboard/project/${project.slug}`}>
              <div className="border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-[#F4DEB3]">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-[#FF8A8A] bg-[#FF8A8A] text-slate-100 px-2 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      );
}

export default Project