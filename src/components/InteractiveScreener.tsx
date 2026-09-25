import React, { useState } from 'react';
import { SCREENER_QUESTIONS } from '../data/clinicData';
import { Shield, Sparkles, ArrowRight, RotateCcw, Calendar, CheckCircle } from 'lucide-react';

interface ScreenerProps {
  onOpenBookingWithResult: (scoreNote: string) => void;
}

export const InteractiveScreener: React.FC<ScreenerProps> = ({ onOpenBookingWithResult }) => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelect = (questionId: string, score: number) => {
    const updated = { ...answers, [questionId]: score };
    setAnswers(updated);
    if (Object.keys(updated).length === SCREENER_QUESTIONS.length) {
      setIsCompleted(true);
    }
  };

  const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr, 0);

  const getInterpretation = (score: number) => {
    if (score <= 2) {
      return {
        level: "Minimal / Healthy Range",
        color: "text-emerald-700 bg-emerald-50 border-emerald-200",
        message: "Your responses suggest low psychological distress. Continuing good sleep hygiene, stress buffering, and emotional self-care is recommended.",
        recommendation: "Routine lifestyle maintenance or preventive counseling if dealing with situational life transitions."
      };
    } else if (score <= 5) {
      return {
        level: "Mild Emotional Stress / Anxiety",
        color: "text-amber-700 bg-amber-50 border-amber-200",
        message: "You are experiencing noticeable signs of anxiety or low mood that may begin interfering with everyday focus, sleep, or vitality.",
        recommendation: "An outpatient clinical consultation with Dr. Ragini can help unpack these early patterns before they compound into clinical burnout or depressive episodes."
      };
    } else if (score <= 8) {
      return {
        level: "Moderate Clinical Distress",
        color: "text-orange-700 bg-orange-50 border-orange-200",
        message: "Your responses indicate moderate emotional and cognitive distress. Persistent worry, sadness, or fatigue should not be endured alone.",
        recommendation: "A professional psychiatric assessment is strongly recommended to explore gentle pharmacological and counseling interventions."
      };
    } else {
      return {
        level: "Significant / Elevated Distress",
        color: "text-rose-700 bg-rose-50 border-rose-200",
        message: "You are experiencing high levels of emotional pressure that significantly compromise your well-being, work, and personal relationships.",
        recommendation: "Please schedule an in-person priority consultation at DR.RAJINI MD Hospital & Clinic. Timely psychiatric care provides fast, restorative relief."
      };
    }
  };

  const resetScreener = () => {
    setAnswers({});
    setIsCompleted(false);
  };

  const interpretation = getInterpretation(totalScore);

  return (
    <section id="screener" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-100 mb-3">
            <Shield className="w-3.5 h-3.5 text-teal-700" />
            <span>Confidential & Private Self-Check</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 font-medium">
            2-Minute Emotional Health Screener (PHQ-4)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            A clinically validated 4-question pulse check to evaluate recent symptoms of anxiety and mood distress. Results are purely confidential and processed in your browser.
          </p>
        </div>

        {/* Screener Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
          {SCREENER_QUESTIONS.map((q, idx) => (
            <div key={q.id} className="space-y-3 pb-6 border-b border-slate-100 last:border-0 last:pb-0">
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs font-semibold text-teal-800 bg-teal-50 w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <p className="text-sm sm:text-base font-medium text-slate-800">
                  {q.text}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pl-9">
                {q.options.map((opt) => {
                  const isSelected = answers[q.id] === opt.score;
                  return (
                    <button
                      key={opt.score}
                      onClick={() => handleSelect(q.id, opt.score)}
                      className={`py-2 px-3 text-xs rounded-xl font-medium text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-teal-800 text-white shadow-xs font-semibold'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                      }`}
                    >
                      {opt.text}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Results Reveal */}
          {isCompleted ? (
            <div className="pt-4 space-y-6 animate-in fade-in duration-200">
              <div className={`p-5 rounded-xl border ${interpretation.color}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Assessment Outcome:</span>
                    <span className="font-serif font-bold text-base">{interpretation.level}</span>
                  </div>
                  <span className="font-mono text-xs font-semibold">Score: {totalScore} / 12</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed mb-3">
                  {interpretation.message}
                </p>
                <div className="pt-2 border-t border-black/10 text-xs">
                  <strong className="block font-semibold mb-0.5">Recommended Clinical Next Step:</strong>
                  <span>{interpretation.recommendation}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  onClick={resetScreener}
                  className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Screener</span>
                </button>

                <button
                  onClick={() => onOpenBookingWithResult(`PHQ-4 Screener Score: ${totalScore}/12 (${interpretation.level})`)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-teal-800 hover:bg-teal-900 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation With Dr. Ragini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
              <span>{Object.keys(answers).length} of 4 answered</span>
              <span className="text-teal-700">Answer all questions to see guidance</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
