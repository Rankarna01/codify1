import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import photo1 from "../../assets/photo4.png";
import photo2 from "../../assets/shopping.png";
import photo3 from "../../assets/desain.png";
import photo4 from "../../assets/logo.png";
import photo5 from "../../assets/photo1.png";
import photo6 from "../../assets/photo2.png";
import photo7 from "../../assets/latahzan.png";
import photo8 from "../../assets/website.png";



const Produk = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  // Variants untuk animasi
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9, y: -30 },
  };

  return (
    <div>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Produk Digital Kami</h1>
        <h1 className="text-3xl">CODIFYHUB</h1>
      </div>

      {/* Menu Kategori */}
<div className="text-center mb-8">
  <div className="flex flex-wrap justify-center gap-4">
    <button
      onClick={() => handleCategoryClick("all")}
      className={`px-4 py-2 rounded ${
        activeCategory === "all" ? "bg-blue-500 text-white" : "bg-gray-300"
      }`}
    >
      Semua
    </button>
    <button
      onClick={() => handleCategoryClick("source-code")}
      className={`px-4 py-2 rounded ${
        activeCategory === "source-code" ? "bg-blue-500 text-white" : "bg-gray-300"
      }`}
    >
      Source Code
    </button>
    <button
      onClick={() => handleCategoryClick("logo")}
      className={`px-4 py-2 rounded ${
        activeCategory === "logo" ? "bg-blue-500 text-white" : "bg-gray-300"
      }`}
    >
      Logo
    </button>
    <button
      onClick={() => handleCategoryClick("design")}
      className={`px-4 py-2 rounded ${
        activeCategory === "design" ? "bg-blue-500 text-white" : "bg-gray-300"
      }`}
    >
      Design
    </button>
  </div>
</div>


      {/* Grid Produk */}
      <section
        id="Projects"
        className="w-fit mx-auto px-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        <AnimatePresence>
          {/* Produk 1 */}
          {(activeCategory === "all" || activeCategory === "source-code") && (
            <motion.div
              className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <a href="#">
                <img
                  src={photo1}
                  alt="Product 1"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Source Code
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Website Sistem Manajemen Sekolah
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      Rp 25000
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">
                        Rp 50000
                      </p>
                    </del>
                  </div>
                </div>
              </a>
            </motion.div>
          )}

          {/* Produk 2 */}
          {(activeCategory === "all" || activeCategory === "source-code") && (
            <motion.div
              className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <a href="#">
                <img
                  src={photo2}
                  alt="Product 2"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Source Code
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Website Sistem Shopping Php Native
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      Rp 25000
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">
                        Rp 50000
                      </p>
                    </del>
                  </div>
                </div>
              </a>
            </motion.div>
          )}

          {/* Produk 3 */}
          {(activeCategory === "all" || activeCategory === "design") && (
            <motion.div
              className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <a href="#">
                <img
                  src={photo3}
                  alt="Product 3"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Design
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Product 3
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      Rp 30000
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          )}
          {/* Produk 4 */}
          {(activeCategory === "all" || activeCategory === "logo") && (
            <motion.div
              className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <a href="#">
                <img
                  src={photo4}
                  alt="Product 3"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Design
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Product 3
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      Rp 30000
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          )}
          {/* Produk 5 */}
          {(activeCategory === "all" || activeCategory === "logo") && (
            <motion.div
              className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <a href="#">
                <img
                  src={photo5}
                  alt="Product 3"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Design
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Product 3
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      Rp 30000
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          )}
          {/* Produk 6 */}
          {(activeCategory === "all" || activeCategory === "logo") && (
            <motion.div
              className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <a href="#">
                <img
                  src={photo6}
                  alt="Product 3"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Design
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Product 3
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      Rp 30000
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          )}
          {/* Produk 7 */}
          {(activeCategory === "all" || activeCategory === "source-code") && (
            <motion.div
              className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <a href="#">
                <img
                  src={photo7}
                  alt="Product 3"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Design
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Product 3
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      Rp 30000
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          )}
          {/* Produk 8 */}
          {(activeCategory === "all" || activeCategory === "source-code") && (
            <motion.div
              className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <a href="#">
                <img
                  src={photo8}
                  alt="Product 3"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Design
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Product 3
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      Rp 30000
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Produk;
