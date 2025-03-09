import React, { useState } from "react";
import { Chessboard } from "react-chessboard";

const themes = {
  classic: { light: "#EEEED2", dark: "#769656" },
  blue: { light: "#BFC9CA", dark: "#2E86C1" },
  dark: { light: "#AAB7B8", dark: "#17202A" },
};

const CustomBoard = () => {
  const [boardTheme, setBoardTheme] = useState(themes.classic);
  const [pieceSet, setPieceSet] = useState("wikipedia"); // Piece theme

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Customize Your Chessboard</h1>

      <div className="mb-4">
        <label className="font-semibold">Board Theme:</label>
        <select
          className="ml-2 p-2 border rounded"
          onChange={(e) => setBoardTheme(themes[e.target.value])}
        >
          <option value="classic">Classic</option>
          <option value="blue">Blue</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="font-semibold">Piece Style:</label>
        <select
          className="ml-2 p-2 border rounded"
          onChange={(e) => setPieceSet(e.target.value)}
        >
          <option value="wikipedia">Wikipedia</option>
          <option value="neo">Neo</option>
          <option value="staunty">Staunty</option>
        </select>
      </div>

      <div className="border p-2">
        <Chessboard
          boardWidth={400}
          customDarkSquareStyle={{ backgroundColor: boardTheme.dark }}
          customLightSquareStyle={{ backgroundColor: boardTheme.light }}
          customPieces={() => pieceSet} // Placeholder for future piece customization
        />
      </div>
    </div>
  );
};

export default CustomBoard;
