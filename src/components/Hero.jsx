import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const rotatingWords = [
  { text: "Mobile Products", gradient: "from-orange-600 via-amber-500 to-orange-500", highlight: "11+ Live Production Apps" },
  { text: "Flutter Ecosystems", gradient: "from-blue-600 via-indigo-500 to-sky-500", highlight: "Android & iOS Clean Architecture" },
  { text: "Welvors Matchmaking", gradient: "from-rose-600 via-pink-500 to-orange-500", highlight: "Live Matchmaking & Verification" },
  { text: "Enterprise Platforms", gradient: "from-amber-600 via-orange-500 to-yellow-600", highlight: "US Client Workforce VMS" },
  { text: "Full-Stack APIs", gradient: "from-emerald-600 via-teal-500 to-cyan-600", highlight: "Node.js & Fastify Microservices" }
];
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Sparkles, 
  Smartphone, 
  ShieldCheck, 
  Award, 
  Package, 
  ExternalLink,
  Code2,
  Star,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Laptop,
  Briefcase,
  Layers,
  Phone
} from 'lucide-react';
import { LinkedinIcon, GithubIcon, FlutterIcon, GooglePlayIcon, AppStoreIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const photoOptions = [
  {
    id: 'desk',
    label: 'At Workspace',
    icon: Laptop,
    src: '/assets/profile/vaibhav-desk.jpg',
    tag: 'Lead Mobile Architect',
    detail: 'Full-Stack Flutter & Fastify Engineering'
  },
  {
    id: 'suit',
    label: 'Executive',
    icon: Briefcase,
    src: '/assets/profile/vaibhav-suit.jpg',
    tag: 'Senior Flutter Developer',
    detail: 'INFYNOD TECH PRIVATE LIMITED'
  },
  {
    id: 'blazer',
    label: 'Studio',
    icon: Star,
    src: '/assets/profile/vaibhav-blazer.jpg',
    tag: 'Best Employee 2025',
    detail: '11+ Production Apps Shipped'
  }
];

export default function Hero({ onOpenResume }) {
  const [activePhoto, setActivePhoto] = useState('desk');
  const [wordIndex, setWordIndex] = useState(0);
  const currentPhoto = photoOptions.find(p => p.id === activePhoto) || photoOptions[0];

  // Rotate hero keywords dynamically every 3.2s
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#f8fafc]">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-tr from-orange-500/[0.05] via-blue-500/[0.04] to-rose-500/[0.03] blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-orange-400/[0.05] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: High-Trust Executive Pitch (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Pill with Live Radar Pulse */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-orange-800 text-xs font-bold tracking-wide shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5a00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff5a00]" />
              </span>
              <span>SENIOR FLUTTER DEVELOPER @ INFYNOD TECH</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-semibold flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#ff5a00]" /> Pune, MH
              </span>
            </motion.div>

            {/* Main Punchy Headline with Dynamic Rotating Keyword & Shimmer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-slate-900 leading-[1.14]">
                <span>Architecting Production </span>
                <span className="inline-block relative min-h-[1.25em] align-top">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -22, filter: 'blur(6px)' }}
                      transition={{ duration: 0.45, ease: [0.2, 0.65, 0.3, 0.9] }}
                      className={`inline-block font-black bg-gradient-to-r ${rotatingWords[wordIndex].gradient} bg-clip-text text-transparent underline decoration-orange-500/40 decoration-wavy decoration-2 underline-offset-8`}
                    >
                      {rotatingWords[wordIndex].text}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <br className="hidden sm:inline" />
                <span> That Scale Globally</span>
                <span className="inline-flex items-center justify-center ml-1 text-[#ff5a00]">.</span>
              </h1>
            </motion.div>

            {/* Sub-Headline & Bio Card with Left Accent Bar & Highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-4 sm:p-5 rounded-2xl bg-white/95 border border-slate-200/90 shadow-sm backdrop-blur-xs transition-all hover:shadow-md hover:border-orange-500/30"
            >
              {/* Left Accent Bar */}
              <div className="absolute left-0 top-3 bottom-3 w-1.5 rounded-full bg-gradient-to-b from-orange-500 via-amber-400 to-blue-500" />

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal pl-2 sm:pl-3">
                Hi, I'm <span className="font-extrabold text-slate-900 px-1.5 py-0.5 rounded-md bg-orange-50 border border-orange-200/70 inline-flex items-center gap-1.5">
                  {personalInfo.name}
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </span> — Senior Flutter Developer at <strong className="font-bold text-slate-900 px-1.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 inline-block mt-1 sm:mt-0">
                  INFYNOD TECH PRIVATE LIMITED
                </strong>. I engineer high-performance, crash-free mobile applications for Android & iOS — including <span className="font-bold text-orange-700 bg-orange-50 border border-orange-200/70 px-1.5 py-0.5 rounded-md inline-block">
                  Welvors
                </span> (dating & social networking), US enterprise workforce platforms, and full-stack Node.js/Fastify microservices.
              </p>

              {/* Live Status Ticker connected to rotating word */}
              <div className="mt-3.5 pt-3 border-t border-slate-100 pl-2 sm:pl-3 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Currently shipping proprietary mobile products at Infynod Tech, Pune</span>
                </span>
                <span className="text-[11px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200/60 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-orange-500" />
                  {rotatingWords[wordIndex].highlight}
                </span>
              </div>
            </motion.div>

            {/* Cars24-style 4 Trust Checkpoints */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1"
            >
              <div className="flex items-center gap-2 bg-white p-3 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow transition-shadow">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">11+ Live Apps</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow transition-shadow">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">Welvors Dating</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow transition-shadow">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">US Client VMS</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow transition-shadow">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">Best Employee '25</span>
              </div>
            </motion.div>

            {/* CTA Buttons Row */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#ff5a00] hover:bg-[#ea5000] text-white font-extrabold text-sm shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Shipped Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-sm transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <Download className="w-4 h-4 text-[#ff5a00]" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-slate-600" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Social & Verification Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 pt-3 text-slate-600 text-xs font-medium"
            >
              <span className="font-bold text-slate-400 uppercase font-mono text-[11px]">Connect:</span>
              
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-blue-600 transition-colors shadow-sm"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-black transition-colors shadow-sm"
                title="GitHub Repositories"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#ff5a00] transition-colors shadow-sm"
                title="Send Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="p-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-emerald-600 transition-colors shadow-sm"
                title="Call Vaibhav"
              >
                <Phone className="w-4 h-4" />
              </a>
              
              <a
                href={personalInfo.pubDev}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-mono font-bold text-xs hover:bg-blue-100 transition-colors shadow-sm"
              >
                <Package className="w-3.5 h-3.5" />
                <span>pub.dev/toast_service</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Premium Photo Showcase Card with Floating Badges (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* The Main Elevated Showcase Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-[400px] rounded-[32px] bg-white p-3.5 sm:p-4 border border-slate-200/90 shadow-2xl shadow-slate-300/80"
            >
              
              {/* Photo Display Viewport with Rounded Corners */}
              <div className="relative aspect-[4/4.8] w-full rounded-[24px] overflow-hidden bg-slate-900 border border-slate-100 shadow-inner group">
                
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentPhoto.id}
                    src={currentPhoto.src}
                    alt="Vaibhav Badhe - Senior Flutter Developer"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full h-full object-cover object-top"
                  />
                </AnimatePresence>

                {/* Subtle Ambient Vignette on Photo Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent pointer-events-none" />

                {/* Top Floating Live Pill */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-slate-900 shadow-md flex items-center gap-1.5 border border-white/40">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open to Opportunities</span>
                  </span>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-900/80 backdrop-blur-md text-slate-200 border border-white/20">
                    Flutter 3.x
                  </span>
                </div>

                {/* Bottom Overlay Label inside the photo */}
                <div className="absolute bottom-3 inset-x-3 z-10 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                  <div className="text-xs font-mono font-semibold text-orange-300">
                    {currentPhoto.tag}
                  </div>
                  <div className="text-sm font-black text-white mt-0.5">
                    {personalInfo.name}
                  </div>
                  <div className="text-[11px] text-slate-200 font-medium">
                    {currentPhoto.detail}
                  </div>
                </div>

              </div>

              {/* Chic Segmented Photo Switcher Controls */}
              <div className="mt-3.5 p-1 bg-slate-100 rounded-2xl grid grid-cols-3 gap-1">
                {photoOptions.map((opt) => {
                  const Icon = opt.icon;
                  const active = activePhoto === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setActivePhoto(opt.id)}
                      className={`py-2 px-2 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all duration-200 ${
                        active
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${active ? 'text-[#ff5a00]' : 'text-slate-400'}`} />
                      <span>{opt.label}</span>
                    </button>
                  );
                })}
              </div>

            </motion.div>

            {/* Floating Trust Badge 1: Best Employee 2025 (Top Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="hidden sm:flex absolute -top-5 -right-6 bg-white border border-slate-200 rounded-2xl p-3 shadow-xl items-center gap-3 z-20 backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg border border-amber-200 shadow-inner">
                🏆
              </div>
              <div className="text-xs">
                <div className="font-extrabold text-slate-900 flex items-center gap-1">
                  <span>Best Employee Award</span>
                  <span className="px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 text-[9px] font-mono">2025</span>
                </div>
                <div className="text-slate-500 text-[11px] font-medium">Baap Services • Ownership</div>
              </div>
            </motion.div>

            {/* Floating Trust Badge 2: Infynod Tech Role (Bottom Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="hidden sm:flex absolute -bottom-5 -left-6 bg-white border border-slate-200 rounded-2xl p-3 shadow-xl items-center gap-3 z-20 backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff5a00] flex items-center justify-center font-bold text-lg border border-orange-200 shadow-inner">
                ⚡
              </div>
              <div className="text-xs">
                <div className="font-extrabold text-slate-900 flex items-center gap-1">
                  <span>Senior Flutter Developer</span>
                </div>
                <div className="text-slate-600 text-[11px] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                  <span>INFYNOD TECH PVT LTD</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
}
