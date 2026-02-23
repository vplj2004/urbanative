import React from 'react';
import { Mail, Phone, MessageSquare, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#030303] text-white relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1166298126?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none min-w-full min-h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Background Video"
        ></iframe>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-['Barlow'] mb-4">
            Get Your <span className="text-slate-400">Free Consultation</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-['Inter']">
            Ready to grow? Let's discuss your project today.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="flex-1 space-y-8 bg-[#141414]/90 backdrop-blur-sm p-8 rounded-2xl border border-[#2e2e2e]">
            <h3 className="text-2xl font-bold font-['Barlow'] mb-6">Contact Us</h3>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-[#2e2e2e] rounded-full flex items-center justify-center group-hover:bg-[#0a84ff]/20 group-hover:text-slate-400 transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a href="mailto:contact.urbanative@gmail.com" className="font-bold text-lg hover:text-slate-400 transition-colors">
                  contact.urbanative@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-[#2e2e2e] rounded-full flex items-center justify-center group-hover:bg-[#0a84ff]/20 group-hover:text-slate-400 transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <a href="tel:7777922841" className="font-bold text-lg hover:text-slate-400 transition-colors">
                  co-founder Harish Sharma: +91 7777922841
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-[#2e2e2e] rounded-full flex items-center justify-center group-hover:bg-[#0a84ff]/20 group-hover:text-slate-400 transition-colors">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">WhatsApp</p>
                <a href="https://wa.me/9758523709" target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:text-slate-400 transition-colors">
                  co-founder Vipul Jangir: +91 8758523709
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#2e2e2e]">
              <p className="text-gray-400 italic font-['Inter']">
                "We reply to all inquiries within 24 hours."
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 bg-[#141414]/90 backdrop-blur-sm p-8 rounded-2xl border border-[#2e2e2e]">
            <h3 className="text-2xl font-bold font-['Barlow'] mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-sm mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[#030303]/50 border border-[#2e2e2e] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-slate-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-400 text-sm mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-[#030303]/50 border border-[#2e2e2e] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-slate-500 transition-colors"
                    placeholder="123-456-7890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 text-sm mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#030303]/50 border border-[#2e2e2e] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-slate-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 text-sm mb-2">Project Details</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-[#030303]/50 border border-[#2e2e2e] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-slate-500 transition-colors resize-none"
                  placeholder="Tell us about your business and goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-700 text-white font-bold py-4 rounded-lg hover:bg-slate-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-slate-900/50"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
