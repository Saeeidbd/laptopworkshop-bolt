import React from 'react';
import { Laptop, Phone, Mail, MapPin, Download, FileText, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Laptop className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Laptop Workshop</h3>
                <p className="text-sm text-gray-300">www.laptopws.com</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Professional laptop repair services and free technical resources for the repair community.
            </p>
            
            {/* Social Media */}
            <div className="mb-6">
              <a
                href="https://www.facebook.com/laptopworkshopbd.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-4 w-4" />
                <span>Follow us on Facebook</span>
              </a>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+8801713413131</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>abusaeeid@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Sylhet, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => onNavigate('home')} className="text-gray-300 hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('services')} className="text-gray-300 hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => onNavigate('about')} className="text-gray-300 hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button></li>
              <li><button onClick={() => onNavigate('downloads')} className="text-gray-300 hover:text-white transition-colors">Downloads</button></li>
            </ul>
          </div>

          {/* Download Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Downloads</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-300 cursor-pointer hover:text-white transition-colors" onClick={() => onNavigate('downloads')}>
                <Download className="h-4 w-4" />
                <span>BIOS Files</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300 cursor-pointer hover:text-white transition-colors" onClick={() => onNavigate('downloads')}>
                <FileText className="h-4 w-4" />
                <span>Schematics</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300 cursor-pointer hover:text-white transition-colors" onClick={() => onNavigate('downloads')}>
                <FileText className="h-4 w-4" />
                <span>Boardview Files</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Business Hours</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Mon - Thu:</span>
                <span>10:30 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sat - Sun:</span>
                <span>10:30 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Laptop Workshop. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors">Privacy Policy</button>
              <button className="text-gray-400 hover:text-white transition-colors">Terms of Service</button>
              <button className="text-gray-400 hover:text-white transition-colors">Disclaimer</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;