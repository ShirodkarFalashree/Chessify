import React, { useState } from "react";
import { Link } from "react-router-dom";
import chess from "../assets/chess.png";
import navbg from "../assets/navbg.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-screen h-[60px] flex items-center justify-end px-6 pt-8 pr-8">
      <div
        className="font-bold text-3xl w-10 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={chess} alt="Logo" />
      </div>

      {/* Sliding Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen md:w-[580px] backdrop-blur bg-white/60 text-[#362511] z-50 transform p-8 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
        style={{ backgroundImage: `url(${navbg})` }}
      >
        <button
          className="absolute top-10 right-8 text-4xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>
        <div className="p-6">
          <h2 className="text-5xl mb-10 font-extrabold">Menu</h2>
          <ul className="mt-8 flex flex-col space-y-4 gap-8">
            <li className="cursor-pointer text-3xl font-bold hover:text-[#362511]">
              <Link to="/multiplayer" onClick={() => setIsOpen(false)}>Multiplayer Game</Link>
            </li>
            <li className="cursor-pointer text-3xl font-bold hover:text-[#362511]">
              <Link to="/custom-board" onClick={() => setIsOpen(false)}>Customize your board</Link>
            </li>
            <li className="cursor-pointer text-3xl font-bold hover:text-[#362511]">
              <Link to="/read-and-learn" onClick={() => setIsOpen(false)}>Read and learn</Link>
            </li>
            <li className="cursor-pointer text-3xl font-bold hover:text-[#362511]">
              <Link to="/playlist" onClick={() => setIsOpen(false)}>Recommended Playlist</Link>
            </li>
            {/* <li className="cursor-pointer text-3xl font-bold hover:text-[#362511]">
              <Link to="/leaderboard" onClick={() => setIsOpen(false)}>Leaderboard</Link>
            </li>
            <li className="cursor-pointer text-3xl font-bold hover:text-[#362511]">
              <Link to="/analysis" onClick={() => setIsOpen(false)}>Game Analysis</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
