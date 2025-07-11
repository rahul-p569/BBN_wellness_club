import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('join-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-stone-50 py-24 overflow-hidden">
      {/* Background image with transparency */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/assets/TOP-8-BIGGEST-SECRETS-TO-WEIGHT-LOSS.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.18,
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-light text-stone-800 mb-8 tracking-tight">
          Welcome to <br />
          <span className="text-emerald-700 font-normal">BBN Wellness Club</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-emerald-700 font-light mb-12 tracking-wide">
          Lose Weight – Ask Me How
        </p>
        
        <p className="text-lg text-stone-600 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
          Are you struggling with weight gain and looking for a sustainable way to stay fit and healthy? 
          Join our community and discover the secrets to effective weight loss, wellness, and even earning opportunities from home.
        </p>
        
        <button 
          onClick={scrollToForm}
          className="inline-flex items-center px-8 py-4 bg-stone-800 text-white text-lg font-light rounded-none hover:bg-stone-700 transition-colors duration-300"
        >
          Join Our WhatsApp Community
          <ArrowRight className="ml-3 w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;