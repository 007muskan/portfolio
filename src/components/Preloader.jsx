import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiFigma,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiVercel,
  SiRender,
  SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa"; // Java fix

const skillIcons = [
  <SiReact className="text-sky-400" />,
  <SiNextdotjs className="text-gray-800" />,
  <SiHtml5 className="text-orange-500" />,
  <SiFigma className="text-pink-400" />,
  <SiCss3 className="text-blue-500" />,
  <SiJavascript className="text-yellow-400" />,
  <FaJava className="text-red-500" />,
  <SiTailwindcss className="text-sky-300" />,
  <SiVercel className="text-black" />,
  <SiRender className="text-purple-400" />,
  <SiGithub className="text-gray-700" />,
];

export default function Preloader() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 transition-opacity duration-700 z-50 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Top-left geometric pattern with slow movement */}
      <motion.div
        className="absolute top-[-80px] left-[-80px] grid grid-cols-2 w-72 h-72"
        animate={{ x: [0, 15, -15, 0], y: [0, -10, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-red-200 rounded-tr-full"></div>
        <div className="bg-yellow-200"></div>
        <div className="bg-blue-100 rounded-bl-full"></div>
        <div className="bg-green-200 rounded-full"></div>
      </motion.div>

      {/* Bottom-right geometric pattern with slow movement */}
      <motion.div
        className="absolute bottom-[-80px] right-[-80px] grid grid-cols-2 w-72 h-72"
        animate={{ x: [0, -15, 15, 0], y: [0, 10, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-green-200 rounded-tl-full"></div>
        <div className="bg-red-200 rounded-full"></div>
        <div className="bg-yellow-200"></div>
        <div className="bg-blue-100 rounded-br-full"></div>
      </motion.div>

      {/* Floating pastel dots */}
      <div className="absolute left-[35%] top-[30%] w-8 h-8 bg-pink-200 rounded-full animate-pulseFloat"></div>
      <div className="absolute right-[30%] bottom-[35%] w-6 h-6 bg-blue-200 rounded-full animate-pulseFloat delay-300"></div>
      <div className="absolute right-[45%] top-[50%] w-5 h-5 bg-green-200 rounded-full animate-pulseFloat delay-500"></div>

      {/* Orbiting skill icons (BIGGER circle now) */}
      <motion.div
        className="relative w-[450px] h-[450px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        {skillIcons.map((icon, i) => {
          const angle = (i / skillIcons.length) * (2 * Math.PI);
          const radius = 240; // Increased radius
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.div
              key={i}
              className="absolute text-4xl"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {icon}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Center text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute text-center"
      >
        <h1 className="text-5xl font-bold text-gray-800 tracking-wide">
          Hi, Friend!
        </h1>
        <p className="mt-2 text-lg text-gray-600 font-medium">
          Where creativity meets functionality.
        </p>
      </motion.div>
    </div>
  );
}
