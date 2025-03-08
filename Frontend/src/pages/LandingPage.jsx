import React from "react";
import OldButton from "../Components/OldButton";
import { motion } from "framer-motion";
import {
  FaChessKing,
  FaChessBishop,
  FaChessKnight,
  FaChessRook,
  FaChessQueen,
  FaChessPawn,
} from "react-icons/fa";

// Chess icons positioned outside the border
const icons = [
  { icon: <FaChessKing />, top: "5%", left: "2%", delay: 0 },
  { icon: <FaChessQueen />, top: "5%", left: "92%", delay: 0.2 },
  { icon: <FaChessBishop />, top: "55%", left: "3%", delay: 0.4 },
  { icon: <FaChessKnight />, top: "75%", left: "90%", delay: 0.6 },
  { icon: <FaChessRook />, top: "90%", left: "10%", delay: 0.8 },
  { icon: <FaChessPawn />, top: "0%", left: "50%", delay: 1.0 },
];

// Animation Variants
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  }),
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.2 },
  }),
};

const LandingPage = () => {
  return (
    // 
    <div className="relative flex-grow flex items-center justify-center min-h-[calc(100vh-60px)] overflow-hidden">

      {/* Floating Chess Icons (Outside Border) */}
      <div className="absolute inset-0 z-0">
        {icons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{
              duration: 1.5,
              delay: item.delay,
              ease: "easeOut",
            }}
            className="absolute text-[#855b2a] text-8xl"
            style={{
              top: item.top,
              left: item.left,
              zIndex: -1,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Main Content with Border */}
      <div className="relative z-10  px-12 py-8 bg-opacity-80">
        {/* Animated "CHESSIFY" (Letter by Letter) */}
        <motion.div
          className="text-[#362511] text-[180px] font-extrabold leading-[220px] font-heading flex justify-center"
          initial="hidden"
          animate="visible"
        >
          {"CHESSIFY".split("").map((letter, index) => (
            <motion.span key={index} variants={letterVariants} custom={index}>
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Animated Tagline (Appears with Icons) */}
        <motion.div
          className="text-[#855b2a] text-center text-xl font-bold"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={1.2} // Delay after CHESSIFY animation
        >
          "Join our online chess community to play, learn, and improve. <br />
          Play against friends, AI, or players worldwide!"
        </motion.div>

        <div className="flex items-center justify-center mt-[30px]">
          <OldButton text={"Play Now"} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
