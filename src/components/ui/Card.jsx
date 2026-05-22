import React from "react";
import { motion } from "framer-motion";
import { hoverScale } from "../../utils/motion";

export const Card = ({
  children,
  className = "",
  glow = true,
  onClick,
  ...props
}) => {
  return (
    <motion.div
      variants={hoverScale}
      whileHover={onClick ? "hover" : ""}
      whileTap={onClick ? "tap" : ""}
      onClick={onClick}
      className={`
        backdrop-blur-xl bg-white/70 dark:bg-slate-900/70
        border border-slate-200/50 dark:border-slate-800/50
        rounded-2xl p-6 shadow-md transition-colors duration-300
        ${glow && onClick ? "hover:shadow-[0_0_25px_rgba(124,58,237,0.15)] dark:hover:shadow-[0_0_25px_rgba(124,58,237,0.1)]" : ""}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
