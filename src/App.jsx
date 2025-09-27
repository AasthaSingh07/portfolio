import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import aboutImg from "./assets/Female_Developer.jpg";
import projectImg from "./assets/projects 2.jpg";
import resumeImg from "./assets/Resume.jpg";
import Card from "./components/Card";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <main className="flex flex-col justify-center items-center flex-1 px-6 md:px-20 py-12 gap-10">
              <h1 className="text-4xl md:text-5xl font-bold text-black text-center">
                Welcome to my Portfolio
              </h1>
              <p className="text-lg md:text-xl text-gray-700 text-center mb-8">
                Please have a look at the sections below to know more about me,
                my projects, and my resume.
              </p>

              <div className="flex flex-col md:flex-row justify-center items-center gap-8 flex-wrap">
                <Card image={aboutImg} buttonText="View About" path="/about" />
                <Card
                  image={projectImg}
                  buttonText="View Projects"
                  path="/projects"
                />
                <Card
                  image={resumeImg}
                  buttonText="View Resume"
                  path="/Resume.pdf"
                  isExternal={true}
                />
              </div>
            </main>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
