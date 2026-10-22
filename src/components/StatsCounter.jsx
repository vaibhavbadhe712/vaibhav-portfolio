import React, { useState, useRef, useEffect } from 'react';
import { 
  Smartphone, 
  Award, 
  Building2, 
  CreditCard, 
  Globe, 
  Cloud, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Layers,
  Pause,
  Play
} from 'lucide-react';
import { stats } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Smartphone,
  Award,
  Building2,
  CreditCard,
  Globe,
  Cloud
};

// Theme configurations for each capability card
const themeStyles = {
  blue: {
    gradientBar: 'from-blue-500 via-indigo-500 to-sky-500',
    iconBg: 'bg-blue-50 text-blue-600 border-blue-200',
    badge: 'bg-blue-50 text-blue-700 border-blue-200/80',
    dot: 'bg-blue-500',
    statText: 'text-blue-600',
    highlightBg: 'bg-blue-50/70 text-blue-900 border-blue-100',
    pill: 'bg-blue-50/60 text-blue-800 border-blue-200/60 hover:bg-blue-100/70',
    activeTab: 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20',
    hoverBorder: 'hover:border-blue-400 hover:shadow-blue-500/10'
  },
  orange: {
    gradientBar: 'from-orange-500 via-amber-500 to-yellow-500',
    iconBg: 'bg-orange-50 text-orange-600 border-orange-200',
    badge: 'bg-orange-50 text-orange-700 border-orange-200/80',
    dot: 'bg-orange-500',
    statText: 'text-orange-600',
    highlightBg: 'bg-orange-50/70 text-orange-900 border-orange-100',
    pill: 'bg-orange-50/60 text-orange-800 border-orange-200/60 hover:bg-orange-100/70',
    activeTab: 'bg-orange-600 text-white border-orange-600 shadow-md shadow-orange-500/20',
    hoverBorder: 'hover:border-orange-400 hover:shadow-orange-500/10'
  },
  emerald: {
    gradientBar: 'from-emerald-500 via-teal-500 to-green-500',
    iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    dot: 'bg-emerald-500',
    statText: 'text-emerald-600',
    highlightBg: 'bg-emerald-50/70 text-emerald-900 border-emerald-100',
    pill: 'bg-emerald-50/60 text-emerald-800 border-emerald-200/60 hover:bg-emerald-100/70',
    activeTab: 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-500/20',
    hoverBorder: 'hover:border-emerald-400 hover:shadow-emerald-500/10'
  },
  purple: {
    gradientBar: 'from-purple-500 via-indigo-500 to-fuchsia-500',
    iconBg: 'bg-purple-50 text-purple-600 border-purple-200',
    badge: 'bg-purple-50 text-purple-700 border-purple-200/80',
    dot: 'bg-purple-500',
    statText: 'text-purple-600',
    highlightBg: 'bg-purple-50/70 text-purple-900 border-purple-100',
    pill: 'bg-purple-50/60 text-purple-800 border-purple-200/60 hover:bg-purple-100/70',
    activeTab: 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/20',
    hoverBorder: 'hover:border-purple-400 hover:shadow-purple-500/10'
  },
  amber: {
    gradientBar: 'from-amber-500 via-orange-500 to-red-500',
    iconBg: 'bg-amber-50 text-amber-600 border-amber-200',
    badge: 'bg-amber-50 text-amber-800 border-amber-200/80',
    dot: 'bg-amber-500',
    statText: 'text-amber-600',
    highlightBg: 'bg-amber-50/70 text-amber-900 border-amber-100',
    pill: 'bg-amber-50/60 text-amber-800 border-amber-200/60 hover:bg-amber-100/70',
    activeTab: 'bg-amber-600 text-white border-amber-600 shadow-md shadow-amber-500/20',
    hoverBorder: 'hover:border-amber-400 hover:shadow-amber-500/10'
  },
  cyan: {
    gradientBar: 'from-cyan-500 via-sky-500 to-blue-500',
    iconBg: 'bg-cyan-50 text-cyan-600 border-cyan-200',
    badge: 'bg-cyan-50 text-cyan-800 border-cyan-200/80',
    dot: 'bg-cyan-500',
    statText: 'text-cyan-600',
    highlightBg: 'bg-cyan-50/70 text-cyan-900 border-cyan-100',
    pill: 'bg-cyan-50/60 text-cyan-800 border-cyan-200/60 hover:bg-cyan-100/70',
    activeTab: 'bg-cyan-600 text-white border-cyan-600 shadow-md shadow-cyan-500/20',
    hoverBorder: 'hover:border-cyan-400 hover:shadow-cyan-500/10'
  }
};

const quickTabs = [
  { id: "apps", label: "📱 11+ Apps" },
  { id: "experience", label: "🏆 2+ Yrs Exp" },
  { id: "company", label: "🏢 Infynod Tech" },
  { id: "payments", label: "💳 Payments & IAP" },
  { id: "international", label: "🌐 US Client" },
  { id: "devops", label: "☁️ DevOps & Cloud" }
];

export default function StatsCounter() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Update scroll boundaries & active card index on scroll
  const handleScrollUpdate = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Approximate active card
    const cardWidth = 360 + 20; // width + gap
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), stats.length - 1));
  };

  // Scroll by direction
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 380;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  // Scroll directly to a specific card index
  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = 360 + 20;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  // Auto-scroll loop every 5 seconds if not hovered and autoplay active
  useEffect(() => {
    if (!isAutoPlay || isHovered) return;

    const timer = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      
      if (scrollLeft >= scrollWidth - clientWidth - 20) {
        // Rewind to start smoothly
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
      }
    }, 4500);

    return () => clearInterval(timer);
  }, [isAutoPlay, isHovered]);

  return (
    <section className="py-10 sm:py-14 bg-slate-50/70 border-y border-slate-200/90 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header & Interactive Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs mb-2.5 text-[11px] font-bold text-slate-700 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Core Capabilities & Verified Track Record
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
              Production Track Record & Key Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Swipe or use controls to view all 6 competencies — mobile delivery, payment gateways, US enterprise & DevOps.
            </p>
          </div>

          {/* Navigation Controls: Left/Right buttons + Card Counter */}
          <div className="flex items-center gap-2.5 self-start md:self-auto shrink-0">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              title={isAutoPlay ? "Pause Auto-Slide" : "Play Auto-Slide"}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all shadow-2xs"
            >
              {isAutoPlay ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-orange-500" />
                  <span className="hidden sm:inline">Auto-Slide</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-slate-400" />
                  <span className="hidden sm:inline">Paused</span>
                </>
              )}
            </button>

            <span className="text-xs font-bold text-slate-500 px-2 font-mono">
              <span className="text-slate-900 font-black">{activeIndex + 1}</span> / {stats.length}
            </span>

            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous capability"
              className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all shadow-2xs ${
                canScrollLeft 
                  ? 'bg-white border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300 active:scale-95' 
                  : 'bg-slate-100/60 border-slate-200/50 text-slate-300 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Next capability"
              className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all shadow-2xs ${
                canScrollRight 
                  ? 'bg-white border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300 active:scale-95' 
                  : 'bg-slate-100/60 border-slate-200/50 text-slate-300 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Category Jump Tabs (Single-click scroll to any card) */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-3 mb-2">
          {quickTabs.map((tab, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={tab.id}
                onClick={() => scrollToIndex(idx)}
                className={`text-xs font-bold px-3 py-1.5 rounded-xl border whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-orange-500 text-white border-orange-500 shadow-xs shadow-orange-500/25'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Single Row Horizontal Scrollable Carousel Track */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            onScroll={handleScrollUpdate}
            className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-3 px-0.5"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {stats.map((stat, idx) => {
              const theme = themeStyles[stat.accent] || themeStyles.blue;
              const Icon = iconMap[stat.icon] || Smartphone;
              const isCardActive = activeIndex === idx;

              return (
                <div
                  key={stat.id || idx}
                  className={`w-[320px] sm:w-[360px] md:w-[380px] shrink-0 snap-start bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                    isCardActive 
                      ? 'border-slate-300 shadow-lg ring-2 ring-orange-500/20' 
                      : 'border-slate-200/90 shadow-xs hover:shadow-md'
                  } ${theme.hoverBorder}`}
                >
                  {/* Top Colored Accent Gradient Strip */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${theme.gradientBar}`} />

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Top Bar: Icon + Status Badge */}
                      <div className="flex items-center justify-between gap-3 mb-3.5">
                        <div className={`w-11 h-11 rounded-xl ${theme.iconBg} border flex items-center justify-center shadow-2xs`}>
                          <Icon className="w-5 h-5 stroke-[2.2]" />
                        </div>

                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${theme.badge}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                          {stat.badge}
                        </div>
                      </div>

                      {/* Metric Display & Title */}
                      <div className="mb-3">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-mono">
                            {stat.value}
                          </span>
                          {stat.suffix && (
                            <span className={`text-[11px] sm:text-xs font-extrabold uppercase tracking-wider ${theme.statText}`}>
                              {stat.suffix}
                            </span>
                          )}
                        </div>
                        <h3 className="text-base font-bold text-slate-900 mt-1 leading-snug">
                          {stat.label}
                        </h3>
                        <p className="text-xs font-semibold text-slate-500 mt-0.5">
                          {stat.subtitle}
                        </p>
                      </div>

                      {/* Highlight Pill Banner */}
                      {stat.highlight && (
                        <div className={`mb-3 px-2.5 py-1.5 rounded-lg border text-[11px] font-bold flex items-center gap-1.5 ${theme.highlightBg}`}>
                          <Sparkles className="w-3.5 h-3.5 shrink-0 opacity-80" />
                          <span className="truncate">{stat.highlight}</span>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                        {stat.description}
                      </p>
                    </div>

                    {/* Key Capability Chips */}
                    <div className="pt-3 border-t border-slate-100 mt-auto">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Key Capabilities & Deliverables
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {stat.pills.map((pill, pillIdx) => (
                          <span
                            key={pillIdx}
                            className={`text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-md border transition-colors ${theme.pill}`}
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Strip */}
                  <div className="px-5 py-2 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span className="flex items-center gap-1.5 text-emerald-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Verified Production Track
                    </span>
                    <span className="text-slate-400 group-hover:text-slate-700 transition-colors flex items-center gap-0.5">
                      Details
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots & Swipe Hint */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {stats.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => scrollToIndex(dotIdx)}
                aria-label={`Jump to slide ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === dotIdx 
                    ? 'w-7 bg-orange-500 shadow-xs' 
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <div className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5">
            <span>← Swipe horizontally to explore all 6 competencies →</span>
          </div>
        </div>

        {/* Bottom Sleek Micro-Banner */}
        <div className="mt-6 bg-white rounded-xl border border-slate-200 p-3.5 sm:p-4 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 text-slate-700 font-bold">
            <div className="w-7 h-7 rounded-lg bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span>
              End-to-End Ownership: Architecture • Play & App Store Releases • In-App Billing • AWS Cloud Infrastructure
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-[11px] shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for Senior & Lead Roles
          </span>
        </div>

      </div>
    </section>
  );
}
