import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { KeyboardArrowDown } from "@mui/icons-material";

const ScrollDownIndicator = () => {
  // Animation variants
  const bounce = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulse = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const loadingDots = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const dot = {
    animate: {
      y: [0, -10, 0],
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "40px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      {/* Option 1: Simple Arrow Bounce */}
      <motion.div
        animate={bounce.animate}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="caption" sx={{ mb: 1 }}>
          Scroll Down
        </Typography>
        <KeyboardArrowDown fontSize="medium" />
      </motion.div>

      {/* Option 2: Loading Dots */}
      <motion.div
        initial="hidden"
        animate="animate"
        variants={loadingDots}
        style={{ display: "flex", gap: 8 }}
      >
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            variants={dot}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "currentColor",
            }}
          />
        ))}
      </motion.div>

      {/* Option 3: Pulse Circle */}
      <motion.div
        animate={pulse.animate}
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "2px solid",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <KeyboardArrowDown />
      </motion.div>
    </Box>
  );
};

export default ScrollDownIndicator;
