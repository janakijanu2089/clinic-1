import React from 'react';
import { DOCTOR_IMAGE_DATA_URI } from '../data/doctorImage';

interface DoctorPhotoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBadge?: boolean;
  alt?: string;
}

/**
 * Official high-resolution clinical portrait of Dr. M. Ragini, M.D. (Psychiatry).
 * Displaying the exact clinical photo provided by the clinic:
 * - Dr. M. Ragini in white medical coat with stethoscope and 'Dr. Ragini' embroidery
 * - Self-contained high-fidelity image data URI ensuring instantaneous, 100% reliable rendering
 */
export const DoctorRaginiPortrait: React.FC<DoctorPhotoProps> = ({
  className = "",
  showBadge = true,
  alt = "Dr. M. Ragini, M.D. (Psychiatry) - DR.RAJINI MD Hospital"
}) => {
  return (
    <div className={`relative w-full h-full overflow-hidden select-none bg-slate-50 group ${className}`}>
      <img
        src={DOCTOR_IMAGE_DATA_URI}
        alt={alt}
        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        loading="eager"
      />

      {/* Optional Floating High-Trust Doctor Badge */}
      {showBadge && (
        <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-teal-200/90 shadow-lg flex items-center justify-between z-10 pointer-events-none">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <div>
              <span className="font-serif text-xs font-bold text-slate-900 block leading-tight">
                Dr. M. Ragini
              </span>
              <span className="text-[10px] text-teal-800 font-semibold block">
                M.D. (Psychiatry) · Consultant
              </span>
            </div>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-teal-50 text-teal-800 border border-teal-200/80">
            10+ Yrs Exp
          </span>
        </div>
      )}
    </div>
  );
};
