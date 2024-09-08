"use client";
import { useParams } from "next/navigation";
import { projectData } from "../_component/projectData";
import { ExternalLink } from "lucide-react"; // Ensure correct import
import { Github } from "lucide-react";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projectData.find((p) => p.slug === slug);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <div className="flex flex-wrap gap-2 mt-3">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-[#FF8A8A] bg-[#FF8A8A] text-slate-100 px-2 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row items-start gap-4 mb-4 mt-5">
        {/* Image Section */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full lg:w-1/2 h-auto object-cover"
        />

        {/* Description Section */}
        <div className="lg:w-1/2 flex flex-col justify-between">
          <h2 className="text-2xl ml-5 font-bold">Description</h2>
          <p className="text-sm mb-4 mt-3 ml-5">{project.description}</p>

          {/* Links Section */}
          <div className="flex flex-row gap-4 ml-5 mt-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-500 hover:underline"
              >
                <Github className="w-5 h-5" />
                GitHub Repository
              </a>
            )}

            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-500 hover:underline"
              >
                <ExternalLink className="w-5 h-5" />
                Project Link
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Embed YouTube Video */}
      <h2 className="text-3xl mt-9 font-bold">Explanation Video</h2>
      <div className="mb-4 mt-9">
        <iframe
          width="100%"
          height="400"
          src={project.videoUrl}
          title={`YouTube video of ${project.title}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
