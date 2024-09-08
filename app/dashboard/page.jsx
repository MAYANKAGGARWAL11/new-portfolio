import React from "react";
import Image from "next/image";

function Dashboard() {
    return (
          <div className="bg-[#e4ccde] p-6 rounded-lg shadow-lg  flex flex-col items-center mt-7">
            {/* Profile Image */}
            <img
              src="/mypic.jpg"  // Replace with your actual image URL
              alt="Mayank Aggarwal"
              className="w-40 h-25 rounded-full object-cover mb-4 "
            />
            {/* Name */}
            <h2 className="text-2xl font-semibold mb-2 mt-3 text-[#1E201E] ">Mayank Aggarwal</h2>
            {/* Description */}
            <p className="text-center  text-[#1E201E]   mt-7">
            I am a software engineering student at Graphic Era Hill University in Dehradun, India. Set to graduate in 2025, I have already established myself as a promising full-stack developer with a strong foundation in both front-end and back-end technologies.
            Currently maintaining an impressive CGPA of 8.33, my academic excellence is matched by my practical skills and project experience. My technical repertoire includes proficiency in languages such as C/C++, JavaScript, TypeScript, and Python, as well as expertise in popular frameworks like React, Node.js, and Next.js.
            My passion for web development extends beyond just coding. I have a keen eye for user experience and responsive design, implementing these principles using modern CSS frameworks like Tailwind CSS. I'm also well-versed in state management solutions such as Redux and Context API, ensuring scalable and efficient front-end architectures.
            On the back-end, I've worked extensively with RESTful APIs and have experience with both SQL and NoSQL databases, including PostgreSQL and MongoDB. I'm proficient in using ORMs like Drizzle ORM to optimize database operations and ensure data integrity
            </p>
          </div>
   
      );
}

export default Dashboard;
