// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-5">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          {/* Company Name */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
              <span>SwapSmart</span>
            </Link>

            {/* Navigation Links */}
            <nav className="flex gap-4 text-sm">
              <Link className="text-gray-500 hover:text-gray-900" to="/?section=home">
                Home
              </Link>
              <Link className="text-gray-500 hover:text-gray-900" to="/?section=about">
                About
              </Link>
              <Link className="text-gray-500 hover:text-gray-900" to="/?section=contact">
                Contact
              </Link>
              <Link className="text-gray-500 hover:text-gray-900" to="/?section=careers">
                Careers
              </Link>
              <Link className="text-gray-500 hover:text-gray-900" to="/?section=help">
                Help
              </Link>
              <Link className="text-gray-500 hover:text-gray-900" to="/?section=privacy">
                Privacy
              </Link>
            </nav>
          </div>

          {/* Email Subscription */}
          <div className="flex items-center gap-2">
            <input
              className="max-w-[240px] px-3 py-2 border rounded"
              placeholder="Enter your email"
              type="email"
            />
            <button className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-red-700">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="mt-4 flex items-center justify-between border-t pt-4 text-sm text-gray-500">
          <div>© 2024 YourCompanyName. All rights reserved.</div>
          <div className="flex gap-4">
            <Link className="hover:text-gray-900" to="/?section=terms">
              Terms
            </Link>
            <Link className="hover:text-gray-900" to="/?section=privacy">
              Privacy
            </Link>
            <Link className="hover:text-gray-900" to="/?section=cookies">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
