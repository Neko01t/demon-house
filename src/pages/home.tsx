import React from "react";
import { motion } from 'framer-motion'
interface homeProps{
  onSwitchForm: (form : "login" | "signup" | "home" ) => void
}
export default function Home({onSwitchForm}: homeProps) {
  const text = "Test_Framer".split("")
  return (
    <div className="flex flex-col items-center justify-center flex-1 text-center px-6 py-12">
      <h2 className="text-4xl font-bold mb-4">Welcome to MyApp 🚀</h2>
      <p className="text-lg text-gray-700 max-w-2xl mb-6">
        This is my homepage for now. i made this as homepage because i wanted to,being creator of it i can do anything
        personal info here.Will add sections for features, highlights, or a call-to-action.
      </p>

      <div className="space-x-4">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition">
          Get Started
        </button>
        <button
        onClick={()=>onSwitchForm('login')}
        className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg shadow hover:bg-gray-300 transition">
          login now
        </button>
      </div>

      <section className="mt-16 grid gap-8 md:grid-cols-3 max-w-5xl w-full">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Fast</h3>
          <p className="text-gray-600">
            Built with React and Tailwind, and used neovim as code-editor
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Cosmos</h3>
          <p className="text-gray-600">
            Custom made by Me with my own hands.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2"> mew?</h3>
          <p className="text-gray-600">
            cat can run up to 30 miles per hour
          </p>

          <motion.div
            initial="hidden"
           animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {text.map((char, i) => (
              <motion.span
                key={i}
              variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
               transition={{ duration: 0.4 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
        </motion.div>
        </div>
      </section>
    </div>
  );
}

