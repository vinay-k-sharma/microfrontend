import { Links } from "./LinkData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useLocation } from "react-router-dom";
import 'tailwindcss/tailwind.css'
const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  // const [dropdownOpen, setDropdownOpen] = useState({});

  const location = useLocation();
  const toggleModal = () => {
    setOpenModal(!openModal);
  };


  return (
    <div className="lg:px-24 px-4 bg-white flex flex-wrap items-center py-4 sticky top-0 z-50" id="header">
      <div className="flex-1 flex justify-between items-center">
        <Link to="/" className=" text-[30px] text-[#2d465e]">
          MicroFrontend Demo
        </Link>
      </div>

      <div className="pointer-cursor lg:hidden block" onClick={toggleModal}>
        <IoMenuOutline className="text-3xl"/>
      </div>

      <div className="hidden lg:flex lg:items-center lg:w-auto w-full">
        <nav>
          <ul className="md:flex items-center justify-between text-base  pt-4 md:pt-0">
            {Links.map((link) => (
              <li key={link.label}>
                <Link
                  className={`md:p-4 py-3 px-0 block transition-all duration-200 ease-in-out hover:text-[#34BF49] ${
                    location.pathname === link.slug ? "text-[#34BF49]" : ""
                  }`}
                  to={link.slug}
                >
                  <div className="flex gap-1">
                  {link.label}
                  {
                    link.icon ? <span className="mt-1">{link.icon}</span> : null
                  }
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col items-center justify-center">
          <ul className="relative p-5 flex flex-col bg-white w-[95%] h-[80%] gap-6 text-lg">
            {Links.map((link) => (
              <li key={link.label} className="cursor-pointer">
                <Link
                  className={`block ${
                    location.pathname === link.slug ? "text-[#34bf49]" : ""
                  }`}
                  to={link.slug}
                  onClick={toggleModal}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <div
              className="absolute -top-10 text-white right-0 text-3xl cursor-pointer"
              onClick={toggleModal}
            >
              <IoMdClose className="text-3xl"/>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
