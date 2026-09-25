import React from 'react';
import { CLINIC_INFO, LOCATIONS } from '../data/clinicData';
import { Phone, MapPin, Mail, AlertTriangle, ShieldCheck } from 'lucide-react';
import { SriGuruLogo } from './SriGuruLogo';

export const Footer: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Emergency Crisis Ribbon */}
      <div className="bg-rose-950/40 border-b border-rose-900/40 text-rose-200 py-3 px-4 sm:px-8 text-center text-xs">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2">
          <div className="flex items-center gap-1.5 font-semibold">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            <span>Crisis & Emergency Notice:</span>
          </div>
          <span>
            If you or a loved one is experiencing thoughts of self-harm or acute emergency, please call <strong>Tele-MANAS (14416)</strong> or <strong>112</strong> immediately or visit the nearest 24/7 hospital emergency center.
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Doctor Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-1.5 shadow-sm">
                <SriGuruLogo className="w-8 h-8" />
              </div>
              <div>
                <span className="text-base font-serif font-bold text-white block">
                  DR.RAJINI MD
                </span>
                <span className="text-[11px] text-teal-400 font-medium uppercase tracking-wider block">
                  Psychiatry & Behavioral Health Hospital
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Led by <strong>Dr. M. Ragini, M.D. (Psychiatry), M.B.B.S.</strong>, specializing in evidence-based management of mood disorders, anxiety, perinatal mental health, and emotional resilience with over 10 years of clinical dedication.
            </p>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Registered Medical Practitioner · Confidential Patient Care</span>
            </div>
          </div>

          {/* Practice Centers */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-slate-200 font-semibold uppercase tracking-wider text-xs">
              Practice Locations in Hyderabad
            </h4>

            <div className="space-y-3">
              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <span className="font-semibold text-slate-200 block text-xs">
                  DR.RAJINI MD Hospital & Clinic (Kachiguda)
                </span>
                <p className="text-slate-400 text-[11px]">
                  # 3-3-67/6, Behind SVS Hospital Chapal Bazaar, Kachiguda, Chappal Bazar, Hyderabad – 500027, Telangana
                </p>
                <p className="text-slate-400 text-[11px]">
                  Mon–Sat: 10:00 AM – 1:00 PM & 5:30 PM – 8:30 PM · OPD Fee: ₹300/-
                </p>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <span className="font-semibold text-slate-200 block text-xs">
                  DR.RAJINI MD Hospital Center (Champapet)
                </span>
                <p className="text-slate-400 text-[11px]">
                  Champapet, Sagar Ring Road, Hyderabad - 500079
                </p>
                <p className="text-slate-400 text-[11px]">
                  Mon–Sat: 2:00 PM – 4:30 PM (Prior Appointment)
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links & Direct Connect */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-slate-200 font-semibold uppercase tracking-wider text-xs">
              Contact & Direct Line
            </h4>

            <div className="space-y-2 text-xs">
              <a
                href={`tel:${CLINIC_INFO.contact.phone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-teal-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <span>+91 9980204013</span>
              </a>
              <a
                href={CLINIC_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <span>WhatsApp Appointment Desk</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 bg-teal-800 hover:bg-teal-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} DR.RAJINI MD · Dr. M. Ragini, M.D. (Psychiatry). All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span>Hyderabad, Telangana</span>
            <span aria-hidden="true">·</span>
            <span>Kachiguda</span>
            <span aria-hidden="true">·</span>
            <span>Champapet</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
