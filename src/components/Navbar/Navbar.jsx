import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link untuk routing
import Logo from "../../assets/food-logo.png"; // Pastikan path ke logo benar
import { FaCartShopping, FaBars } from "react-icons/fa6"; // Menggunakan FaBars untuk hamburger icon
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/", // Rute Home
  },
  {
    id: 2,
    name: "Services",
    link: "/#services", // Pastikan ini menuju ID pada halaman Home
  },
  {
    id: 3,
    name: "About",
    link: "/#Banner", // Pastikan ini menuju ID pada halaman Home
  },
  {
    id: 4,
    name: "Produk Digital",
    link: "/produk", // Rute Halaman Produk Digital
  },
  {
    id: 5,
    name: "Team", // Menambahkan menu Team
    link: "/team", // Rute Halaman Team
  },
  {
    id: 6,
    name: "Source Code", // Menambahkan menu Source Code
    link: "/source", // Rute Halaman Source Code
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    // Menutup menu mobile setelah klik pada menu
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link to="/" className="font-bold text-2xl sm:text-2xl flex gap-0,5">
              <img src={Logo} alt="Logo" className="w-10" />
              C0DIFYHUB
            </Link>
          </div>

          {/* Menu & Actions */}
          <div className="flex justify-between items-center gap-4">
            {/* Dark Mode Toggle */}
            <DarkMode />

            {/* Mobile Menu Toggle Button */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 dark:text-white text-2xl"
              >
                <FaBars /> {/* Hamburger Icon */}
              </button>
            </div>

            {/* Menu Links */}
            <div
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } sm:flex items-center gap-4`}
            >
              <ul className="flex sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <Link
                      to={menu.link}
                      className="inline-block py-4 px-4 hover:text-yellow-500"
                      onClick={handleMenuClick} // Menutup menu setelah klik
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Order Button */}
            <button
              className="bg-gradient-to-r from-editprimary to-editsecondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
              onClick={() => {
                window.open(
                  "https://wa.me/6285835116946?text=Halo!%20Saya%20ingin%20memesan.",
                  "_blank"
                );
              }}
            >
              Order
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } sm:hidden bg-gray-800 text-white w-full mt-4 rounded-lg p-4`}
      >
        <ul>
          {Menu.map((menu) => (
            <li key={menu.id} className="py-2">
              <Link
                to={menu.link}
                className="block px-4 py-2 hover:bg-gray-700"
                onClick={handleMenuClick} // Menutup menu setelah klik
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
