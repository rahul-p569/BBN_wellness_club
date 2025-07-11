import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-4">
            <img 
              src="/WhatsApp Image 2025-07-09 at 10.17.19_9450860b.jpg" 
              alt="BBN Wellness Club" 
              className="h-14 w-auto"
            />
            <div>
              <h1 className="text-xl font-light text-stone-800 tracking-wide">BBN WELLNESS CLUB</h1>
              <p className="text-stone-600 text-sm font-light tracking-wider">HEALTH IS WEALTH</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <a href="tel:9508894235" className="flex items-center space-x-2 text-stone-600 hover:text-stone-800 transition-colors">
              <Phone className="w-4 h-4" />
              <span>9508894235</span>
            </a>
            <a href="mailto:bbnwellnessclub@gmail.com" className="flex items-center space-x-2 text-stone-600 hover:text-stone-800 transition-colors">
              <Mail className="w-4 h-4" />
              <span>bbnwellnessclub@gmail.com</span>
            </a>
            <a href="https://www.instagram.com/bbn_wellness_club" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-stone-600 hover:text-stone-800 transition-colors">
              <Instagram className="w-4 h-4" />
              <span>@bbn_wellness_club</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;