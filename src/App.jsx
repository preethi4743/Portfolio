import { BrowserRouter as Router, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";

// Component to handle scroll behavior
const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);

  return null;
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#0d47a1",
      },
      secondary: {
        main: "#4caf50",
      },
    },
  });

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToHashElement />
        <Box
          sx={{
            minHeight: "100vh",
            bgcolor: "background.default",
            color: "text.primary",
          }}
        >
          <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
          <Box component="main">
            <Hero id="home" />
            <About id="about" />
            <Skills id="skills" />
            <Projects id="projects" />
            <Education id="education" />
            <Experience id="experience" />
            <Contact id="contact" />
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
