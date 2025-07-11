import React from 'react';
import { Briefcase, Home, GraduationCap, Users } from 'lucide-react';

const ForWhom = () => {
  const targetAudience = [
    {
      icon: Briefcase,
      title: "Working Professionals",
      description: "Busy schedules? No problem. Learn to stay healthy while managing your career."
    },
    {
      icon: Home,
      title: "Housewives",
      description: "Transform your family's health while taking care of your own wellness journey."
    },
    {
      icon: GraduationCap,
      title: "Students",
      description: "Build healthy habits early and maintain energy for your studies and activities."
    },
    {
      icon: Users,
      title: "Senior Citizens",
      description: "Age gracefully with gentle, effective wellness strategies designed for you."
    }
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light text-stone-800 mb-6 tracking-tight">For Whom?</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light">
            Our program is designed for everyone, regardless of age, profession, or lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {targetAudience.map((audience, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white flex items-center justify-center mx-auto mb-6 shadow-sm">
                <audience.icon className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-normal text-stone-800 mb-4">{audience.title}</h3>
              <p className="text-stone-600 leading-relaxed font-light max-w-sm mx-auto">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhom;