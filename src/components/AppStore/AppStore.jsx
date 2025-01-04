import React, { useState } from "react";

// Import gambar-gambar secara eksplisit dari src/assets
import img1 from "../../assets/photo1.png";
import img2 from "../../assets/photo2.png";
import img3 from "../../assets/photo3.png";
import img4 from "../../assets/photo4.png";
import img5 from "../../assets/photo5.png";
import img6 from "../../assets/photo6.png";
import img7 from "../../assets/photo7.png";
import img8 from "../../assets/photo8.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-14">
        <div className="container">
          <h1 className="text-center text-4xl font-semibold mb-10 text-gray-700 dark:text-gray-400">
            Project Gallery
          </h1>
          
          {/* Tampilkan 4 gambar pertama dalam grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {images.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Slide show untuk gambar lainnya */}
          <div className="flex overflow-x-auto gap-4 mb-6 pb-4">
            {images.slice(4).map((image, index) => (
              <div
                key={index + 4}
                className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image}
                  alt={`Project ${index + 5}`}
                  className="w-72 h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal untuk Zoom Out */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected Project"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
