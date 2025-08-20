import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { BsChatDots } from "react-icons/bs";

const Navbar = ({ onChatToggle }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={
        scrolled
          ? {
              backgroundColor: "#8174A0",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }
          : {}
      }
      transition={{ duration: 0.3 }}
      className="fixed w-full top-0 left-0 z-50 px-8 py-4 flex justify-between items-center"
    >
      {/* Links */}
      <div className="flex gap-8 text-[#FFD2A0] font-medium">
        {["home", "about", "skills", "projects", "contact"].map((id) => (
          <motion.div key={id} whileHover={{ scale: 1.05, color: "#98A1BC" }}>
            <Link
              to={id}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-[#FFD2A0] hover:text-[#98A1BC]"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Chat Button */}
      <motion.button
        onClick={onChatToggle}
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 250, damping: 18 }}
        className="relative w-11 h-11 rounded-full bg-gradient-to-br from-[#B5828C] to-[#FBF3D5] border border-[#9CAFAA] shadow-md hover:shadow-xl flex items-center justify-center"
      >
        <BsChatDots className="text-[#8174A0] text-lg z-10" />

        {/* Blinking indicator */}
        <span className="absolute top-1 right-[-1px] w-2 h-2 bg-orange-300 rounded-full animate-pulse z-20"></span>
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
