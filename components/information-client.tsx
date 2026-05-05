"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  bio: string;
  bioExtended: string;
  instagram: string;
}

export default function InformationClient({ bio, bioExtended, instagram }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [buttonText, setButtonText] = useState("READ MORE");

  const handleToggle = () => {
    if (isExpanded) {
      setIsExpanded(false);
      setTimeout(() => setButtonText("READ MORE"), 800);
    } else {
      setIsExpanded(true);
      setButtonText("READ LESS");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="w-full md:max-w-[80%]"
    >
      <p className="font-mono font-bold text-lg md:text-2xl lg:text-3xl leading-[1.0] tracking-tight pb-1">
        {bio}
      </p>

      {bioExtended && (
        <div
          className="relative overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ maxHeight: isExpanded ? "2000px" : "0px" }}
        >
          <p className="font-mono font-bold text-lg md:text-2xl lg:text-3xl leading-[1.0] tracking-tight pt-6 pb-1">
            {bioExtended}
          </p>
        </div>
      )}

      {bioExtended && (
        <button
          onClick={handleToggle}
          className="mt-6 font-mono font-bold text-sm tracking-normal uppercase text-foreground/30 hover:text-foreground transition-colors duration-300"
        >
          {buttonText}
        </button>
      )}

      <div className="pt-8 md:pt-12">
        <motion.a
          href={`https://instagram.com/${instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="inline-block font-mono font-bold text-base md:text-lg tracking-tight cursor-pointer"
        >
          @{instagram}
        </motion.a>
      </div>
    </motion.div>
  );
}
