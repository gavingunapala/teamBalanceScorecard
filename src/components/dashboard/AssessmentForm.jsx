import React from 'react';
import { ClipboardList, ArrowLeft } from 'lucide-react';

export default function AssessmentForm({ formData, handleSliderChange, handleSelectChange, processAssessment }) {
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

      <form onSubmit={processAssessment} className="space-y-8">
        {/* Productivity Blocks */}
        <div className="space-y-5">
          <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-[11px] pb-2 border-b border-indigo-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Dimension 1: Task Productivity
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3 group">
              <label className="text-slate-600 block text-sm font-medium leading-relaxed group-hover:text-slate-800 transition-colors">Remote work tools (Zoom, Slack, Teams) help me complete my work faster.</label>
              <div className="flex items-center gap-4">
                <input type="range" min="1" max="5" value={formData.prodQ1} onChange={(e) => handleSliderChange('prodQ1', e.target.value)} className="w-full accent-indigo-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer hover:bg-slate-300 transition-colors" />
                <span className="font-mono text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg text-sm font-bold w-10 text-center border border-indigo-100 shadow-sm">{formData.prodQ1}</span>
              </div>
            </div>
            <div className="space-y-3 group">
              <label className="text-slate-600 block text-sm font-medium leading-relaxed group-hover:text-slate-800 transition-colors">I feel productive and effective in my current hybrid/remote arrangement.</label>
              <div className="flex items-center gap-4">
                <input type="range" min="1" max="5" value={formData.prodQ2} onChange={(e) => handleSliderChange('prodQ2', e.target.value)} className="w-full accent-indigo-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer hover:bg-slate-300 transition-colors" />
                <span className="font-mono text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg text-sm font-bold w-10 text-center border border-indigo-100 shadow-sm">{formData.prodQ2}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Burnout Strain Blocks */}
        <div className="space-y-5">
          <h3 className="text-rose-500 font-bold uppercase tracking-widest text-[11px] pb-2 border-b border-rose-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-400"></span> Dimension 2: Occupational Burnout Strain
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3 group">
              <label className="text-slate-600 block text-sm font-medium leading-relaxed group-hover:text-slate-800 transition-colors">I feel mentally exhausted and depleted after my daily remote work hours.</label>
              <div className="flex items-center gap-4">
                <input type="range" min="1" max="5" value={formData.burnQ1} onChange={(e) => handleSliderChange('burnQ1', e.target.value)} className="w-full accent-rose-500 h-1.5 bg-slate-200 rounded-lg cursor-pointer hover:bg-slate-300 transition-colors" />
                <span className="font-mono text-rose-700 bg-rose-50 px-3 py-1.5 rounded-lg text-sm font-bold w-10 text-center border border-rose-100 shadow-sm">{formData.burnQ1}</span>
              </div>
            </div>
            <div className="space-y-3 group">
              <label className="text-slate-600 block text-sm font-medium leading-relaxed group-hover:text-slate-800 transition-colors">Back-to-back virtual updates and communication notifications drain my energy.</label>
              <div className="flex items-center gap-4">
                <input type="range" min="1" max="5" value={formData.burnQ2} onChange={(e) => handleSliderChange('burnQ2', e.target.value)} className="w-full accent-rose-500 h-1.5 bg-slate-200 rounded-lg cursor-pointer hover:bg-slate-300 transition-colors" />
                <span className="font-mono text-rose-700 bg-rose-50 px-3 py-1.5 rounded-lg text-sm font-bold w-10 text-center border border-rose-100 shadow-sm">{formData.burnQ2}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Work-Life Balance Blocks */}
        <div className="space-y-5">
          <h3 className="text-emerald-500 font-bold uppercase tracking-widest text-[11px] pb-2 border-b border-emerald-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Dimension 3: Work-Life Balance Strength
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3 group">
              <label className="text-slate-600 block text-sm font-medium leading-relaxed group-hover:text-slate-800 transition-colors">I can consistently maintain healthy boundaries between work and my personal life.</label>
              <div className="flex items-center gap-4">
                <input type="range" min="1" max="5" value={formData.wlbQ1} onChange={(e) => handleSliderChange('wlbQ1', e.target.value)} className="w-full accent-emerald-500 h-1.5 bg-slate-200 rounded-lg cursor-pointer hover:bg-slate-300 transition-colors" />
                <span className="font-mono text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg text-sm font-bold w-10 text-center border border-emerald-100 shadow-sm">{formData.wlbQ1}</span>
              </div>
            </div>
            <div className="space-y-3 group">
              <label className="text-slate-600 block text-sm font-medium leading-relaxed group-hover:text-slate-800 transition-colors">Remote work structures increase my personal flexibility and time management.</label>
              <div className="flex items-center gap-4">
                <input type="range" min="1" max="5" value={formData.wlbQ2} onChange={(e) => handleSliderChange('wlbQ2', e.target.value)} className="w-full accent-emerald-500 h-1.5 bg-slate-200 rounded-lg cursor-pointer hover:bg-slate-300 transition-colors" />
                <span className="font-mono text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg text-sm font-bold w-10 text-center border border-emerald-100 shadow-sm">{formData.wlbQ2}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Prescriptive Preferences */}
        <div className="space-y-3 pt-6 border-t border-slate-100">
          <label className="text-slate-700 block font-bold text-sm">Which organizational support policy would improve your daily work experience?</label>
          <select value={formData.userPreference} onChange={(e) => handleSelectChange(e.target.value)} className="w-full max-w-lg bg-white border border-slate-300 px-4 py-3 rounded-xl text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all shadow-sm hover:border-slate-400 cursor-pointer">
            <option value="Fewer meetings">Fewer meetings (Reduced meeting density)</option>
            <option value="No-meeting blocks">No-meeting blocks (Guaranteed deep work windows)</option>
            <option value="Reduced after-hours messages">Reduced after-hours messages (Strict digital separation)</option>
            <option value="Better communication guidelines">Better communication guidelines (Clear async protocol)</option>
          </select>
        </div>

        <div className="pt-4">
          <button type="submit" className="w-full md:w-auto md:min-w-[280px] flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 text-sm tracking-wide transform hover:-translate-y-0.5">
            Analyze My Digital Scorecard <ArrowLeft className="w-4 h-4 rotate-180" />
          </button>
        </div>
      </form>
    </div>
  );
}
