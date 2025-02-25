import { createContext, useEffect, useState, useContext } from "react";
// import PropTypes from "prop-types";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Get theme from localStorage or fallback to system preference
  const storedTheme = localStorage.getItem("themeName");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const defaultTheme = storedTheme || (prefersDark ? "dark" : "light");

  const [themeName, setThemeName] = useState(defaultTheme);

  useEffect(() => {
    // Apply theme to <html> for global styling
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeName);

    // Save theme in localStorage
    localStorage.setItem("themeName", themeName);
  }, [themeName]);

  const toggleTheme = () => {
    const name = themeName === "dark" ? "light" : "dark";
    localStorage.setItem("themeName", name);
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
