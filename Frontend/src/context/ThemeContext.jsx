import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "classic";
  });

  const saveTheme = () => {
    localStorage.setItem("theme", theme);
    toast.success("📜 Theme saved successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light", // Use light theme for full custom styling
      icon: false, // Removes the default checkmark
      style: {
        backgroundColor: "#F5DEB3", // Vintage parchment background
        color: "#4A2C2A", // Dark brown text
        border: "2px solid #8B4513", // Dark brown border
        fontFamily: "'Garamond', serif",
        fontSize: "16px",
        textAlign: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Soft vintage shadow
      },
      progressStyle: {
        background: "#8B4513", // Brown progress bar
      },
    });
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, saveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
