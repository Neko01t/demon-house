import React, { useState } from "react";
import { motion } from "framer-motion"
type CardProps = {
  title: string;
  shortDesc: string;
  fullDesc: string;
  Icon: React.ElementType ;
  link:string;
};

function Card({ title, shortDesc, fullDesc, Icon, link }: CardProps) {
  const [hovered, setHovered] = useState(false);
  function ClickHandle(){
    window.open(`https://${link}`, '_blank', 'noopener,noreferrer');
    console.log(link)
  }
  return (
    <motion.div
      onClick={ClickHandle}
      whileHover={{scale:1.2}}
      transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white shadow-md rounded-lg self-start p-4 cursor-pointer transition-transform"
    >

      {Icon && (
        <Icon />
      )}
      <h2 className="text-lg font-bold text-gray-800 mt-2">{title}</h2>
      <p className="text-sm text-gray-600`">
        {hovered ? fullDesc : shortDesc}
      </p>
    </motion.div>
  );
}

export default Card;

