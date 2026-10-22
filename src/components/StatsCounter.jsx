import React from 'react';
import { 
  Smartphone, 
  Award, 
  Building2, 
  CreditCard, 
  Globe, 
  Cloud, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Server
} from 'lucide-react';
import { stats } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Smartphone,
  Award,
  Building2,
  CreditCard,
  Globe,
  Cloud,
  Server
};

// Theme configurations tailored for each capability card
const themeStyles = {
  blue: {
    gradientBar: 'from-blue-500 via-indigo-500 to-sky-500',
    iconBg: 'bg-blue-50 text-blue-600 border-blue-200',
    badge: 'bg-blue-50 text-blue-700 border-blue-200/80',
    dot: 'bg-blue-500',
    statText: 'text-blue-600',
    highlightBg: 'bg-blue-50/70 text-blue-900 border-blue-100',
    pill: 'bg-blue-50/60 text-blue-800 border-blue-200/60 hover:bg-blue-100/70',
    hoverBorder: 'hover:border-blue-400 hover:shadow-blue-500/10'
  },
  orange: {
    gradientBar: 'from-orange-500 via-amber-500 to-yellow-500',
    iconBg: 'bg-orange-50 text-orange-600 border-orange-200',
    badge: 'bg-orange-50 text-orange-700 border-orange-200/80',
    dot: 'bg-orange-500',
    statText: 'text-orange-600',
    highlightBg: 'bg-orange-50/70 text-orange-900 border-orange-100',
    pill: 'bg-orange-50/60 text-orange-800 border-orange-200/60 hover:bg-orange-100/70',
    hoverBorder: 'hover:border-orange-400 hover:shadow-orange-500/10'
  },
  emerald: {
    gradientBar: 'from-emerald-500 via-teal-500 to-green-500',
    iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    dot: 'bg-emerald-500',
    statText: 'text-emerald-600',
    highlightBg: 'bg-emerald-50/70 text-emerald-900 border-emerald-100',
    pill: 'bg-emerald-50/60 text-emerald-800 border-emerald-200/60 hover:bg-emerald-100/70',
    hoverBorder: 'hover:border-emerald-400 hover:shadow-emerald-500/10'
  },
  purple: {
    gradientBar: 'from-purple-500 via-indigo-500 to-fuchsia-500',
    iconBg: 'bg-purple-50 text-purple-600 border-purple-200',
    badge: 'bg-purple-50 text-purple-700 border-purple-200/80',
    dot: 'bg-purple-500',
    statText: 'text-purple-600',
    highlightBg: 'bg-purple-50/70 text-purple-900 border-purple-100',
    pill: 'bg-purple-50/60 text-purple-800 border-purple-200/60 hover:bg-purple-100/70',
    hoverBorder: 'hover:border-purple-400 hover:shadow-purple-500/10'
  },
  amber: {
    gradientBar: 'from-amber-500 via-orange-500 to-red-500',
    iconBg: 'bg-amber-50 text-amber-600 border-amber-200',
    badge: 'bg-amber-50 text-amber-800 border-amber-200/80',
    dot: 'bg-amber-500',
    statText: 'text-amber-600',
    highlightBg: 'bg-amber-50/70 text-amber-900 border-amber-100',
    pill: 'bg-amber-50/60 text-amber-800 border-amber-200/60 hover:bg-amber-100/70',
    hoverBorder: 'hover:border-amber-400 hover:shadow-amber-500/10'
  },
  cyan: {
    gradientBar: 'from-cyan-500 via-sky-500 to-blue-500',
    iconBg: 'bg-cyan-50 text-cyan-600 border-cyan-200',
    badge: 'bg-cyan-50 text-cyan-800 border-cyan-200/80',
    dot: 'bg-cyan-500',
    statText: 'text-cyan-600',
    highlightBg: 'bg-cyan-50/70 text-cyan-900 border-cyan-100',
    pill: 'bg-cyan-50/60 text-cyan-800 border-cyan-200/60 hover:bg-cyan-100/70',
    hoverBorder: 'hover:border-cyan-400 hover:shadow-cyan-500/10'
  }
};

export default function StatsCounter() {
  return (
    <section className="py-16 md:py-20 bg-slate-50/60 border-y border-slate-200/90 relative overflow-hidden">
      {/* Background subtle ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs mb-3.5 text-xs font-bold text-slate-700 tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Core Capabilities & Verified Track Record
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Production Track Record & Key Capabilities
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            End-to-end expertise spanning 11+ live apps, international US clients, multiple payment gateways & in-app purchases, current engineering leadership at Infynod Tech, and full DevOps deployment.
          </p>
        </div>

        {/* 6 High-Impact Capability Cards (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {stats.map((stat, idx) => {
            const theme = themeStyles[stat.accent] || themeStyles.blue;
            const Icon = iconMap[stat.icon] || Smartphone;

            return (
              <div
                key={stat.id || idx}
                className={`group relative bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl ${theme.hoverBorder} transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden`}
              >
                {/* Top Colored Gradient Accent Line */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${theme.gradientBar}`} />

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  {/* Top Bar: Icon Container + Status Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${theme.iconBg} border flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="w-6 h-6 stroke-[2.2]" />
                      </div>

                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${theme.badge} shadow-2xs`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                        {stat.badge}
                      </div>
                    </div>

                    {/* Metric Value & Label */}
                    <div className="mb-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-mono">
                          {stat.value}
                        </span>
                        {stat.suffix && (
                          <span className={`text-xs sm:text-sm font-extrabold uppercase tracking-wider ${theme.statText}`}>
                            {stat.suffix}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1 leading-snug">
                        {stat.label}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 mt-0.5">
                        {stat.subtitle}
                      </p>
                    </div>

                    {/* Highlight Box */}
                    {stat.highlight && (
                      <div className={`mb-3.5 px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-2 ${theme.highlightBg}`}>
                        <Sparkles className="w-3.5 h-3.5 shrink-0 opacity-80" />
                        <span className="truncate">{stat.highlight}</span>
                      </div>
                    )}

                    {/* Description (No truncation, fully readable) */}
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-4">
                      {stat.description}
                    </p>
                  </div>

                  {/* Technology & Competency Pills */}
                  <div className="pt-3 border-t border-slate-100 mt-auto">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Key Capabilities & Deliverables
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {stat.pills.map((pill, pillIdx) => (
                        <span
                          key={pillIdx}
                          className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-colors ${theme.pill}`}
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer Accent / Verification cue */}
                <div className="px-6 py-2.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                  <span className="flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Production Track
                  </span>
                  <span className="text-slate-400 group-hover:text-slate-700 transition-colors flex items-center gap-0.5">
                    Details
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                End-to-End Ownership: From Architecture to App Store Approval & AWS Infrastructure
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Experienced in zero-downtime releases, Play Store policy compliance, TestFlight betas, payment security, and scalable cloud APIs.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Available for High-Impact Roles
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
