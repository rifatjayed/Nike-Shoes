import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-gray-950">
      <div className="max-w-7xl mx-auto items-center flex flex-col py-8 px-4 md:px-8 min-h-screen">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-[#33cccc] mb-4 text-center"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-300 text-center max-w-xl mb-12"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ea
          atque deleniti cumque aut pariatur.
        </motion.p>
        <div className="grid md:grid-flow-col gap-10">
          {/* Contaact form */}

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="bg-[#c7e9ec] shadow-xl shadow-[#33cccc] rounded-lg p-8 md:p-12 max-w-xl md:w-[400]px"
          >
            <form></form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
