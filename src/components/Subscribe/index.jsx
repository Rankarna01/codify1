import React from "react";
import Banner from "../../assets/subscribe.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Hubungi Kami Di 
          </h1>
          <div data-aos="fade-up" className="w-full">
      <a
        href="https://shopee.co.id/" // Ganti dengan link toko Shopee kamu
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition-all duration-300"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-green-500" />
        <span>Kunjungi Whatsapp Kami</span>
      </a>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

