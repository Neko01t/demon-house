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
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
      className={`bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer p-4 flex gap-4 ${
        hovered ? "flex-col" : "flex-row"
      }`}
    >
      <motion.img
        layout
        src={image}
        alt={title}
        className="w-24 h-24 object-cover rounded-xl"
      />
      <motion.div layout className="flex flex-col justify-center">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-600 text-sm">
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
        "I have made a Website frontend with React-vite, tailwindcss and framer-motion k, it contains my knowledge with react and its libraries",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAGr6MVLAEzC-6TOV0ZXJHnz1AYqJKSt1HrQ&s",
    },
    {
      title: "Car Game",
      shortDesc: "The game I made with basic knowledge",
      fullDesc:
        "This was my first exprence with canvas in html and understanding the basics of how websites shows the amazes the internet with its power to be anything",
      image: "https://i.pinimg.com/736x/48/99/1f/48991f90e9a0eed6f972f7c310bdd3e0.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold mb-4">Hover Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;

