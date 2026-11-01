import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Activity, Cpu, Sparkles, ChevronUp, Radio, Gauge, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RealtimeScrollHUD() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  const [fps, setFps] = useState(60);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState('Overview');
  const [isExpanded, setIsExpanded] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -500, y: -500 });
  const [latency] = useState(14); // ms simulated socket ping

  // Real-time FPS Measurement using requestAnimationFrame
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId;

    const measureFPS = (now) => {
      frameCount++;
      const delta = now - lastTime;
      if (delta >= 1000) {
        const currentFps = Math.round((frameCount * 1000) / delta);
        // Realistic Flutter AOT target (58-60 or 120 on ProMotion displays)
        setFps(Math.min(120, Math.max(30, currentFps)));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(measureFPS);
    };

    animId = requestAnimationFrame(measureFPS);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Real-time Scroll Percentage & Active Section Tracking
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrollPercent(Math.round(latest * 100));

      const sections = [
        { id: 'about', label: 'Architecture & Bio' },
        { id: 'projects', label: 'Production Apps' },
        { id: 'ai', label: 'AI & LLM Services' },
        { id: 'opensource', label: 'pub.dev Package' },
        { id: 'skills', label: 'Tech Stack & APIs' },
        { id: 'certifications', label: 'Google AI Credentials' },
        { id: 'experience', label: 'Career Timeline' },
        { id: 'philosophy', label: 'Clean Engineering' },
        { id: 'contact', label: 'Direct Inquiries' }
      ];

      const scrollPos = window.scrollY + 350;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].label);
          break;
        }
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // Ambient Mouse Torch Tracker
  useEffect(() => {
    const handlePointerMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  // Interactive State Dispatcher
  const handleTriggerVsync = (e) => {
    e.stopPropagation();
    try {
      confetti({
        particleCount: 28,
        spread: 60,
        origin: { x: (e.clientX || window.innerWidth - 60) / window.innerWidth, y: 0.9 },
        colors: ['#ff5a00', '#f59e0b', '#38bdf8', '#10b981'],
        scalar: 0.85
      });
    } catch (e) {}
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Real-Time Top Gradient Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-200/40 z-50 pointer-events-none">
        <motion.div
          style={{ scaleX }}
          className="h-full origin-left bg-gradient-to-r from-[#ff5a00] via-amber-500 to-sky-500 shadow-sm shadow-orange-500/50"
        />
      </div>

      {/* 2. Real-Time Mouse Spotlight Torch (Soft Ambient Illumination) */}
      <div
        className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-300 opacity-60"
        style={{
          background: `radial-gradient(650px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 90, 0, 0.04), rgba(56, 189, 248, 0.02) 40%, transparent 80%)`
        }}
        aria-hidden="true"
      />

      {/* 3. Real-Time Telemetry HUD Pill (Bottom-Right Floating) */}
      <aside aria-label="Real-time telemetry HUD" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 font-mono select-none">
        {/* Expanded Telemetry Card */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 10 }}
            className="p-4 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 text-white shadow-2xl w-72 text-xs space-y-3"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="font-bold flex items-center gap-1.5 text-orange-400">
                <Cpu className="w-4 h-4" />
                <span>FLUTTER RUNTIME HUD</span>
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                AOT Active
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/40">
                <div className="text-slate-400 text-[10px]">Render Frame Rate</div>
                <div className="font-bold text-base text-emerald-400 mt-0.5 flex items-baseline gap-1">
                  <span>{fps}</span>
                  <span className="text-[10px] text-slate-400">FPS</span>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/40">
                <div className="text-slate-400 text-[10px]">Frame Latency</div>
                <div className="font-bold text-base text-amber-400 mt-0.5 flex items-baseline gap-1">
                  <span>{(1000 / (fps || 60)).toFixed(1)}</span>
                  <span className="text-[10px] text-slate-400">ms</span>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/40">
                <div className="text-slate-400 text-[10px]">Scroll Depth</div>
                <div className="font-bold text-base text-sky-400 mt-0.5 flex items-baseline gap-1">
                  <span>{scrollPercent}</span>
                  <span className="text-[10px] text-slate-400">%</span>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/40">
                <div className="text-slate-400 text-[10px]">Socket Latency</div>
                <div className="font-bold text-base text-rose-400 mt-0.5 flex items-baseline gap-1">
                  <span>{latency}</span>
                  <span className="text-[10px] text-slate-400">ms</span>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <div className="text-[10px] text-slate-400 mb-1">Active Viewport Scope:</div>
              <div className="text-[11px] font-bold text-slate-200 truncate bg-slate-800/90 px-2.5 py-1.5 rounded-lg border border-slate-700/60 flex items-center gap-1.5">
                <Radio className="w-3 h-3 text-[#ff5a00] animate-pulse" />
                <span>{activeSection}</span>
              </div>
            </div>

            <div className="pt-1 flex items-center justify-between gap-2">
              <button
                onClick={handleTriggerVsync}
                className="flex-1 py-1.5 px-2 rounded-xl bg-gradient-to-r from-[#ff5a00] to-amber-500 hover:from-[#ea5000] hover:to-amber-600 text-white font-bold text-[10px] flex items-center justify-center gap-1 shadow-md transition-all active:scale-95"
              >
                <Zap className="w-3 h-3" />
                <span>Emit State Event</span>
              </button>

              <button
                onClick={scrollToTop}
                className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Scroll To Top"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Minimal Floating Pill Bar */}
        <div className="flex items-center gap-1.5 bg-slate-900/90 hover:bg-slate-900 backdrop-blur-md border border-slate-700/80 p-1.5 rounded-2xl shadow-xl shadow-slate-950/20 text-white transition-all">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-white/10 transition-colors text-xs"
            title="Toggle Live Flutter Telemetry"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>

            <span className="font-bold text-slate-200 text-[11px]">
              {fps} FPS
            </span>

            <span className="text-slate-600">|</span>

            <span className="text-[11px] text-amber-400 font-bold">
              {scrollPercent}%
            </span>

            <span className="hidden sm:inline text-slate-600">|</span>

            <span className="hidden sm:inline text-[10px] text-slate-400 max-w-[110px] truncate">
              {activeSection}
            </span>
          </button>

          {/* Quick Back to Top button when scrolled past 15% */}
          {scrollPercent > 12 && (
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-[#ff5a00] text-slate-300 hover:text-white transition-all"
              title="Quick Scroll to Top"
            >
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
