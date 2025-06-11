import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  useTheme,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import {
  Code,
  GitHub,
  OpenInNew,
  Close,
  ArrowBack,
  ArrowForward,
} from "@mui/icons-material";

const projects = [
  {
    id: 1,
    title: "AI-Powered E-Commerce Platform",
    description:
      "Next-gen shopping experience with personalized recommendations using machine learning",
    image: "/images/ecommerce-ai.jpg",
    tags: ["React", "Node.js", "TensorFlow", "MongoDB"],
    github: "#",
    demo: "#",
    details: {
      features: [
        "Real-time product recommendations",
        "Visual search using computer vision",
        "Personalized shopping assistant",
        "Automated inventory management",
      ],
      technologies: [
        "React for frontend with Redux state management",
        "Node.js with Express for backend",
        "TensorFlow.js for ML models",
        "MongoDB Atlas for database",
        "AWS EC2 for deployment",
      ],
      challenges:
        "Implementing real-time recommendation engine with low latency",
      solutions: "Used WebSockets for real-time updates and Redis for caching",
    },
  },
  {
    id: 2,
    title: "Blockchain Voting System",
    description:
      "Decentralized voting platform ensuring transparency and security",
    image: "/images/blockchain-voting.jpg",
    tags: ["Solidity", "Web3.js", "React", "Ethereum"],
    github: "#",
    demo: "#",
    details: {
      features: [
        "Immutable vote recording",
        "Anonymous yet verifiable voting",
        "Real-time results dashboard",
        "Smart contract-based rules",
      ],
      technologies: [
        "Ethereum blockchain",
        "Solidity smart contracts",
        "IPFS for decentralized storage",
        "MetaMask integration",
        "React frontend",
      ],
      challenges: "Ensuring voter anonymity while maintaining auditability",
      solutions: "Implemented zero-knowledge proofs for verification",
    },
  },
  {
    id: 3,
    title: "AR Interior Design App",
    description: "Augmented reality application for virtual home decoration",
    image: "/images/ar-interior.jpg",
    tags: ["ARKit", "Swift", "Firebase", "3D Modeling"],
    github: "#",
    demo: "#",
    details: {
      features: [
        "Real-time AR furniture placement",
        "3D product catalog",
        "Room measurement tools",
        "Collaborative design spaces",
      ],
      technologies: [
        "ARKit for iOS",
        "SceneKit for 3D rendering",
        "Firebase for backend",
        "Blender for 3D models",
        "SwiftUI for interface",
      ],
      challenges: "Precise object placement in varying lighting conditions",
      solutions: "Implemented plane detection with surface estimation",
    },
  },
];

const Projects = () => {
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setCurrentIndex(projects.findIndex((p) => p.id === project.id));
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(nextIndex);
    setSelectedProject(projects[nextIndex]);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(prevIndex);
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <Box
      id="projects"
      sx={{
        py: 10,
        px: { xs: 2, sm: 4, md: 8, lg: 12 },
        backgroundColor: theme.palette.background.default,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `radial-gradient(circle at 80% 20%, ${theme.palette.primary.light}10 0%, transparent 40%)`,
          zIndex: 0,
        },
      }}
    >
      {/* Floating abstract shapes */}
      <Box
        sx={{
          position: "absolute",
          top: 100,
          right: 100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `linear-gradient(45deg, ${theme.palette.secondary.light}10, transparent)`,
          filter: "blur(40px)",
          zIndex: 0,
          animation: "float 8s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translate(0, 0)" },
            "50%": { transform: "translate(0, 20px)" },
          },
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h2"
          sx={{
            mb: 8,
            textAlign: "center",
            fontWeight: 800,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
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
          <Code
            sx={{
              verticalAlign: "middle",
              mr: 2,
              fontSize: "2.8rem",
              color: theme.palette.secondary.main,
            }}
          />
          Featured Projects
        </Typography>

        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: `0 10px 30px ${
                    theme.palette.mode === "dark" ? "#00000040" : "#00000020"
                  }`,
                  transition: "all 0.4s ease",
                  transform:
                    hoveredCard === project.id ? "translateY(-10px)" : "none",
                  background:
                    theme.palette.mode === "dark"
                      ? `linear-gradient(135deg, ${theme.palette.grey[900]}, ${theme.palette.grey[800]})`
                      : `linear-gradient(135deg, ${theme.palette.grey[50]}, ${theme.palette.background.paper})`,
                  "&:hover": {
                    boxShadow: `0 15px 35px ${
                      theme.palette.mode === "dark" ? "#00000060" : "#00000030"
                    }`,
                  },
                }}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardActionArea onClick={() => handleOpen(project)}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                      transform:
                        hoveredCard === project.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      sx={{ fontWeight: 700 }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {project.tags.map((tag, index) => (
                        <Chip
                          key={index}
                          label={tag}
                          size="small"
                          sx={{
                            background:
                              theme.palette.mode === "dark"
                                ? `linear-gradient(135deg, ${theme.palette.grey[800]}, ${theme.palette.grey[700]})`
                                : `linear-gradient(135deg, ${theme.palette.grey[200]}, ${theme.palette.grey[100]})`,
                            fontWeight: 500,
                            border: `1px solid ${
                              theme.palette.mode === "dark"
                                ? theme.palette.grey[700]
                                : theme.palette.grey[300]
                            }`,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </CardActionArea>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 2,
                    background:
                      theme.palette.mode === "dark"
                        ? theme.palette.grey[900]
                        : theme.palette.grey[100],
                  }}
                >
                  <IconButton
                    aria-label="GitHub"
                    href={project.github}
                    target="_blank"
                    sx={{
                      color: theme.palette.text.primary,
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    <GitHub />
                  </IconButton>
                  <IconButton
                    aria-label="Live Demo"
                    href={project.demo}
                    target="_blank"
                    sx={{
                      color: theme.palette.text.primary,
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    <OpenInNew />
                  </IconButton>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Project Details Dialog */}
      <Dialog
        open={Boolean(selectedProject)}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: "16px",
            background:
              theme.palette.mode === "dark"
                ? `linear-gradient(135deg, ${theme.palette.grey[900]}, ${theme.palette.grey[800]})`
                : `linear-gradient(135deg, ${theme.palette.grey[50]}, ${theme.palette.background.paper})`,
            overflow: "hidden",
          },
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: `linear-gradient(90deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                borderBottom: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {selectedProject.title}
              </Typography>
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Box
                sx={{
                  position: "relative",
                  height: "300px",
                  mb: 3,
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  image={selectedProject.image}
                  alt={selectedProject.title}
                  sx={{ objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 2,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                  }}
                >
                  <Typography variant="h6" sx={{ color: "white" }}>
                    {selectedProject.description}
                  </Typography>
                </Box>
              </Box>

              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Key Features
                  </Typography>
                  <Box
                    component="ul"
                    sx={{
                      pl: 2,
                      "& li": {
                        position: "relative",
                        pl: "24px",
                        mb: 1,
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          top: "10px",
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        },
                      },
                    }}
                  >
                    {selectedProject.details.features.map((feature, index) => (
                      <li key={index}>
                        <Typography variant="body1">{feature}</Typography>
                      </li>
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Technologies Used
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {selectedProject.details.technologies.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        sx={{
                          mb: 1,
                          background:
                            theme.palette.mode === "dark"
                              ? `linear-gradient(135deg, ${theme.palette.grey[800]}, ${theme.palette.grey[700]})`
                              : `linear-gradient(135deg, ${theme.palette.grey[200]}, ${theme.palette.grey[100]})`,
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Challenges & Solutions
                  </Typography>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: "12px",
                      background:
                        theme.palette.mode === "dark"
                          ? theme.palette.grey[800]
                          : theme.palette.grey[100],
                    }}
                  >
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      <strong>Challenge:</strong>{" "}
                      {selectedProject.details.challenges}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Solution:</strong>{" "}
                      {selectedProject.details.solutions}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions
              sx={{
                display: "flex",
                justifyContent: "space-between",
                background:
                  theme.palette.mode === "dark"
                    ? theme.palette.grey[900]
                    : theme.palette.grey[100],
                borderTop: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Box>
                <IconButton
                  onClick={handlePrevious}
                  aria-label="Previous project"
                >
                  <ArrowBack />
                </IconButton>
                <IconButton onClick={handleNext} aria-label="Next project">
                  <ArrowForward />
                </IconButton>
              </Box>
              <Box>
                <Button
                  startIcon={<GitHub />}
                  href={selectedProject.github}
                  target="_blank"
                  sx={{ mr: 2 }}
                >
                  View Code
                </Button>
                <Button
                  variant="contained"
                  endIcon={<OpenInNew />}
                  href={selectedProject.demo}
                  target="_blank"
                  sx={{
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: `0 4px 8px ${theme.palette.primary.main}80`,
                    },
                  }}
                >
                  Live Demo
                </Button>
              </Box>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects;
