import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFigma,
  SiFramer,
  SiGit,
  SiAdobeillustrator,
} from "react-icons/si";

// Darken hex color utility
const darkenHex = (hex, percent = 15) => {
  const num = parseInt(hex.replace("#", ""), 16);
  let r = (num >> 16) - percent;
  let g = ((num >> 8) & 0x00ff) - percent;
  let b = (num & 0x0000ff) - percent;

  r = Math.max(0, r);
  g = Math.max(0, g);
  b = Math.max(0, b);

  return (
    "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0")
  );
};

const skills = [
  { icon: <SiHtml5 />, label: "HTML5", color: "#FDE8E8" },
  { icon: <SiCss3 />, label: "CSS3", color: "#E8F0FE" },
  { icon: <SiJavascript />, label: "JavaScript", color: "#FFF9DB" },
  { icon: <SiReact />, label: "React", color: "#E0F7FA" },
  { icon: <SiTailwindcss />, label: "Tailwind", color: "#E1F3F8" },
  { icon: <SiFramer />, label: "Framer", color: "#F3E8FF" },
  { icon: <SiFigma />, label: "Figma", color: "#FFE8F0" },
  { icon: <SiAdobeillustrator />, label: "Illustrator", color: "#FFF0E5" },
  { icon: <SiGit />, label: "Git", color: "#FDEFEF" },
];

// Duplicate multiple times for seamless infinite scroll
const extendedSkills = [...skills, ...skills, ...skills];

const SkillsCarousel = () => {
  const carouselRef = useRef(null);

useEffect(() => {
  const scrollContainer = carouselRef.current;
  if (!scrollContainer) return;

  const scrollSpeed = 6; // pixels per frame (adjust as needed)
  let animationFrameId;

  const scroll = () => {
    if (!scrollContainer) return;

    scrollContainer.scrollLeft += scrollSpeed;

    // Loop seamlessly
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
      scrollContainer.scrollLeft = 0;
    }

    animationFrameId = requestAnimationFrame(scroll);
  };

  animationFrameId = requestAnimationFrame(scroll);

  return () => cancelAnimationFrame(animationFrameId);
}, []);


  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-20 bg-gradient-to-b from-[#EFB6C8] via-[#EFB6C8] to-[#EFB6C8] text-white font-sans"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-center mb-10 mr-[1090px]"
      >
        Technical Skills
      </motion.h2>

      <motion.div
        ref={carouselRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex space-x-6 overflow-x-hidden px-4 md:px-10 py-4 scroll-smooth"
      >
        {extendedSkills.map((skill, index) => {
          const baseColor = skill.color;
          const hoverColor = darkenHex(baseColor, 20);

          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, backgroundColor: hoverColor }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="min-w-[110px] h-[110px] rounded-full shadow-md flex flex-col items-center justify-center text-[#5B5C89] cursor-pointer border border-[#e8e3d9] transition-all duration-300"
              style={{ backgroundColor: baseColor }}
            >
              <div className="text-3xl">{skill.icon}</div>
              <p className="text-xs font-semibold mt-1">{skill.label}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default SkillsCarousel;
