module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        // Fixed typo: was 'fontsize'
        "10xl": "10rem",
      },
      colors: {
        primary: {
          light: "#f8fafc",
          dark: "#0f172a",
        },
        secondary: {
          light: "#e2e8f0",
          dark: "#1e293b",
        },
        accent: "#7c3aed",
      },
    },
  },
  plugins: [],
};
