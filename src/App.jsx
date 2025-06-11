import { BrowserRouter as Router, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { useTheme } from "./hooks/useTheme"; // custom hook
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
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return null;
};

function App() {
  const { theme, toggleTheme } = useTheme(); // from context

  const muiTheme = createTheme({
    palette: {
      mode: theme === "dark" ? "dark" : "light",
      primary: { main: "#0d47a1" },
      secondary: { main: "#4caf50" },
    },
  });

  return (
    <MuiThemeProvider theme={muiTheme}>
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
          <Navbar darkMode={theme === "dark"} toggleTheme={toggleTheme} />
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
    </MuiThemeProvider>
  );
}

export default App;
