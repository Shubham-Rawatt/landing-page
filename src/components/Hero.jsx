import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center bg-linear-to-r from-blue-500 to-cyan-400 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Build Your Brand with <span className="text-yellow-300">Style</span>
        </h1>
        <p className="text-white text-lg sm:text-xl mb-6">
          Launch your website in minutes with our beautiful templates.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
