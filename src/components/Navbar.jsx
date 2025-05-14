import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white trnsfarent-bg-black/25 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:text-[15px]">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a to="/" className="text-2xl uppercase">
              Prottay
            </a>
          </div>

          {/* s (Desktop) */}
          <div className="hidden md:flex space-x-4 cursor-pointer">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              About
            </Link>
            <Link
              to="technologies"
              smooth={true}
              duration={500}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              Technologies
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              Projects
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              Experience
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              Contact
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/prottaykumarsaha/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/prottay99"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a href="mailto:prottay.saha46@gmail.com" aria-label="Email">
              <GoMail />
            </a>
            <a
              href="https://x.com/ProttayS99730"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaSquareTwitter />
            </a>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="hero"
            smooth={true}
            className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="technologies"
            smooth={true}
            className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            Technologies
          </Link>
          <Link
            to="projects"
            smooth={true}
            className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </Link>
          <Link
            to="experience"
            smooth={true}
            className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            Experience
          </Link>
          <Link
            to="contact"
            smooth={true}
            className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
