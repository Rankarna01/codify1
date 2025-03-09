import { motion } from "framer-motion";
import React from "react";

const BouncingCard = ({ imgSrc, category, title, price, oldPrice }) => {
    return (
      <motion.div
        className="bg-white shadow-md rounded-xl overflow-hidden duration-500 hover:shadow-xl w-full max-w-[500px]" // Lebar max 300px agar sesuai grid
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.8 },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.4 }}
      >
        <a href="#" className="block relative w-full">
          {/* Efek zoom-in dalam batas container */}
          <div className="overflow-hidden rounded-t-xl">
            <motion.img
              src={imgSrc}
              alt={title}
              className="w-full h-64 object-cover"
              whileHover={{
                scale: 1.2, // Zoom in tetap dalam container
                transition: { duration: 0.5 },
              }}
            />
          </div>
  
          <div className="px-4 py-3">
            <span className="text-gray-400 mr-3 uppercase text-xs">{category}</span>
            <p className="text-lg font-bold text-black truncate block capitalize">{title}</p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">Rp {price}</p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">Rp {oldPrice}</p>
              </del>
            </div>
          </div>
        </a>
      </motion.div>
    );
  };
  
  export default BouncingCard;
