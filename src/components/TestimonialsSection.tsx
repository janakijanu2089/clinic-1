import React from 'react';
import { TESTIMONIALS } from '../data/clinicData';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-800">
            Patient Stories & Clinical Recoveries
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 mt-2 font-medium">
            Compassionate Care That Restores Quality of Life
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Real experiences from individuals and families treated by Dr. M. Ragini at DR.RAJINI MD Hospital & Clinic centers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Rating & Concern */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-semibold text-slate-700 ml-1.5">5.0</span>
                  </div>
                  <span className="text-[11px] font-medium text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded">
                    {t.concern}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs mt-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-teal-800 text-white font-semibold flex items-center justify-center text-xs">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{t.patientName}</h4>
                    <p className="text-slate-500">{t.location}</p>
                  </div>
                </div>

                <div className="text-right text-slate-500">
                  <span className="block text-[11px] font-medium text-emerald-700 flex items-center gap-1 justify-end">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Consultation
                  </span>
                  <span className="text-[11px]">{t.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 py-6 px-6 bg-white rounded-2xl border border-slate-200 flex flex-wrap items-center justify-around gap-6 text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
            <span className="font-semibold text-slate-900">10+ Years</span>
            <span className="text-slate-500">Dedicated Practice</span>
          </div>
          <div className="hidden sm:block text-slate-300">|</div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
            <span className="font-semibold text-slate-900">100% Confidential</span>
            <span className="text-slate-500">Private Records</span>
          </div>
          <div className="hidden sm:block text-slate-300">|</div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
            <span className="font-semibold text-slate-900">Conservative Pharmacology</span>
            <span className="text-slate-500">Safe, Tapered Plans</span>
          </div>
          <div className="hidden sm:block text-slate-300">|</div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
            <span className="font-semibold text-slate-900">Kachiguda & Champapet</span>
            <span className="text-slate-500">Dual Access</span>
          </div>
        </div>
      </div>
    </section>
  );
};
