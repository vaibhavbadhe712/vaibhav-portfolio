import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-[#0c1f38] py-14 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Brand Monogram & Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#ff5a00] to-[#ff7a00] flex items-center justify-center font-mono font-black text-white shadow-md text-lg">
              VB
            </div>
            <div>
              <div className="font-extrabold text-white text-base">Vaibhav Badhe</div>
              <div className="text-xs font-semibold text-orange-400">Senior Flutter & Full Stack Developer</div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#ai" className="hover:text-white transition-colors">AI Features</a>
            <a href="#open-source" className="hover:text-white transition-colors">Open Source</a>
            <a href="#skills" className="hover:text-white transition-colors">Tech Stack</a>
            <a href="#experience" className="hover:text-white transition-colors">Milestones</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons & Scroll To Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all shadow-sm"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 text-sky-400" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all shadow-sm"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4 text-slate-200" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all shadow-sm"
              title="Email"
            >
              <Mail className="w-4 h-4 text-[#ff5a00]" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 border border-orange-500/40 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 font-medium">
          <div>
            © {new Date().getFullYear()} Vaibhav Badhe. Built with Flutter, React & Node.js mindset.
          </div>
          <div className="flex items-center gap-1.5 font-mono text-slate-300">
            <span>High-Trust Engineering • Sangamner, MH, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
