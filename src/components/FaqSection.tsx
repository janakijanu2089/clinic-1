import React, { useState } from 'react';
import { FAQS } from '../data/clinicData';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { FeeWatermark } from './FeeWatermark';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Subtle Transparent Fee Watermark in background */}
      <FeeWatermark opacity={0.025} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-800">
            Guidance & De-Stigmatization
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 mt-2 font-medium">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Clear, transparent answers about psychiatric appointments, medications, confidentiality, and what to expect.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen ? 'border-teal-700/60 bg-teal-50/20 shadow-xs' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left py-4 px-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-slate-900">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-teal-800 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Inquiries Callout */}
        <div className="mt-12 text-center bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <p className="text-sm text-slate-700 font-medium">
            Have a personal or specific clinical query before scheduling?
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Our clinic desk is available to assist you with appointment times, directions, and consultation fees.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.contact.phone}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-teal-800 hover:text-teal-900 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-2xs"
            >
              <PhoneCall className="w-3.5 h-3.5 text-teal-700" />
              <span>Call: {CLINIC_INFO.contact.displayPhone}</span>
            </a>
            <a
              href={CLINIC_INFO.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 hover:text-emerald-900 bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-200"
            >
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
