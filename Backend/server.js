const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { Chess } = require("chess.js");
const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://chessify-favmedia.netlify.app/", // Change if frontend runs on another port
    methods: ["GET", "POST"],
  },
});

let games = {}; // Store game states

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);
  
    socket.on("joinGame", (gameId) => {
      if (!games[gameId]) {
        games[gameId] = { players: [], moves: [], chess: new Chess() };
      }
    
  
      if (!games[gameId].players.includes(socket.id)) {
        if (games[gameId].players.length < 2) {
          games[gameId].players.push(socket.id);
          const playerColor = games[gameId].players.length === 1 ? "w" : "b";
          socket.emit("assignColor", playerColor);
        } else {
          socket.emit("gameFull");
        }
      }
  
      socket.join(gameId);
      io.to(gameId).emit("gameState", games[gameId]);
    });
  
    socket.on("move", ({ gameId, move }) => {
      if (games[gameId]) {
        const game = games[gameId];
        const chess = game.chess;
    
        const result = chess.move(move);
        if (result) {
          io.to(gameId).emit("updateGame", move);
    
          if (chess.isCheckmate()) {
            const winner = chess.turn() === "w" ? "Black" : "White";
            io.to(gameId).emit("gameOver", `Checkmate! ${winner} wins!`);
          } else if (chess.isDraw() || chess.isStalemate()) {
            io.to(gameId).emit("gameOver", "Game Over! It's a draw.");
          }
        }
      }
    });
    
    
  
    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
      Object.keys(games).forEach((gameId) => {
        games[gameId].players = games[gameId].players.filter((id) => id !== socket.id);
        if (games[gameId].players.length === 0) delete games[gameId];
      });
    });
  });
  

server.listen(5000, () => console.log("Server running on port 5000"));