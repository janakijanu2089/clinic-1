import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { SriGuruLogo } from './SriGuruLogo';

interface NavbarProps {
  onOpenBooking: (prefillLocation?: string) => void;
  onOpenShortcuts: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenShortcuts }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Emergency Notice / Discreet Top Ribbon */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
          <span className="font-medium text-slate-200">Dr. M. Ragini, M.D. (Psychiatry)</span>
          <span className="hidden sm:inline text-slate-500">·</span>
          <span className="hidden sm:inline text-slate-400">10+ Yrs Clinical Experience · Kachiguda & Champapet</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="hidden md:inline text-slate-400">
            Emergency Helpline: <a href="tel:14416" className="text-teal-300 hover:underline">14416 (Tele-MANAS)</a>
          </span>
          <button
            onClick={onOpenShortcuts}
            title="Press '?' for keyboard shortcuts"
            className="hidden lg:flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>Shortcuts</span>
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-800 text-teal-300 rounded border border-slate-700">?</kbd>
          </button>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Wordmark & Official Medical Logo), Zone 2 (4-6 links), Zone 3 (1-2 actions) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Official Logo + Wordmark */}
        <a href="#" className="flex items-center gap-3.5 group focus:outline-none">
          <div className="w-11 h-11 rounded-xl bg-teal-50/80 border border-teal-100/90 flex items-center justify-center p-1 shadow-xs group-hover:shadow-sm group-hover:scale-105 transition-all">
            <SriGuruLogo className="w-9 h-9" />
          </div>
          <div>
            <span className="text-xl font-serif font-bold tracking-tight text-slate-900 block leading-tight">
              DR.RAJINI MD
            </span>
            <span className="text-[11px] font-sans font-medium text-teal-700 tracking-wider uppercase block">
              Psychiatry & Behavioral Health Hospital
            </span>
          </div>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-teal-700 transition-colors">
            About Doctor
          </a>
          <a href="#specialties" className="hover:text-teal-700 transition-colors">
            Specialties
          </a>
          <a href="#locations" className="hover:text-teal-700 transition-colors">
            Locations & Timings
          </a>
          <a href="#screener" className="hover:text-teal-700 transition-colors flex items-center gap-1.5">
            <span>Self-Assessment</span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
          </a>
          <a href="#faqs" className="hover:text-teal-700 transition-colors">
            Patient FAQs
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${CLINIC_INFO.contact.phone}`}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-teal-700 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-teal-600" />
            <span>9980204013</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onOpenBooking()}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-teal-800 rounded-md"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="grid gap-2 text-sm font-medium text-slate-700">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-50 hover:text-teal-700"
            >
              About Dr. M. Ragini
            </a>
            <a
              href="#specialties"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-50 hover:text-teal-700"
            >
              Clinical Specialties
            </a>
            <a
              href="#locations"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-50 hover:text-teal-700"
            >
              Clinic & Hospital Locations
            </a>
            <a
              href="#screener"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-50 hover:text-teal-700 flex items-center justify-between"
            >
              <span>Emotional Health Screener</span>
              <span className="text-[10px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">Quick Test</span>
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-50 hover:text-teal-700"
            >
              Patient Questions & Stigma FAQs
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${CLINIC_INFO.contact.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span>Call Clinic: {CLINIC_INFO.contact.displayPhone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-teal-800 text-white text-xs font-semibold"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Consultation Slot</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
