import React from 'react';
import { Clock, Smartphone, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-8 h-8 text-slate-400" />,
    title: 'Fast Delivery',
    description: 'Get your professional website up and running in record time.',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-green-500" />,
    title: 'Mobile-Optimized',
    description: 'Flawless experience on every device your customers use.',
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
    title: 'Affordable',
    description: 'High-quality web design packages that fit your budget.',
  },
  {
    icon: <Users className="w-8 h-8 text-orange-500" />,
    title: 'Personalized',
    description: 'Dedicated support to ensure your vision comes to life.',
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-['Barlow'] mb-4">
            Why Choose <span className="text-slate-400">Urbanative</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-['Inter']">
            Designed for real business growth.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative w-64 h-64 flex flex-col items-center justify-center text-center bg-[#141414] rounded-full border border-[#2e2e2e] p-8 hover:border-slate-500 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-slate-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-transparent rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 mb-4 bg-[#030303] p-4 rounded-full border border-[#2e2e2e] group-hover:border-slate-500 transition-colors">
                {feature.icon}
              </div>
              <h3 className="relative z-10 text-xl font-bold font-['Barlow'] mb-2 group-hover:text-slate-400 transition-colors">
                {feature.title}
              </h3>
              <p className="relative z-10 text-sm text-gray-400 font-['Inter']">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
