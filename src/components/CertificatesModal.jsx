import React, { useState, useEffect } from 'react';
import { Award, CheckCircle2, ExternalLink, Sparkles, ShieldCheck, Eye, X, BrainCircuit, GraduationCap, Clock, Search, ArrowLeft, Smartphone, Code2 } from 'lucide-react';
import { googleAICourses, linkedinCertificates, googleAISpecialization } from '../data/portfolioData';

export default function CertificatesModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPreview, setSelectedPreview] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedPreview) {
          setSelectedPreview(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPreview, onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const categories = [
    { id: 'all', label: 'All Verified Credentials (12)' },
    { id: 'google-ai', label: 'Google AI Specialization & Courses (9)' },
    { id: 'linkedin', label: 'LinkedIn Verified Certificates (3)' }
  ];

  // Master Specialization item
  const specializationItem = {
    id: googleAISpecialization.id,
    title: googleAISpecialization.title,
    issuer: googleAISpecialization.issuer,
    platform: googleAISpecialization.platform,
    badge: 'Master Specialization (8 Courses)',
    category: 'google-ai',
    status: 'Completed',
    verifyUrl: googleAISpecialization.verifyUrl,
    imageUrl: googleAISpecialization.imageUrl,
    description: googleAISpecialization.description,
    skills: googleAISpecialization.skills,
    isGoogle: true,
    isSpecialization: true,
    recordId: googleAISpecialization.credentialId
  };

  // Map Google Courses
  const googleItems = googleAICourses.map(c => ({
    id: c.id,
    title: c.name,
    issuer: 'Google Career Certificates',
    platform: 'Coursera Verified',
    badge: c.code,
    category: 'google-ai',
    status: c.status,
    verifyUrl: c.verifyUrl,
    imageUrl: c.imageUrl,
    description: c.description,
    skills: c.skills,
    isGoogle: true,
    isSpecialization: false,
    recordId: c.recordId
  }));

  // Map Real LinkedIn Certificates
  const linkedinItems = linkedinCertificates.map(c => ({
    id: c.id,
    title: c.title,
    issuer: c.issuer,
    platform: c.platform,
    badge: c.credentialId ? `ID: ${c.credentialId}` : 'Verified Program',
    category: 'linkedin',
    status: 'Completed',
    verifyUrl: c.verifyUrl,
    imageUrl: c.imageUrl,
    description: c.description,
    skills: c.skills,
    isGoogle: false,
    isSpecialization: false,
    recordId: c.credentialId
  }));

  const allItems = [specializationItem, ...googleItems, ...linkedinItems];

  const filteredItems = allItems.filter(item => {
    const matchesCategory = activeTab === 'all' || item.category === activeTab;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-900/95 backdrop-blur-xl animate-fadeIn overflow-hidden">
      
      {/* Top Header */}
      <header className="shrink-0 bg-white border-b border-slate-200 px-4 sm:px-8 py-4 flex items-center justify-between gap-4 shadow-sm z-20">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-orange-50 hover:text-[#ff5a00] text-slate-700 text-xs font-bold transition-all border border-slate-200 shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Portfolio</span>
          </button>

          <div className="h-5 w-px bg-slate-200 hidden sm:block" />

          <div>
            <div className="text-sm sm:text-base font-black text-slate-900 flex items-center gap-2">
              <span>Official Certificates & Credentials Gallery</span>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                100% Authentic Records
              </span>
            </div>
            <div className="text-[11px] text-slate-500 font-medium hidden md:block">
              Verified records issued by Google Career Certificates, TheDigitalAdda & WOW Light Signal AI Academy
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5"
          title="Press Esc to close"
        >
          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-white text-slate-500 hidden sm:inline">ESC</span>
          <X className="w-5 h-5" />
        </button>
      </header>

      {/* Filter Tabs & Search Bar */}
      <div className="shrink-0 bg-slate-50 border-b border-slate-200 px-4 sm:px-8 py-3.5 flex flex-col lg:flex-row items-center justify-between gap-3 z-10">
        <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
                activeTab === cat.id
                  ? 'bg-slate-900 text-white shadow-sm scale-[1.02]'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative w-full lg:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by skill, topic, or course title..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff5a00]/30 focus:border-[#ff5a00] text-slate-800"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Main Body Gallery */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-8 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Banner */}
          <div className="mb-8 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 text-[#ff5a00] flex items-center justify-center shrink-0 shadow-2xs">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-black text-slate-900">
                  Verified Certificates & Official Accomplishments
                </h2>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Displaying {filteredItems.length} official credentials. Click on any certificate to preview high-resolution record.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold">
              <span className="px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200/60">
                Coursera Certified
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-purple-50 text-purple-700 border border-purple-200/60">
                LinkedIn Verified
              </span>
            </div>
          </div>

          {/* Spacious Grid (No cramped cards, clean gap-8) */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => {
                const isCompleted = item.status === 'Completed';

                return (
                  <div
                    key={item.id}
                    className={`rounded-3xl bg-white border shadow-sm hover:shadow-xl transition-all duration-200 p-6 flex flex-col justify-between group relative overflow-hidden ${
                      item.isSpecialization
                        ? 'border-orange-300 ring-2 ring-orange-500/20 shadow-orange-100/50'
                        : 'border-slate-200/90 hover:border-orange-300'
                    }`}
                  >
                    {item.isSpecialization && (
                      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#ff5a00] to-amber-500 text-white text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-wider flex items-center gap-1 shadow-xs">
                        <Sparkles className="w-3 h-3" />
                        <span>Master Credential</span>
                      </div>
                    )}

                    <div>
                      {/* Certificate Preview Image */}
                      {isCompleted && item.imageUrl ? (
                        <div
                          onClick={() => setSelectedPreview(item)}
                          className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-slate-100 cursor-pointer border border-slate-200/90 group-hover:ring-2 group-hover:ring-orange-400 transition-all shadow-xs"
                        >
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-bold backdrop-blur-[2px]">
                            <Eye className="w-4 h-4" />
                            <span>Preview Full Certificate</span>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full aspect-[16/10] rounded-2xl mb-5 bg-gradient-to-br from-slate-50 to-orange-50/40 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-center p-4">
                          <Clock className="w-7 h-7 text-amber-500 mb-2 animate-pulse" />
                          <span className="text-xs font-black text-slate-800">Course 8 of 8</span>
                          <span className="text-[11px] font-semibold text-slate-500">In Progress / Finalizing</span>
                        </div>
                      )}

                      {/* Header Badge */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {item.badge}
                        </span>

                        {isCompleted ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            Verified
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                            In Progress
                          </span>
                        )}
                      </div>

                      {/* Title & Issuer */}
                      <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug group-hover:text-[#ff5a00] transition-colors mt-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-semibold mt-0.5">
                        {item.issuer} • {item.platform}
                      </p>

                      {/* Description */}
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Skills & Action */}
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-50 text-slate-700 border border-slate-200/80"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        {item.imageUrl && (
                          <button
                            onClick={() => setSelectedPreview(item)}
                            className="text-xs font-extrabold text-slate-700 hover:text-orange-600 flex items-center gap-1 transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Preview</span>
                          </button>
                        )}

                        <a
                          href={item.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-[#ff5a00] text-white text-xs font-extrabold shadow-sm transition-all hover:scale-105"
                        >
                          <span>{item.isGoogle ? 'Verify on Coursera' : 'Verify on LinkedIn'}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-20 text-center rounded-3xl bg-white border border-slate-200 p-8">
              <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-extrabold text-slate-800">No certificates found matching "{searchQuery}"</h3>
              <p className="text-xs text-slate-500 mt-1">Try another keyword or select "All Verified Credentials"</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
                className="mt-4 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold"
              >
                Reset Filter
              </button>
            </div>
          )}

        </div>
      </div>

      {/* High-Resolution Certificate Lightbox Modal */}
      {selectedPreview && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
          <div className="absolute inset-0" onClick={() => setSelectedPreview(null)} />

          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-200 flex flex-col max-h-[92vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#ff5a00] flex items-center justify-center font-bold border border-orange-200">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                    {selectedPreview.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {selectedPreview.issuer} • {selectedPreview.platform}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedPreview(null)}
                className="p-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: High-Res Image */}
            <div className="p-4 sm:p-6 overflow-y-auto bg-slate-900/5 flex items-center justify-center">
              {selectedPreview.imageUrl ? (
                <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                  <img
                    src={selectedPreview.imageUrl}
                    alt={selectedPreview.title}
                    className="w-full max-h-[60vh] object-contain"
                  />
                </div>
              ) : (
                <div className="p-12 text-center text-slate-500">
                  No preview available.
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-slate-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500 font-mono">
                {selectedPreview.recordId ? (
                  <>Credential ID / Record: <span className="font-bold text-slate-800">{selectedPreview.recordId}</span></>
                ) : (
                  <span>Verified Official Program</span>
                )}
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={selectedPreview.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#ff5a00] hover:bg-[#ea5000] text-white text-xs font-extrabold shadow-md transition-all hover:scale-105 flex items-center justify-center gap-1.5"
                >
                  <span>{selectedPreview.isGoogle ? 'Verify on Coursera' : 'Verify on LinkedIn'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setSelectedPreview(null)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
