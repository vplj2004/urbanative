import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303] text-white">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80')` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#030303] via-[#030303]/90 to-[#030303]/80" />

      {/* Decorative Circles/Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-500 rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-zinc-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-bounce delay-1000" />

      <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center gap-12 pt-20">
        <motion.div
          className="flex-1 text-center md:text-left space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 bg-[#141414]/80 backdrop-blur-sm border border-[#2e2e2e] rounded-full text-slate-400 font-semibold text-sm mb-4">
            🚀 Innovating Your Growth
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-['Barlow'] leading-tight">
            We Build Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-slate-500 to-zinc-600">Digital Experiences</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto md:mx-0 font-['Inter'] leading-relaxed">
            Helping small and mid-sized businesses establish a strong online presence and attract more customers with modern, high-performance websites.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-4 bg-slate-700 text-white rounded-full font-bold text-lg hover:bg-slate-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-slate-900/50">
              Get Your Free Website Demo <ArrowRight size={20} />
            </button>
            <a
              href="https://urbanative.github.io/urbanativeworkflow.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#141414] text-white border border-[#2e2e2e] rounded-full font-bold text-lg hover:bg-[#2e2e2e] hover:border-slate-500 transition-all flex items-center justify-center gap-2"
            >
              <Play size={18} fill="white" /> Our Agentic Workflow
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 relative hidden md:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full h-[500px] bg-gradient-to-br from-[#141414] to-[#0a0a0a] rounded-2xl border border-[#2e2e2e] shadow-2xl overflow-hidden group hover:border-slate-500/50 transition-colors">
            {/* Mockup Content inside the card */}
            <div className="absolute top-0 left-0 w-full h-12 bg-[#1a1a1a] border-b border-[#2e2e2e] flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-4 w-2/3 h-6 bg-[#2e2e2e] rounded-full opacity-50" />
            </div>
            <div className="p-8 mt-12 grid grid-cols-2 gap-4">
              <div className="col-span-2 h-40 bg-slate-800/20 rounded-lg animate-pulse border border-slate-700/30" />
              <div className="h-32 bg-[#2e2e2e]/50 rounded-lg" />
              <div className="h-32 bg-[#2e2e2e]/50 rounded-lg" />
              <div className="col-span-2 h-20 bg-[#2e2e2e]/50 rounded-lg" />
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -right-10 top-1/3 bg-[#141414] p-4 rounded-xl border border-[#2e2e2e] shadow-xl flex items-center gap-3 w-48"
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 font-bold text-xl">
                +
              </div>
              <div>
                <p className="text-xs text-gray-400">Monthly Growth</p>
                <p className="text-white font-bold text-lg">+124%</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
