import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import logo from '../../assets/urbanative-logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Why Us', to: 'why-us' },
    { name: 'Process', to: 'process' },
    { name: 'Workflow', url: 'https://urbanative.github.io/urbanativeworkflow.github.io/' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#030303]/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="home" smooth={true} duration={500} className="flex items-center cursor-pointer">
          <img src={logo} alt="Urbanative" className="h-12 md:h-18 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.url ? (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-slate-400 transition-colors cursor-pointer font-['Barlow'] font-medium text-lg"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.to!}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-slate-400 transition-colors cursor-pointer font-['Barlow'] font-medium text-lg"
              >
                {link.name}
              </Link>
            )
          ))}
          <a
            href="https://urbanative.github.io/urbanativeworkflow.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-700 text-white px-6 py-2 rounded-full font-bold hover:bg-slate-600 transition-colors cursor-pointer shadow-lg shadow-slate-900/50"
          >
            Our Agentic Workflow
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#141414] border-t border-gray-800 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            link.url ? (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg font-medium hover:text-slate-400 py-2 border-b border-gray-800"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.to!}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg font-medium hover:text-slate-400 py-2 border-b border-gray-800"
              >
                {link.name}
              </Link>
            )
          ))}
          <a
            href="https://urbanative.github.io/urbanativeworkflow.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="bg-slate-700 text-white px-6 py-3 rounded-lg font-bold text-center mt-4"
          >
            Our Agentic Workflow
          </a>
        </div>
      )}
    </nav>
  );
};
