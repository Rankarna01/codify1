import React from "react";
import Vector from "../../assets/vector3.png";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center dark:bg-gray-950 dark:text-white duration-200">
      <div className="container mx-auto px-8 sm:px-16 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Text Content Section */}
          <div
            data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col gap-6 text-center sm:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Welcome To{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-editprimary to-editsecondary">
                C0DIFY
              </span>{" "}
              HUB
            </h1>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              Kami menyediakan jasa pembuatan logo, desain website, dan
              pembuatan website custom. Dapatkan solusi digital kreatif yang
              mengoptimalkan identitas dan fungsionalitas online Anda!
            </p>
            <button
              onClick={scrollToServices}
              className="bg-gradient-to-r from-editprimary to-editsecondary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full self-center sm:self-start"
            >
              Produk kami
            </button>
          </div>

          {/* Image Section */}
          <div
            className="flex justify-center items-center"
            data-aos="zoom-in"
            data-aos-duration="300"
            data-aos-once="true"
          >
            <div className="h-100 sm:h-96 lg:h-[30rem] w-100 sm:w-96 lg:w-[30rem] overflow-hidden">
              <img
                src={Vector}
                alt="vector img"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
