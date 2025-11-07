import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      id="contact"
      className="bg-blue-600 text-white text-center py-6 mt-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      © 2025 MyBrand. All rights reserved.
    </motion.footer>
  );
};

export default Footer;
