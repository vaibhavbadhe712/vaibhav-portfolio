import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Smartphone, Filter, Layers, Sparkles } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const categories = ['All', 'Featured', 'Dating & Social', 'Enterprise & CRM', 'Education', 'Travel & Fintech'];

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
    <section id="projects" className="py-24 bg-[#f8fafc] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0f2552] text-xs font-mono font-bold">
              <Smartphone className="w-3.5 h-3.5 text-blue-600" />
              <span>11+ VERIFIED PRODUCTION APPLICATIONS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Selected <span className="text-[#0f2552]">Production Work</span>
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
              Applications built for enterprise workforce, field sales, educational institutions, travel mobility, and microfinance. Click any card to explore full case studies.
            </p>
          </div>

          {/* Cars24-style Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 ${
                    active
                      ? 'bg-[#ff5a00] text-white shadow-md shadow-orange-500/25'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveProjectModal(p)}
            />
          ))}
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
