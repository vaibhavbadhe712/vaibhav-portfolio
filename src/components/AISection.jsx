import React, { useState } from 'react';
import { Sparkles, Bot, MessageSquare, Zap, Cpu, Terminal, CheckCircle2 } from 'lucide-react';
import { aiShowcase } from '../data/portfolioData';

export default function AISection() {
  const [selectedPrompt, setSelectedPrompt] = useState(0);

  const demoConversations = [
    {
      userQuery: "How does OfficeBook HRMS use AI chat?",
      aiResponse: "OfficeBook HRMS integrates a mobile conversational AI assistant that directly answers employee queries about shift timings, company HR policy documents, and leave balances in real-time.",
      tag: "HRMS AI Assistant"
    },
    {
      userQuery: "How are LLMs integrated with Flutter in production?",
      aiResponse: "We use a Node.js/Fastify AI proxy gateway with Server-Sent Events (SSE) streaming tokens into Flutter's Dio/WebSocket layer, achieving sub-second time-to-first-token in mobile views.",
      tag: "LLM Streaming Architecture"
    },
    {
      userQuery: "What is your approach to AI in mobile apps?",
      aiResponse: "I focus on high-impact utility: automated customer support bots, contextual auto-fill, and ticket triage that run reliably with graceful offline fallbacks.",
      tag: "Production Engineering"
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>AI IN PRODUCTION MOBILE APPS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Practical <span className="text-purple-700">AI Integrations</span> Delivered to Production
          </h2>
          
          <p className="text-slate-600 text-base leading-relaxed">
            Real conversational HR assistants, low-latency LLM streaming via Fastify, and contextual recommendation algorithms inside shipped mobile apps.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: 3 Pillars (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {aiShowcase.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-purple-300 hover:bg-white transition-all duration-200 hover:shadow-md group"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-purple-100 text-purple-800 border border-purple-200 shrink-0">
                    {item.product}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 font-normal">
                  {item.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-white border border-slate-200 text-slate-700 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs text-purple-700 font-bold pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Clean Interactive AI Simulator Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-xl space-y-4">
              
              {/* Simulator Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold shadow-sm">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-slate-900">OfficeBook AI Assistant</div>
                    <div className="text-[10px] font-mono text-emerald-600 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Online • Sub-second SSE</span>
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-600 px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
                  Fastify AI Proxy
                </span>
              </div>

              {/* Sample Prompts */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-bold text-slate-500 font-mono">
                  Select a live question:
                </div>
                <div className="flex flex-col gap-1.5">
                  {demoConversations.map((conv, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedPrompt(idx)}
                      className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        selectedPrompt === idx
                          ? 'bg-purple-50 border border-purple-300 text-purple-900 shadow-sm'
                          : 'bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600'
                      }`}
                    >
                      💬 {conv.userQuery}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Dialogue */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] px-3.5 py-2 rounded-2xl rounded-br-sm bg-purple-600 text-white text-xs font-medium leading-relaxed shadow-sm">
                    {demoConversations[selectedPrompt].userQuery}
                  </div>
                </div>

                {/* AI Response Message */}
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center text-[10px] shrink-0 mt-0.5 border border-purple-200 font-bold">
                    AI
                  </div>
                  <div className="max-w-[90%] px-3.5 py-2.5 rounded-2xl rounded-tl-sm bg-white border border-slate-200 text-slate-800 text-xs leading-relaxed space-y-2 shadow-sm font-medium">
                    <p>{demoConversations[selectedPrompt].aiResponse}</p>
                    <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span className="text-emerald-600 font-bold">● 200 OK (38ms)</span>
                      <span className="text-purple-700 font-bold">{demoConversations[selectedPrompt].tag}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
