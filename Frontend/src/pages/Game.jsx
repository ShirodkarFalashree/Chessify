import React, { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { io } from 'socket.io-client';

const socket = io("http://localhost:5000");

function Game() {
  const [chess, setChess] = useState(new Chess());
  const [gameId] = useState("game1"); // Static game ID (change for multiple games)
  const [playerColor, setPlayerColor] = useState(null);

  useEffect(() => {
    socket.emit("joinGame", "game1"); // Both players should join "game1"
  
    socket.on("assignColor", (color) => {
      setPlayerColor(color);
    });

    socket.on("gameFull", () => {
      alert("Game is full! Try another room.");
    });
    socket.on("updateGame", (move) => {
      const newGame = new Chess(chess.fen());
      newGame.move(move);
      setChess(newGame);
    });
    return () => {
      socket.off("assignColor");
      socket.off("gameFull");
      socket.off("updateGame");
    };
  }, [chess]);

  const handleMove = (move) => {
    if (playerColor && chess.turn() === playerColor) {
      const newGame = new Chess(chess.fen());
      const result = newGame.move(move);
      if (result) {
        setChess(newGame);
        socket.emit("move", { gameId, move });
      }
    }
  };

    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] overfloe-hidden">
        <h1 className="text-2xl font-bold p-4">Multiplayer Chess Game</h1>
        <p className="text-lg">{playerColor ? `You are playing as ${playerColor === "w" ? "White" : "Black"}` : "Waiting for opponent..."}</p>
        <div className="flex justify-center">
          <Chessboard 
            position={chess.fen()} 
            onPieceDrop={(sourceSquare, targetSquare) => handleMove({ from: sourceSquare, to: targetSquare })} 
            boardOrientation={playerColor === "b" ? "black" : "white"}
            boardWidth={window.innerWidth < 600 ? 300 : 500} 
          />
        </div>
      </div>
    );
    
}

export default Game;