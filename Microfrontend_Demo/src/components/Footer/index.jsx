import { Link } from "react-router-dom";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoGoogle } from "react-icons/bi";
import { BiLogoPlayStore } from "react-icons/bi";
import "tailwindcss/tailwind.css";

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <p className="text-gray-400">
              There live the blind texts. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean.
            </p>
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Learn More
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Find Buyers
                  </Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Recent Posts</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">May 3, 2020</p>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  There live the Blind Texts
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500">May 3, 2020</p>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Separated they live in Bookmarksgrove right
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <BiLogoFacebookCircle className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaXTwitter className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <BiLogoLinkedinSquare className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <BiLogoGoogle className="text-2xl" />
              </a>
            </div>
            <div className="pt-4">
              <a
                href="#"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <BiLogoPlayStore className="text-2xl mr-2" />
                <span>Download App</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} MicroFrontend Demo. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
