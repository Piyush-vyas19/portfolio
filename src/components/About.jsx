import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen py-20 px-6 md:px-32 bg-[#0f0c29] relative">
      <h2 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
        About
      </h2>
      <p className="text-center max-w-3xl mx-auto text-gray-300 mb-10">
       "I am Piyush Vyas, an undergraduate student at Vellore Institute of Technology, Chennai, pursuing a degree in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning. I am proficient in the MERN stack and have a strong foundation in machine learning and deep learning techniques. Additionally, I have studied AWS cloud technologies as part of my curriculum and am actively exploring cloud-based solution deployment. Beyond academics, I am an adventurous individual with a deep appreciation for nature, scenic landscapes, and mountain environments. I also have a keen interest in economics and regularly engage in equity market trading
      </p>
      <div className="flex justify-center flex-wrap gap-6">
        {[FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs].map((Icon, idx) => (
          <Icon key={idx} className="text-4xl text-purple-400 hover:text-cyan-400 transition" />
        ))}
      </div>
    </div>
  );
}
