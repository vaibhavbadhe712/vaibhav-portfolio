import React from 'react';
import { Smartphone, Briefcase, Users, CreditCard, Globe, Award } from 'lucide-react';
import { stats } from '../data/portfolioData';

const iconStyles = [
  { icon: Smartphone, bg: "bg-blue-50 text-blue-600 border-blue-200" },
  { icon: Briefcase, bg: "bg-orange-50 text-orange-600 border-orange-200" },
  { icon: Users, bg: "bg-emerald-50 text-emerald-600 border-emerald-200" },
  { icon: CreditCard, bg: "bg-purple-50 text-purple-600 border-purple-200" },
  { icon: Globe, bg: "bg-amber-50 text-amber-600 border-amber-200" },
];

export default function StatsCounter() {
  return (
    <section className="py-12 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {stats.map((stat, idx) => {
            const style = iconStyles[idx % iconStyles.length];
            const Icon = style.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50/70 hover:bg-white p-5 rounded-2xl border border-slate-200/90 transition-all duration-200 hover:shadow-md hover:border-slate-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-9 h-9 rounded-xl ${style.bg} border flex items-center justify-center font-bold`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-3xl font-black text-slate-900 font-mono tracking-tight">
                    {stat.value}
                  </div>
                </div>
                <div className="font-extrabold text-slate-800 text-sm">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5 line-clamp-1 font-medium">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
