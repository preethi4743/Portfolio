import { Box, Typography, Paper, Stack, Avatar, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { EmojiEvents, School, LocationOn } from "@mui/icons-material";
import { motion } from "framer-motion";
import jntuLogo from "../assets/logo/jntu.png";
import ucmLogo from "../assets/logo/ucm.jpg";
import React from "react";

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Central Missouri",
    logo: ucmLogo,
    duration: "Jan 2023 – May 2024",
    location: "Missouri, USA",
    cgpa: "3.5 / 4.0",
    additionalInfo:
      "Relevant Coursework: Data Structures & Algorithms, Operating Systems, Software Engineering, OOP",
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "JNTU Hyderabad",
    logo: jntuLogo,
    duration: "June 2018 – July 2022",
    location: "Telangana, India",
    cgpa: "7.8 / 10",
    additionalInfo:
      "Activities: Member of the Coding Club, Organized tech fests",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Education() {
  const theme = useTheme();
  return (
    <Box
      id="education"
      sx={{
        p: { xs: 2, md: 4 },
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        color: theme.palette.text.primary, // Apply white text globally in the section
      }}
    >
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{
          color: theme.palette.primary.main, // Gold color for the title to stand out
          textShadow:
            theme.palette.mode === "dark"
              ? "0px 4px 6px rgba(0, 0, 0, 0.9)"
              : "0px 4px 6px rgba(0, 0, 0, 0.2)", // Adding shadow for depth
        }}
      >
        Education
      </Typography>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {educationData.map((edu, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Paper
              elevation={10}
              sx={{
                p: { xs: 2, md: 4 },
                mb: 5,
                borderRadius: "20px",
                background:
                  theme.palette.mode === "dark"
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.05)",
                backdropFilter: "blur(10px)",
                border:
                  theme.palette.mode === "dark"
                    ? "1px solid rgba(255, 255, 255, 0.1)"
                    : "1px solid rgba(0, 0, 0, 0.1)",
                color: theme.palette.text.primary,
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0 10px 30px rgba(0, 0, 0, 0.7)"
                    : "0 10px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Stack direction="column" spacing={3} textAlign="left">
                {/* Institution and Degree Info */}
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Avatar
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    sx={{
                      width: 90,
                      height: 90,
                      borderRadius: "50%",
                      border: `3px solid ${theme.palette.secondary.main}`, // Gold border for contrast
                    }}
                  />
                  <Stack direction="column">
                    <Typography
                      variant="h5"
                      fontWeight={700}
                      style={{
                        fontSize: "32px",
                        color: theme.palette.primary.main, // White text for institution name
                      }}
                    >
                      {edu.institution}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "20px",
                        color: theme.palette.text.secondary, // secondary text color
                      }} // White text for degree
                    >
                      {edu.degree}
                    </Typography>
                  </Stack>
                </Stack>

                {/* Location */}
                <Typography
                  variant="h6"
                  fontWeight={600}
                  color="white" // White color for location
                  sx={{
                    fontSize: 28,
                    fontWeight: 500,
                    color: theme.palette.secondary.main, // Gold color for location
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <LocationOn sx={{ mr: 1 }} /> {edu.location}
                </Typography>

                {/* Duration */}
                <Typography
                  variant="body1"
                  //  color="white" // White color for duration
                  sx={{
                    fontSize: 24,
                    fontWeight: 500,
                    color: theme.palette.text.primary, // main text color
                  }}
                >
                  {edu.duration}
                </Typography>

                {/* CGPA and Additional Info */}
                <Box pt={2}>
                  <Typography
                    sx={{
                      mb: 1,
                      fontSize: 24,
                      fontWeight: 500,
                      color: theme.palette.text.primary,
                    }}
                  >
                    <strong>CGPA:</strong> {edu.cgpa}
                  </Typography>
                  <Typography
                    sx={{
                      mb: 1,
                      fontSize: 24,
                      fontWeight: 500,
                      color: theme.palette.text.primary,
                    }}
                  >
                    <strong>{edu.additionalInfo.split(":")[0]}:</strong>{" "}
                    {edu.additionalInfo.split(":")[1]}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
}
