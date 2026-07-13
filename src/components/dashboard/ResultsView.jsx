import React from 'react';
import { ArrowLeft, UserCheck, RefreshCw, Activity, ShieldAlert, ClipboardList, Sparkles, CheckCircle } from 'lucide-react';
import ScoreCard from '../ui/ScoreCard';
import RecommendationItem from '../ui/RecommendationItem';

export default function ResultsView({ evaluation, recommendations, resetAssessment }) {
  const getStatusColor = (status) => {
    if (status === 'RED') return 'bg-red-50 border-red-200 text-red-700';
    if (status === 'AMBER') return 'bg-amber-50 border-amber-200 text-amber-700';
    return 'bg-emerald-50 border-emerald-200 text-emerald-700';
  };

  return (
    <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Return Utility Navigation */}
      <div className="flex items-center justify-between bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-sm">
        <button onClick={resetAssessment} className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors font-semibold group">
          <div className="p-1.5 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors"><ArrowLeft className="w-4 h-4" /></div> Retake Assessment
        </button>
        <div className="flex items-center gap-2 text-sm text-slate-500 font-mono bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
          <UserCheck className="w-4 h-4 text-emerald-500" /> Participant_01
        </div>
      </div>

      {/* Main Calculated 3-Dimension Score Matrix */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <ScoreCard 
          title="Productivity Score" 
          score={evaluation.productivityScore} 
          status={evaluation.productivityStatus} 
          statusColor={getStatusColor(evaluation.productivityStatus)}
          icon={Activity}
        />
        <ScoreCard 
          title="Burnout Strain" 
          score={evaluation.burnoutScore} 
          status={evaluation.burnoutStatus} 
          statusColor={getStatusColor(evaluation.burnoutStatus)}
          icon={ShieldAlert}
        />
        <ScoreCard 
          title="Boundary Strength" 
          score={evaluation.wlbScore} 
          status={evaluation.wlbStatus} 
          statusColor={getStatusColor(evaluation.wlbStatus)}
          icon={ClipboardList}
        />
      </section>

      {/* Prescriptive Remedial Interventions Output Panel */}
      <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
          <div className="p-2 bg-amber-50 rounded-xl">
            <Sparkles className="w-5 h-5 text-amber-500" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">Your Customized Prescriptive Recommendations</h3>
        </div>

        <div className="space-y-4">
          {recommendations.length > 0 ? (
            recommendations.map((rec) => (
              <RecommendationItem key={rec.id} rec={rec} />
            ))
          ) : (
            <div className="py-12 px-6 text-center text-slate-500 border-2 border-dashed border-emerald-200 bg-emerald-50/30 rounded-3xl flex flex-col items-center gap-4">
              <div className="p-4 bg-emerald-100 rounded-full">
                <CheckCircle className="w-10 h-10 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-emerald-800 mb-1">Optimal Technical Balance Attained</h4>
                <p className="text-sm text-emerald-600 max-w-md mx-auto leading-relaxed">Your interactive values sit fully within healthy parameters. No indicators of severe technology over-saturation or burnout strain were captured.</p>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <div className="text-center pt-4 pb-10">
        <button onClick={resetAssessment} className="inline-flex items-center gap-2 text-sm bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 px-6 py-3 rounded-xl transition-all font-bold shadow-sm hover:shadow-md">
          <RefreshCw className="w-4 h-4" /> Start New Session
        </button>
      </div>
    </div>
  );
}
