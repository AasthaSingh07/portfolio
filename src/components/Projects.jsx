// src/components/Projects.jsx
import React from "react";
import hotelWebsite from '../assets/hotelWebsite.png';
import autoDevIQ from '../assets/AutoDev_IQ.png';
import portfolio from '../assets/Portfolio.png';

const projects = [
  {
    title: "Hotel Website",
    img: hotelWebsite,
    description: "This personal project helped me learn and practice building a fully responsive website that works seamlessly across different devices.",
    link: "https://hotel-website07.netlify.app/",
  },
  {
    title: "Portfolio",
    img: portfolio,
    description: "Front-End Portfolio Dashboard – A responsive and interactive portfolio dashboard built with React, Tailwind CSS, and Framer Motion. It showcases personal projects, skills, awards, and achievements with animated transitions. The dashboard integrates dynamic components, such as a carousel for awards, animated skill badges, and project cards with links to live deployed projects. The UI is optimized for both desktop and mobile, providing a smooth and engaging experience.",
    link: "https://aasthasingh07.github.io/portfolio",
  },
  {
    title: "AutoDev IQ",
    img: autoDevIQ,
    description: "This platform is designed for developers and teams who want AI-powered code assistance. By integrating large language models, it allows users to query their codebases, generate unit tests, run React apps, and perform visual regression testing with minimal manual effort. The combination of Next.js frontend, FastAPI backend, and LLM capabilities provides a responsive, scalable, and intelligent developer workflow."
  }
];

const Projects = () => {
  return (
    <section className="w-full px-6 py-12 space-y-12 bg-white">
      <h2 className="text-4xl font-bold text-black text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-70 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold text-purple-700">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2 flex-1">
                {project.description}
              </p>
              <div className="flex justify-center mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 mt-4 text-white text-center bg-[#8A2BE2] px-3 py-1.5 rounded hover:bg-[#DA70D6] transition"
              >
                View Deployed Project
              </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
