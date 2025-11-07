import React from "react";
import { motion } from "framer-motion";

const Feature = () => {
  const features = [
    { title: "Fast", desc: "Optimized performance for every device." },
    { title: "Responsive", desc: "Looks amazing on all screen sizes." },
    { title: "Modern", desc: "Built with cutting-edge technology." },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((f, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
