import React from "react";
import Card from "../components/card.tsx";
import { Globe, Car ,Tractor} from 'lucide-react';
import { motion } from "framer-motion";
function About() {
  const cards = [
    {
      title: "Website",
      shortDesc: "My cool website",
      fullDesc:
        "I built a website frontend with React, Vite, TailwindCSS, and more. It shows my skills with React.",
      Icon:Globe,
      link:"www.google.com"
    },
    {
      title: "Car Game",
      shortDesc: "My first game",
      fullDesc:
        "This was my first HTML canvas game. It helped me understand how websites can be interactive.",
      Icon:Car,
      link:"www.bing.com"
    },
    {
      title:"farm layout game",
      shortDesc:"Discover newland and make it your farm",
      fullDesc:"This game have simple contorl with wasd and qe u can land on ground with shift after landing you can create differenet building and based on you layou you get scored ",
      Icon:Tractor,
      link:"www.github.com"

    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center gap-8">
      <h1 className="text-3xl font-bold text-gray-800">👋 About Me</h1>
      <p className="text-gray-600 max-w-2xl text-center">
        Hi, I’m Om! I love building projects with React and exploring web
        development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {cards.map((card, i) => (
          <motion.div
          initial={{opacity: 0,x:10}}
          animate={{opacity:1,x:0}}
          transition={{delay:i*0.2, type:"spring",stiffness:225}}
          >
          <Card key={i} {...card} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;

