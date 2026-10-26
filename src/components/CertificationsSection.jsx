import React from 'react';
import { Award, CheckCircle2, ExternalLink, Sparkles, BrainCircuit, GraduationCap, ArrowRight } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function CertificationsSection({ onOpenAllCertificates }) {
  const googleCert = certifications.find(c => c.id === 'google-ai');

  return (
    <section id="certifications" className="py-24 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#ff5a00] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Award className="w-3.5 h-3.5" />
            <span>Executive Credentials & Specializations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Industry Certifications & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5a00] via-orange-600 to-amber-500">
              Google AI Credentials
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Continuous engineering advancement validated by Google Career Certificates, advanced mobile architecture credentials, and production-proven cloud backend engineering.
          </p>
        </div>

        {/* Flagship Showcase Card: Google AI Professional Certificate */}
        {googleCert && (
          <div className="mb-12">
            <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 sm:p-8 lg:p-10 overflow-hidden">
              {/* Top Accent Ribbon */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-[#ff5a00] to-amber-500 text-white text-[11px] font-black px-6 py-1.5 rounded-bl-2xl shadow-sm uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Credential • Google AI</span>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-3 sm:pt-0">
                
                {/* Left Brand Badge */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center shrink-0 p-3.5">
                    <svg className="w-full h-full" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/80">
                        {googleCert.issuer}
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        Coursera Verified
                      </span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        8 Courses & Specialization Completed
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                      {googleCert.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                      Professional Specialization Series • Completed October 2026
                    </p>
                  </div>
                </div>

                {/* Right Progress & Quick Actions */}
                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 shrink-0">
                  <div className="w-full sm:w-56 text-left lg:text-right">
                    <div className="flex items-center justify-between lg:justify-end gap-2 text-xs font-bold text-slate-700 mb-1.5">
                      <span>Curriculum Status</span>
                      <span className="text-emerald-600 font-black">All 8 / 8 Completed (100%)</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#ff5a00] to-emerald-500 rounded-full w-full" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={googleCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-black shadow-sm transition-all duration-200 hover:scale-105"
                    >
                      <span>Verify Specialization</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={onOpenAllCertificates}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#ff5a00] hover:bg-[#ea5000] text-white text-xs font-black shadow-md shadow-orange-500/20 transition-all duration-200 hover:scale-105"
                    >
                      <span>View All 8 Certificates</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Master Certificate Image Preview Card */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center gap-6 bg-slate-50/80 p-5 rounded-2xl border border-slate-200/70">
                <div
                  onClick={onOpenAllCertificates}
                  className="w-full md:w-64 aspect-[16/10] rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm shrink-0 cursor-pointer group/thumb relative"
                >
                  <img
                    src="/assets/certificates/google-ai-specialization-cert.jpg"
                    alt="Google AI Professional Certificate"
                    className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold">
                    <span>Click to Expand</span>
                  </div>
                </div>

                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      Record: D9ARSI9NJK5Z
                    </span>
                    <span className="text-[11px] font-bold text-slate-500">
                      Official Google Credential
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {googleCert.description}
                  </p>
                </div>
              </div>

              {/* Competencies */}
              <div className="mt-6 flex flex-wrap items-center gap-2 pt-5 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
                  <BrainCircuit className="w-3.5 h-3.5 text-[#ff5a00]" />
                  Core Competencies:
                </span>
                {googleCert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}


        
        {/* Big Illuminated Gateway Callout to Dedicated Certifications Hub */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-orange-400 shrink-0 shadow-inner">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Dedicated Credentials & Certificates Hub
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                Explore all 12 verified accomplishment records with high-resolution certificate previews, Coursera verification links, and skill breakdowns on a dedicated interactive page.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenAllCertificates}
            className="px-6 py-3 rounded-2xl bg-[#ff5a00] hover:bg-[#ea5000] text-white text-sm font-extrabold shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 shrink-0 flex items-center gap-2"
          >
            <span>Explore All Certificates</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
