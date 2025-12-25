import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, TreePine } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/wildlife", label: "Wildlife" },
    { path: "/programs", label: "Programs" },
    { path: "/blog", label: "Blog" },
    { path: "/join-team", label: "Join Team" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 shawdow-xl">
      <div className="max-w-8xl mx-auto px-8">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
              <TreePine className="text-white" size={28} />
            </div>
            <span className="text-3xl font-bold text-gray-900">
              Guardians of Wildlife
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-6 py-3 rounded-lg text-lg font-bold transition ${
                  isActive(link.path)
                    ? "text-green-700 font-semibold bg-green-100"
                    : "text-gray-700 hover:text-green-700 hover:bg-green-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <button
            className="md:hidden p-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-6 py-3 rounded-lg text-lg ${
                  isActive(link.path)
                    ? "text-green-700 font-semibold bg-green-100"
                    : "text-gray-700 hover:bg-green-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
