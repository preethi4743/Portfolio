import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link } from "react-scroll";

const menuItems = [
  { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Skills", path: "skills" },
  { name: "Projects", path: "projects" },
  { name: "Education", path: "education" },
  { name: "Experience", path: "experience" },
  { name: "Contact", path: "contact" },
];

const CommonTypography = ({ variant, children, sx }) => (
  <Typography variant={variant} sx={{ fontWeight: "bold", ...sx }}>
    {children}
  </Typography>
);

const MenuButton = ({ text, path, darkMode }) => (
  <Link
    to={path}
    smooth={true}
    duration={500}
    offset={-100}
    style={{ textDecoration: "none" }}
  >
    <Button
      sx={{
        color: darkMode ? "#fff" : "#000",
        fontWeight: "bold",
        textTransform: "none",
        fontSize: "16px",
        "&:hover": {
          backgroundColor: darkMode ? "rgba(255,255,255,0.2)" : "#1976d2",
          color: darkMode ? "#000" : "#fff",
          transform: "scale(1.05)",
          transition: "all 0.3s ease",
        },
        transition: "all 0.3s ease",
      }}
    >
      {text}
    </Button>
  </Link>
);

const CustomDrawer = ({ mobileOpen, handleDrawerToggle, darkMode }) => (
  <Drawer
    anchor="left"
    open={mobileOpen}
    onClose={handleDrawerToggle}
    ModalProps={{ keepMounted: true }}
    sx={{
      display: { xs: "block", sm: "none" },
      "& .MuiDrawer-paper": {
        width: 250,
        boxSizing: "border-box",
        backgroundColor: darkMode ? "#000" : "#fff",
        color: darkMode ? "#fff" : "#000",
      },
    }}
  >
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        background: darkMode ? "#000" : "#f5f7fa",
        color: darkMode ? "#fff" : "#000",
        height: "100%",
        paddingTop: 2,
      }}
    >
      <IconButton sx={{ position: "absolute", top: 10, right: 10 }}>
        <CloseIcon sx={{ color: darkMode ? "#fff" : "#000" }} />
      </IconButton>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.name}
            component={Link}
            to={item.path}
            smooth={true}
            duration={500}
            offset={-100}
            onClick={handleDrawerToggle}
          >
            <ListItemText
              primary={item.name}
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  </Drawer>
);

const Navbar = ({ darkMode, toggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: darkMode ? "#000" : "#fff",
          color: darkMode ? "#fff" : "#000",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: "100px",
          }}
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-100}
            style={{
              cursor: "pointer",
              flex: 1,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <CommonTypography variant="h6">Preethi Reddy</CommonTypography>
          </Link>

          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                gap: 3,
                flex: 13,
                justifyContent: "center",
              }}
            >
              {menuItems.map((item) => (
                <MenuButton
                  key={item.name}
                  text={item.name}
                  path={item.path}
                  darkMode={darkMode}
                />
              ))}
            </Box>
          )}

          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <IconButton onClick={toggleTheme} color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            {isMobile && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <CustomDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        darkMode={darkMode}
      />

      <Toolbar sx={{ minHeight: "100px" }} />
    </>
  );
};

export default Navbar;
