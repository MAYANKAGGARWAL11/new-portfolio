import React from "react";

const skillsData = {
  Languages: [
    { name: "C++", score: 8, color: "bg-blue-500" },
    { name: "JavaScript", score: 8, color: "bg-yellow-500" },
    { name: "TypeScript", score: 8, color: "bg-blue-500" },
    { name: "Java", score: 7, color: "bg-green-500" },
    { name: "Python", score: 7, color: "bg-red-500" },
    { name: "HTML/CSS", score: 8, color: "bg-purple-500" },
    { name: "JQuery", score: 7, color: "bg-teal-500" },
    { name: "Bootstrap", score: 7, color: "bg-orange-500" },
  ],
  Databases: [
    { name: "MySQL", score: 8, color: "bg-red-500" },
    { name: "PostgreSQL", score: 7, color: "bg-purple-500" },
    { name: "Oracle DBMS", score: 7, color: "bg-green-500" },
  ],
  Frameworks: [
    { name: "NextJs", score: 8, color: "bg-purple-500" },
    { name: "ReactJs", score: 8, color: "bg-yellow-500" },
    { name: "NodeJs", score: 7, color: "bg-green-700" },
  ],
  DeveloperTools: [
    
    { name: "Appwrite", score: 7, color: "bg-purple-500" },
    { name: "Vs Code", score: 7, color: "bg-green-500" },
    { name: "Firebase", score: 7, color: "bg-orange-500" },
    
  ],
};

function Skills() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">My Skills</h1>
      {Object.keys(skillsData).map((category, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillsData[category].map((skill, index) => (
              <div
                key={index}
                className={`p-5 rounded-lg shadow-lg text-white ${skill.color} ${
                  index % 2 === 0 ? "h-40" : "h-32"
                }`}
              >
                <h2 className="text-xl font-semibold mb-3">{skill.name}</h2>
               
                <div className="w-full bg-gray-300 rounded-full h-2.5">
                  <div
                    className="bg-white h-2.5 rounded-full"
                    style={{ width: `${(skill.score / 10) * 100}%` }}
                  />
                </div>
                <p className="mt-2 text-sm">{skill.score}/10</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
