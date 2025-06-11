import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  useTheme,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import { Code, Storage, Build, Cloud } from "@mui/icons-material";
import HandWave from "./HandWave";
import ScrollDownIndicator from "./ScrollDown";

const Hero = () => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  const textPrimary = darkMode ? "#ffffff" : "#000000";
  const textSecondary = darkMode ? "#cccccc" : "#333333";
  const backgroundColor = darkMode ? "#000000" : "#ffffff";
  const iconColor = darkMode ? "#ffffff" : "#000000";

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const floating = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };
  // Define adaptive styles
  const iconStyle = {
    position: "absolute",
    fontSize: "3.5rem",
    opacity: darkMode ? 0 : 0, // More visible in dark mode
    color: darkMode ? "#fff" : "#000", // Soft green for dark, black for light
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor,
        pt: 8,
        pb: 12,
      }}
      id="about"
    >
      {/* Floating tech icons */}
      <motion.div
        style={{
          ...iconStyle,
          position: "absolute",
          top: "20%",
          left: "5%",
          fontSize: "3rem",
          opacity: 0.08,
          color: iconColor,
        }}
        variants={floating}
        animate="animate"
      >
        <Code fontSize="inherit" />
      </motion.div>

      <motion.div
        style={{
          ...iconStyle,
          position: "absolute",
          top: "30%",
          right: "10%",
          fontSize: "4rem",
          opacity: 0.08,
          color: iconColor,
        }}
        variants={floating}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <Storage fontSize="inherit" />
      </motion.div>

      <motion.div
        style={{
          ...iconStyle,
          position: "absolute",
          bottom: "15%",
          left: "15%",
          fontSize: "3.5rem",
          opacity: 0.08,
          color: iconColor,
        }}
        variants={floating}
        animate="animate"
        transition={{ delay: 1.5 }}
      >
        <Build fontSize="inherit" />
      </motion.div>

      <motion.div
        style={{
          ...iconStyle,
          position: "absolute",
          bottom: "25%",
          right: "5%",
          fontSize: "4rem",
          opacity: 0.08,
          color: iconColor,
        }}
        variants={floating}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <Cloud fontSize="inherit" />
      </motion.div>

      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <motion.div
            variants={item}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                color: textPrimary,
                fontSize: "2rem",
              }}
            >
              Hi !!
            </Typography>
            <HandWave />
          </motion.div>

          <motion.div variants={item}>
            <Typography
              variant="overline"
              sx={{
                color: textPrimary,
                fontWeight: 600,
                letterSpacing: 1.5,
                mb: 1,
                background: darkMode
                  ? "rgba(255, 255, 255, 0.08)"
                  : "rgba(0, 0, 0, 0.08)",
                px: 2,
                py: 1,
                borderRadius: "50px",
                fontSize: "1rem",
              }}
            >
              I'M PREETHI REDDY
            </Typography>
          </motion.div>

          <motion.div variants={item}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                lineHeight: 1.2,
                color: textPrimary,
                textShadow: darkMode
                  ? "0px 2px 4px rgba(255,255,255,0.1)"
                  : "0px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              Full-Stack Java Developer
            </Typography>
          </motion.div>

          <motion.div variants={item}>
            <Typography
              variant="h5"
              sx={{
                maxWidth: "800px",
                mx: "auto",
                mb: 4,
                color: textSecondary,
                fontWeight: 400,
                fontSize: "1.25rem",
              }}
            >
              I specialize in building full-stack web applications using the
              power of Java, Spring Boot, React, and modern databases. From
              scalable backend systems to interactive UIs, I love turning ideas
              into working code. I’m always exploring the latest tools to
              deliver clean, efficient, and impactful solutions.
            </Typography>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={item}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mb: 6 }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollToSection("projects")}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "8px",
                  fontWeight: 600,
                  backgroundColor: textPrimary,
                  color: backgroundColor,
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: darkMode ? "#dddddd" : "#333333",
                    color: darkMode ? "#000000" : "#ffffff",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                View My Projects
              </Button>

              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollToSection("contact")}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "8px",
                  fontWeight: 600,
                  borderWidth: "2px",
                  fontSize: "1rem",
                  color: textPrimary,
                  borderColor: textPrimary,
                  "&:hover": {
                    borderWidth: "2px",
                    transform: "translateY(-2px)",
                    backgroundColor: darkMode
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.1)",
                    borderColor: textSecondary,
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Contact Me
              </Button>
            </Stack>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <ScrollDownIndicator />
    </Box>
  );
};

export default Hero;
