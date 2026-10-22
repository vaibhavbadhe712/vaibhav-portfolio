import React, { useState } from 'react';
import { Package, Copy, Check, ExternalLink, BellRing, Sparkles, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { openSource } from '../data/portfolioData';

export default function OpenSourceSection() {
  const [copied, setCopied] = useState(false);
  const [demoToast, setDemoToast] = useState(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(openSource.installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerToast = (type, title, message) => {
    setDemoToast({ type, title, message });
    setTimeout(() => {
      setDemoToast(null);
    }, 3500);
  };

  return (
    <section id="open-source" className="py-24 bg-[#f8fafc] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean White Container with Soft Elevation */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-xl shadow-slate-200/60">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold">
                <Package className="w-3.5 h-3.5 text-blue-600" />
                <span>FLUTTER OPEN-SOURCE ECOSYSTEM</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Package Author: <span className="text-[#0f2552] font-mono">toast_service</span> on pub.dev
              </h2>

              <p className="text-slate-600 text-base leading-relaxed font-normal">
                {openSource.description} Built to provide Flutter mobile developers with a zero-boilerplate, customizable toast notification client that looks great on both Android and iOS.
              </p>

              {/* Install Command Bar */}
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-900 font-mono text-sm sm:text-base text-cyan-300 shadow-md">
                <span className="truncate">$ {openSource.installCommand}</span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#ff5a00] hover:bg-[#ea5000] text-white font-extrabold text-xs transition-all shadow-sm shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Features bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {openSource.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* View on pub.dev CTA */}
              <div className="pt-2">
                <a
                  href={openSource.pubDevUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0f2552] hover:bg-slate-900 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
                >
                  <span>View Documentation on pub.dev</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Interactive Simulator (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-md rounded-2xl bg-slate-50 border border-slate-200 p-6 space-y-4 shadow-sm">
                
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-slate-800">
                    <BellRing className="w-4 h-4 text-[#ff5a00]" />
                    <span>Live Interactive Toast Demo</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-600 px-2 py-0.5 rounded bg-white border border-slate-200">
                    Interactive
                  </span>
                </div>

                <p className="text-xs text-slate-500 font-medium">
                  Click any trigger below to preview real-time Flutter toasts:
                </p>

                {/* Trigger Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => triggerToast('success', 'Order Completed! 🎉', 'POS invoice synced with cloud server.')}
                    className="p-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-slate-800 text-xs font-bold text-left transition-all shadow-sm"
                  >
                    🎉 Success Toast
                  </button>
                  <button
                    onClick={() => triggerToast('error', 'Network Drop ⚠️', 'Retrying request with local SQLite cache.')}
                    className="p-2.5 rounded-xl bg-white hover:bg-rose-50 border border-slate-200 hover:border-rose-300 text-slate-800 text-xs font-bold text-left transition-all shadow-sm"
                  >
                    ⚠️ Error Toast
                  </button>
                  <button
                    onClick={() => triggerToast('info', 'GPS Coordinate Synced 📍', 'Dispatched coordinates every 30s.')}
                    className="p-2.5 rounded-xl bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 text-slate-800 text-xs font-bold text-left transition-all shadow-sm"
                  >
                    📍 GPS Info Toast
                  </button>
                  <button
                    onClick={() => triggerToast('payment', 'Payment Captured 💳', '₹ 2,400 via Razorpay gateway.')}
                    className="p-2.5 rounded-xl bg-white hover:bg-amber-50 border border-slate-200 hover:border-amber-300 text-slate-800 text-xs font-bold text-left transition-all shadow-sm"
                  >
                    💳 Payment Toast
                  </button>
                </div>

                {/* Simulated Floating Toast Popup */}
                <div className="min-h-[75px] flex items-center justify-center pt-2">
                  {demoToast ? (
                    <div className="w-full p-3.5 rounded-xl bg-white border-2 border-slate-300 shadow-xl flex items-center gap-3 animate-bounce">
                      {demoToast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                      {demoToast.type === 'error' && <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />}
                      {demoToast.type === 'info' && <Info className="w-5 h-5 text-blue-600 shrink-0" />}
                      {demoToast.type === 'payment' && <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />}
                      <div className="text-left">
                        <div className="text-xs font-extrabold text-slate-900">{demoToast.title}</div>
                        <div className="text-[11px] text-slate-600 font-medium">{demoToast.message}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-xs font-mono text-slate-400 text-center italic">
                      Tap any button above to trigger live toast
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
