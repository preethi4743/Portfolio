import React from "react";
import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaDatabase,
  FaNodeJs,
  FaCodeBranch,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiGitlab,
} from "react-icons/si";

// Icon Cards
const skills = [
  {
    title: "Java & Spring Boot",
    description:
      "Robust REST APIs, enterprise-grade applications, microservices.",
    icon: <FaJava size={50} color="#ff5722" />,
  },
  {
    title: "Frontend Magic",
    description: "Responsive UIs with React, HTML, CSS, and modern JavaScript.",
    icon: <FaReact size={50} color="#61dafb" />,
  },
  {
    title: "Backend Power",
    description: "Secure, efficient, and scalable server-side development.",
    icon: <FaNodeJs size={50} color="#8bc34a" />,
  },
  {
    title: "Database Mastery",
    description:
      "SQL & NoSQL (MySQL, MongoDB) for fast, consistent data handling.",
    icon: <FaDatabase size={50} color="#00bcd4" />,
  },
  {
    title: "API Integration",
    description:
      "Seamless integration with third-party APIs and microservices.",
    icon: <FaNodeJs size={50} color="#8bc34a" />,
  },
  {
    title: "Cloud & Deployment",
    description: "CI/CD pipelines, Git, Docker, and scalable cloud hosting.",
    icon: <FaCodeBranch size={50} color="#cddc39" />,
  },
  {
    title: "Version Control",
    description: "Managing code repositories with Git and GitLab.",
    icon: <SiGitlab size={50} color="#f24e1e" />,
  },
  {
    title: "Docker & Containers",
    description: "Building containerized applications using Docker.",
    icon: <SiDocker size={50} color="#2496ed" />,
  },
  {
    title: "Kubernetes",
    description:
      "Orchestrating and managing containerized apps with Kubernetes.",
    icon: <SiKubernetes size={50} color="#326ce5" />,
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Mastering data structures, algorithms, and problem-solving techniques.",
    icon: <FaDatabase size={50} color="#ff5722" />,
  },
];

export default function About() {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  const backgroundColor = theme.palette.background.default;
  const cardBg = darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)";
  const cardBorder = darkMode
    ? "1px solid rgba(255, 255, 255, 0.2)"
    : "1px solid rgba(0, 0, 0, 0.1)";
  const headingColor = darkMode ? "#aaa" : "#333";
  const textColor = theme.palette.text.primary;
  const subTextColor = theme.palette.text.secondary;

  return (
    <Box
      id="about"
      sx={{
        py: 10,
        px: 4,
        backgroundColor,
        color: textColor,
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h4" sx={{ color: headingColor, mb: 2 }}>
            Building Scalable, High-Performance Systems
          </Typography>
        </motion.div>
      </Box>

      <Grid container spacing={4} columns={12} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid
            key={index}
            sx={{
              gridColumn: {
                xs: "span 12",
                sm: "span 6",
                md: "span 4",
                lg: "span 3",
              },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              style={{ width: "100%" }}
            >
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: cardBg,
                  backdropFilter: "blur(10px)",
                  p: 5,
                  borderRadius: 3,
                  height: "100%",
                  textAlign: "center",
                  border: cardBorder,
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: darkMode
                      ? "0 0 20px rgba(255, 255, 255, 0.3)"
                      : "0 0 20px rgba(0, 0, 0, 0.1)",
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{skill.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{ color: textColor, mb: 1, fontWeight: 600 }}
                >
                  {skill.title}
                </Typography>
                <Typography variant="body2" sx={{ color: subTextColor }}>
                  {skill.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
