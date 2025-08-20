import { motion } from "framer-motion";
import { FaLinkedin, FaCode, FaGithub, FaEnvelope } from "react-icons/fa6";
import Lottie from "lottie-react";
import mailAnimation from "../assets/ping.json";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "muskannsiingh@gmail.com",
          time: new Date().toLocaleString(),
        },
        publicKey
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#8174A0] text-white py-16 px-8 md:px-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#f4ebd3]">
            Let's Connect!
          </h2>
          <p className="text-lg text-[#c8c8d0] mb-4">
            Got a project in mind or just want to geek out about coding?
            <span className="font-semibold text-[#FFD2A0]">
              {" "}
              Shoot me a message.
            </span>
          </p>
          <p className="text-lg text-[#c8c8d0] mb-10">
            Let's create something{" "}
            <span className="italic text-[#a89cff]">awesome</span> together.
          </p>

          {/* Fun Illustration */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-40 md:w-39 ml-[400px] mb-[100px]"
          >
            <Lottie animationData={mailAnimation} loop={true} />
          </motion.div>

          {/* Socials */}
          <div className="flex gap-6 mt-10 text-2xl">
            {[
              {
                icon: <FaLinkedin />,
                url: "https://www.linkedin.com/in/muskan-singh-70a694258/",
              },
              { icon: <FaCode />, url: "https://leetcode.com/muskannsiingh" },
              { icon: <FaGithub />, url: "https://github.com/007muskan" },
              { icon: <FaEnvelope />, url: "mailto:muskannsiingh@gmail.com" },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="hover:text-[#FFD2A0] transition-colors duration-200"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full px-4 py-3 rounded-md border border-[#f4ebd3] bg-transparent text-white focus:ring-2 focus:ring-[#a89cff] outline-none placeholder-gray-300"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-md border border-[#f4ebd3] bg-transparent text-white focus:ring-2 focus:ring-[#a89cff] outline-none placeholder-gray-300"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-md border border-[#f4ebd3] bg-transparent text-white focus:ring-2 focus:ring-[#a89cff] outline-none placeholder-gray-300"
            />

            {/* Status Messages */}
            {submitStatus === "success" && (
              <p className="text-green-400 text-sm">
                Message sent successfully! 🎉
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-400 text-sm">
                Failed to send message. Please try again.
              </p>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              className={`self-end font-semibold px-6 py-3 rounded-lg shadow-md transition-colors ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed text-gray-600"
                  : "bg-[#a89cff] hover:bg-[#8f7be6] text-black"
              }`}
            >
              {isSubmitting ? "Sending..." : "Peww!"}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
