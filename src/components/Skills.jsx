import React, { useRef } from "react";
import { Box, Typography, Grid, Paper, Avatar, useTheme } from "@mui/material";
import { motion, useInView } from "framer-motion";

// Icons
import { DiJavascript } from "react-icons/di";
import { FaReact, FaJava } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";

import {
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiApachekafka,
  SiDocker,
  SiPostman,
  SiJunit5,
  SiSwagger,
  SiPython,
  SiC,
  SiTypescript,
  SiTailwindcss,
  SiIntellijidea,
  SiJenkins,
  SiHibernate,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiGit,
  SiApachemaven,
  SiAmazonwebservices,
  SiEclipseide,
} from "react-icons/si";

import RabbitMQLogo from "../assets/icons/RabbitMQ.png";
import AwsLogo from "../assets/icons/AwsLogo.jpg";
import AzureLogo from "../assets/icons/Azure.jpg";

const Skills = () => {
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const skillIcons = {
    Java: <FaJava size={50} color="#f89820" />,
    Python: <SiPython size={50} color="#3776AB" />,
    JavaScript: <DiJavascript size={50} color="#F7DF1E" />,
    TypeScript: <SiTypescript size={50} color="#007ACC" />,
    C: <SiC size={50} color="#A8B9CC" />,
    "Spring Boot": <SiSpringboot size={50} color="#6DB33F" />,
    "Spring MVC": <SiSpringboot size={50} color="#6DB33F" />,
    "Spring Batch": <SiSpringboot size={50} color="#6DB33F" />,
    "Spring Security": <SiSpringboot size={50} color="#6DB33F" />,
    "RESTful APIs": <SiSpringboot size={50} color="#6DB33F" />,
    Hibernate: <SiHibernate size={50} color="#59666C" />,
    JPA: <SiHibernate size={50} color="#59666C" />,
    "Node.js": <SiNodedotjs size={50} color="#339933" />,
    HTML5: <SiHtml5 size={50} color="#e34c26" />,
    CSS3: <SiCss3 size={50} color="#264de4" />,
    "React.js": <FaReact size={50} color="#61DBFB" />,
    TailwindCSS: <SiTailwindcss size={50} color="#38B2AC" />,
    MongoDB: <SiMongodb size={50} color="#4DB33D" />,
    "MySQL (with JPA/Hibernate)": <SiMysql size={50} color="#00758F" />,
    Kafka: <SiApachekafka size={50} color="#ff4500" />,
    RabbitMQ: <img src={RabbitMQLogo} alt="RabbitMQ" width={50} height={50} />,
    AWS: <img src={AwsLogo} alt="AWS" width={50} height={50} />,
    "AWS (EC2, S3)": <SiAmazonwebservices size={50} color="#FF9900" />,
    Azure: <img src={AzureLogo} alt="Azure" width={50} height={50} />,
    Jenkins: <SiJenkins size={50} color="#D24939" />,
    "CI/CD with Jenkins": <SiJenkins size={50} color="#D24939" />,
    Git: <SiGit size={50} color="#F05032" />,
    Maven: <SiApachemaven size={50} color="#C71A36" />,
    Postman: <SiPostman size={50} color="#FF6C37" />,
    "Visual Studio Code": <BiLogoVisualStudio size={50} color="#007ACC" />,
    "IntelliJ IDEA": <SiIntellijidea size={50} color="#000000" />,
    "Eclipse IDE": <SiEclipseide size={50} color="#FF6C37" />,
    JUnit: <SiJunit5 size={50} color="#25A162" />,
    Mockito: <SiJunit5 size={50} color="#25A162" />,
    Swagger: <SiSwagger size={50} color="#85EA2D" />,
    "Docker (basic)": <SiDocker size={50} color="#2496ED" />,
    "Data Structures & Algorithms": (
      <Avatar sx={{ width: 50, height: 50, bgcolor: "#444", fontSize: 18 }}>
        DSA
      </Avatar>
    ),
    ShadCDN: (
      <Avatar sx={{ width: 50, height: 50, bgcolor: "#444", fontSize: 18 }}>
        S
      </Avatar>
    ),
  };

  const allSkills = [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "C",
    "Spring Boot",
    "Spring MVC",
    "Spring Batch",
    "Spring Security",
    "RESTful APIs",
    "Hibernate",
    "JPA",
    "Node.js",
    "HTML5",
    "CSS3",
    "React.js",
    "TailwindCSS",
    "MongoDB",
    "MySQL (with JPA/Hibernate)",
    "Kafka",
    "RabbitMQ",
    "AWS",
    "AWS (EC2, S3)",
    "Azure",
    "Jenkins",
    "CI/CD with Jenkins",
    "Git",
    "Maven",
    "Postman",
    "Visual Studio Code",
    "IntelliJ IDEA",
    "Eclipse IDE",
    "JUnit",
    "Mockito",
    "Swagger",
    "Docker (basic)",
    "Data Structures & Algorithms",
    "ShadCDN",
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const renderIcon = (skillName) =>
    skillIcons[skillName] || (
      <Avatar sx={{ width: 50, height: 50, bgcolor: "#444", fontSize: 18 }}>
        {skillName[0]}
      </Avatar>
    );

  return (
    <Box
      id="skills"
      sx={{
        position: "relative",
        overflow: "hidden",
        p: { xs: 2, md: 4 },
        backgroundColor: isDark ? "#000" : "#fff",
        color: isDark ? "#fff" : "#000",
        minHeight: "100vh",
      }}
      ref={skillsRef}
    >
      {" "}
      {!isDark && (
        <>
          {/* You can add subtle blobs or background effects here for light mode if desired */}
        </>
      )}{" "}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Box mb={4} textAlign="center">
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              background: isDark
                ? "linear-gradient(90deg, #ffcc00, #fbc02d)"
                : "linear-gradient(90deg, #3f51b5, #2196f3)",
              WebkitBackgroundClip: "text",

              color: theme.palette.secondary.main,
              fontWeight: 700,
            }}
          >
            Skills
          </Typography>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Grid container spacing={4} justifyContent="center">
            {allSkills.map((skill, i) => (
              <Grid item key={i} xs={12} sm={6} md={3}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={6}
                    sx={{
                      p: 4,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      background: isDark
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(0, 0, 0, 0.05)",
                      borderRadius: "20px",
                      border: isDark
                        ? "1px solid rgba(255, 255, 255, 0.2)"
                        : "1px solid rgba(0, 0, 0, 0.1)",
                      color: isDark ? "#fff" : "#000",
                      height: "200px",
                      width: "200px",
                    }}
                  >
                    {renderIcon(skill)}
                    <Typography
                      variant="body1"
                      mt={2}
                      align="center"
                      sx={{
                        fontSize: "1.1rem",
                        color: isDark ? "#fff" : "#000",
                        fontWeight: "600",
                      }}
                    >
                      {skill}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Skills;
