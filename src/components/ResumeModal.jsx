import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  const handleDownload = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });

    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Vaibhav_Badhe_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden z-10 text-slate-800">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#ff5a00] flex items-center justify-center font-bold border border-orange-200">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <span>Vaibhav Badhe — Resume</span>
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Updated 2026
                </span>
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Senior Flutter & Full Stack Developer • 10+ Production Mobile Apps
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#ff5a00] hover:bg-[#ea5000] text-white font-extrabold text-xs shadow-md shadow-orange-500/25 transition-all hover:scale-105"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Preview Frame */}
        <div className="flex-1 w-full bg-slate-100 p-2 sm:p-4 min-h-[460px] flex flex-col items-center justify-center">
          <iframe
            src={`${personalInfo.resumeUrl}#toolbar=0&navpanes=0`}
            title="Vaibhav Badhe Resume"
            className="w-full h-full min-h-[480px] rounded-2xl border border-slate-300 bg-white shadow-sm"
          />
        </div>

        {/* Bottom Banner */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>10+ Production Apps Shipped</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>US Client VMS Experience</span>
            </span>
          </div>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-[#ff5a00] hover:text-[#ea5000] font-bold transition-colors"
          >
            <span>Open PDF in new tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
