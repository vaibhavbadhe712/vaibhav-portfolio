import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Smartphone, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const categories = [
    { name: 'All', count: projects.length },
    { name: 'Featured', count: projects.filter(p => p.featured).length },
    { name: 'Dating & Social', count: projects.filter(p => p.category.toLowerCase().includes('dating') || p.category.toLowerCase().includes('social')).length },
    { name: 'Enterprise & CRM', count: projects.filter(p => {
        const cat = p.category.toLowerCase();
        return cat.includes('enterprise') || cat.includes('crm') || cat.includes('workforce') || cat.includes('dealer');
      }).length 
    },
    { name: 'Education', count: projects.filter(p => p.category.toLowerCase().includes('education') || p.category.toLowerCase().includes('school')).length },
    { name: 'Travel & Fintech', count: projects.filter(p => {
        const cat = p.category.toLowerCase();
        return cat.includes('travel') || cat.includes('finance') || cat.includes('business') || cat.includes('community') || cat.includes('citizen');
      }).length 
    }
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => {
        const cat = p.category.toLowerCase();
        if (selectedCategory === 'Featured') return p.featured;
        if (selectedCategory === 'Dating & Social') return cat.includes('dating') || cat.includes('social');
        if (selectedCategory === 'Enterprise & CRM') return cat.includes('enterprise') || cat.includes('crm') || cat.includes('workforce') || cat.includes('dealer');
        if (selectedCategory === 'Education') return cat.includes('education') || cat.includes('school');
        if (selectedCategory === 'Travel & Fintech') return cat.includes('travel') || cat.includes('finance') || cat.includes('business') || cat.includes('community') || cat.includes('citizen');
        return true;
      });

  return (
    <section id="projects" className="py-24 bg-[#f8fafc] border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Subtle decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-orange-500/[0.03] to-blue-500/[0.03] blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0f2552] text-xs font-mono font-bold shadow-sm">
              <Smartphone className="w-3.5 h-3.5 text-blue-600" />
              <span>11+ VERIFIED PRODUCTION APPLICATIONS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Selected <span className="text-[#0f2552]">Production Work</span>
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
              Real commercial applications shipped to Google Play and Apple App Store across Dating & Social, US Client Workforce, Field Sales CRM, Education ERP, and Travel Mobility.
            </p>
          </div>

          {/* Animated Category Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            {categories.map((cat) => {
              const active = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-colors duration-200 flex items-center gap-1.5 z-10 ${
                    active ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-[#ff5a00] rounded-xl shadow-md shadow-orange-500/25 -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    active ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setActiveProjectModal(p)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-16 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg border border-emerald-200 shrink-0">
              ✓
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900">
                All 11+ Applications Live in Production
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Verified Google Play & Apple App Store packages built with clean Flutter architecture and scalable backends.
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition-all shadow-sm shrink-0"
          >
            Discuss a Mobile Project ↗
          </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeProjectModal && (
        <ProjectModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      )}
    </section>
  );
}
