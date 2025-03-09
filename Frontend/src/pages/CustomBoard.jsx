import React from "react";
import { Chessboard } from "react-chessboard";
import { useTheme } from "../context/ThemeContext";
import { ToastContainer } from "react-toastify"; // Import ToastContainer

const themes = {
  classic: { light: "#EEEED2", dark: "#769656" },
  blue: { light: "#BFC9CA", dark: "#2E86C1" },
  dark: { light: "#AAB7B8", dark: "#17202A" },
};

const CustomBoard = () => {
  const { theme, setTheme, saveTheme } = useTheme();

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Customize Your Chessboard</h1>
      <div className="mb-4">
        <label className="font-semibold">Board Theme:</label>
        <select
          className="ml-2 p-2 border rounded"
          onChange={(e) => setTheme(e.target.value)}
          value={theme}
        >
          <option value="classic">Classic</option>
          <option value="blue">Blue</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mb-4"
        onClick={saveTheme}
      >
        Save Theme
      </button>
      <div className="border p-2">
        <Chessboard
          boardWidth={400}
          customDarkSquareStyle={{ backgroundColor: themes[theme].dark }}
          customLightSquareStyle={{ backgroundColor: themes[theme].light }}
        />
      </div>
      <ToastContainer /> {/* Display Toasts */}
    </div>
  );
};

export default CustomBoard;
