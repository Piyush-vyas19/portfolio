import React from "react";
import me from "../assets/me.jpeg";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-between px-10 md:px-32  bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]
 text-white">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold leading-tight">
          <TypeAnimation
            sequence={[
              "Hi, I'm Piyush", 2000,
              "I'm a Full Stack Developer", 2000,
              "I build smart AI-driven apps", 2000,
              "Let's create something amazing!", 2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 inline-block"
          />
        </h1>
        <p className="mt-6 text-gray-300">
          I’m a full stack developer passionate about solving real-world problems.
          I specialize in integrating agentic AI and LLMs to improve system efficiency and productivity.
          I build responsive, user-friendly web applications with clean code and thoughtful design.
        </p>
        <button className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:scale-105 transition">
          Contact
        </button>
      </div>
      <img
        src={me}
        alt="Profile"
        className="w-[300px] h-[300px] object-cover rounded-full border-4 border-purple-500 shadow-lg hidden md:block"
      />
    </div>
  );
}
