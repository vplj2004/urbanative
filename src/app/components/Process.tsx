import React from 'react';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    step: 'Step 1',
    title: 'Consultation',
    description: 'We discuss your goals and understand your business needs.',
  },
  {
    step: 'Step 2',
    title: 'Design & Dev',
    description: 'Our team crafts a unique, mobile-friendly design.',
  },
  {
    step: 'Step 3',
    title: 'Launch',
    description: 'We test everything and make your website live.',
  },
  {
    step: 'Step 4',
    title: 'Growth Support',
    description: 'Ongoing updates and SEO to keep you growing.',
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-24 bg-[#030303] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-['Barlow'] mb-4">
            Our Simple <span className="text-slate-400">Process</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-['Inter']">
            From concept to launch in 4 easy steps.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-[#2e2e2e] transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-[#141414] p-8 rounded-2xl border border-[#2e2e2e] flex flex-col items-center text-center shadow-lg hover:border-slate-500 transition-all group"
              >
                <div className="w-16 h-16 bg-[#030303] rounded-full border-4 border-slate-500 flex items-center justify-center font-bold text-xl text-white mb-6 z-10 shadow-[0_0_20px_rgba(100,116,139,0.3)]">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold font-['Barlow'] mb-2 group-hover:text-slate-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 font-['Inter'] text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
