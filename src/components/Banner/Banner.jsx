import React from "react";
import logo from "../../assets/logo.png";
import website from "../../assets/website.png";
import desain from "../../assets/desain.png";
import { MdComputer } from 'react-icons/md';
import { BiWorld } from 'react-icons/bi';
import { AiOutlineHighlight } from 'react-icons/ai';

const AboutSection = ({ title, description1, description2, image }) => (
  <div className="flex flex-col md:flex-row items-center gap-6 my-12">
    {/* Gambar di kiri dengan efek hover */}
    <div className="w-full md:w-1/2 flex justify-center">
      <div className="relative group">
        <img
          src={image}
          alt="biryani img"
          className="max-w-[300px] w-full rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
        />
        {/* Efek bayangan saat hover */}
        <div className="absolute inset-0 rounded-lg shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/50 transition-all duration-300"></div>
      </div>
    </div>

    {/* Teks di kanan */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-sm text-gray-500 tracking-wide leading-5 my-4">
        {description1}
      </p>
      <p className="text-sm text-gray-500 tracking-wide leading-5">
        {description2}
      </p>

      {/* Ikon dan tombol */}
      <div className="flex gap-4 justify-center md:justify-start mt-6">
  <div className="p-4 rounded-full bg-purple-100 text-purple-500">
    <MdComputer size={24} />
  </div>
  <div className="p-4 rounded-full bg-orange-100 text-orange-500">
    <BiWorld size={24} />
  </div>
  <div className="p-4 rounded-full bg-green-100 text-green-500">
    <AiOutlineHighlight size={24} />
  </div>
</div>
<button
  className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
  onClick={() => {
    window.open("https://wa.me/6285835116946?text=Halo!%20Saya%20ingin%20memesan.", "_blank");
  }}
>
  Order Now
</button>


    </div>
  </div>
);

const Banner = () => {
  const sections = [
    {
      title: "Jasa Desain Logo Branding.",
      description1:
        "🎨✨ Kami menawarkan jasa pembuatan logo custom yang unik dan profesional untuk menunjang identitas Anda, cocok untuk branding bisnis agar menonjol dengan logo yang berkesan dan mudah diingat, atau untuk kebutuhan pribadi seperti portofolio, komunitas, maupun proyek kreatif, dengan desain eksklusif tanpa template, proses cepat, hasil berkualitas, dan file lengkap dalam berbagai format! 💡💻.",

      image: logo,
    },
    {
      title: "Jasa Pembuatan Webstie.",
      description1:
        "🌐✨ Kami menawarkan jasa pembuatan website profesional yang dirancang khusus untuk kebutuhan Anda, cocok untuk bisnis yang ingin meningkatkan kehadiran online atau proyek pribadi seperti portofolio, blog, dan toko online, dengan desain responsif, fitur lengkap, proses pengerjaan cepat, serta dukungan penuh untuk memastikan website Anda tampil menarik, fungsional, dan mudah diakses! 🚀💻.",
      image: website,
    },
    {
      title: "Jasa Desain Flyer Medsos.",
      description1:
        "🎨✨ Kami menawarkan jasa desain flyer media sosial profesional yang kreatif dan berkualitas untuk meningkatkan daya tarik promosi Anda. Cocok untuk kebutuhan branding, event, atau kampanye digital, dengan desain unik, pengerjaan cepat, dan hasil yang memukau, kami siap membantu Anda menarik perhatian audiens secara maksimal! 🚀📱.",
      image: desain,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {sections.map((section, index) => (
        <AboutSection key={index} {...section} />
      ))}
    </div>
  );
};

export default Banner;
