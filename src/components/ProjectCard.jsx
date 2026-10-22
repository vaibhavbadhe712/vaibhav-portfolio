import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink, 
  Smartphone, 
  Star, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';
import { GooglePlayIcon, AppStoreIcon } from './Icons';
import { playStoreAssets } from '../data/portfolioData';

export default function ProjectCard({ project, onSelect }) {
  const asset = playStoreAssets[project.id] || {
    icon: project.icon,
    graphic: project.graphic,
    tag: project.category?.split('/')[0]?.trim() || "PRODUCTION APP",
    accentGlow: "from-blue-600/20 via-indigo-600/10 to-transparent"
  };

  const iconUrl = project.icon || asset.icon;
  const graphicUrl = project.graphic || asset.graphic;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -7, transition: { duration: 0.22, ease: "easeOut" } }}
      className="group rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-slate-300/70 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
    >
      {/* 1. Real Play Store Feature Graphic Banner Container */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-950">
        
        {/* Real Play Store Screenshot / Graphic */}
        {graphicUrl ? (
          <img
            src={graphicUrl}
            alt={`${project.name} Play Store Artwork`}
            loading="lazy"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center text-slate-700">
            <Smartphone className="w-12 h-12" />
          </div>
        )}

        {/* Ambient Gradient Vignette Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />

        {/* Top Badges Bar */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
          
          {/* Category Chip */}
          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900/80 backdrop-blur-md text-white border border-white/20 shadow-md flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{project.category?.split('/')[0]?.trim()}</span>
          </span>

          {/* Status Chip */}
          {project.id === 'welvors' ? (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-black bg-rose-500 text-white shadow-md flex items-center gap-1 border border-rose-400/40">
              <Star className="w-3 h-3 fill-white" />
              <span>INFYNOD PRODUCT</span>
            </span>
          ) : project.usClient ? (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-black bg-amber-400 text-slate-950 shadow-md flex items-center gap-1">
              <Star className="w-3 h-3 fill-slate-950" />
              <span>US CLIENT</span>
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-900/80 backdrop-blur-md text-emerald-300 border border-emerald-500/30 shadow-md flex items-center gap-1">
              <span>● Production Live</span>
            </span>
          )}
        </div>

        {/* Overlapping Floating Real App Icon (Squircle shape breaking the edge) */}
        <div className="absolute -bottom-6 left-6 z-20">
          <div className="w-14 h-14 rounded-2xl bg-white p-1 shadow-xl border-2 border-white ring-1 ring-slate-200/80 overflow-hidden group-hover:scale-105 transition-transform duration-300">
            {iconUrl ? (
              <img
                src={iconUrl}
                alt={`${project.name} App Icon`}
                loading="lazy"
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <div className="w-full h-full bg-[#0f2552] text-white flex items-center justify-center font-black text-lg rounded-xl">
                {project.initials || "APP"}
              </div>
            )}
          </div>
        </div>

        {/* Floating Store Badge pill in bottom-right of header */}
        <div className="absolute bottom-3 right-3 z-10">
          {project.playStore && (
            <span className="px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-slate-300 text-[10px] font-mono font-semibold border border-white/10 flex items-center gap-1">
              <GooglePlayIcon className="w-2.5 h-2.5 fill-emerald-400" />
              <span>Google Play Verified</span>
            </span>
          )}
        </div>

      </div>

      {/* 2. Content Body Area */}
      <div className="pt-9 px-6 pb-6 bg-white flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          {/* Header Row: Title & Platform Badge */}
          <div className="flex items-start justify-between gap-3 mb-1">
            <div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-[#ff5a00] transition-colors">
                {project.name || project.title}
              </h3>
              <div className="text-xs font-bold text-slate-500 mt-0.5 flex items-center gap-1.5">
                <span>{project.company || "Baap Services Pvt. Ltd."}</span>
              </div>
            </div>

            <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/80 text-slate-700 font-mono text-[10px] font-bold shrink-0">
              {project.platform || "Android / iOS"}
            </span>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 my-3">
            {project.description}
          </p>

          {/* 3 Key Verified Accomplishments / Features */}
          <div className="space-y-1.5 my-3.5">
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

        {/* 3. Action Buttons */}
        <div className="space-y-2.5 pt-2">
          
          {/* Official Google Play & App Store Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            {project.playStore ? (
              <a
                href={project.playStore}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                title="View on Google Play Store"
              >
                <GooglePlayIcon className="w-3.5 h-3.5 fill-emerald-400 shrink-0" />
                <span className="truncate">Google Play</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 shrink-0" />
              </a>
            ) : (
              <div className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-400 text-xs font-mono font-semibold">
                <span>Android APK</span>
              </div>
            )}

            {project.appStore ? (
              <a
                href={project.appStore}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                title="View on Apple App Store"
              >
                <AppStoreIcon className="w-3.5 h-3.5 fill-sky-400 shrink-0" />
                <span className="truncate">App Store</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 shrink-0" />
              </a>
            ) : (
              <div className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-400 text-xs font-mono font-semibold">
                <span>iOS IPA</span>
              </div>
            )}
          </div>

          {/* Primary View Details Button (Cars24 style energetic orange button) */}
          <button
            onClick={() => onSelect(project)}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#ff5a00] hover:bg-[#ea5000] text-white text-xs font-extrabold shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            <span>{project.caseStudy ? 'View Architecture & Case Study' : 'View Project Details'}</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </motion.div>
  );
}
