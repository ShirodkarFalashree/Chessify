import React, { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { io } from 'socket.io-client';
import { useLocation } from 'react-router-dom';
import button from "../assets/button.png";

const socket = io("http://localhost:5000", { autoConnect: false });

function Game() {
  const location = useLocation();
  const [chess, setChess] = useState(new Chess());
  const [gameId] = useState("game1");
  const [playerColor, setPlayerColor] = useState(null);
  const [gameOverMessage, setGameOverMessage] = useState("");
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    if (location.pathname === "/multiplayer") {
      socket.connect();
      socket.emit("joinGame", "game1");

      socket.on("assignColor", (color) => setPlayerColor(color));
      socket.on("gameFull", () => alert("Game is full! Try another room."));
      socket.on("updateGame", (move) => {
        const newGame = new Chess(chess.fen());
        newGame.move(move);
        setChess(newGame);
      });
      socket.on("gameOver", (resultMessage) => {
        setGameOverMessage(resultMessage);
        setShowModal(true);
      });
    }

    return () => {
      if (location.pathname !== "/multiplayer") {
        socket.disconnect();
        sessionStorage.removeItem("hasRefreshed"); // Allow refresh on next visit
      }
    };
  }, [location.pathname, chess]);

  const handleMove = (move) => {
    if (playerColor && chess.turn() === playerColor) {
      const newGame = new Chess(chess.fen());
      const result = newGame.move(move);
  
      if (result) {
        setChess(newGame);
        socket.emit("move", { gameId: "game1", move });

        if (newGame.isGameOver()) {
          let resultMessage = "";
          if (newGame.isCheckmate()) {
            resultMessage = `Checkmate! ${newGame.turn() === "w" ? "Black" : "White"} wins!`;
          } else if (newGame.isStalemate()) {
            resultMessage = "Game over! It's a stalemate.";
          } else if (newGame.isDraw()) {
            resultMessage = "Game over! It's a draw.";
          }

          setGameOverMessage(resultMessage);
          setShowModal(true);
          socket.emit("gameOver", { gameId, resultMessage });
        }
      }
    }
  };

  useEffect(() => {
    socket.on("gameOver", (resultMessage) => {
      setGameOverMessage(resultMessage);
      setShowModal(true);
    });

    return () => {
      socket.off("gameOver");
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] overflow-hidden">
      <h1 className="text-2xl font-bold p-4">Multiplayer Chess Game</h1>
      <p className="text-lg">
        {playerColor ? `You are playing as ${playerColor === "w" ? "White" : "Black"}` : "Waiting for opponent..."}
      </p>
      <div className="flex justify-center">
        <Chessboard 
          position={chess.fen()} 
          onPieceDrop={(sourceSquare, targetSquare) => handleMove({ from: sourceSquare, to: targetSquare })} 
          boardOrientation={playerColor === "b" ? "black" : "white"}
          boardWidth={window.innerWidth < 600 ? 300 : 500} 
        />
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur bg-opacity-50">
          <div className="p-6 rounded-lg bg-cover bg-center text-center" style={{ backgroundImage: `url(${button})` }}>
            <h2 className="text-xl font-bold">{gameOverMessage}</h2>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-[#362511] text-white rounded-lg hover:bg-[#362511d0]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
