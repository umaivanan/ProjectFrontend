import React, { forwardRef } from 'react';
import { FaFacebookF, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Import icons for social media

const Footer = forwardRef(({ heroRef }, ref) => {
  const scrollToHome = () => {
    heroRef?.current?.scrollToHome(); // Scroll to Home section
  };

  const scrollToAbout = () => {
    heroRef?.current?.scrollToAbout(); // Scroll to About section
  };

  const scrollToContact = () => {
    heroRef?.current?.scrollToContact(); // Scroll to Contact section
  };

  return (
    <footer
    ref={ref}
    className="w-full mt-[10%] bg-gradient-to-b from-purple-200 to-white"
  >
      <div className="mx-auto w-full  max-w-7xl px-6 py-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          {/* Logo and Company Name */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <button
              onClick={scrollToHome}
              className="flex items-center gap-2 text-3xl font-bold text-purple-500"
            >
              SwapSmart
            </button>

            {/* Navigation Links */}
            <nav className="flex gap-6 text-lg">
              <button
                className="text-gray-700 hover:text-purple-500"
                onClick={scrollToHome}
              >
                Home
              </button>
              <button
                className="text-gray-700 hover:text-purple-500"
                onClick={scrollToAbout}
              >
                About
              </button>
              <button
                className="text-gray-700 hover:text-purple-500"
                onClick={scrollToContact}
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-700"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-700"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="mailto:swapsmartpro@yourcompany.com"
              className="text-purple-500 hover:text-purple-700"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row border-t pt-4 text-lg text-gray-700">
          <div>© 2024 SwapSmart. All rights reserved.</div>
          <div className="text-center">
            Designed with <span className=""></span> by SwapSmart
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
