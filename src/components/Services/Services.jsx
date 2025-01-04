import React from "react";
import Img2 from "../../assets/biryani2.png";
import Img3 from "../../assets/biryani4.png";
import Img4 from "../../assets/biryani6.png";
import StarRatings from "react-star-ratings";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Jasa Desain Logo Branding",
    description:
      "Kami menyediakan beberapa jenis pembuatan logo seperti Logotype, Monogram, Iconic Logo.",
  },
  {
    id: 2,
    img: Img3,
    name: "Jasa Pembuatan Website",
    description:
      "Kami menyediakan pembuatan website statis dan dinamis .",
  },
  {
    id: 3,
    img: Img4,
    name: "Jasa Design flyer Medsos",
    description:
      "Kami juga menyediakan jasa desain flyer kebutuhan medsos.",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-editprimary to-editsecondary ">
              Services
            </p>
            <h1 className="text-3xl font-bold">Layanan Kami</h1>
            <p className="text-xs text-gray-400">
            Kami menyediakan beberapa jasa.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-editprimary dark:hover:bg-editprimary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full ">
                    {/* <StarRatings
                      rating={4}
                      starRatedColor="yellow"
                      isSelectable={false}
                      starHoverColor="yellow"
                      // starSelectingHoverColor
                      starDimension="20px"
                      changeRating={() => {}}
                      numberOfStars={5}
                      name="rating"
                    /> */}
                  </div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
