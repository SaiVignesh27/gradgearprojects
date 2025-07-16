import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, Linkedin, Instagram, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to='/'>
            <h3 className="text-2xl font-bold text-blue-400">GRADGEAR</h3>
            </Link>
            <p className="text-gray-300 text-sm">
              One Gear. Many Solutions.
            </p>
            <p className="text-gray-400 text-sm">
              Helping students and businesses go digital with powerful projects & websites.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                About
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Contact
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Services
              </Link>
              <Link to="/smart-contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Get a Quote
              </Link>
              <Link to="/projects" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Projects
              </Link>
              <Link to="/how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                How It Works
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a 
                  href="mailto:gradgearprojects@gmail.com" 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  gradgearprojects@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-blue-400" />
                <a 
                  href='https://gradgearprojects.vercel.app'
                  className="text-gray-300 text-sm">gradgear.com</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a 
                href="#" 
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 GRADGEAR. All rights reserved. One Gear. Many Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;