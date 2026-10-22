import React, { useState } from 'react';
import { 
  Code, 
  Smartphone, 
  Layers, 
  Boxes, 
  Cpu, 
  Server, 
  Sparkles, 
  CreditCard, 
  Database, 
  GitBranch, 
  Wrench,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { techStack, buildProcess, paymentFlow } from '../data/portfolioData';

const categoryIcons = {
  "Mobile Development": Smartphone,
  "State Management": Boxes,
  "Architecture": Layers,
  "Backend & APIs": Server,
  "AI & Smart Tech": Sparkles,
  "Payments": CreditCard,
  "Databases": Database,
  "DevOps & Stores": GitBranch,
  "Tools": Wrench
};

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState(techStack[0].category);

  const activeGroup = techStack.find(t => t.category === activeCategory) || techStack[0];

  return (
    <section id="skills" className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0f2552] text-xs font-mono font-bold">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>FULL-STACK & MOBILE TECH ARSENAL</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Production <span className="text-[#0f2552]">Tech Stack & Architecture</span>
          </h2>
          
          <p className="text-slate-600 text-base leading-relaxed font-normal">
            Every technology listed has been deployed to production in high-volume mobile and backend environments.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {techStack.map((cat) => {
            const Icon = categoryIcons[cat.category] || Code;
            const isActive = activeCategory === cat.category;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 ${
                  isActive
                    ? 'bg-[#0f2552] text-white shadow-md shadow-blue-900/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {activeGroup.items.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-200 hover:shadow-md flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-extrabold text-slate-900 text-base">
                  {item.name}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${
                  item.level === 'Expert' || item.level === 'Production'
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                }`}>
                  {item.level}
                </span>
              </div>
              <div className="text-xs text-slate-500 flex items-center gap-1.5 pt-1 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Production Shipped & Tested</span>
              </div>
            </div>
          ))}
        </div>

        {/* Production Workflows (Payment Flow & Build Process) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Production Payment Flow */}
          <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg border border-emerald-200">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-black text-slate-900 text-base">Integrated Payment Gateways</h4>
                <p className="text-xs text-emerald-700 font-mono font-bold">Razorpay • Easebuzz • HDFC Juspay</p>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Production transaction pipelines inside Flutter with secure webhook verification, tokenized authorization, and automatic PDF receipts.
            </p>

            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {paymentFlow.map((step, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono font-bold text-slate-800 shadow-sm">
                    {step}
                  </span>
                  {idx < paymentFlow.length - 1 && (
                    <span className="text-slate-400 text-xs font-bold">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Build Process */}
          <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg border border-blue-200">
                <GitBranch className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-black text-slate-900 text-base">Engineering Delivery Lifecycle</h4>
                <p className="text-xs text-blue-700 font-mono font-bold">Jira Sprint to Store Release</p>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Agile Scrum lifecycle: Architecture planning, modular feature branches, pull request peer reviews, and automated store deployments.
            </p>

            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {buildProcess.map((step, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono font-bold text-slate-800 shadow-sm">
                    {step}
                  </span>
                  {idx < buildProcess.length - 1 && (
                    <span className="text-slate-400 text-xs font-bold">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
