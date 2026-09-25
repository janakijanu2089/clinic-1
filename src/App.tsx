/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { LocationsSection } from './components/LocationsSection';
import { InteractiveScreener } from './components/InteractiveScreener';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { HashtagBar } from './components/HashtagBar';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { KeyboardShortcutsModal } from './components/KeyboardShortcutsModal';
import { CLINIC_INFO } from './data/clinicData';
import { Phone, Calendar, Keyboard } from 'lucide-react';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [shortcutsOpen, setShortcutsOpen] = useState(false);
  const [prefillLocation, setPrefillLocation] = useState<string>('sri-guru-clinic');
  const [prefillService, setPrefillService] = useState<string>('');
  const [prefillNote, setPrefillNote] = useState<string>('');

  // Keyboard navigation & "keyboard hidden prompt" shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT')) {
        if (e.key === 'Escape') {
          target.blur();
        }
        return;
      }

      if (e.key === 'Escape') {
        setBookingOpen(false);
        setShortcutsOpen(false);
      } else if (e.key === 'b' || e.key === 'B') {
        e.preventDefault();
        setBookingOpen(true);
      } else if (e.key === 'c' || e.key === 'C') {
        e.preventDefault();
        window.location.href = `tel:${CLINIC_INFO.contact.phone}`;
      } else if (e.key === 'l' || e.key === 'L') {
        e.preventDefault();
        document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        document.getElementById('screener')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === '?') {
        e.preventDefault();
        setShortcutsOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openBooking = (locationId?: string, serviceTitle?: string, note?: string) => {
    if (locationId) setPrefillLocation(locationId);
    if (serviceTitle) setPrefillService(serviceTitle);
    if (note) setPrefillNote(note);
    setBookingOpen(true);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfcff] text-slate-900">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenBooking={() => openBooking()}
        onOpenShortcuts={() => setShortcutsOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => openBooking()}
          onScrollToSection={scrollToSection}
        />

        {/* About Dr. M. Ragini & Credentials */}
        <AboutSection onOpenBooking={() => openBooking()} />

        {/* Clinical Specialties & Treatment Protocols */}
        <ServicesSection
          onSelectServiceForBooking={(serviceTitle) => {
            openBooking(undefined, serviceTitle);
          }}
        />

        {/* Practice Locations: DR.RAJINI MD (Kachiguda & Champapet) */}
        <LocationsSection
          onSelectLocationForBooking={(locationId) => {
            openBooking(locationId);
          }}
        />

        {/* Validated Emotional Wellness & Mood Screener (PHQ-4) */}
        <InteractiveScreener
          onOpenBookingWithResult={(scoreNote) => {
            openBooking(undefined, undefined, scoreNote);
          }}
        />

        {/* Patient Recoveries & Testimonials */}
        <TestimonialsSection />

        {/* FAQs & Destigmatization */}
        <FaqSection />

        {/* Community Awareness & Hashtags (#DrRaginiMD, #DrRajiniMDHospital, etc.) */}
        <HashtagBar />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => openBooking()} />

      {/* Interactive Appointment Booking Scheduler Modal */}
      <AppointmentModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialLocationId={prefillLocation}
        initialServiceTitle={prefillService}
        initialNote={prefillNote}
      />

      {/* Keyboard Navigation Shortcuts Modal ("keyboard hidden prompt") */}
      <KeyboardShortcutsModal
        isOpen={shortcutsOpen}
        onClose={() => setShortcutsOpen(false)}
      />

      {/* Floating Quick Action & Shortcut Indicator (Sticky cap <= 15%) */}
      <aside aria-label="Quick Actions" className="fixed bottom-4 right-4 z-30 flex items-center gap-2 no-print">
        <button
          onClick={() => setShortcutsOpen(true)}
          title="Press '?' on keyboard for quick navigation shortcuts"
          className="hidden md:flex items-center gap-1.5 px-3 py-2 bg-slate-900/90 hover:bg-slate-900 text-slate-200 hover:text-white rounded-full text-xs font-medium shadow-md backdrop-blur-xs border border-slate-700 transition-all cursor-pointer"
        >
          <Keyboard className="w-3.5 h-3.5 text-teal-300" />
          <span>Shortcuts</span>
          <kbd className="px-1 py-0.2 text-[10px] font-mono bg-slate-800 text-teal-300 rounded border border-slate-700">?</kbd>
        </button>

        <a
          href={`tel:${CLINIC_INFO.contact.phone}`}
          className="flex sm:hidden items-center justify-center w-11 h-11 bg-teal-800 text-white rounded-full shadow-lg hover:bg-teal-900 transition-all"
          aria-label="Call clinic directly"
        >
          <Phone className="w-4 h-4" />
        </a>

        <button
          onClick={() => openBooking()}
          className="flex items-center gap-2 px-4 py-2.5 bg-teal-800 hover:bg-teal-900 text-white text-xs font-semibold rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Consult</span>
        </button>
      </aside>
    </div>
  );
}
