import React from 'react';
import { 
  X, 
  CheckCircle2, 
  ExternalLink, 
  Layers, 
  Cpu, 
  AlertTriangle, 
  ShieldCheck, 
  Trophy, 
  Smartphone,
  Sparkles,
  Star
} from 'lucide-react';
import { GooglePlayIcon, AppStoreIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;
  const cs = project.caseStudy;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-9 shadow-2xl overflow-y-auto max-h-[92vh] z-10 text-slate-800">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-blue-800 border border-blue-200">
                {project.category}
              </span>
              {project.usClient && (
                <span className="px-3 py-1 rounded-full text-xs font-mono font-black bg-amber-400 text-slate-950 flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-slate-950" />
                  <span>US CLIENT PROJECT</span>
                </span>
              )}
              {project.platform && (
                <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-700 bg-slate-100 border border-slate-200 font-bold">
                  {project.platform}
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {project.name || project.title}
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-slate-500">
              {project.subtitle || project.description}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-600 hover:text-slate-900 transition-all shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Store Download Links Header Bar */}
        {(project.playStore || project.appStore) && (
          <div className="my-5 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <Smartphone className="w-4 h-4 text-emerald-600" />
              <span>Production Store Releases:</span>
            </div>
            <div className="flex items-center gap-2.5">
              {project.playStore && (
                <a
                  href={project.playStore}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition-all shadow-sm"
                >
                  <GooglePlayIcon className="w-4 h-4 fill-emerald-400" />
                  <span>Google Play</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              )}
              {project.appStore && (
                <a
                  href={project.appStore}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition-all shadow-sm"
                >
                  <AppStoreIcon className="w-4 h-4 fill-sky-400" />
                  <span>Apple App Store</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Body content */}
        <div className="py-2 space-y-5">

          {/* If Full Case Study exists */}
          {cs ? (
            <>
              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-rose-800 text-xs font-mono font-bold uppercase">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>The Problem</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {cs.problem}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-800 text-xs font-mono font-bold uppercase">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>The Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {cs.solution}
                  </p>
                </div>
              </div>

              {/* Role & Responsibilities */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="text-xs font-mono font-bold text-[#0f2552] uppercase">
                  My Role & Engineering Contribution
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {cs.role}
                </p>
              </div>

              {/* Architecture & Engineering Pillars */}
              <div>
                <h3 className="text-xs uppercase font-mono tracking-wider font-bold text-slate-800 mb-2.5 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-600" />
                  <span>Architecture & Technical Implementation</span>
                </h3>
                <div className="space-y-2">
                  {cs.architecture?.map((arch, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges Overcome */}
              {cs.challenges && cs.challenges.length > 0 && (
                <div>
                  <h3 className="text-xs uppercase font-mono tracking-wider font-bold text-amber-800 mb-2.5 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Key Engineering Challenges Solved</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cs.challenges.map((c, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-slate-700 font-medium">
                        • {c}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Results & Production Outcomes */}
              {cs.results && (
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-900 uppercase">
                    <Trophy className="w-4 h-4 text-amber-600" />
                    <span>Production Results & Outcomes</span>
                  </div>
                  <div className="space-y-1">
                    {cs.results.map((res, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            // Basic modal content for other apps
            <div className="space-y-4">
              <div>
                <h3 className="text-xs uppercase font-mono font-bold text-slate-800 mb-1.5">
                  Overview
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase font-mono font-bold text-slate-800 mb-2">
                  Key Features & Workflows
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features?.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Badges */}
          <div className="pt-2">
            <h3 className="text-xs uppercase font-mono font-bold text-slate-800 mb-2">
              Tech Stack & Badges
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.badges?.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="border-t border-slate-100 pt-4 mt-4 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500 font-bold">
            Shipped & Maintained by Vaibhav Badhe
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-xs font-bold text-white transition-all shadow-sm"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
}
