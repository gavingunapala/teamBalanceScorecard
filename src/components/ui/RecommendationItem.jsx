import React from 'react';
import { ShieldAlert } from 'lucide-react';

export default function RecommendationItem({ rec }) {
  const getColors = (priority) => {
    if (priority === 'CRITICAL') return 'bg-red-50 text-red-500';
    if (priority === 'HIGH') return 'bg-amber-50 text-amber-500';
    return 'bg-indigo-50 text-indigo-500';
  };

  const getBadgeColors = (priority) => {
    if (priority === 'CRITICAL') return 'bg-red-50 text-red-600 border-red-100';
    if (priority === 'HIGH') return 'bg-amber-50 text-amber-600 border-amber-100';
    return 'bg-indigo-50 text-indigo-600 border-indigo-100';
  };

  return (
    <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex gap-4 items-start transition-all hover:bg-white hover:shadow-md hover:border-slate-300 group">
      <div className={`p-2 rounded-xl shrink-0 ${getColors(rec.priority)}`}>
        <ShieldAlert className="w-6 h-6" />
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-3 mb-1.5">
          <h4 className="font-bold text-base text-slate-800">{rec.title}</h4>
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-bold tracking-widest uppercase border ${getBadgeColors(rec.priority)}`}>
            {rec.priority}
          </span>
        </div>
        <p className="text-xs text-slate-500 font-semibold mb-2 tracking-wide uppercase">{rec.type}</p>
        <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">{rec.description}</p>
      </div>
    </div>
  );
}
