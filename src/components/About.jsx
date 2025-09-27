// src/components/About.jsx
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import aboutImg from '../assets/Female_Developer.jpg';
import award1 from "../assets/FirstAward.jpg";
import award2 from "../assets/SecondAward.jpg";
import award3 from "../assets/AwardThird.jpg";
import hackathonImg from "../assets/hackathon.jpg";

const skills = ["React", "Redux", "RTK Query", "Styled Components", "Formik", "Node.js"];

const awards = [
  { img: award1, title: "Spark Award - [Oct 2024]" },
  { img: award2, title: "Gems Award - [Oct 2024]" },
  { img: award3, title: "Jewels of Valtech - [Apr 2025]" },
];

const About = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % awards.length);
    }, 2500); // Change image every 2.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full px-6 py-12 space-y-20 bg-white">
      {/* === Top Section: About Me === */}
      <div className="flex justify-center align-item">
        <h3 className="text-3xl font-bold text-[#8A2BE2] mb-6">
          Working Experience
        </h3>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={aboutImg}
            alt="Animated Developer"
            className="rounded-2xl w-80 md:w-full bg-transparent"
          />
        </motion.div>

        {/* Right Side: Description */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 space-y-6"
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
            I am a{" "}
            <span className="font-semibold text-purple-600">
              Front-End Developer
            </span>{" "}
            with 2 years of experience at <strong>Valtech</strong>, building
            scalable B2B web applications. I am responsible for creating
            components and integrating APIs, using <strong>RTK Query</strong>,{" "}
            <strong>Redux</strong>, <strong>Styled Components</strong>, and{" "}
            <strong>Formik</strong>.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
            I started my journey as an Android Developer during my internship at
            HackAR Cove Technologies, where I learned <strong>Kotlin</strong>{" "}
            and <strong>Firebase</strong>.
          </p>

          {/* Skills Badges */}
          <div className="flex flex-wrap gap-3 mt-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="bg-purple-200 dark:bg-purple-800 text-purple-900 dark:text-purple-200 px-3 py-1 rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center align-item">
        <h3 className="text-3xl font-bold text-[#8A2BE2] mb-6">
          Awards & Achievements
        </h3>
      </div>

      {/* === Awards Section: Timeline left, Carousel right === */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left: Timeline / Description */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <ul className="relative border-l-4 border-purple-600 pl-10 space-y-8">
            {awards.map((award, i) => (
              <li key={i} className="relative">
                {/* Dot */}
                <span className="absolute -left-6 top-1 w-6 h-6 bg-purple-600 rounded-full"></span>

                {/* Title with space from dot */}
                <p className="text-lg font-semibold ml-2">{award.title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Carousel of award images */}
        <div className="w-80 h-80 md:w-200 md:h-96 bg-gray-100 rounded-xl shadow-lg overflow-hidden">
          <img
            src={awards[current].img}
            alt={awards[current].title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex justify-center align-item">
        <h3 className="text-3xl font-bold text-[#8A2BE2] mb-6">Hackathon Experience</h3>
      </div>

      {/* === Hackathon Section === */}
      <div className="flex flex-col md:flex-row items-center gap-12 mt-20">
        {/* Left: Hackathon Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={hackathonImg}
            alt="Hackathon"
            className="rounded-2xl w-80 md:w-full object-cover shadow-lg"
          />
        </motion.div>

        {/* Right: Hackathon Description */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 space-y-4"
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
            Participated in the <strong>AutoDevIQ Hackathon</strong>, where our
            team built an AI-powered developer productivity platform. 
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
          This platform is designed for developers and teams who want AI-powered code assistance. By integrating large language models, it allows users to query their codebases, generate unit tests, run React apps, and perform visual regression testing with minimal manual effort. The combination of Next.js frontend, FastAPI backend, and LLM capabilities provides a responsive, scalable, and intelligent developer workflow
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
