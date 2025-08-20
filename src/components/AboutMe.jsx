import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/chibi.png";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#8174A0] via-[#8174A0] to-[#EFB6C8] text-[#FFD2A0] py-24 px-6 md:px-20 font-sans overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* 👈 Left: Chibi Illustration with Animated Blob */}
        <div className="flex justify-center relative">
          {/* Animated Blob */}
          <motion.div
            initial={{ scale: 0.8, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute w-[340px] h-[330px] bg-[#B9D9EB] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] z-0"
          />
          {/* Chibi image */}
          <motion.img
            src={aboutImg}
            alt="Muskan Chibi"
            className="relative z-10 w-[240px] md:w-[280px] drop-shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* 👉 Right: Text Content */}
        <div className="space-y-8 mr-24">
          {/* Top Section */}
          <div>
            <motion.h2
              className="text-4xl font-extrabold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Me, in a nutshell?
            </motion.h2>
            <motion.p
              className="text-lg leading-relaxed bg-[#A888B5] backdrop-blur-md p-4 rounded-xl shadow-md text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              A creative problem-solver who turns ideas into seamless digital
              experiences through design and development.
            </motion.p>
          </div>

          {/* Bottom Section */}
          <div>
            <motion.h2
              className="text-3xl font-extrabold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Outside the Code
            </motion.h2>
            <motion.p
              className="text-lg leading-relaxed bg-[#A888B5] backdrop-blur-md p-4 rounded-xl shadow-md text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              When I’m not building interfaces, I’m usually sketching playful
              layouts in Figma, rewatching cozy anime scenes, or diving into new
              tech pieces just to see what kind of magic they hold.
            </motion.p>

            <motion.a
              href="/muskan_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Muskan_Resume.pdf"
              className="mt-6 inline-block px-6 py-3 border-2 border-[#FFD2A0] text-[#FFD2A0] rounded-full font-medium hover:bg-[#FFD2A0] hover:text-[#8174A0] transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Resume
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
