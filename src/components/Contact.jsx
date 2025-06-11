import React from "react";
import { useTheme } from "@mui/material/styles";

import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 14 },
  },
};

const Contact = () => {
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      style: {
        background: "#4caf50",
        color: "#fff",
      },
    });
  };

  const socials = [
    {
      url: "https://linkedin.com/in/preethikommidi26",
      icon: <LinkedInIcon fontSize="large" />,
      color: "#0a66c2",
    },
    {
      url: "https://github.com/preethi4743",
      icon: <GitHubIcon fontSize="large" />,
      color: "#333",
    },
    {
      url: "mailto:kommidipreethi26@gmail.com",
      icon: <EmailIcon fontSize="large" />,
      color: "#d44638",
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        position: "relative",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,

        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        py: 8,
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Toaster position="top-center" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 24,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Socials Card */}
          <motion.div
            variants={fadeUp}
            style={{
              flex: 1,
              minWidth: 300,
              maxWidth: 400,
              background: "rgba(255, 255, 255, 0.1)", // Slightly transparent white for contrast
              borderRadius: "20px",
              padding: "40px 32px",
              backdropFilter: "blur(12px)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              border: "1px solid rgba(255,255,255,0.3)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <motion.div style={{ marginBottom: 24 }}>
              <Typography
                variant="h4"
                fontWeight={700}
                sx={{
                  background: "linear-gradient(90deg, #1976d2, #2196f3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "black",
                  mb: 1,
                }}
              >
                Let's Connect
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Feel free to reach out through any of these channels
              </Typography>
            </motion.div>

            <Divider sx={{ my: 2 }} />

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              {socials.map(({ url, icon, color }, i) => (
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow: `0 5px 15px ${color}40`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  variants={fadeUp}
                  key={i}
                >
                  <IconButton
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.8)",
                      color: color,
                      m: 1,
                      width: 60,
                      height: 60,
                      border: `1px solid ${color}20`,
                      "&:hover": {
                        backgroundColor: `${color}15`,
                      },
                    }}
                  >
                    {icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>

            <Divider sx={{ my: 3 }} />
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            variants={fadeUp}
            style={{
              flex: 2,
              minWidth: 300,
              maxWidth: 600,
              background: "rgba(255, 255, 255, 0.1)", // Slightly transparent white for contrast
              borderRadius: "20px",
              padding: "40px",
              backdropFilter: "blur(12px)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <motion.div>
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  mb: 1,
                  background: "linear-gradient(90deg, #1976d2, #2196f3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "black",
                }}
              >
                📬 Send a Message
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3, fontSize: "1.1rem" }}
              >
                Have a project in mind or want to collaborate? I'd love to hear
                from you!
              </Typography>
            </motion.div>

            <form onSubmit={handleSubmit}>
              <motion.div variants={fadeUp}>
                <TextField
                  fullWidth
                  required
                  label="Your Name"
                  margin="normal"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      "& fieldset": {
                        borderColor: "rgba(0,0,0,0.1)",
                      },
                      "&:hover fieldset": {
                        borderColor: "#1976d2",
                      },
                    },
                  }}
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <TextField
                  fullWidth
                  required
                  label="Email Address"
                  type="email"
                  margin="normal"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      "& fieldset": {
                        borderColor: "rgba(0,0,0,0.1)",
                      },
                      "&:hover fieldset": {
                        borderColor: "#1976d2",
                      },
                    },
                  }}
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <TextField
                  fullWidth
                  required
                  label="Your Message"
                  multiline
                  rows={5}
                  margin="normal"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      "& fieldset": {
                        borderColor: "rgba(0,0,0,0.1)",
                      },
                      "&:hover fieldset": {
                        borderColor: "#1976d2",
                      },
                    },
                  }}
                />
              </motion.div>
              <motion.div variants={fadeUp} style={{ marginTop: 32 }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    borderRadius: "12px",
                    backgroundColor: "#000",
                    fontSize: "1rem",
                    py: 1.5,
                    textTransform: "none",
                    boxShadow: "0 4px 14px rgba(25, 118, 210, 0.3)",
                    "&:hover": {
                      backgroundColor: "#1a1a1a",
                      boxShadow: "0 6px 20px rgba(25, 118, 210, 0.4)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
