import React from 'react';
import { Calendar, Phone, MapPin, Award, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { DoctorRaginiPortrait } from './DoctorRaginiPortrait';
import { SriGuruLogo } from './SriGuruLogo';
import { FeeWatermark, FeeBadgeHighlight } from './FeeWatermark';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToSection }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/20 to-white pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
      {/* Unique Transparent Fee Watermark in the background - ultra subtle, zero text disruption */}
      <FeeWatermark opacity={0.03} />

      {/* Background architectural aura */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top row: Trust Kicker & Affordable Consultation Fee Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-teal-800 tracking-wide">
                <span>DR.RAJINI MD · Kachiguda</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>DR.RAJINI MD · Champapet</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>Hyderabad</span>
              </div>
              <FeeBadgeHighlight />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 tracking-tight leading-[1.12]">
              Evidence-based, compassionate <span className="italic font-normal text-teal-800">psychiatric care</span> in Hyderabad.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Led by <strong className="text-slate-900 font-semibold">Dr. M. Ragini, M.D. (Psychiatry)</strong>, bringing over 10 years of clinical expertise to address depression, severe anxiety, women's emotional wellness, insomnia, and psychiatric rehabilitation in a discreet, non-judgmental environment.
            </p>

            {/* Credential Metrics - unboxed with separators */}
            <div className="pt-2 pb-1 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-600 border-y border-slate-200/70 py-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-teal-700" />
                <span className="font-semibold text-slate-800">M.D. Psychiatry</span>
                <span className="text-slate-500">(Kaloji Narayana Rao Univ.)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-700" />
                <span className="font-semibold text-slate-800">10+ Years</span>
                <span className="text-slate-500">Clinical Excellence</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-700" />
                <span className="font-semibold text-slate-800">Kachiguda & Champapet</span>
              </div>
            </div>

            {/* Action Zone */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                <span>Book In-Person / Video Consultation</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.contact.phone}`}
                className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 shadow-sm transition-all whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call: {CLINIC_INFO.contact.displayPhone}</span>
              </a>

              <a
                href={CLINIC_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-emerald-800 bg-emerald-50/80 hover:bg-emerald-100 rounded-xl border border-emerald-200/60 transition-all whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Query</span>
              </a>
            </div>

            {/* Quick Helper Note */}
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Direct OPD appointments active today · Complete patient confidentiality guaranteed</span>
            </div>
          </div>

          {/* Right Column: Prominent Doctor Portrait & Clinical Credentials */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Doctor Showcase Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-teal-200/90 shadow-xl shadow-teal-950/5 relative overflow-hidden">
              {/* Doctor Photo Frame */}
              <div className="aspect-[4/4.5] w-full rounded-xl overflow-hidden border border-slate-200 shadow-sm relative group bg-slate-50">
                <DoctorRaginiPortrait className="w-full h-full" showBadge={false} alt="Dr. M. Ragini, M.D. (Psychiatry)" />
                
                {/* Status Badges */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-teal-200 shadow-xs flex items-center gap-1.5 text-[11px] font-semibold text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>OPD Active Today</span>
                </div>
                
                <div className="absolute top-3 right-3 bg-teal-800 text-white px-2.5 py-1 rounded-lg shadow-xs text-[11px] font-bold tracking-wide">
                  Fee: ₹300/-
                </div>
              </div>

              {/* Doctor Details Bar */}
              <div className="mt-3.5 pt-1 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 leading-tight">
                    Dr. M. Ragini
                  </h3>
                  <p className="text-xs font-semibold text-teal-800 mt-0.5">
                    M.B.B.S., M.D. (Psychiatry) · 10+ Yrs Exp
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Consultant Psychiatrist · Kachiguda & Champapet
                  </p>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2.5 bg-teal-800 hover:bg-teal-900 text-white rounded-xl text-xs font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer whitespace-nowrap"
                >
                  Book Slot
                </button>
              </div>
            </div>

            {/* Clinic Location Quick Card */}
            <div className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-2xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center text-teal-800 flex-shrink-0">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">DR.RAJINI MD Hospital & Clinic</h4>
                  <p className="text-[11px] text-slate-500 truncate max-w-[220px] sm:max-w-xs">
                    # 3-3-67/6, Behind SVS Hospital, Chapal Bazaar, Kachiguda
                  </p>
                </div>
              </div>

              <button
                onClick={() => onScrollToSection('locations')}
                className="text-xs font-semibold text-teal-800 hover:text-teal-900 flex items-center gap-1 group whitespace-nowrap ml-2"
              >
                <span>Map</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
