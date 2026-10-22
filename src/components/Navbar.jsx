import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Sparkles, Phone, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'AI Features', href: '#ai' },
    { name: 'Open Source', href: '#open-source' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Milestones', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-sm' 
        : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Cars24-style Crisp Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-2xl overflow-hidden ring-2 ring-[#ff5a00] shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform duration-200 shrink-0 bg-slate-900">
              <img src="/assets/profile/vaibhav-suit.jpg" alt="Vaibhav Badhe" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-extrabold text-slate-900 tracking-tight text-base group-hover:text-[#ff5a00] transition-colors flex items-center gap-1.5">
                <span>Vaibhav Badhe</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" title="Available for hire" />
              </div>
              <div className="text-[11px] font-semibold text-slate-500 leading-none">
                Senior Flutter Developer @ Infynod Tech
              </div>
            </div>
          </a>

          {/* Desktop Nav Pills */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all duration-150 hover:shadow-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all shadow-sm hover:shadow"
            >
              <FileText className="w-3.5 h-3.5 text-[#ff5a00]" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-[#ff5a00] hover:bg-[#ea5000] rounded-xl shadow-md shadow-orange-500/25 transition-all hover:shadow-orange-500/40 hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-4 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-700 hover:text-[#ff5a00] hover:bg-slate-50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-2.5 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800"
            >
              <FileText className="w-4 h-4 text-[#ff5a00]" />
              View Resume PDF
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#ff5a00] text-xs font-bold text-white shadow-md shadow-orange-500/20"
            >
              <Send className="w-4 h-4" />
              Contact Directly
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
