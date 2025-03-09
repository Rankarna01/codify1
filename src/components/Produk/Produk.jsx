import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import BouncingCard from "../Produk/BouncingCard";
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
{/* <div className="text-center mb-8">
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
</div> */}


      {/* Grid Produk */}
      <section
        id="Projects"
        className="w-fit mx-auto px-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        <AnimatePresence>
          {/* Produk 1 */}
  {(activeCategory === "all" || activeCategory === "source-code") && (
    <BouncingCard
      imgSrc={photo1}
      category="Source Code"
      title="Website Sistem Manajemen Sekolah"
      price={25000}
      oldPrice={50000}
    />
  )}

  {/* Produk 2 */}
  {(activeCategory === "all" || activeCategory === "source-code") && (
    <BouncingCard
      imgSrc={photo2}
      category="Source Code"
      title="Website Sistem Manajemen Sekolah"
      price={25000}
      oldPrice={50000}
    />
  )}

  {/* Produk 3 */}
  {(activeCategory === "all" || activeCategory === "source-code") && (
    <BouncingCard
      imgSrc={photo3}
      category="Source Code"
      title="Website Sistem Manajemen Sekolah"
      price={25000}
      oldPrice={50000}
    />
  )}

  {/* Produk 4 */}
  {(activeCategory === "all" || activeCategory === "source-code") && (
    <BouncingCard
      imgSrc={photo4}
      category="Source Code"
      title="Website Sistem Manajemen Sekolah"
      price={25000}
      oldPrice={50000}
    />
  )}

  {/* Produk 5 */}
  {(activeCategory === "all" || activeCategory === "source-code") && (
    <BouncingCard
      imgSrc={photo5}
      category="Source Code"
      title="Website Sistem Manajemen Sekolah"
      price={25000}
      oldPrice={50000}
    />
  )}

  {/* Produk 6 */}
  {(activeCategory === "all" || activeCategory === "source-code") && (
    <BouncingCard
      imgSrc={photo6}
      category="Source Code"
      title="Website Sistem Manajemen Sekolah"
      price={25000}
      oldPrice={50000}
    />
  )}

  {/* Produk 7 */}
  {(activeCategory === "all" || activeCategory === "source-code") && (
    <BouncingCard
      imgSrc={photo7}
      category="Source Code"
      title="Website Sistem Manajemen Sekolah"
      price={25000}
      oldPrice={50000}
    />
  )}

  {/* Produk 8 */}
  {(activeCategory === "all" || activeCategory === "source-code") && (
    <BouncingCard
      imgSrc={photo8}
      category="Source Code"
      title="Website Sistem Manajemen Sekolah"
      price={25000}
      oldPrice={50000}
    />
  )}

          
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Produk;
