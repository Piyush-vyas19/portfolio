import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";
export default function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
     console.log(form.current);

    emailjs
      .sendForm(
        "service_79p488u", // from EmailJS dashboard
        "template_fd25ahl", // from EmailJS dashboard
        form.current,
        "-4te1KLN04IZk9bw9" // from EmailJS dashboard
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Failed to send message:", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };
  return (
    <div className="min-h-screen py-20 px-6 md:px-32 bg-[#0f0c29]">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
        Contact
      </h2>
      <div className="mt-10 grid md:grid-cols-2 gap-10">
        <div className="space-y-6 text-gray-300">
          <p>📧 piyushvyas275@gmail.com</p>
<p>📍 Vellore Institute of Technology, Chennai</p>
<p className="flex items-center gap-2">
  <FaLinkedin className="text-blue-500" />
  <a
    href="https://www.linkedin.com/in/piyush-vyas-58351b230/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    LinkedIn
  </a>
</p>

        </div>
        <form className="bg-white/5 backdrop-blur p-6 rounded-lg space-y-4" onSubmit={sendEmail} ref={form}>
          <input type="text" name="user_name" placeholder="Name" className="w-full px-4 py-2 bg-transparent border border-white/20 rounded" />
          <input type="email" name="user_email" placeholder="Email" className="w-full px-4 py-2 bg-transparent border border-white/20 rounded" />
          <textarea placeholder="Message" rows="4" name="message" className="w-full px-4 py-2 bg-transparent border border-white/20 rounded"></textarea>
          <button type="submit" className="px-6 py-2 rounded bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:scale-105 transition">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
