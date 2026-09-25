import React from 'react';

interface FeeWatermarkProps {
  className?: string;
  opacity?: number;
}

/**
 * Transparent ambient typographic watermark of the official consultation fee notice:
 * "CONSULTATION FEES RS. 300/-"
 * Enhanced visibility with clear outlined letters, soft teal/slate tinting,
 * repeating watermark pattern, and elegant background presence that remains legible
 * without interfering with foreground text or actions.
 */
export const FeeWatermark: React.FC<FeeWatermarkProps> = ({ className = "absolute inset-0", opacity = 0.08 }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none overflow-hidden flex items-center justify-center ${className}`}
      style={{ opacity }}
    >
      <div className="transform -rotate-6 scale-105 sm:scale-115 text-center tracking-tight leading-none max-w-5xl px-4">
        {/* Outlined / highlighted dual text */}
        <span
          className="block font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase font-sans tracking-widest text-teal-950"
          style={{
            letterSpacing: '0.08em',
            textShadow: '0 2px 20px rgba(13, 148, 136, 0.15)'
          }}
        >
          CONSULTATION FEES
        </span>
        <span
          className="block font-black text-7xl sm:text-9xl md:text-[10rem] lg:text-[12rem] text-teal-900 tracking-tighter mt-1 font-sans"
          style={{
            textShadow: '0 4px 24px rgba(15, 118, 110, 0.2)'
          }}
        >
          RS. 300/-
        </span>
      </div>
    </div>
  );
};

export const FeeBadgeHighlight: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/90 shadow-2xs ${className}`}>
      <span className="flex h-2 w-2 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
      </span>
      <span className="text-[11px] font-semibold text-teal-900 tracking-wide uppercase">
        Transparent Care
      </span>
      <span className="text-slate-300">|</span>
      <span className="text-xs font-bold text-slate-900">
        OPD Consultation Fee: <span className="text-teal-800 font-extrabold text-sm font-mono">₹300/-</span>
      </span>
      <span className="text-[10px] text-teal-700 font-medium hidden sm:inline">
        (No hidden charges)
      </span>
    </div>
  );
};
