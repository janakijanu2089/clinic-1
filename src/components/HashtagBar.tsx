import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Hash, Copy, Check, Share2 } from 'lucide-react';

export const HashtagBar: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const hashtagString = CLINIC_INFO.hashtags.join(' ');

  const handleCopy = () => {
    navigator.clipboard.writeText(hashtagString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-teal-400 text-xs font-semibold tracking-wider uppercase">
              <Hash className="w-3.5 h-3.5" />
              <span>Community Awareness & Connect</span>
            </div>
            <h3 className="text-xl font-serif text-white font-medium">
              Join the Conversation for Compassionate Mental Healthcare
            </h3>
            <p className="text-xs text-slate-400 max-w-xl">
              Help reduce mental health stigma in Hyderabad. Share and recommend verified clinical psychiatric care.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-teal-300 rounded-xl text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Hashtags'}</span>
            </button>

            <a
              href={`https://wa.me/?text=${encodeURIComponent('Consult Dr. M. Ragini, MD (Psychiatry) at DR.RAJINI MD Hospital & Clinic (Kachiguda & Champapet). Ph: 9980204013. ' + hashtagString)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-teal-800 hover:bg-teal-700 text-white rounded-xl text-xs font-semibold transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Clinic Profile</span>
            </a>
          </div>
        </div>

        {/* Unboxed tags */}
        <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-xs text-slate-400 font-mono">
          {CLINIC_INFO.hashtags.map((tag, idx) => (
            <span key={idx} className="hover:text-teal-300 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
