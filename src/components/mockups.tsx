"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Monitor, Shield, Zap, Database, ArrowUpRight, BarChart2, TrendingUp, Users } from "lucide-react";

// 1. Smartphone/Mobile Mockup
export function PhoneMockup() {
  return (
    <div className="relative mx-auto border-4 border-slate-800 dark:border-slate-700 bg-slate-900 rounded-[2.5rem] h-[500px] w-[250px] shadow-2xl overflow-hidden ring-12 ring-slate-900/10">
      {/* Speaker/Camera Notch */}
      <div className="absolute top-0 inset-x-0 h-4 bg-slate-900 flex justify-center items-center z-20">
        <div className="w-16 h-2.5 bg-black rounded-full"></div>
      </div>

      {/* Screen Content */}
      <div className="relative h-full w-full bg-slate-950 p-4 pt-8 text-white flex flex-col justify-between overflow-hidden select-none">
        {/* Status Bar */}
        <div className="flex justify-between items-center text-[10px] text-zinc-400 font-semibold px-2 mb-2">
          <span>9:41 AM</span>
          <div className="flex items-center gap-1">
            <span>5G</span>
            <div className="w-4 h-2 border border-zinc-400 rounded-sm p-0.5">
              <div className="h-full w-2 bg-zinc-400 rounded-2xs"></div>
            </div>
          </div>
        </div>

        {/* Dashboard Header */}
        <div className="px-1 flex justify-between items-center">
          <div>
            <h4 className="text-[10px] text-zinc-400">Total Balance</h4>
            <div className="text-lg font-bold tracking-tight">$45,231.89</div>
          </div>
          <span className="p-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-bold flex items-center gap-0.5">
            +14% <TrendingUp className="h-2.5 w-2.5" />
          </span>
        </div>

        {/* Visualized card layout */}
        <div className="mt-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-3.5 shadow-md flex flex-col justify-between h-28 relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="flex justify-between items-start">
            <span className="text-[9px] uppercase tracking-wider opacity-85">Corporate Card</span>
            <Zap className="h-4 w-4 fill-white/20" />
          </div>
          <div className="text-sm font-semibold tracking-wider">**** **** **** 8820</div>
          <div className="flex justify-between items-center text-[9px] opacity-85">
            <span>WEBNTRIC SOFTWARE</span>
            <span>12/28</span>
          </div>
        </div>

        {/* Action icons */}
        <div className="grid grid-cols-3 gap-2 mt-4 text-center">
          <div className="p-2 bg-zinc-900 rounded-xl flex flex-col items-center gap-1 hover:bg-zinc-800 transition-colors">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
              <ArrowUpRight className="h-4.5 w-4.5" />
            </div>
            <span className="text-[8px] font-semibold text-zinc-300">Send</span>
          </div>
          <div className="p-2 bg-zinc-900 rounded-xl flex flex-col items-center gap-1 hover:bg-zinc-800 transition-colors">
            <div className="w-8 h-8 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400">
              <Smartphone className="h-4.5 w-4.5" />
            </div>
            <span className="text-[8px] font-semibold text-zinc-300">Top Up</span>
          </div>
          <div className="p-2 bg-zinc-900 rounded-xl flex flex-col items-center gap-1 hover:bg-zinc-800 transition-colors">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <Shield className="h-4.5 w-4.5" />
            </div>
            <span className="text-[8px] font-semibold text-zinc-300">Vault</span>
          </div>
        </div>

        {/* Transactions list */}
        <div className="mt-4 flex-1">
          <h5 className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold mb-2">Recent activity</h5>
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-zinc-900/50 p-2 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px] font-bold">AWS</div>
                <div>
                  <div className="text-[9px] font-semibold">Cloud Service</div>
                  <div className="text-[7px] text-zinc-400">Server Deploy</div>
                </div>
              </div>
              <span className="text-[9px] font-bold text-rose-400">-$19.00</span>
            </div>
            <div className="flex justify-between items-center bg-zinc-900/50 p-2 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">STR</div>
                <div>
                  <div className="text-[9px] font-semibold">Stripe Inc</div>
                  <div className="text-[7px] text-zinc-400">Client Payout</div>
                </div>
              </div>
              <span className="text-[9px] font-bold text-emerald-400">+$2,400.00</span>
            </div>
          </div>
        </div>

        {/* Phone Nav Bar */}
        <div className="mt-auto pt-2 border-t border-zinc-900 flex justify-around text-zinc-400">
          <div className="flex flex-col items-center gap-0.5 text-primary">
            <Smartphone className="h-4.5 w-4.5" />
            <span className="text-[7px]">Home</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 hover:text-white transition-colors">
            <Users className="h-4.5 w-4.5" />
            <span className="text-[7px]">Contacts</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Desktop Mockup
export function DesktopMockup() {
  return (
    <div className="relative mx-auto border-8 border-slate-800 dark:border-slate-700 bg-slate-900 rounded-2xl h-[420px] max-w-[650px] w-full shadow-2xl overflow-hidden ring-12 ring-slate-900/10">
      {/* Screen Content */}
      <div className="relative h-full w-full bg-slate-950 text-white flex flex-col select-none">
        {/* App Title Bar */}
        <div className="h-9 bg-slate-900 px-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="text-xs text-zinc-400 ml-4 font-mono font-semibold">Webntric Business System v2.0 (Offline Mode)</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-900/50 px-2.5 py-0.5 rounded-full">
            <Database className="h-3.5 w-3.5 shrink-0" />
            <span className="font-semibold text-[10px]">Local DB Synced</span>
          </div>
        </div>

        {/* App Workspace */}
        <div className="flex-1 flex overflow-hidden">
          {/* App Sidebar */}
          <div className="w-44 bg-slate-900/50 border-r border-slate-800 p-4 space-y-4">
            <div className="space-y-1.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Management</div>
              <div className="text-xs font-medium p-2 bg-indigo-500/10 text-indigo-400 rounded-lg flex items-center gap-2">
                <BarChart2 className="h-3.5 w-3.5" /> Dashboard
              </div>
              <div className="text-xs font-medium p-2 hover:bg-slate-800 rounded-lg flex items-center gap-2 text-zinc-400 transition-colors">
                <Database className="h-3.5 w-3.5" /> Inventory DB
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Settings</div>
              <div className="text-xs font-medium p-2 hover:bg-slate-800 rounded-lg flex items-center gap-2 text-zinc-400 transition-colors">
                <Shield className="h-3.5 w-3.5" /> Users & Security
              </div>
            </div>
          </div>

          {/* App Main Body */}
          <div className="flex-1 p-6 space-y-6 overflow-y-auto">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-bold text-zinc-300">Sales Registry</h3>
                <p className="text-[10px] text-zinc-500">Offline transactions logged locally</p>
              </div>
              <div className="text-right">
                <div className="text-base font-bold text-indigo-400">$18,432.90</div>
                <div className="text-[9px] text-emerald-400">Target Reached 104%</div>
              </div>
            </div>

            {/* Simulated Data Grid */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <table className="w-full text-left text-[11px]">
                <thead>
                  <tr className="bg-slate-800/50 text-zinc-400 border-b border-slate-800">
                    <th className="p-3 font-semibold">Invoice</th>
                    <th className="p-3 font-semibold">Client</th>
                    <th className="p-3 font-semibold">Method</th>
                    <th className="p-3 font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="p-3 font-mono">#INV-0982</td>
                    <td className="p-3 font-semibold text-zinc-300">Alpha Corp Ltd.</td>
                    <td className="p-3">Local Ledger</td>
                    <td className="p-3 font-bold text-emerald-400">$3,420.00</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">#INV-0983</td>
                    <td className="p-3 font-semibold text-zinc-300">Vertex Media Inc.</td>
                    <td className="p-3">Cash Vault</td>
                    <td className="p-3 font-bold text-emerald-400">$980.50</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">#INV-0984</td>
                    <td className="p-3 font-semibold text-zinc-300">Stellar Labs</td>
                    <td className="p-3">POS Terminal</td>
                    <td className="p-3 font-bold text-emerald-400">$1,890.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Offline warning banner */}
            <div className="p-3 bg-indigo-950/20 border border-indigo-900/50 rounded-xl flex items-center gap-3">
              <Zap className="h-5 w-5 text-indigo-400 shrink-0" />
              <div>
                <div className="text-[10px] font-bold text-indigo-300">No Internet Required</div>
                <p className="text-[9px] text-zinc-400">All inventory changes are written to highly optimized local SQLite engines.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. SEO / Analytics Dashboard
export function SEODashboardMockup() {
  return (
    <div className="relative mx-auto border-8 border-slate-800 dark:border-slate-700 bg-slate-900 rounded-2xl h-[380px] max-w-[650px] w-full shadow-2xl overflow-hidden ring-12 ring-slate-900/10">
      {/* Screen Content */}
      <div className="relative h-full w-full bg-slate-950 text-white flex flex-col p-6 justify-between select-none">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-bold">SEO & Organic Growth</h4>
            <div className="text-2xl font-extrabold tracking-tight mt-1">124,892 <span className="text-xs text-emerald-400 font-semibold">(+48% YoY)</span></div>
          </div>
          <div className="flex gap-2">
            <span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-[10px] font-semibold">Keyword Rank: #1</span>
            <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-950 text-emerald-400 rounded-lg text-[10px] font-semibold flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> ROI: +310%
            </span>
          </div>
        </div>

        {/* Animated Custom Chart using SVG */}
        <div className="flex-1 relative flex items-end justify-center my-6 h-36 border-b border-zinc-800">
          <svg className="w-full h-full absolute inset-0 overflow-visible" viewBox="0 0 500 120" preserveAspectRatio="none">
            {/* Grid Lines */}
            <line x1="0" y1="30" x2="500" y2="30" stroke="#1f2937" strokeDasharray="4" strokeWidth="1" />
            <line x1="0" y1="60" x2="500" y2="60" stroke="#1f2937" strokeDasharray="4" strokeWidth="1" />
            <line x1="0" y1="90" x2="500" y2="90" stroke="#1f2937" strokeDasharray="4" strokeWidth="1" />

            {/* Gradient Fill */}
            <defs>
              <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Chart Area */}
            <path
              d="M0 100 Q 80 80, 150 50 T 300 65 T 420 20 T 500 10 L 500 120 L 0 120 Z"
              fill="url(#chart-grad)"
            />

            {/* Line Path */}
            <path
              d="M0 100 Q 80 80, 150 50 T 300 65 T 420 20 T 500 10"
              fill="none"
              stroke="#6366f1"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Bullet points on chart */}
            <circle cx="150" cy="50" r="5" fill="#8b5cf6" stroke="#ffffff" strokeWidth="2" />
            <circle cx="420" cy="20" r="5" fill="#8b5cf6" stroke="#ffffff" strokeWidth="2" />
            <circle cx="500" cy="10" r="5" fill="#8b5cf6" stroke="#ffffff" strokeWidth="2" />
          </svg>

          {/* X Axis Labels */}
          <div className="absolute inset-x-0 bottom-[-22px] flex justify-between px-2 text-[9px] text-zinc-500 font-semibold uppercase tracking-wider">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
            <span>Nov</span>
          </div>
        </div>

        {/* Footer Statistics cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-900">
            <span className="text-[9px] text-zinc-400 block font-semibold uppercase tracking-wider">Domain Authority</span>
            <div className="text-base font-bold text-zinc-200 mt-0.5">82 / 100</div>
          </div>
          <div className="bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-900">
            <span className="text-[9px] text-zinc-400 block font-semibold uppercase tracking-wider">Organic Keywords</span>
            <div className="text-base font-bold text-zinc-200 mt-0.5">24.5k (+30%)</div>
          </div>
          <div className="bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-900">
            <span className="text-[9px] text-zinc-400 block font-semibold uppercase tracking-wider">CTR Conversion</span>
            <div className="text-base font-bold text-emerald-400 mt-0.5">8.9% (+2.4%)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
