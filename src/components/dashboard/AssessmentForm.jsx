import React from 'react';
import { ClipboardList, ArrowLeft } from 'lucide-react';

const colors = {
  indigo: { track: '#6366f1', bg: '#eef2ff', text: '#4338ca', border: '#c7d2fe' },
  rose:   { track: '#f43f5e', bg: '#fff1f2', text: '#be123c', border: '#fecdd3' },
  emerald:{ track: '#10b981', bg: '#ecfdf5', text: '#047857', border: '#a7f3d0' },
};

export default function AssessmentForm({ formData, handleSliderChange, handleSelectChange, processAssessment }) {
  const renderSlider = (key, value, accent) => {
    const c = colors[accent];
    const pct = (value - 1) * 25;
    return (
      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <input
            type="range" min="1" max="5" step="1"
            value={value}
            onChange={(e) => handleSliderChange(key, e.target.value)}
            className="w-full h-2 bg-slate-200 rounded-lg cursor-pointer appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md"
            style={{
              background: `linear-gradient(to right, ${c.track} ${pct}%, #e2e8f0 ${pct}%)`,
              accentColor: c.track,
            }}
          />
          <span
            className="font-mono px-3 py-1.5 rounded-lg text-base font-bold w-11 text-center shadow-sm shrink-0"
            style={{ backgroundColor: c.bg, color: c.text, border: `1px solid ${c.border}` }}
          >
            {value}
          </span>
        </div>
        <div className="flex justify-between text-xs text-slate-400 font-medium px-0.5">
          <span>Low (1)</span>
          <span>High (5)</span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 w-full shadow-2xl shadow-slate-200/50 transform transition-all duration-500">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-8">
        <div className="p-2.5 bg-indigo-50 rounded-xl">
          <ClipboardList className="w-6 h-6 text-indigo-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800">Rapid Balance Diagnostic Questionnaire</h2>
          <p className="text-sm text-slate-500 mt-0.5">Evaluate your current workplace technology interactions across individual baseline dimensions.</p>
        </div>
      </div>

      <form onSubmit={processAssessment} className="space-y-10">
        {/* Productivity Blocks */}
        <div className="space-y-6">
          <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-[11px] pb-2 border-b border-indigo-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Dimension 1: Task Productivity
          </h3>
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-3 p-5 bg-indigo-50/40 rounded-xl border border-indigo-100/50">
              <label className="text-slate-700 block font-medium leading-relaxed">Remote work tools (Zoom, Slack, Teams) help me complete my work faster.</label>
              {renderSlider('prodQ1', formData.prodQ1, 'indigo')}
            </div>
            <div className="space-y-3 p-5 bg-indigo-50/40 rounded-xl border border-indigo-100/50">
              <label className="text-slate-700 block font-medium leading-relaxed">I feel productive and effective in my current hybrid/remote arrangement.</label>
              {renderSlider('prodQ2', formData.prodQ2, 'indigo')}
            </div>
          </div>
        </div>

        {/* Burnout Strain Blocks */}
        <div className="space-y-6">
          <h3 className="text-rose-500 font-bold uppercase tracking-widest text-[11px] pb-2 border-b border-rose-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-400"></span> Dimension 2: Occupational Burnout Strain
          </h3>
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-3 p-5 bg-rose-50/40 rounded-xl border border-rose-100/50">
              <label className="text-slate-700 block font-medium leading-relaxed">I feel mentally exhausted and depleted after my daily remote work hours.</label>
              {renderSlider('burnQ1', formData.burnQ1, 'rose')}
            </div>
            <div className="space-y-3 p-5 bg-rose-50/40 rounded-xl border border-rose-100/50">
              <label className="text-slate-700 block font-medium leading-relaxed">Back-to-back virtual updates and communication notifications drain my energy.</label>
              {renderSlider('burnQ2', formData.burnQ2, 'rose')}
            </div>
          </div>
        </div>

        {/* Work-Life Balance Blocks */}
        <div className="space-y-6">
          <h3 className="text-emerald-500 font-bold uppercase tracking-widest text-[11px] pb-2 border-b border-emerald-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Dimension 3: Work-Life Balance Strength
          </h3>
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-3 p-5 bg-emerald-50/40 rounded-xl border border-emerald-100/50">
              <label className="text-slate-700 block font-medium leading-relaxed">I can consistently maintain healthy boundaries between work and my personal life.</label>
              {renderSlider('wlbQ1', formData.wlbQ1, 'emerald')}
            </div>
            <div className="space-y-3 p-5 bg-emerald-50/40 rounded-xl border border-emerald-100/50">
              <label className="text-slate-700 block font-medium leading-relaxed">Remote work structures increase my personal flexibility and time management.</label>
              {renderSlider('wlbQ2', formData.wlbQ2, 'emerald')}
            </div>
          </div>
        </div>

        {/* Prescriptive Preferences */}
        <div className="space-y-4 pt-6 border-t border-slate-100">
          <label className="text-slate-700 block font-semibold">Which organizational support policy would improve your daily work experience?</label>
          <select value={formData.userPreference} onChange={(e) => handleSelectChange(e.target.value)} className="w-full max-w-lg bg-white border border-slate-300 px-4 py-3.5 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all shadow-sm hover:border-slate-400 cursor-pointer">
            <option value="Fewer meetings">Fewer meetings (Reduced meeting density)</option>
            <option value="No-meeting blocks">No-meeting blocks (Guaranteed deep work windows)</option>
            <option value="Reduced after-hours messages">Reduced after-hours messages (Strict digital separation)</option>
            <option value="Better communication guidelines">Better communication guidelines (Clear async protocol)</option>
          </select>
        </div>

        <div className="pt-4">
          <button type="submit" className="w-full md:w-auto md:min-w-[280px] flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 tracking-wide transform hover:-translate-y-0.5 text-[15px]">
            Analyze My Digital Scorecard <ArrowLeft className="w-4 h-4 rotate-180" />
          </button>
        </div>
      </form>
    </div>
  );
}
