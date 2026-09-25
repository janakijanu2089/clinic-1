import React from 'react';
import { Award, BookOpen, HeartHandshake, ShieldCheck, CheckCircle2, Hospital } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { DoctorRaginiPortrait } from './DoctorRaginiPortrait';

export const AboutSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-800">
            Consultant Psychiatrist & Behavioral Specialist
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 mt-2 font-medium">
            Meet Dr. M. Ragini, M.D. (Psychiatry)
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Leading <strong>DR.RAJINI MD Hospital & Clinic</strong> across Kachiguda and Champapet, Hyderabad. Over a decade of medical and psychiatric practice dedicated to compassionate, evidence-based healing.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Doctor Photo & Academic Credentials Box */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Doctor Portrait Showcase */}
            <div className="bg-gradient-to-b from-teal-50/60 via-white to-slate-50 rounded-2xl p-4 sm:p-5 border border-teal-200/70 shadow-lg shadow-teal-900/5">
              <div className="aspect-[4/4.4] w-full rounded-xl overflow-hidden border border-slate-200/90 shadow-sm bg-white relative">
                <DoctorRaginiPortrait className="w-full h-full" showBadge={false} alt="Dr. M. Ragini, M.D. (Psychiatry) - Consultant Psychiatrist" />
                <div className="absolute top-3 right-3 bg-teal-900/90 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>M.D. (Psychiatry)</span>
                </div>
              </div>
              <div className="pt-3.5 pb-1 text-center">
                <h3 className="font-serif text-xl font-bold text-slate-900">Dr. M. Ragini</h3>
                <p className="text-xs text-teal-800 font-semibold mt-0.5">M.B.B.S., M.D. (Psychiatry)</p>
                <p className="text-[11px] text-slate-500 mt-1">Consultant Psychiatrist · 10+ Years Clinical Practice</p>
                <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex items-center justify-center gap-3 text-[11px] text-slate-600 font-medium">
                  <span className="text-teal-900 font-semibold">DR.RAJINI MD Hospital</span>
                  <span className="text-slate-300">·</span>
                  <span>Kachiguda & Champapet</span>
                </div>
              </div>
            </div>

            {/* Academic Credentials Box */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
                <BookOpen className="w-5 h-5 text-teal-800" />
                <h3 className="font-serif text-lg text-slate-900 font-semibold">Academic Qualifications</h3>
              </div>

              {CLINIC_INFO.doctor.education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900 text-sm">{edu.degree}</span>
                    <span className="text-teal-800 font-mono font-semibold">{edu.year}</span>
                  </div>
                  <p className="text-xs font-medium text-slate-700">{edu.institution}</p>
                  <p className="text-xs text-slate-500 leading-normal">{edu.detail}</p>
                </div>
              ))}

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-medium text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Medical Council Registered
                </span>
                <span>Active Clinical Practice</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Practice Setup */}
          <div className="lg:col-span-7 space-y-8">
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
              <p>
                Dr. M. Ragini graduated with her <strong>M.B.B.S. in 2005 from Kathmandu University</strong> and subsequently earned her specialization degree, <strong>M.D. in Psychiatry in 2020 from the esteemed Kaloji Narayana Rao University of Health Sciences, Telangana</strong>. Her rigorous medical foundation spans 10+ years across general medicine and specialized psychiatric outpatient and inpatient environments.
              </p>
              <p>
                Practicing under <strong>DR.RAJINI MD Hospital & Clinic</strong> in Kachiguda (Chapal Bazar, beside / behind SVS Hospital) and Champapet, she provides a safe, discreet haven for patients suffering from depression, chronic stress, panic attacks, OCD, insomnia, and perinatal mental health concerns.
              </p>
            </div>

            {/* Three Pillars of Care */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-teal-50/50 border border-teal-100">
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-slate-900 mb-1">Diagnostic Precision</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Screening for physical roots—thyroid imbalance, vitamin deficiencies, and neurology—before formulating treatment.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-teal-50/50 border border-teal-100">
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center mb-3">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-slate-900 mb-1">Empathetic Care</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No hurried 5-minute visits. Every patient receives attentive time to discuss symptoms, fears, and life events.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-teal-50/50 border border-teal-100">
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center mb-3">
                  <Hospital className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-slate-900 mb-1">Dual Continuity</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Seamless comprehensive care across modern consultation suites in Kachiguda and Champapet.
                </p>
              </div>
            </div>

            {/* Quote Banner */}
            <div className="border-l-4 border-teal-700 pl-4 py-2 bg-slate-50/80 rounded-r-xl">
              <blockquote className="text-sm sm:text-base font-serif italic text-slate-800">
                "Seeking psychiatric support is not a sign of surrender. It is an intelligent, courageous medical choice to reclaim your clarity, sleep, and emotional peace."
              </blockquote>
              <p className="text-xs font-semibold text-slate-900 mt-2">— Dr. M. Ragini, M.D. (Psychiatry)</p>
            </div>

            {/* Action Bar */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 bg-teal-800 hover:bg-teal-900 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors cursor-pointer"
              >
                Schedule Consultation with Dr. Ragini
              </button>
              <a
                href="#locations"
                className="text-xs font-semibold text-teal-800 hover:text-teal-900 underline"
              >
                View Clinic & Hospital Timings
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
