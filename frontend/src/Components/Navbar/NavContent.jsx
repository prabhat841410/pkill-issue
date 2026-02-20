import React from "react";

export default function Navbar() {
  const navItems = ["Public View", "Budget", "About"];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="w-full pl-10 pr-4 py-4 flex items-center justify-between">
        
        {/* LEFT - LOGO */}
        <div className="flex items-center cursor-pointer">
          <div className="h-10 w-11 py-4 bg-[url(https://imgs.search.brave.com/zXa5rGK9wEpjxZUb3hfeLVIPI4dmfgJxQ7pObqV6jxY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTYv/OTc0LzA5Ny9zbWFs/bC9sb2dvcy1vZi1n/cmVlbi10cmVlLWxl/YWYtZWNvbG9neS12/ZWN0b3IuanBn)] bg-contain "></div>

          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            <span className="text-green-600">Fix</span>ity
          </h1>
        </div>

        {/* RIGHT SIDE NAV AREA */}
        <div className="flex items-center gap-10">

          {/* Normal Nav Items */}
          {navItems.map((item) => (
            <div
              key={item}
              className="relative cursor-pointer group transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <span className="text-lg font-medium text-gray-700 transition-all duration-300 group-hover:text-green-600">
                {item}
              </span>

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}

          {/* Report Issue Button */}
          <button className="px-5 py-2 border-2 border-green-500 text-green-600 rounded-lg font-medium transition-all duration-200 hover:bg-green-500 hover:text-white hover:shadow-lg hover:scale-105 active:scale-95">
            Report an Issue
          </button>

          {/* Admin Login - Right Most */}
          <button className="px-5 py-2 bg-green-600 text-white rounded-lg font-medium shadow-md transition-all duration-200 hover:bg-green-700 hover:shadow-xl hover:scale-105 active:scale-95">
            Admin Login
          </button>

        </div>
      </div>
    </nav>
  );
}