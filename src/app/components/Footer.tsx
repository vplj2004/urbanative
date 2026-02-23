import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../../assets/urbanative-logo.png';

export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white py-12 border-t border-[#2e2e2e]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Urbanative" className="h-10 w-auto object-contain" />
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 bg-[#141414] rounded-full flex items-center justify-center hover:bg-[#0a84ff] hover:text-white transition-colors text-gray-400">
              <Facebook size={20} />
            </a>
            <a href="https://x.com/urbanativeCo" className="w-10 h-10 bg-[#141414] rounded-full flex items-center justify-center hover:bg-slate-700 hover:text-white transition-colors text-gray-400">
              <Twitter size={20} />
            </a>
            <a href="https://www.instagram.com/urbanativeco/" className="w-10 h-10 bg-[#141414] rounded-full flex items-center justify-center hover:bg-slate-700 hover:text-white transition-colors text-gray-400">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/urbanative" className="w-10 h-10 bg-[#141414] rounded-full flex items-center justify-center hover:bg-slate-700 hover:text-white transition-colors text-gray-400">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 border-b border-[#2e2e2e] pb-12">
          <div className="md:col-span-2">
            <h4 className="text-lg font-bold font-['Barlow'] mb-4">About Urbanative</h4>
            <p className="text-gray-400 font-['Inter'] max-w-sm">
              We help local businesses grow by building modern, high-performance, customized websites. Your success is our mission.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold font-['Barlow'] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 font-['Inter']">
              <li><a href="https://www.linkedin.com/company/urbanative/services/?viewAsMember=true" className="hover:text-slate-400 transition-colors">Services</a></li>
              <li><a href="https://urbanative.github.io/urbanativeworkflow.github.io/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">Workflow</a></li>
              <li><a href="https://github.com/Urbanative" className="hover:text-slate-400 transition-colors">Github</a></li>
              <li><a href="#about" className="hover:text-slate-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-slate-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-['Barlow'] mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 font-['Inter']">
              <li>contact.urbanative@gmail.com</li>
              <li>+91 7777922841</li>
              <li>+91 8758523709 (WhatsApp)</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-500 font-['Inter'] text-sm">
          <p>© 2026 Urbanative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
