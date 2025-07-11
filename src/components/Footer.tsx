import React from 'react';
import { Phone, Mail, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <img 
                src="/WhatsApp Image 2025-07-09 at 10.17.19_9450860b.jpg" 
                alt="BBN Wellness Club" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-lg font-light tracking-wide">BBN WELLNESS CLUB</h3>
                <p className="text-emerald-400 text-sm font-light tracking-wider">HEALTH IS WEALTH</p>
              </div>
            </div>
            <p className="text-stone-300 leading-relaxed font-light">
              Your path to a healthier, happier life begins here. Join our community and 
              discover sustainable weight loss solutions while exploring earning opportunities.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-light mb-8 tracking-wide">Contact Information</h4>
            <div className="space-y-6">
              <a href="tel:9508894235" className="flex items-center space-x-3 text-stone-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-light">9508894235</span>
              </a>
              <a href="mailto:bbnwellnessclub@gmail.com" className="flex items-center space-x-3 text-stone-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span className="font-light">bbnwellnessclub@gmail.com</span>
              </a>
              <a href="https://www.instagram.com/bbn_wellness_club" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-stone-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="font-light">@bbn_wellness_club</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-light mb-8 tracking-wide">Our Mission</h4>
            <p className="text-stone-300 leading-relaxed mb-6 font-light">
              To empower individuals with the knowledge, tools, and community support needed 
              to achieve sustainable weight loss and optimal wellness.
            </p>
            <div className="flex items-center text-emerald-400">
              <Heart className="w-5 h-5 mr-3" />
              <span className="font-light">Lose Weight – Ask Me How</span>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-16 pt-8 text-center">
          <p className="text-stone-400 font-light">
            © 2025 BBN Wellness Club. All rights reserved. Your journey to wellness starts here.
          </p>
        </div>
        <div className="flex items-center justify-center mt-4 space-x-2">
          <span className="text-sm text-gray-400">Powered by</span>
          <a href="https://www.botrixai.com/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/botrix-logo.png" alt="BotrixAI Logo" className="h-8 self-center inline-block" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;