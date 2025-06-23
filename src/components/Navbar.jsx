import React from "react";

export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md bg-white/10 border border-white/10 px-10 py-3 rounded-full shadow-lg">
      <ul className="flex gap-10 text-sm tracking-wider font-medium">
        <li onClick={() => scrollToSection("home")} className="hover:text-purple-400 transition-all cursor-pointer">HOME</li>
        <li onClick={() => scrollToSection("about")} className="hover:text-purple-400 transition-all cursor-pointer">ABOUT</li>
        <li onClick={() => scrollToSection("work")} className="hover:text-purple-400 transition-all cursor-pointer">WORK</li>
        <li onClick={() => scrollToSection("contact")} className="hover:text-purple-400 transition-all cursor-pointer">CONTACT</li>
        <li>
          <a
            href="/New_resume_final.pdf"
            download
            className="hover:text-purple-400 transition-all"
          >
            RESUME
          </a>
        </li>
      </ul>
    </nav>
  );
}
