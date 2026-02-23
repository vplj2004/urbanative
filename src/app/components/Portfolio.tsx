import React from 'react';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1741940513798-4ce04b95ffda?auto=format&fit=crop&q=80',
    title: 'Modern Gym Experience',
    description: 'A high-energy booking site for a local fitness center.',
    tag: 'Gym Website',
  },
  {
    image: 'https://images.unsplash.com/photo-1764687136829-a33c933404ea?auto=format&fit=crop&q=80',
    title: 'Fine Dining Reservations',
    description: 'Elegant menu showcase and table booking integration.',
    tag: 'Restaurant Website',
  },
  {
    image: 'https://images.unsplash.com/photo-1769107805412-90d9191d53e9?auto=format&fit=crop&q=80',
    title: 'Local Boutique Shop',
    description: 'Seamless online catalog and contact system for retail.',
    tag: 'Local Store Website',
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-[#030303] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-['Barlow'] mb-4">
            Recent <span className="text-slate-400">Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-['Inter']">
            See how we've helped other local businesses thrive online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#141414] rounded-2xl overflow-hidden border border-[#2e2e2e] group hover:border-slate-500/50 transition-all shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent opacity-60"></div>
                <span className="absolute top-4 left-4 bg-slate-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {project.tag}
                </span>
              </div>
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold font-['Barlow'] mb-3 group-hover:text-slate-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-['Inter'] leading-relaxed mb-6">
                  {project.description}
                </p>
                <button className="text-slate-400 font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Case Study <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
