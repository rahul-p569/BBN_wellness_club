import React from 'react';
import { Brain, AlertTriangle, Heart, DollarSign, Calculator } from 'lucide-react';

const WhatYouLearn = () => {
  const learningPoints = [
    {
      icon: Brain,
      title: "How the Human Body Gains Weight",
      description: "Understand the science behind weight gain and metabolism"
    },
    {
      icon: AlertTriangle,
      title: "Problems Due to Obesity",
      description: "Learn about the health risks associated with excess weight"
    },
    {
      icon: Heart,
      title: "How to Lose Weight & Stay Healthy",
      description: "Get expert tips on sustainable weight loss and wellness"
    },
    {
      icon: DollarSign,
      title: "How to Join Our Team & Earn from Home",
      description: "Explore opportunities to stay fit while making money"
    },
    {
      icon: Calculator,
      title: "Free Tools to Measure Body Parameters",
      description: "Track your progress with our free health assessment tools"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light text-stone-800 mb-6 tracking-tight">What Will You Learn?</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light">
            Our comprehensive program covers everything you need to know about weight loss, health, and wellness
          </p>
        </div>

        <div className="space-y-12">
          {learningPoints.map((point, index) => (
            <div key={index} className="flex items-start space-x-8 max-w-4xl mx-auto">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-stone-100 flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-emerald-700" />
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-normal text-stone-800 mb-3">{point.title}</h3>
                <p className="text-stone-600 leading-relaxed font-light">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;