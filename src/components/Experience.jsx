import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Divider,
  useTheme,
  Avatar,
  Chip,
  IconButton,
  Collapse,
  Grow,
  useMediaQuery,
} from "@mui/material";
import {
  Work,
  Code,
  ArrowRightAlt,
  ExpandMore,
  ExpandLess,
  LocationOn,
  CalendarToday,
} from "@mui/icons-material";
import AIMLogo from "../assets/logo/aim.jpg";
import SNSLogo from "../assets/logo/sreenikki.jpg";

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [expanded, setExpanded] = useState({});

  const handleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const experiences = [
    {
      id: 1,
      companyName: "AIM Technology Solutions LLC",
      companyLogo: AIMLogo,
      startDate: "Jan 2024",
      endDate: "Present",
      location: "Fort Mill, South Carolina, United States",
      role: "Full-Stack Java Developer",
      responsibilities: [
        "Developed and maintained enterprise applications using Spring Boot and React",
        "Designed RESTful APIs with JWT authentication",
        "Implemented microservices architecture with Docker and Kubernetes",
        "Optimized SQL queries improving performance by 40%",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "MongoDB",
        "AWS",
        "Spring Security",
        "Spring Batch",
        "CI/CD",
        "Jenkins",
        "Docker",
        "Checkmarx",
        "Postman",
        "Swagger",
        "IntelliJ",
        "JUnit",
        "Mockito",
      ],
    },
    {
      id: 2,
      companyName: "Sree Nikki Solutions",
      companyLogo: SNSLogo,
      startDate: "Aug 2021",
      endDate: "Nov 2022",
      location: "Hyderabad, Telangana, India",
      role: "Full-Stack Developer",
      responsibilities: [
        "Built customer-facing web applications using Java EE and Angular",
        "Integrated third-party payment APIs",
        "Reduced server costs by 30% through cloud optimization",
        "Implemented CI/CD pipelines with Jenkins",
      ],
      technologies: ["Java 8", "Angular", "MySQL", "Azure", "Jenkins"],
    },
  ];

  return (
    <Box
      id="experience"
      sx={{
        py: 10,
        px: { xs: 2, sm: 4, md: 8, lg: 12 },
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `radial-gradient(circle at 20% 30%, ${theme.palette.primary.light}20 0%, transparent 40%)`,
          zIndex: 0,
        },
      }}
    >
      {/* Animated floating shapes */}
      <Box
        sx={{
          position: "absolute",
          top: 100,
          right: 100,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: `linear-gradient(45deg, ${theme.palette.secondary.light}20, transparent)`,
          filter: "blur(30px)",
          zIndex: 0,
          animation: "float 8s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translate(0, 0)" },
            "50%": { transform: "translate(0, 20px)" },
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 50,
          left: 150,
          width: 150,
          height: 150,
          borderRadius: "50%",
          background: `linear-gradient(45deg, ${theme.palette.primary.light}20, transparent)`,
          filter: "blur(30px)",
          zIndex: 0,
          animation: "float2 10s ease-in-out infinite",
          "@keyframes float2": {
            "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
            "50%": { transform: "translate(20px, 10px) rotate(5deg)" },
          },
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            mb: 8,
            textAlign: "center",
            fontWeight: 800,
            color: theme.palette.primary.main,
            position: "relative",
            "&::after": {
              content: '""',
              display: "block",
              width: "100px",
              height: "5px",
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              margin: "20px auto 0",
              borderRadius: "5px",
            },
          }}
        >
          <Work
            sx={{
              verticalAlign: "middle",
              mr: 2,
              fontSize: "2.8rem",
              color: theme.palette.secondary.main,
            }}
          />
          Professional Experience
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              left: isMobile ? "24px" : "50%",
              top: 0,
              bottom: 0,
              width: "4px",
              background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              transform: isMobile ? "none" : "translateX(-50%)",
              zIndex: -1,
              borderRadius: "2px",
            },
          }}
        >
          {experiences.map((exp, index) => (
            <Grow in={true} timeout={(index + 1) * 500} key={exp.id}>
              <Paper
                elevation={4}
                sx={{
                  width: { xs: "100%", sm: "90%", md: "80%" },
                  mx: "auto",
                  borderRadius: "16px",
                  overflow: "hidden",
                  background:
                    theme.palette.mode === "dark"
                      ? `linear-gradient(135deg, ${theme.palette.grey[900]}, ${theme.palette.grey[800]})`
                      : `linear-gradient(135deg, ${theme.palette.grey[50]}, ${theme.palette.background.paper})`,
                  boxShadow: `0 10px 30px ${
                    theme.palette.mode === "dark" ? "#00000040" : "#00000020"
                  }`,
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: `0 15px 35px ${
                      theme.palette.mode === "dark" ? "#00000060" : "#00000030"
                    }`,
                  },
                  alignSelf: isMobile
                    ? "center"
                    : index % 2 === 0
                    ? "flex-start"
                    : "flex-end",
                }}
              >
                <Box
                  sx={{
                    p: { xs: 2, sm: 3, md: 4 },
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "5px",
                      height: "100%",
                      background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3,
                      gap: 3,
                    }}
                  >
                    {exp.companyLogo && (
                      <Avatar
                        src={exp.companyLogo}
                        alt={exp.companyName}
                        sx={{
                          width: 80,
                          height: 80,
                          border: `3px solid ${theme.palette.primary.main}`,
                          boxShadow: `0 4px 20px ${theme.palette.primary.light}80`,
                        }}
                      />
                    )}
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          display: "inline-block",
                        }}
                      >
                        {exp.companyName}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          mt: 1,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <LocationOn fontSize="small" color="primary" />
                          <Typography variant="body2" color="text.secondary">
                            {exp.location}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <CalendarToday fontSize="small" color="primary" />
                          <Typography variant="body2" color="text.secondary">
                            {exp.startDate} - {exp.endDate}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Code sx={{ color: theme.palette.secondary.main }} />
                    {exp.role}
                  </Typography>

                  <Divider
                    sx={{
                      my: 2,
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}00, ${theme.palette.primary.main}, ${theme.palette.primary.main}00)`,
                      height: "2px",
                      border: "none",
                    }}
                  />

                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        cursor: "pointer",
                        mb: expanded[exp.id] ? 2 : 0,
                      }}
                      onClick={() => handleExpand(exp.id)}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <ArrowRightAlt
                          sx={{
                            color: theme.palette.primary.main,
                            transform: expanded[exp.id]
                              ? "rotate(90deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                          }}
                        />
                        Key Responsibilities
                      </Typography>
                      <IconButton size="small">
                        {expanded[exp.id] ? <ExpandLess /> : <ExpandMore />}
                      </IconButton>
                    </Box>

                    <Collapse in={expanded[exp.id] || isMobile}>
                      <Box
                        component="ul"
                        sx={{
                          pl: 3,
                          mb: 3,
                          "& li": {
                            position: "relative",
                            mb: 1.5,
                            pl: 2,
                            "&::before": {
                              content: '""',
                              position: "absolute",
                              left: 0,
                              top: "12px",
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            },
                          },
                        }}
                      >
                        {exp.responsibilities.map((item, index) => (
                          <li key={index}>
                            <Typography variant="body1">{item}</Typography>
                          </li>
                        ))}
                      </Box>
                    </Collapse>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Code sx={{ color: theme.palette.secondary.main }} />
                    Tech Stack
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      "& .MuiChip-root": {
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-3px)",
                          boxShadow: `0 4px 8px ${
                            theme.palette.mode === "dark"
                              ? "#00000040"
                              : "#00000020"
                          }`,
                        },
                      },
                    }}
                  >
                    {exp.technologies.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        size="small"
                        sx={{
                          background:
                            theme.palette.mode === "dark"
                              ? `linear-gradient(135deg, ${theme.palette.grey[800]}, ${theme.palette.grey[700]})`
                              : `linear-gradient(135deg, ${theme.palette.grey[200]}, ${theme.palette.grey[100]})`,
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                          "& .MuiChip-label": {
                            px: 1.5,
                          },
                          border: `1px solid ${
                            theme.palette.mode === "dark"
                              ? theme.palette.grey[700]
                              : theme.palette.grey[300]
                          }`,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Grow>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
