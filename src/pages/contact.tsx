import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter,Instagram } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-2 bg-gray-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8 space-y-6 border border-gray-600">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Contact Me</h1>
        <p className="text-gray-600 text-center">
          Here are the best ways to reach me.
        </p>

        <div className="space-y-4">
          <a
            href="mailto:nekooo1m@gmail.com"
            className="flex items-center gap-3 p-4 transition-all group border rounded-xl hover:bg-sky-50 cursor-pointer border-gray-600 hover:border-gray-500 hover:bg-gray-700 hover:text-white hover:scale-[1.02]"
          >
            <Mail className="text-sky-500 group-hover:text-white" />
            <span >nekooo1m@gmail.com</span>
          </a>

          <a
            href="https://github.com/Neko01t"
            className="flex items-center gap-3 p-4 border group rounded-xl hover:bg-sky-50 cursor-pointer transition-all hover:bg-sky-50 border-gray-600 hover:border-gray-500 hover:bg-gray-700 hover:text-white hover:scale-[1.02]"
          >
            <Github className="text-green-500 group-hover:text-white" />
            <span>Neko01t</span>
          </a>
          <div className="flex items-center gap-3 p-4 border group rounded-xl bg-gray-50 l hover:bg-sky-50 border-gray-600  hover:bg-sky-50 border-gray-600 hover:border-gray-500 hover:bg-gray-700 hover:text-white hover:scale-[1.02]">
            <MapPin className="text-red-500 group-hover:text-white" />
            <span>Maharashtra, India</span>
          </div>

          <div className="flex justify-center gap-6 pt-4">
            <a href="https://www.linkedin.com/in/om-sonawane-a68814349/" target="_blank" className="hover:text-sky-700">
              <Linkedin />
            </a>
            <a href="https://www.instagram.com/user1.61803398875" target="_blank" className="hover:text-blue-500">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

