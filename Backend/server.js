const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Change if frontend runs on another port
    methods: ["GET", "POST"],
  },
});

let games = {}; // Store game states

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);
  
    socket.on("joinGame", (gameId) => {
      if (!games[gameId]) {
        games[gameId] = { players: [], moves: [] };
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
        games[gameId].moves.push(move);
        io.to(gameId).emit("updateGame", move);
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
