import React from "react";
import photo1 from "../../assets/photo4.png";
import latahzan from "../../assets/latahzan.png";
import { FaStar, FaGithub } from "react-icons/fa"; // Menggunakan react-icons

export default function Source() {
  const openSourceData = [
    {
      id: 1,
      title: "Webstie Manajemen Sekolah",
      description:
        "Website Dengan Tampilan Dashbord Admin dan Users dengan fitur menambahkan daftar mahasiswa, tambah data mahasiswa, menambahkan data guru, fitu mata pelajaran, fitur absensi dan tentang sekolah .",
      stars: "3,813",
      forks: "822",
      image: photo1,
      author: "Rendkrisna19",
      link: "https://github.com/Rendkrisna19/manajemen-sekolah", // tambahkan link sesuai dengan kebutuhan
    },
    {
      id: 2,
      title: "Laravel Activity Log",
      description: "Log aktivitas di dalam aplikasi Laravel Anda.",
      stars: "5,429",
      forks: "717",
      image: latahzan,
      author: "Spatie",
      link: "https://laravel-activity-log.com", // tambahkan link sesuai dengan kebutuhan
    },
    {
      id: 3,
      title: "Bagisto: Platform E-Commerce Open Source",
      description:
        "Platform eCommerce Laravel yang open source dan gratis.",
      stars: "16,621",
      forks: "2,308",
      image: "https://via.placeholder.com/300x150",
      author: "Bagisto",
      link: "https://bagisto.com", // tambahkan link sesuai dengan kebutuhan
    },
    {
      id: 4,
      title: "Laravel Telescope: Debug dan Monitor Aplikasi Laravel",
      description: "Alat debugging Laravel yang elegan.",
      stars: "4,942",
      forks: "594",
      image: "https://via.placeholder.com/300x150",
      author: "The Laravel Framework",
      link: "https://laravel-telescope.com", // tambahkan link sesuai dengan kebutuhan
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      {/* Judul Halaman */}
      <h1 className="text-4xl font-bold mb-2">Semua Info Open Source</h1>
      <p className="text-lg text-gray-300 mb-6">
        Temukan open source yang sesuai dengan kebutuhan Anda.
      </p>

      {/* Input Pencarian */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Cari open source..."
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
        />
      </div>

      {/* Grid Card Open Source */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {openSourceData.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <div className="w-[350px] bg-white text-black p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl mx-auto">
              {/* Gambar dengan efek hover zoom-in */}
              <div className="overflow-hidden rounded-lg w-full h-[200px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Detail */}
              <h2 className="text-lg font-bold mt-4 transition-colors duration-300 hover:text-blue-600">
                {item.title}
              </h2>
              <p className="text-gray-700 mt-2 text-sm">{item.description}</p>
              <p className="text-sm text-gray-500 mt-1">By {item.author}</p>

              {/* Stars & Forks */}
              <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
  <span className="flex items-center gap-1">
    <FaGithub className="text-black" />
    {item.stars}
  </span>

  <span className="flex items-center gap-1">
    <FaStar className="text-yellow-500" />
    {item.forks}
  </span>
</div>
  
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
