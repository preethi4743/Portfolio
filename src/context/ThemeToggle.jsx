import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import { LightMode, DarkMode } from "@mui/icons-material";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-full focus:outline-none"
      aria-label={`Toggle ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <DarkMode className="text-gray-700" />
      ) : (
        <LightMode className="text-yellow-300" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
