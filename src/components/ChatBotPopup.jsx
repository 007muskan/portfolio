// src/components/ChatBotPopup.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const questions = [
  {
    id: 1,
    text: "Tell me about yourself",
    answer:
      "Hi! I'm Muskan Singh, a final-year Computer Science student at Govind Ballabh Pant Institute of Engineering and Technology, Uttarakhand. I love web development, AI, and solving real-world problems through code.",
  },
  {
    id: 2,
    text: "Your education?",
    answer:
      "B.Tech in Computer Science and Engineering, final year. CGPA: 676/950. Relevant coursework: Data Structures, Algorithms, Web Development, AI/ML.",
  },
  {
    id: 3,
    text: "Skills?",
    answer:
      "Programming: Java, Python, JavaScript, React, Node.js, MERN Stack\nDSA: Arrays, Linked Lists, Trees, Graphs\nTools: Git, VSCode, Figma, Tailwind CSS",
  },
  {
    id: 4,
    text: "Projects?",
    answer:
      "1. AI Career Coach: Web app recommending internships and resume feedback.\n2. Zuno Chat App: Real-time chat with WebSockets.\n3. Sahayak: LangChain-based app for government internships.\n(More on request!)",
  },
  {
    id: 5,
    text: "Experience?",
    answer:
      "Visual Design Intern at BetterMyStay: Improved UI/UX, designed onboarding screens, responsive layouts.\nAlso contributed to bug reporting and frontend enhancements.",
  },
  {
    id: 6,
    text: "Contact info?",
    answer:
      "Email: muskan@example.com\nLinkedIn: linkedin.com/in/muskan\nPortfolio: muskansportfolio.com",
  },
];

const ChatBotPopup = ({ onClose }) => {
  const [chat, setChat] = useState([
    {
      sender: "bot",
      text: "Hi! I’m Muskan. Ask me anything by clicking the questions below 💬",
    },
  ]);

  const chatEndRef = useRef(null);

  // Scroll to bottom whenever chat updates
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleQuestionClick = (answer) => {
    setChat((prev) => [...prev, { sender: "user", text: answer.question }]);
    setTimeout(() => {
      setChat((prev) => [...prev, { sender: "bot", text: answer.answer }]);
    }, 500); // simulate bot typing delay
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-24 right-8 w-[350px] h-[500px] bg-[#57375D] rounded-2xl shadow-2xl p-4 z-50 flex flex-col"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-2 border-b border-white pb-2">
        <h2 className="text-lg font-bold text-[#FFD2A0]">Chat with Me</h2>
        <button
          className="text-white font-semibold hover:text-orange-300"
          onClick={onClose}
        >
          ✕
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto mb-2 space-y-2">
        {chat.map((c, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${
              c.sender === "bot" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-lg max-w-[70%] whitespace-pre-line ${
                c.sender === "bot"
                  ? "bg-purple-100 text-purple-900"
                  : "bg-[#E7CBCB] text-black"
              }`}
            >
              {c.text}
            </div>
          </motion.div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Questions */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-white">
        {questions.map((q) => (
          <button
            key={q.id}
            onClick={() =>
              handleQuestionClick({ question: q.text, answer: q.answer })
            }
            className="bg-gradient-to-r from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 text-sm px-3 py-1 rounded-full transition"
          >
            {q.text}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default ChatBotPopup;
