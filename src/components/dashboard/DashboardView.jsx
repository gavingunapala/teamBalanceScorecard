import React, { useState } from 'react';
import { evaluateIndividualStatus, generatePersonalRecommendations } from '../../utils/individualEngine';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import AssessmentForm from './AssessmentForm';
import ResultsView from './ResultsView';

export default function DashboardView() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    prodQ1: 3, prodQ2: 3,
    burnQ1: 3, burnQ2: 3,
    wlbQ1: 3, wlbQ2: 3,
    userPreference: "Fewer meetings"
  });

  const [evaluation, setEvaluation] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const handleSliderChange = (key, val) => {
    setFormData(prev => ({ ...prev, [key]: parseInt(val) }));
  };

  const handleSelectChange = (val) => {
    setFormData(prev => ({ ...prev, userPreference: val }));
  };

  const processAssessment = (e) => {
    e.preventDefault();
    const evaluatedData = evaluateIndividualStatus(formData);
    const generatedRecs = generatePersonalRecommendations(evaluatedData, formData.userPreference);
    
    setEvaluation(evaluatedData);
    setRecommendations(generatedRecs);
    setFormSubmitted(true);
  };

  const resetAssessment = () => {
    setFormData({ prodQ1: 3, prodQ2: 3, burnQ1: 3, burnQ2: 3, wlbQ1: 3, wlbQ2: 3, userPreference: "Fewer meetings" });
    setEvaluation(null);
    setRecommendations([]);
    setFormSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-4 md:p-8 flex flex-col justify-between font-sans selection:bg-indigo-100 selection:text-indigo-900 transition-colors duration-500">
      
      <Header formSubmitted={formSubmitted} />

      {/* Primary Layout Engine */}
      <main className="max-w-4xl w-full mx-auto flex-grow flex items-center justify-center">
        {!formSubmitted ? (
          <AssessmentForm 
            formData={formData}
            handleSliderChange={handleSliderChange}
            handleSelectChange={handleSelectChange}
            processAssessment={processAssessment}
          />
        ) : (
          <ResultsView 
            evaluation={evaluation}
            recommendations={recommendations}
            resetAssessment={resetAssessment}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
