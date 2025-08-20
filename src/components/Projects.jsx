import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import zunoImage from "../assets/zuno.jpg";
import codeReviewerImage from "../assets/review.jpg";
import extensionImage from "../assets/ex.jpg";

const projects = [
  {
    title: "Zuno: A Realtime Chat Application",
    description:
      "A real-time messaging application supporting one-to-one and group conversations. Built with React.js, Node.js, Express.js, MongoDB, and Socket.io for instant communication. Features include user authentication, live notifications, message timestamps, and responsive UI design.",
    features: [
      "Real-time Messaging",
      "Live notifications for new messages",
      "User Presence Detection",
      "Clean & Responsive UI",
    ],
    tech: ["React", "Socket.io", "Node.js", "MongoDB", "Tailwind CSS"],
    image: zunoImage,
    demo: "https://zuno-3sn0.onrender.com/",
    github: "https://github.com/007muskan/zuno-chat-app",
  },
  {
    title: "AI Code Reviewer",
    description:
      "An intelligent code review assistant that analyzes and provides feedback on user-submitted code. Integrates Gemini API for AI-powered debugging and supports syntax-aware reviews for JavaScript, Python, and other languages.",
    features: [
      "Live Code Editor",
      "Comment & Review Threads",
      "Seamless backend API integration for reliable data flow",
      "Scalable Architecture",
    ],
    tech: ["React", "Monaco Editor", "Express", "MongoDB", "Gemini API"],
    image: codeReviewerImage,
    demo: "#",
    github: "https://github.com/007muskan/code-reviewer",
  },
  {
    title: "QuickBrief: An AI Based Chrome Extension",
    description:
      "An intelligent Chrome extension that automatically scans and summarizes articles and documents found online. Provides users with quick, digestible content summaries in multiple formats to enhance reading efficiency and information consumption.",
    features: [
      "AI-powered content analysis and summarization",
      "Real-time processing of web content",
      "Lightweight & Fast",
      "Customizable Settings",
    ],
    tech: ["Chrome APIs", "JavaScript", "Manifest V3"],
    image: extensionImage,
    demo: "#",
    github: "https://github.com/007muskan/QuickBrief",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-16 bg-gradient-to-b from-[#EFB6C8] via-[#8174A0] to-[#8174A0] text-white font-sans space-y-28 mt-[-20px]"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-10 ml-[-1130px]"
      >
        My Projects
      </motion.h2>

      {/* Project Layout */}
      {projects.map((proj, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* Left: Project Image */}
          <div className="flex justify-center">
            <motion.img
              src={proj.image}
              alt={proj.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl shadow-xl object-cover h-[320px] w-full max-w-[600px]"
            />
          </div>

          {/* Right: Details */}
          <div className="space-y-6">
            <h3 className="text-3xl font-extrabold">{proj.title}</h3>
            <p className="text-black">{proj.description}</p>

            {/* Features */}
            <div>
              <h4 className="text-xl font-semibold mb-2">Features</h4>
              <ul className="list-disc list-inside text-black space-y-1">
                {proj.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xl font-semibold mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium bg-white/10 text-white px-3 py-1 rounded-full border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-white/10 text-[#FFC785] hover:bg-white/20 transition"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={proj.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-[#FFC785] text-black hover:bg-[#FFAF45] transition"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </div>
        </motion.div>
      ))}
      {/* See More Button */}
      <div className="flex justify-end pt-10 border-t border-gray-500">
        <a
          href="https://github.com/007muskan"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition"
        >
          See More
        </a>
      </div>
    </section>
  );
};

export default Projects;
