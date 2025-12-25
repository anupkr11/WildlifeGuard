import React from "react";
import { Link } from "react-router-dom";
import {
  TreePine,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
              <TreePine className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-white">
              Guardians
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Government initiative dedicated to protecting India's wildlife and
            preserving natural habitats.
          </p>
          <div className="flex space-x-3 mt-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-700 transition"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {["/", "/wildlife", "/programs", "/blog", "/join-team", "/contact"].map(
              (path, i) => (
                <li key={i}>
                  <Link to={path} className="hover:text-green-500">
                    {path === "/" ? "Home" : path.replace("/", "")}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={18} /> New Delhi, India
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> 1800-XXX-XXXX
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> wildlife@gov.in
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-bold mb-4">Newsletter</h3>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full px-4 py-2 mb-3 bg-gray-800 border border-gray-700 rounded"
          />
          <button className="w-full bg-green-700 hover:bg-green-800 py-2 rounded">
            Subscribe
          </button>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Guardians of Wildlife. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
