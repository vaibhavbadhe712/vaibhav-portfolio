import React from 'react';
import { Briefcase, Award, Sparkles, Calendar, ChevronRight, CheckCircle2 } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 bg-[#f8fafc] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>CAREER MILESTONES & HONORS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Professional <span className="text-[#0f2552]">Experience & Recognition</span>
          </h2>
          
          <p className="text-slate-600 text-base leading-relaxed font-normal">
            A journey of rapid growth, architectural ownership, cross-functional mentorship, and production delivery.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Guide Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-8">
            {experienceTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isCurrent = item.badge.includes('Current');
              const isAward = item.badge.includes('Excellence') || item.badge.includes('Award');

              return (
                <div 
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Indicator */}
                  <div className={`absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-2xl bg-white border-2 flex items-center justify-center z-10 shadow-sm hidden sm:flex ${
                    isAward 
                      ? 'border-amber-400 text-amber-600 bg-amber-50' 
                      : isCurrent 
                      ? 'border-[#ff5a00] text-[#ff5a00] bg-orange-50' 
                      : 'border-slate-300 text-slate-600'
                  }`}>
                    {isAward ? (
                      <Award className="w-5 h-5" />
                    ) : (
                      <Briefcase className="w-5 h-5" />
                    )}
                  </div>

                  {/* Content Card (Half width on desktop) */}
                  <div className="w-full sm:w-1/2 px-0 sm:px-8">
                    <div className={`p-6 rounded-3xl border transition-all duration-200 hover:shadow-md ${
                      isCurrent
                        ? 'bg-white border-orange-200 shadow-sm ring-1 ring-orange-100'
                        : isAward
                        ? 'bg-white border-amber-200 shadow-sm ring-1 ring-amber-100'
                        : 'bg-white border-slate-200'
                    }`}>
                      
                      {/* Top Pill / Badge */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className={`font-mono text-xl font-black ${
                          isAward ? 'text-amber-600' : isCurrent ? 'text-[#ff5a00]' : 'text-slate-800'
                        }`}>
                          {item.year}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold font-mono ${
                          isAward
                            ? 'bg-amber-100 text-amber-800 border border-amber-200'
                            : isCurrent
                            ? 'bg-orange-100 text-orange-800 border border-orange-200'
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {item.badge}
                        </span>
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-lg font-black text-slate-900">
                        {item.role || item.title}
                      </h3>
                      <div className="text-xs font-bold text-slate-500 font-mono mb-2.5">
                        {item.company}
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {item.detail || item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
