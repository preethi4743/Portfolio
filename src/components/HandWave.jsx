import { motion } from "framer-motion";
import React from "react";

const HandWave = () => (
  <motion.span
    role="img"
    aria-label="waving hand"
    animate={{ rotate: [0, 20, -10, 20, 0] }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={{ display: "inline-block", fontSize: "2rem" }}
  >
    👋
  </motion.span>
);

export default HandWave;
