import React from 'react';
import { Calendar, Clock, Users, Video } from 'lucide-react';

const Webinar = () => {
  const scrollToForm = () => {
    document.getElementById('join-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-emerald-700 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-white/20 flex items-center justify-center mx-auto mb-8">
            <Video className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-light mb-6 tracking-tight">Upcoming Webinar</h2>
          <p className="text-lg text-emerald-100 max-w-3xl mx-auto font-light leading-relaxed">
            Stay tuned for our next webinar, where we'll dive deep into weight loss strategies, 
            health tips, and business opportunities. Don't miss out—register now.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-12 max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center">
              <Calendar className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-normal mb-2">Coming Soon</h3>
              <p className="text-emerald-100 font-light">Date will be announced</p>
            </div>
            
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-normal mb-2">Duration</h3>
              <p className="text-emerald-100 font-light">90 minutes of value</p>
            </div>
            
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-normal mb-2">Format</h3>
              <p className="text-emerald-100 font-light">Interactive online session</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-light mb-8">What You'll Discover</h3>
            <div className="space-y-4 max-w-2xl mx-auto mb-12">
              <p className="text-emerald-100 font-light">Advanced weight loss strategies that actually work</p>
              <p className="text-emerald-100 font-light">How to overcome common weight loss plateaus</p>
              <p className="text-emerald-100 font-light">Business opportunities in the wellness industry</p>
              <p className="text-emerald-100 font-light">Live Q&A with wellness experts</p>
            </div>
            
            <button 
              onClick={scrollToForm}
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 text-lg font-light hover:bg-stone-50 transition-colors duration-300"
            >
              Register for Free Webinar
              <Calendar className="ml-3 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Webinar;