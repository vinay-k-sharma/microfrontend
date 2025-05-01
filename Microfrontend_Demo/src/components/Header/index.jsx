import { Links } from "./LinkData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useLocation } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  // const [dropdownOpen, setDropdownOpen] = useState({});

  const location = useLocation();
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text"
          >
            MicroFrontend Demo
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleModal}
          >
            {openModal ? (
              <IoMdClose className="text-2xl" />
            ) : (
              <IoMenuOutline className="text-2xl" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex space-x-8">
              {Links.map((link) => (
                <li key={link.label}>
                  <Link
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      location.pathname === link.slug
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:text-white hover:bg-gray-700"
                    }`}
                    to={link.slug}
                  >
                    <div className="flex items-center gap-2">
                      {link.label}
                      {link.icon && (
                        <span className="text-lg">{link.icon}</span>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {openModal && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {Links.map((link) => (
                <Link
                  key={link.label}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.slug
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`}
                  to={link.slug}
                  onClick={() => setOpenModal(false)}
                >
                  <div className="flex items-center gap-2">
                    {link.label}
                    {link.icon && <span className="text-lg">{link.icon}</span>}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
