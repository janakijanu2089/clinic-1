import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/clinicData';
import { ArrowRight, CheckCircle, Clock, Stethoscope, ChevronRight, X } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'mood' | 'anxiety' | 'specialized' | 'lifestyle'>('all');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="specialties" className="py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-800">
              Clinical Psychiatric Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 mt-2 font-medium">
              Specialized Treatments & Therapeutic Disciplines
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Every psychiatric treatment program is tailored to the individual, combining pharmacology, psychotherapy, and lifestyle guidance.
            </p>
          </div>

          {/* Interactive filter tabs - segmented control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/60 rounded-xl text-xs self-start md:self-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Specialties
            </button>
            <button
              onClick={() => setActiveCategory('mood')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeCategory === 'mood'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Mood & Depression
            </button>
            <button
              onClick={() => setActiveCategory('anxiety')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeCategory === 'anxiety'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Anxiety & Panic
            </button>
            <button
              onClick={() => setActiveCategory('specialized')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeCategory === 'specialized'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Women's & Addictions
            </button>
            <button
              onClick={() => setActiveCategory('lifestyle')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeCategory === 'lifestyle'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sleep & Burnout
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const editorialNumber = String(index + 1).padStart(2, '0');
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-teal-300 transition-all shadow-xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-slate-100">
                    <span className="font-mono font-medium text-teal-800">{editorialNumber}.</span>
                    <span className="text-[11px] font-medium text-slate-500 capitalize">{service.category} care</span>
                    {service.badge && (
                      <span className="text-[10px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-medium text-slate-900 group-hover:text-teal-900 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm mt-3 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Highlight Symptoms */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Common Indications:</span>
                    {service.symptoms.slice(0, 3).map((sym, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className="text-teal-600 mt-0.5">·</span>
                        <span className="line-clamp-1">{sym}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedServiceDetail(service)}
                    className="text-xs font-semibold text-teal-800 hover:text-teal-950 flex items-center gap-1 group-hover:underline cursor-pointer"
                  >
                    <span>View Treatment Protocol</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForBooking(service.title)}
                    className="text-xs font-medium px-3 py-1.5 bg-slate-100 hover:bg-teal-800 hover:text-white text-slate-700 rounded-lg transition-colors cursor-pointer"
                  >
                    Book Slot
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Confidentiality Assurance Box */}
        <div className="mt-12 bg-teal-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-serif font-medium text-white">Uncertain which specialty applies to your symptoms?</h4>
            <p className="text-sm text-teal-200 max-w-2xl">
              During your comprehensive first consultation, Dr. Ragini will conduct an exhaustive biopsychosocial assessment to arrive at the exact diagnostic clarity.
            </p>
          </div>
          <button
            onClick={() => onSelectServiceForBooking("General Comprehensive Psychiatric Evaluation")}
            className="px-5 py-3 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-sm cursor-pointer whitespace-nowrap"
          >
            Book General Consultation
          </button>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedServiceDetail && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedServiceDetail(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-lg"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-widest text-teal-800">
              Specialty Overview
            </span>
            <h3 className="text-2xl font-serif text-slate-900 mt-1 mb-3">
              {selectedServiceDetail.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedServiceDetail.fullDesc}
            </p>

            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  Recognized Clinical Signs & Symptoms
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {selectedServiceDetail.symptoms.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-teal-50/50 p-4 rounded-xl border border-teal-100 text-xs text-slate-700">
                <div className="flex items-center gap-2 mb-1 text-teal-900 font-semibold">
                  <Stethoscope className="w-4 h-4 text-teal-700" />
                  <span>Clinical Approach & Plan</span>
                </div>
                <p className="leading-relaxed">{selectedServiceDetail.approach}</p>
                <div className="mt-2 pt-2 border-t border-teal-100 flex items-center gap-2 text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-teal-700" />
                  <span>Consultation Duration: {selectedServiceDetail.duration}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const serviceName = selectedServiceDetail.title;
                  setSelectedServiceDetail(null);
                  onSelectServiceForBooking(serviceName);
                }}
                className="px-5 py-2.5 bg-teal-800 hover:bg-teal-900 text-white rounded-lg text-xs font-semibold shadow-xs"
              >
                Schedule Appointment for this Specialty
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
