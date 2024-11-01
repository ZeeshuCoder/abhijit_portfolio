import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <h2 className="text-lg mb-4">Connect with me</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/PEGAZIZ" target="_blank">
            <FaGithubSquare className="h-8 w-8 hover:text-gray-400 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhijit-deka-8551072a0"
            target="_blank"
          >
            <FaLinkedin className="h-8 w-8 hover:text-gray-400 transition-colors" />
          </a>
          <a
            href="https://www.instagram.com/9.37.010?igsh=MWpnNGszejBidHRqOA=="
            target="_blank"
          >
            <BiLogoInstagramAlt className="h-8 w-8 hover:text-gray-400 transition-colors" />
          </a>
          <a target="_blank" href="mailto:deka.abhijit1204@gmail.com">
            <MdEmail className="h-8 w-8 hover:text-gray-400 transition-colors" />
          </a>
        </div>
        {/* <p className="mt-4 text-sm">
          © {new Date().getFullYear()} Abhijit. All rights reserved.
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
