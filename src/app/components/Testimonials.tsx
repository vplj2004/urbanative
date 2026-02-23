import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Owner, Jenkins Bakery',
    image: 'https://images.unsplash.com/photo-1655249481446-25d575f1c054?auto=format&fit=crop&q=80',
    quote: "Urbanative transformed our online presence. We've seen a 40% increase in custom cake orders since the new site launched!",
  },
  {
    name: 'Michael Ross',
    role: 'Manager, Ross Fitness',
    image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?auto=format&fit=crop&q=80',
    quote: "The booking system integration is flawless. Our members love how easy it is to schedule classes on their phones.",
  },
  {
    name: 'David Chen',
    role: 'Founder, TechStart',
    image: 'https://images.unsplash.com/photo-1765648636178-60e73bcc865e?auto=format&fit=crop&q=80',
    quote: "Professional, fast, and incredibly supportive. They didn't just build a website; they built a growth engine for us.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-500/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-['Barlow'] mb-4">
            What Our <span className="text-slate-400">Clients</span> Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-['Inter']">
            Real stories from local business owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#141414] p-8 rounded-2xl border border-[#2e2e2e] relative group hover:-translate-y-2 transition-transform duration-300 shadow-lg"
            >
              <Quote className="absolute top-8 right-8 text-[#2e2e2e] w-12 h-12 group-hover:text-slate-400/20 transition-colors" />

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-slate-500"
                />
                <div>
                  <h4 className="font-bold font-['Barlow'] text-lg">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm font-['Inter']">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-300 font-['Inter'] leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
