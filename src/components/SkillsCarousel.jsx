import React, { useEffect, useRef, useState } from "react";
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
  const [translateX, setTranslateX] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const animationRef = useRef(null);
  const isRunning = useRef(true);

  useEffect(() => {
    const animate = () => {
      if (isRunning.current) {
        setTranslateX((prev) => {
          const newValue = prev - 1; // Adjust speed here (lower = slower, higher = faster)
          // Reset when we've scrolled through one full set
          const resetPoint = -(skills.length * 126); // 110px width + 16px gap
          return newValue <= resetPoint ? 0 : newValue;
        });
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    isRunning.current = false; // Pause animation on hover
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    isRunning.current = true; // Resume animation
  };

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-20 bg-gradient-to-b from-[#EFB6C8] via-[#EFB6C8] to-[#EFB6C8] text-white font-sans"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-left mb-10"
      >
        Technical Skills
      </motion.h2>

      <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex space-x-4"
          style={{
            transform: `translateX(${translateX}px)`,
            width: `${extendedSkills.length * 126}px`, // 110px + 16px gap
          }}
        >
          {extendedSkills.map((skill, index) => {
            const isHovered = hoveredIndex === index;
            const baseColor = skill.color;
            const hoverColor = darkenHex(baseColor, 20);

            return (
              <div
                key={index}
                className="min-w-[110px] h-[110px] rounded-full shadow-md flex flex-col items-center justify-center text-[#5B5C89] cursor-pointer border border-[#e8e3d9] transition-all duration-300 flex-shrink-0"
                style={{
                  backgroundColor: isHovered ? hoverColor : baseColor,
                  transform: isHovered ? "scale(1.1)" : "scale(1)",
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="text-3xl">{skill.icon}</div>
                <p className="text-xs font-semibold mt-1">{skill.label}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsCarousel;
