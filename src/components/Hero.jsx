import React, { useState } from 'react';
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
  MapPin
} from 'lucide-react';
import { LinkedinIcon, GithubIcon, FlutterIcon, GooglePlayIcon, AppStoreIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState('welvors');

  return (
    <section id="about" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#f8fafc]">
      
      {/* Subtle background mesh glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-orange-500/[0.04] to-blue-500/[0.04] blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Clear, High-Trust Copy (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Cars24-style Trust Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-700 text-xs font-bold tracking-wide shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#ff5a00]" />
              <span>SENIOR FLUTTER DEVELOPER @ INFYNOD TECH</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-semibold">2+ Yrs Experience</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Building Production <span className="text-[#0f2552]">Mobile Products</span> with Scalable Backends.
            </h1>

            {/* Sub-Headline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Hi, I'm <strong className="text-slate-900 font-extrabold">{personalInfo.name}</strong>. Senior Flutter Developer at <strong className="text-slate-900 font-bold">INFYNOD TECH PRIVATE LIMITED</strong>. I architect, develop, and ship high-performance mobile apps across Android & iOS — including Welvors (trust-first dating product), US client enterprise suites, and Fastify/Node.js backend microservices.
            </p>

            {/* Cars24-style Checklist Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-700">11+ Live Apps</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-700">Welvors Dating</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-700">US Client VMS</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-700">Best Employee '25</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#ff5a00] hover:bg-[#ea5000] text-white font-extrabold text-sm shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-500/40 hover:-translate-y-0.5"
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
            </div>

            {/* Quick Links Row */}
            <div className="flex items-center gap-4 pt-3 text-slate-600 text-xs font-medium">
              <span className="font-bold text-slate-400 uppercase font-mono">Connect:</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-blue-600 transition-colors shadow-sm"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-black transition-colors shadow-sm"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#ff5a00] transition-colors shadow-sm"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.pubDev}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 font-mono font-bold text-xs hover:bg-blue-100 transition-colors"
              >
                <Package className="w-3.5 h-3.5" />
                <span>pub.dev/toast_service</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean, Polished Device Showcase Card (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Elevated White Card Housing Phone */}
            <div className="relative w-full max-w-[370px] rounded-3xl bg-white p-5 border border-slate-200/90 shadow-2xl shadow-slate-200/70">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#0f2552] text-white flex items-center justify-center font-bold text-xs shadow">
                    F
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-xs">Production Engine</div>
                    <div className="text-[10px] text-slate-500 font-semibold">Flutter 3.x • Full-Stack</div>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-mono text-[10px] font-bold border border-emerald-200">
                  ● LIVE ON STORES
                </span>
              </div>

              {/* Segmented Switcher (Cars24 style tab selector) */}
              <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl text-[11px] text-center font-bold mb-3.5">
                <button 
                  onClick={() => setActiveTab('welvors')}
                  className={`py-1.5 rounded-lg transition-all ${activeTab === 'welvors' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  Welvors
                </button>
                <button 
                  onClick={() => setActiveTab('vms')}
                  className={`py-1.5 rounded-lg transition-all ${activeTab === 'vms' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  Simplify VMS
                </button>
                <button 
                  onClick={() => setActiveTab('crm')}
                  className={`py-1.5 rounded-lg transition-all ${activeTab === 'crm' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  BAAP CRM
                </button>
              </div>

              {/* Tab 1: Welvors Dating App */}
              {activeTab === 'welvors' && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="bg-gradient-to-br from-rose-50 to-pink-50/50 rounded-2xl p-4 border border-rose-100">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-rose-950">Infynod Tech Product</span>
                      <span className="text-emerald-700 font-mono font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> AI Verified
                      </span>
                    </div>
                    <div className="text-slate-900 font-black text-base">Welvors Dating App</div>
                    <div className="text-xs text-slate-600 mt-0.5">Trust-First Matchmaking for Indian Singles</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div className="text-slate-500 text-[10px] font-semibold">WebSockets</div>
                      <div className="text-slate-900 font-extrabold text-sm mt-0.5">Real-time Chat</div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div className="text-slate-500 text-[10px] font-semibold">State Engine</div>
                      <div className="text-slate-900 font-extrabold text-sm mt-0.5">GetX Clean Arch</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200/60 text-[11px] text-rose-900 font-medium flex items-center justify-between">
                    <span>Available on Google Play Store</span>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.infynod.welvors"
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-rose-600 hover:underline"
                    >
                      View App ↗
                    </a>
                  </div>
                </div>
              )}

              {/* Tab 2: Simplify VMS */}
              {activeTab === 'vms' && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50/50 rounded-2xl p-4 border border-indigo-100">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-indigo-950">US Client Enterprise</span>
                      <span className="text-indigo-700 font-mono font-bold">Timesheet Passed</span>
                    </div>
                    <div className="text-slate-900 font-black text-base">Simplify Workforce Inc.</div>
                    <div className="text-xs text-slate-600 mt-0.5">Multi-language & Timezones</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div className="text-slate-500 text-[10px] font-semibold">Requisitions</div>
                      <div className="text-slate-900 font-extrabold text-sm mt-0.5">Jobs & Placements</div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div className="text-slate-500 text-[10px] font-semibold">Compliance</div>
                      <div className="text-slate-900 font-extrabold text-sm mt-0.5">US Enterprise</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200/60 text-[11px] text-indigo-900 font-medium flex items-center justify-between">
                    <span>Clean Architecture & REST APIs</span>
                    <span className="font-bold text-indigo-600">Active</span>
                  </div>
                </div>
              )}

              {/* Tab 3: BAAP CRM */}
              {activeTab === 'crm' && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl p-4 border border-blue-100">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-blue-900">Live GPS Field Fleet</span>
                      <span className="text-emerald-700 font-mono font-bold">24 Agents Sync</span>
                    </div>
                    <div className="text-slate-900 font-black text-base">₹ 1,42,500 POS Billing</div>
                    <div className="mt-2.5 w-full bg-blue-200/60 rounded-full h-2">
                      <div className="bg-[#ff5a00] h-2 rounded-full w-4/5" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div className="text-slate-500 text-[10px] font-semibold">Lead Pipeline</div>
                      <div className="text-slate-900 font-extrabold text-sm mt-0.5">92.4% Closed</div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div className="text-slate-500 text-[10px] font-semibold">Offline Sync</div>
                      <div className="text-slate-900 font-extrabold text-sm mt-0.5">SQLite Active</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-orange-50 border border-orange-200/60 text-[11px] text-orange-900 font-medium flex items-center justify-between">
                    <span>Available on Google Play & App Store</span>
                    <span className="font-bold text-[#ff5a00]">Shipped</span>
                  </div>
                </div>
              )}

            </div>

            {/* Floating Trust Pills */}
            <div className="hidden sm:flex absolute -bottom-4 -left-6 bg-white border border-slate-200 rounded-2xl p-3 shadow-lg items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-base border border-amber-200">
                🏆
              </div>
              <div className="text-xs">
                <div className="font-bold text-slate-900">Best Employee 2025</div>
                <div className="text-slate-500 text-[11px]">Ownership & Code Quality</div>
              </div>
            </div>

            <div className="hidden sm:flex absolute -top-4 -right-4 bg-white border border-slate-200 rounded-2xl p-3 shadow-lg items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-base border border-blue-200">
                ⭐
              </div>
              <div className="text-xs">
                <div className="font-bold text-slate-900">10+ Apps Shipped</div>
                <div className="text-slate-500 text-[11px]">Play Store & App Store</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
