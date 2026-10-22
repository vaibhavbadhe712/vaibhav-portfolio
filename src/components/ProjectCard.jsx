import React from 'react';
import { 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink, 
  Smartphone, 
  Star, 
  ShieldCheck, 
  Heart, 
  MapPin, 
  Wifi, 
  Battery, 
  Zap, 
  Building2, 
  TrendingUp, 
  Clock, 
  Volume2, 
  Check 
} from 'lucide-react';
import { GooglePlayIcon, AppStoreIcon } from './Icons';

// Realistic, sleek mobile UI visualization component for each app
function AppScreenVisualization({ project }) {
  const id = project.id;

  // 1. Welvors (Trust-First Dating App by Infynod Tech)
  if (id === 'welvors') {
    return (
      <div className="h-full flex flex-col justify-between p-3.5 bg-gradient-to-b from-slate-900 via-rose-950/40 to-slate-950 text-white">
        {/* Dating App Top Bar */}
        <div className="flex items-center justify-between text-[10px] pb-2 border-b border-rose-500/20">
          <div className="flex items-center gap-1.5 font-black text-rose-400">
            <Flame className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span className="tracking-wider">WELVORS</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[9px] font-bold border border-emerald-500/30 flex items-center gap-1">
            <ShieldCheck className="w-2.5 h-2.5" /> 100% AI Verified
          </span>
        </div>

        {/* Profile Card Mockup */}
        <div className="my-2 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent p-3 rounded-2xl border border-rose-500/30 relative overflow-hidden">
          <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md bg-rose-500/80 text-white text-[9px] font-bold">
            98% Match
          </div>
          <div className="text-xs font-black text-white flex items-center gap-1">
            <span>Ananya Sharma, 26</span>
            <CheckCircle2 className="w-3 h-3 text-sky-400 fill-sky-400/20" />
          </div>
          <div className="text-[10px] text-slate-300 font-medium">
            Senior Product Designer • Pune
          </div>
          <div className="flex items-center gap-1.5 mt-1.5">
            <span className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] text-slate-200">Travel</span>
            <span className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] text-slate-200">Flutter</span>
            <span className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] text-slate-200">Art</span>
          </div>
        </div>

        {/* Action Buttons Mockup */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-rose-400 text-xs font-bold shadow">
            ✕
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 text-xs shadow-lg shadow-orange-500/30">
            ★
          </div>
          <div className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center text-white text-xs shadow-lg shadow-rose-600/30">
            <Heart className="w-3.5 h-3.5 fill-white" />
          </div>
        </div>
      </div>
    );
  }

  // 2. Simplify VMS (US Client Workforce Management)
  if (id === 'simplify-vms') {
    return (
      <div className="h-full flex flex-col justify-between p-3.5 bg-gradient-to-b from-slate-900 via-indigo-950/40 to-slate-950 text-white">
        <div className="flex items-center justify-between text-[10px] pb-2 border-b border-indigo-500/20">
          <div className="flex items-center gap-1 font-bold text-indigo-300">
            <span>🇺🇸</span>
            <span>SIMPLIFY WORKFORCE</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono text-[9px] font-bold border border-indigo-500/30">
            US Client
          </span>
        </div>

        <div className="my-2 bg-slate-900/90 p-3 rounded-2xl border border-indigo-500/25 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-indigo-400 font-mono font-bold">REQ #US-4091</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">Active</span>
          </div>
          <div className="text-xs font-bold text-white">Senior Cloud Architect</div>
          <div className="w-full bg-slate-800 rounded-full h-1.5 mt-1 overflow-hidden">
            <div className="bg-indigo-400 h-full w-4/5 rounded-full" />
          </div>
          <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono">
            <span>Timesheet: 40.0h</span>
            <span className="text-emerald-400 font-semibold">Approved ✓</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 bg-slate-900/60 p-2 rounded-xl border border-slate-800">
          <span>Candidates: 12</span>
          <span>Interviews: 3</span>
          <span className="text-indigo-300 font-bold">Placed: 1</span>
        </div>
      </div>
    );
  }

  // 3. BAAP CRM (Field Sales & Fleet GPS)
  if (id === 'baap-crm') {
    return (
      <div className="h-full flex flex-col justify-between p-3.5 bg-gradient-to-b from-slate-900 via-sky-950/40 to-slate-950 text-white">
        <div className="flex items-center justify-between text-[10px] pb-2 border-b border-sky-500/20">
          <div className="flex items-center gap-1.5 font-bold text-sky-400">
            <MapPin className="w-3 h-3 text-sky-400" />
            <span>BAAP CRM • FLEET</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[9px] font-bold border border-emerald-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live GPS
          </span>
        </div>

        <div className="my-2 bg-slate-900/90 p-3 rounded-2xl border border-sky-500/25">
          <div className="text-[10px] text-slate-400 font-mono">TODAY'S POS BILLING</div>
          <div className="text-base font-black text-white mt-0.5">₹ 1,42,500</div>
          <div className="flex items-center justify-between text-[9px] text-sky-300 mt-2 font-mono">
            <span>24 Field Agents Active</span>
            <span className="text-emerald-400 font-bold">92.4% Target</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[9px] font-mono text-slate-300">
          <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-800 text-center">
            <div className="text-slate-400">LEADS</div>
            <div className="font-bold text-white mt-0.5">38 Synced</div>
          </div>
          <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-800 text-center">
            <div className="text-slate-400">SYNC</div>
            <div className="font-bold text-emerald-400 mt-0.5">SQLite Offline</div>
          </div>
        </div>
      </div>
    );
  }

  // 4. School Book (School ERP & Fees)
  if (id === 'school-book') {
    return (
      <div className="h-full flex flex-col justify-between p-3.5 bg-gradient-to-b from-slate-900 via-emerald-950/40 to-slate-950 text-white">
        <div className="flex items-center justify-between text-[10px] pb-2 border-b border-emerald-500/20">
          <div className="font-bold text-emerald-400">SCHOOL BOOK ERP</div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[9px] font-bold border border-emerald-500/30">
            Attendance Active
          </span>
        </div>

        <div className="my-2 bg-slate-900/90 p-3 rounded-2xl border border-emerald-500/25 space-y-1.5">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-bold text-white">Aarav Sharma</span>
            <span className="text-emerald-400 font-mono font-bold">Class 10-A</span>
          </div>
          <div className="text-[10px] text-slate-300">Geo-Fenced Campus Attendance</div>
          <div className="text-xs font-mono font-black text-emerald-400">96.4% Recorded</div>
        </div>

        <div className="flex items-center justify-between text-[9px] font-mono bg-slate-900/80 p-2 rounded-xl border border-slate-800 text-slate-300">
          <span>Fee Receipt #SB-982</span>
          <span className="text-emerald-400 font-bold">₹32,000 Paid ✓</span>
        </div>
      </div>
    );
  }

  // 5. OfficeBook HRMS (HRMS + AI Chat)
  if (id === 'officebook-hrms') {
    return (
      <div className="h-full flex flex-col justify-between p-3.5 bg-gradient-to-b from-slate-900 via-purple-950/40 to-slate-950 text-white">
        <div className="flex items-center justify-between text-[10px] pb-2 border-b border-purple-500/20">
          <div className="font-bold text-purple-300 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-purple-400" />
            <span>OFFICEBOOK HRMS</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-mono text-[9px] font-bold border border-purple-500/30">
            AI Assistant
          </span>
        </div>

        <div className="my-2 bg-slate-900/90 p-3 rounded-2xl border border-purple-500/25 space-y-2">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-slate-400">Punch-In Status</span>
            <span className="text-emerald-400 font-mono font-bold">09:15 AM (On Time)</span>
          </div>
          <div className="p-2 rounded-xl bg-purple-950/50 border border-purple-500/30 text-[9px] text-purple-200">
            <span className="font-bold text-purple-300">AI Bot:</span> "Your leave for Friday has been approved by your manager."
          </div>
        </div>

        <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 bg-slate-900/80 p-2 rounded-xl border border-slate-800">
          <span>Leave Balance: 18 Days</span>
          <span className="text-purple-300 font-bold">Shift: Day</span>
        </div>
      </div>
    );
  }

  // 6. Goyant (Goa Travel & Mobility)
  if (id === 'goyant') {
    return (
      <div className="h-full flex flex-col justify-between p-3.5 bg-gradient-to-b from-slate-900 via-amber-950/40 to-slate-950 text-white">
        <div className="flex items-center justify-between text-[10px] pb-2 border-b border-amber-500/20">
          <div className="font-bold text-amber-400 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-amber-400" />
            <span>GOYANT • GOA TRAVEL</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[9px] font-bold border border-amber-500/30">
            Live Booking
          </span>
        </div>

        <div className="my-2 bg-slate-900/90 p-3 rounded-2xl border border-amber-500/25 space-y-1.5">
          <div className="text-[10px] text-slate-400 font-mono">ROUTE DISCOVERY</div>
          <div className="text-xs font-bold text-white">Calangute Beach ➔ Panaji Jetty</div>
          <div className="flex items-center justify-between text-[9px] text-amber-300 font-mono mt-1">
            <span>🛵 Scooter @ ₹350/day</span>
            <span className="text-emerald-400 font-bold">Available Now</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[9px] font-mono text-slate-300 bg-slate-900/80 p-2 rounded-xl border border-slate-800">
          <span>Nearby Vendors: 14</span>
          <span className="text-amber-400 font-bold">Instant OTP Ride</span>
        </div>
      </div>
    );
  }

  // Default clean visualization for other apps
  return (
    <div className="h-full flex flex-col justify-between p-3.5 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="flex items-center justify-between text-[10px] pb-2 border-b border-slate-800">
        <div className="font-bold text-slate-300">{project.name || project.title}</div>
        <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono text-[9px] font-bold border border-slate-700">
          Production
        </span>
      </div>

      <div className="my-2 bg-slate-900/90 p-3 rounded-2xl border border-slate-800 space-y-1.5">
        <div className="text-[10px] text-slate-400 font-mono">{project.category}</div>
        <div className="text-xs font-bold text-white line-clamp-1">{project.subtitle || project.description}</div>
        <div className="text-[9px] text-emerald-400 font-mono">Clean Architecture • Live on Stores</div>
      </div>

      <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 bg-slate-900/60 p-2 rounded-xl border border-slate-800">
        <span>{project.platform || "Android / iOS"}</span>
        <span className="text-slate-300 font-bold">Shipped by Vaibhav</span>
      </div>
    </div>
  );
}

export default function ProjectCard({ project, onSelect }) {
  return (
    <div className="group rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1">
      
      {/* 1. High-Tech Visual Device Screen Mockup Container */}
      <div className="p-3 bg-slate-100/70 border-b border-slate-200/80">
        <div className="relative w-full h-[190px] rounded-2xl bg-slate-950 border border-slate-800/90 shadow-md overflow-hidden flex flex-col justify-between">
          
          {/* Subtle Screen Bezel & Top Notch Indicator */}
          <div className="relative px-3 pt-2 pb-1 bg-slate-950 flex items-center justify-between text-[9px] font-mono text-slate-400 select-none z-10 border-b border-slate-900">
            <span className="font-bold text-slate-300">9:41</span>
            
            {/* Center Dynamic Notch Pill */}
            <div className="w-16 h-3 rounded-full bg-slate-900 border border-slate-800/80 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
            </div>

            <div className="flex items-center gap-1.5">
              <Wifi className="w-2.5 h-2.5 text-slate-400" />
              <Battery className="w-3 h-3 text-slate-400" />
            </div>
          </div>

          {/* Screen Content Visualization Area */}
          <div className="flex-1 overflow-hidden">
            <AppScreenVisualization project={project} />
          </div>

        </div>
      </div>

      {/* 2. Middle Content Information Area */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-white">
        
        <div>
          {/* Subtitle & Platform Pill */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
            <span className="truncate max-w-[200px]">{project.company || project.category}</span>
            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-mono text-[10px] shrink-0 font-bold">
              {project.platform || "Android / iOS"}
            </span>
          </div>

          {/* App Title */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-xl font-black text-slate-900 tracking-tight">
              {project.name || project.title}
            </h3>
            {project.usClient && (
              <span className="px-2 py-0.5 rounded-md bg-amber-400 text-slate-950 text-[10px] font-black font-mono shrink-0 shadow-sm">
                US CLIENT
              </span>
            )}
            {project.id === 'welvors' && (
              <span className="px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200 text-[10px] font-black font-mono shrink-0">
                INFYNOD PRODUCT
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
            {project.description}
          </p>

          {/* Key Features Checkpoint List (Cars24 style high-trust checkpoints) */}
          <div className="space-y-1.5 mb-4">
            {project.features?.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
            {project.badges?.slice(0, 4).map((badge, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200"
              >
                {badge}
              </span>
            ))}
            {project.badges && project.badges.length > 4 && (
              <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-slate-400 bg-slate-50">
                +{project.badges.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* 3. Action Buttons: Store Downloads & Case Study */}
        <div className="space-y-2.5 pt-2">
          
          {/* Google Play & App Store Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            {project.playStore ? (
              <a
                href={project.playStore}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition-all shadow-sm group/btn"
                title="View on Google Play Store"
              >
                <GooglePlayIcon className="w-3.5 h-3.5 fill-emerald-400 shrink-0" />
                <span className="truncate">Google Play</span>
              </a>
            ) : (
              <div className="flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-400 text-xs font-mono font-semibold">
                <span>Android APK</span>
              </div>
            )}

            {project.appStore ? (
              <a
                href={project.appStore}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition-all shadow-sm group/btn"
                title="View on Apple App Store"
              >
                <AppStoreIcon className="w-3.5 h-3.5 fill-sky-400 shrink-0" />
                <span className="truncate">App Store</span>
              </a>
            ) : (
              <div className="flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-400 text-xs font-mono font-semibold">
                <span>iOS IPA</span>
              </div>
            )}
          </div>

          {/* Primary View Details Button (Cars24 style energetic orange button) */}
          <button
            onClick={() => onSelect(project)}
            className="w-full flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#ff5a00] hover:bg-[#ea5000] text-white text-xs font-extrabold shadow-md shadow-orange-500/20 hover:shadow-orange-500/35 transition-all hover:scale-[1.01]"
          >
            <span>{project.caseStudy ? 'View Architecture & Case Study' : 'View Project Details'}</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

    </div>
  );
}
