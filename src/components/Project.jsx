import React from "react";
import survey from "../assets/survey.png";
import complaint from "../assets/complaint.png";
export default function Projects() {
  const projects = [
    {
      title: "Open-Ended Survey Response Analysis System",
      desc: "Automated evaluation of free-text survey responses using LLMs. Developed a robust pipeline using CrewAI, LangChain, and Groq’s Mixtral model to score and classify open ended survey responses .\ Implemented agents for quality assessment, contextual relevance, sentiment & toxicity detection, and product relevance evaluation.",
      img: survey,
    },
    {
      title: "Complaint management system for muncipal coorporation in India",
      desc: "MERN stack-based public issue tracking system.\ Built using React, React Native, Node.js, MongoDB, Express.\
      Enabled users to raise, track complaints; authorities resolve efficiently",
      img: complaint,
    },
    {
      title: "Next-Generation Real Estate Platform",
      desc: "Developed a full-fledged real estate platform using the MERN stack, enabling seamless interaction between buyers and sellers. Sellers can effortlessly list their properties with an enhanced user experience, including automated property description generation powered by large language models (LLMs). Buyers benefit from real-time property price predictions using an innovative VGBoost model that incorporates area-specific sentiment analysis for improved forecasting accuracy ",
      img: complaint,
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 md:px-32 bg-gradient-to-b from-[#1b2845] to-[#0f0c29]">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
        Recent Work
      </h2>
      <p className="text-center text-gray-400 mb-12">
        A collection of projects I’ve worked on.
      </p>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-300 mb-4">{p.desc}</p>
            <img src={p.img} alt={p.title} className="rounded-md shadow" />
            <div className="mt-4 flex gap-4">
              <a href="#\" className="hover:text-purple-400">GitHub</a>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
