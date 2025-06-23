import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-[#0f0c29] min-h-screen text-white font-sans">
      <Navbar  />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="work"><Projects /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}
