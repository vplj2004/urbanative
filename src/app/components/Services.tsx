import React from 'react';
import { Monitor, MapPin, MessageCircle, BarChart, Settings, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Monitor className="w-8 h-8 text-slate-400" />,
    title: 'Business Website Development',
    description: 'Custom, responsive websites built to convert visitors into loyal customers.',
  },
  {
    icon: <MapPin className="w-8 h-8 text-green-500" />,
    title: 'Google & Maps Presence',
    description: 'Ensure your business appears exactly when locals search for your services.',
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-green-400" />,
    title: 'WhatsApp & Lead Integration',
    description: 'Direct communication channels to turn interest into immediate action.',
  },
  {
    icon: <BarChart className="w-8 h-8 text-purple-500" />,
    title: 'Basic SEO Optimization',
    description: 'Rank higher on search engines to drive organic traffic to your site.',
  },
  {
    icon: <Settings className="w-8 h-8 text-orange-500" />,
    title: 'Maintenance & Support',
    description: 'Worry-free updates, security patches, and content changes whenever you need.',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-pink-500" />,
    title: 'Mobile-First Design',
    description: 'Optimized experiences for the majority of users browsing on phones.',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-['Barlow'] mb-4">
            Our Ultimate Set of <span className="text-slate-400">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-['Inter']">
            Everything you need to establish a dominant online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#141414] p-8 rounded-2xl border border-[#2e2e2e] hover:border-slate-500/50 transition-all hover:transform hover:-translate-y-2 group shadow-lg"
            >
              <div className="w-16 h-16 bg-[#1a1a1a] rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-700/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-['Barlow'] mb-3 group-hover:text-slate-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 font-['Inter'] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
