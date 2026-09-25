import React from 'react';
import { SriGuruLogo } from './SriGuruLogo';
import { DoctorRaginiPortrait } from './DoctorRaginiPortrait';

export const DoctorBadgeGraphic: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white p-6 md:p-8 shadow-xl border border-teal-800/40 ${className}`}>
      {/* Decorative ambient elements */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Grid subtle pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="medical-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#medical-grid)" />
      </svg>

      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Top Header Badge */}
        <div className="flex items-center justify-between pb-5 border-b border-teal-800/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xs border border-teal-400/30 flex items-center justify-center p-1.5 shadow-inner">
              <SriGuruLogo className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-teal-300 font-medium">Licensed Psychiatrist</p>
              <p className="text-xs text-slate-400">Reg: Kaloji Narayana Rao Univ.</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-teal-500/20 text-teal-300 border border-teal-400/30">
              10+ Yrs Exp
            </span>
          </div>
        </div>

        {/* Center Doctor Identity Portrait Showcase */}
        <div className="my-5 flex flex-col items-center text-center">
          <div className="relative mb-3.5 w-52 sm:w-60 aspect-[4/4.4] rounded-2xl overflow-hidden shadow-2xl border-2 border-teal-400/50 bg-slate-900 group">
            <DoctorRaginiPortrait className="w-full h-full" showBadge={false} />
            {/* Verified seal */}
            <div className="absolute top-2.5 right-2.5 bg-teal-500 text-slate-950 px-2 py-0.5 rounded-full shadow-lg border border-slate-900 flex items-center gap-1 text-[10px] font-bold">
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Verified MD</span>
            </div>
          </div>

          <h3 className="text-2xl font-serif text-white font-medium">Dr. M. Ragini</h3>
          <p className="text-teal-300 font-medium text-sm mt-0.5">M.B.B.S. · M.D. (Psychiatry)</p>
          <p className="text-xs text-slate-300 mt-1 max-w-xs">
            Consultant Psychiatrist · DR.RAJINI MD Hospital & Clinic
          </p>
        </div>

        {/* Bottom Credential Chips */}
        <div className="pt-4 border-t border-teal-800/40 grid grid-cols-2 gap-3 text-xs">
          <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/50">
            <span className="text-slate-400 block text-[11px]">Kachiguda Center</span>
            <span className="font-medium text-slate-200 block truncate">DR.RAJINI MD Hospital</span>
          </div>
          <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/50">
            <span className="text-slate-400 block text-[11px]">Champapet Center</span>
            <span className="font-medium text-slate-200 block truncate">DR.RAJINI MD Center</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ConsultationRoomVisual: React.FC<{ className?: string }> = ({ className = "w-full h-64" }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-900 via-slate-850 to-slate-900 p-6 flex flex-col justify-between border border-teal-700/30 ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.15),transparent_60%)]" />
      
      {/* Clinic Scene Illustration */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <span className="text-xs text-teal-400 uppercase tracking-wider font-semibold">Private & Confidential</span>
          <h4 className="text-lg font-serif text-white mt-1">Serene Consultation Sanctuary</h4>
        </div>
        <div className="w-9 h-9 rounded-lg bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
      </div>

      {/* Architectural Consultation Illustration */}
      <div className="relative z-10 my-4 flex items-center justify-center py-4">
        <svg className="w-full max-w-sm h-32 text-teal-300" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Floor base line */}
          <line x1="20" y1="105" x2="300" y2="105" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
          
          {/* Doctor Chair */}
          <path d="M 60 105 L 60 70 Q 60 50 80 50 L 95 50 Q 105 50 105 70 L 105 105" stroke="currentColor" strokeWidth="2" fill="rgba(45,212,191,0.1)" />
          <path d="M 70 50 L 70 30 Q 70 20 85 20 Q 100 20 100 30 L 100 50" stroke="currentColor" strokeWidth="2" fill="rgba(45,212,191,0.2)" />
          
          {/* Consultation Table & Plant */}
          <rect x="130" y="70" width="60" height="35" rx="3" stroke="currentColor" strokeWidth="1.8" fill="rgba(255,255,255,0.05)" />
          {/* Tabletop small plant */}
          <path d="M 155 70 Q 160 55 160 50 Q 165 58 165 70" stroke="#34d399" strokeWidth="1.5" />
          <path d="M 160 55 Q 150 48 152 42 Q 158 48 160 52" stroke="#34d399" strokeWidth="1.2" />
          <path d="M 160 55 Q 170 48 168 42 Q 162 48 160 52" stroke="#34d399" strokeWidth="1.2" />

          {/* Patient Armchair */}
          <path d="M 215 105 L 215 70 Q 215 50 235 50 L 250 50 Q 260 50 260 70 L 260 105" stroke="currentColor" strokeWidth="2" fill="rgba(45,212,191,0.1)" />
          <path d="M 225 50 L 225 30 Q 225 20 240 20 Q 255 20 255 30 L 255 50" stroke="currentColor" strokeWidth="2" fill="rgba(45,212,191,0.2)" />

          {/* Calming Sunbeam / window indicator */}
          <line x1="280" y1="15" x2="250" y2="45" stroke="rgba(253,224,71,0.3)" strokeWidth="2" />
          <line x1="295" y1="25" x2="265" y2="55" stroke="rgba(253,224,71,0.2)" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 flex items-center justify-between text-xs text-slate-300 pt-3 border-t border-teal-800/40">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Sound-damped private suites
        </span>
        <span className="text-slate-400">Sai Nanditha Enclave</span>
      </div>
    </div>
  );
};
