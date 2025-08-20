import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/ani.json";
import ChatBotPopup from "./ChatBotPopup";
import Navbar from "./Navbar";
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from "react-icons/fa";

const HeroWithNavbar = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div
      id="home"
      className="min-h-screen bg-[#8174A0] flex flex-col items-center font-sans px-5"
    >
      {/* Navbar fixed on top */}
      <Navbar onChatToggle={() => setShowChat(!showChat)} />

      {/* Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#A888B5] w-[1400px] h-[620px] rounded-3xl shadow-xl px-8 md:px-16 py-10 mt-20 relative overflow-hidden"
      >
        <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-6 md:gap-10 ml-14 mt-[-20px]">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 max-w-xl mt-32 ml-8"
          >
            <h1 className="text-5xl font-extrabold text-[#FFF7F3] leading-tight">
              Hello, I’m <br />
              <span className="text-[#FFD2A0]">Muskan Singh</span>
            </h1>
            <p className="text-white text-xl mt-[-10px]">
              I design with creativity and build with code. A hybrid of designer
              and developer, I craft digital experiences that are as functional
              as they are beautiful—where imagination meets execution.
            </p>
            <a
              href="#contact-me"
              className="bg-[#6D5B8D] hover:bg-[#8B74A4] mr-4 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-colors"
            >
              Let’s Connect
            </a>

            <a
              href="#projects"
              className="bg-[#E6C3FF] hover:bg-[#D1AFFF] text-[#2E2A35] px-6 py-3 rounded-lg font-semibold shadow-md transition-colors"
            >
              VIEW WORK
            </a>
          </motion.div>
          {/* Social Icons Bar */}{" "}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4"
          >
            {" "}
            {[
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/muskan-singh-70a694258/",
              },
              { icon: <FaGithub />, link: "https://github.com/007muskan" },
              { icon: <FaCode />, link: "https://leetcode.com/muskannsiingh" },
              {
                icon: <FaEnvelope />,
                link: "https://mail.google.com/mail/?view=cm&fs=1&to=muskannsiingh@gmail.com",
              },
            ].map(({ icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-white bg-[#8174A0] p-2 text-2xl rounded-full shadow-md hover:bg-[#EFB6C8] hover:text-[#5B5C89] transition-all"
              >
                {" "}
                {icon}{" "}
              </motion.a>
            ))}{" "}
          </motion.div>
          {/* Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-shrink-0 w-[340px] md:w-[620px] -mt-6"
          >
            <Lottie animationData={animationData} loop autoplay />
          </motion.div>
        </div>
      </motion.div>
      {showChat && <ChatBotPopup onClose={() => setShowChat(false)} />}
    </div>
  );
};

export default HeroWithNavbar;
