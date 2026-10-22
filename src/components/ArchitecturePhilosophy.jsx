import React from 'react';
import { ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';
import { philosophy } from '../data/portfolioData';

const pillarStyles = [
  { icon: ShieldCheck, color: "text-blue-600", bg: "bg-blue-50 border-blue-200" },
  { icon: Zap, color: "text-orange-600", bg: "bg-orange-50 border-orange-200" },
  { icon: Layers, color: "text-purple-600", bg: "bg-purple-50 border-purple-200" },
  { icon: Sparkles, color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200" },
];

export default function ArchitecturePhilosophy() {
  return (
    <section className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>ENGINEERING PHILOSOPHY</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            How I Think About <span className="text-[#0f2552]">Code & Architecture</span>
          </h2>
          
          <p className="text-slate-600 text-base leading-relaxed font-normal">
            Building Flutter mobile systems designed to survive shifting business needs, team scale, and real-world edge cases.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophy.map((item, idx) => {
            const style = pillarStyles[idx % pillarStyles.length];
            const Icon = style.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 hover:bg-white transition-all duration-200 hover:shadow-md"
              >
                <div className={`w-12 h-12 rounded-2xl ${style.bg} border flex items-center justify-center mb-5 font-bold`}>
                  <Icon className={`w-6 h-6 ${style.color}`} />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.detail || item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
