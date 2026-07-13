import React from 'react';

export default function ScoreCard({ title, score, status, statusColor, icon: Icon }) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Icon className="w-24 h-24" />
      </div>
      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest relative z-10">{title}</span>
      <div className="text-5xl font-black mt-3 mb-4 text-slate-800 relative z-10">{score} <span className="text-sm font-semibold text-slate-400">/ 5.0</span></div>
      <div className={`inline-flex px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold border ${statusColor} relative z-10 shadow-sm`}>
        STATUS: {status}
      </div>
    </div>
  );
}
