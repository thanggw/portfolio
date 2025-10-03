import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import avatar2 from "../../public/images/avatar3.jpg";

const Intro = ({ onEnter }) => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Tự động chuyển sau 4 giây
    const timer = setTimeout(() => {
      setShowIntro(false);
      setTimeout(onEnter, 500); // Delay nhẹ để animation exit mượt
    }, 4000);
    return () => clearTimeout(timer);
  }, [onEnter]);

  // Variants cho typewriter effect (hiện chữ từng cái)
  const sentence = "Vu Van Thang".split(""); // Chia tên thành mảng chữ cái
  const subtitleWords = "Welcome to my Portfolio".split(" ");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Nền động: Các chấm lấp lánh */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div
          className="absolute bottom-20 right-10 w-2 h-2 bg-pink-400 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        {/* Overlay gradient fade in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute inset-0 bg-gradient-to-r from-purple-800/30 to-pink-800/30"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10 max-w-md mx-auto px-4"
      >
        {/* Avatar scale up với border gradient */}
        <motion.div
          initial={{ scale: 0, rotateY: 0 }}
          animate={{ scale: 1, rotateY: 360 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 overflow-hidden relative"
        >
          <motion.img
            src={avatar2}
            alt="Vu Van Thang"
            className="w-full h-full object-cover rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Typewriter effect cho tên */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-4"
        >
          <div className="flex justify-center">
            {sentence.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: index * 0.1 }}
                className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent inline-block"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Subtitle slide up */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-xl text-gray-300 mb-8"
        >
          {subtitleWords.map((word, index) => (
            <span key={index}>{word} </span>
          ))}
        </motion.p>

        {/* Nút Enter với pulse */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={onEnter}
          className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full transition-all text-white font-medium shadow-lg"
        >
          Enter Portfolio
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
