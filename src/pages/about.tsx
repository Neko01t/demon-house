import React, { useState } from "react";
import { motion } from "framer-motion";

type CardProps = {
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
};

const Card: React.FC<CardProps> = ({ title, shortDesc, fullDesc, image }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      transition={{ layout: { duration: 0.35, ease: "easeInOut" }, type: "spring", stiffness: 200 }}
      className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden cursor-pointer p-5 flex flex-col gap-4 border border-gray-200 hover:shadow-2xl"
    >
      <motion.img
        layout
        src={image}
        alt={title}
        className={`object-cover rounded-xl transition-all duration-300 ${
          hovered ? "w-full h-48" : "w-24 h-24"
        }`}
      />
      <motion.div layout className="flex flex-col">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p
          className={`text-gray-600 text-sm transition-all duration-300 ${
            hovered ? "line-clamp-none" : "line-clamp-2"
          }`}
        >
          {hovered ? fullDesc : shortDesc}
        </p>
      </motion.div>
    </motion.div>
  );
};

const CardGrid: React.FC = () => {
  const cards = [
    {
      title: "Website",
      shortDesc: "My cool own Website",
      fullDesc:
        "I have made a Website frontend with React-vite, tailwindcss and framer-motion, it contains my knowledge with react and its libraries.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAGr6MVLAEzC-6TOV0ZXJHnz1AYqJKSt1HrQ&s",
    },
    {
      title: "Car Game",
      shortDesc: "The game I made with basic knowledge",
      fullDesc:
        "This was my first experience with canvas in HTML and understanding the basics of how websites amaze the internet with their power to be anything.",
      image: "https://i.pinimg.com/736x/48/99/1f/48991f90e9a0eed6f972f7c310bdd3e0.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-10 flex flex-col items-center gap-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">✨ Hover Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;

