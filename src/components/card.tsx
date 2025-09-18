import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CardProps = {
  title: string;
  shortDesc: string;
  fullDesc: string;
  Icon: React.ElementType;
  link: string;
};

function Card({ title, shortDesc, fullDesc, Icon, link }: CardProps) {
  const [hovered, setHovered] = useState(false);

  function ClickHandle() {
    const url = link.startsWith("http") ? link : `https://${link}`;
    window.open(url, "_blank", "noopener,noreferrer");
    console.log(url);
  }

  return (
    <motion.div
      onClick={ClickHandle}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="button"
      tabIndex={0}
      className="bg-white shadow-md rounded-lg self-start p-4 cursor-pointer transition-transform"
    >
      {Icon && <Icon className="w-6 h-6 text-gray-700" />}
      <h2 className="text-lg font-bold text-gray-800 mt-2">{title}</h2>

      {/* AnimatePresence handles mounting/unmounting animation */}
      <AnimatePresence mode="wait">
        {hovered ? (
          <motion.p
            key="full"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.25 }}
            className="text-sm text-gray-600"
          >
            {fullDesc}
          </motion.p>
        ) : (
          <motion.p
            key="short"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.25 }}
            className="text-sm text-gray-600"
          >
            {shortDesc}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Card;

