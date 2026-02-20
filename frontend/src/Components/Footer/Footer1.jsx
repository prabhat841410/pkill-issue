import React from 'react';
import { Mail, Phone, MapPin, MoveUpRight } from 'lucide-react';

const Footer1 = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12 px-6 md:px-16">
      {/* Top Section: Header & CTA */}
      <div className="max-w-7xl mx-auto border-b border-gray-800 pb-10 mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Improve Your Community with Fixity
            </h2>
            <p className="text-gray-400 text-lg">
              Report and track civic issues with transparency.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all">
            Get Started <MoveUpRight size={18} />
          </button>
        </div>
      </div>

      {/* Bottom Section: Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Brand/About */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-xl">Fixity</h3>
          <p className="text-sm leading-relaxed">
            Empowering citizens to build better neighborhoods through digital accountability.
          </p>
          <div className="flex items-center gap-3 text-gray-400">
            <MapPin size={18} className="text-green-500" />
            <span>NCE Chandi <br />Nalanda,Bihar <br /> India</span>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Navigation</h3>
          <ul className="space-y-4">
            {["Public View", "Budget", "About", "Admin Login"].map((item, index) => (
              <li
                key={index}
                className="hover:text-green-400 transition-colors cursor-pointer w-fit"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <Mail size={18} className="text-green-500" />
              <span>support@fixity.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <Phone size={18} className="text-green-500" />
              <span>+91-9876543210</span>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-5 pt-4 border-t border-gray-900 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Fixity Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer1;
