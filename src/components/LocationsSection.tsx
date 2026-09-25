import React, { useState } from 'react';
import { LOCATIONS, PracticeLocation, CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { FeeWatermark } from './FeeWatermark';

interface LocationsProps {
  onSelectLocationForBooking: (locationId: string) => void;
}

export const LocationsSection: React.FC<LocationsProps> = ({ onSelectLocationForBooking }) => {
  const [selectedLocation, setSelectedLocation] = useState<PracticeLocation>(LOCATIONS[0]);

  return (
    <section id="locations" className="py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Subtle Transparent Fee Watermark in background */}
      <FeeWatermark opacity={0.025} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-800">
              Practice Centers & Consultation Hours
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 mt-2 font-medium">
              Two Accessible Practice Locations in Hyderabad
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Dr. M. Ragini conducts scheduled outpatient clinics and consultations across DR.RAJINI MD centers in Kachiguda and Champapet.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 self-start md:self-auto shadow-2xs">
            <span className="font-semibold text-slate-900">Consultation Fee:</span>
            <span className="font-mono font-bold text-teal-800 text-sm">₹300/-</span>
            <span className="text-slate-400">· Transparent & Nominal</span>
          </div>
        </div>

        {/* Dual Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {LOCATIONS.map((loc) => {
            const isPrimary = loc.id === 'kachiguda-center';
            return (
              <div
                key={loc.id}
                className={`rounded-2xl p-6 sm:p-8 border transition-all flex flex-col justify-between ${
                  selectedLocation.id === loc.id
                    ? 'border-teal-700 bg-teal-50/20 shadow-md ring-1 ring-teal-700/30'
                    : 'border-slate-200 bg-white hover:border-slate-300 shadow-xs'
                }`}
                onClick={() => setSelectedLocation(loc)}
              >
                <div>
                  {/* Top Badge & Indicator */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-5">
                    <span className="text-xs font-semibold text-teal-800">
                      {loc.badge}
                    </span>
                    {isPrimary && (
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/50">
                        Primary Mental Health Center
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-serif font-medium text-slate-900 mb-2">
                    {loc.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    {loc.tagline}
                  </p>

                  {/* Address & Landmark */}
                  <div className="space-y-4 text-xs text-slate-700 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">{loc.address}</p>
                        <p className="text-slate-500 mt-0.5">
                          Landmark: <span className="text-teal-800 font-medium">{loc.landmark}</span>, {loc.city} – {loc.pincode}
                        </p>
                      </div>
                    </div>

                    {/* Timings */}
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">{loc.timings.days}</p>
                        {loc.timings.morning && (
                          <p className="text-slate-600 mt-0.5">Morning OPD: <strong className="text-slate-800">{loc.timings.morning}</strong></p>
                        )}
                        {loc.timings.evening && (
                          <p className="text-slate-600 mt-0.5">Evening OPD: <strong className="text-slate-800">{loc.timings.evening}</strong></p>
                        )}
                        {loc.timings.note && (
                          <p className="text-slate-400 italic text-[11px] mt-1">{loc.timings.note}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-teal-700 shrink-0" />
                      <div>
                        <a href={`tel:${loc.phone}`} className="font-semibold text-slate-900 hover:text-teal-700">
                          {loc.phone}
                        </a>
                        <span className="text-slate-500 ml-2">Direct Appointment Line</span>
                      </div>
                    </div>
                  </div>

                  {/* Facilities list */}
                  <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-100 mb-6">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                      Center Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {loc.facilities.map((fac, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span>{fac}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onSelectLocationForBooking(loc.id)}
                    className="flex-1 py-2.5 px-4 bg-teal-800 hover:bg-teal-900 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Select for Booking</span>
                  </button>

                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 border border-slate-200 hover:border-slate-300 bg-white text-slate-700 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5 text-teal-700" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Landmark & Navigation Helper Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 border border-teal-500/30">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-serif font-medium text-white">How to reach DR.RAJINI MD Hospital & Clinic, Kachiguda</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Located at <strong># 3-3-67/6, DR.RAJINI MD Hospital, Behind SVS Hospital, Chapal Bazaar, Kachiguda, Chappal Bazar, Hyderabad – 500027, Telangana</strong>. Landmark is immediately behind SVS Hospital. Just 5 minutes from Kachiguda Railway Station and easily accessible via Sultan Bazar, Narayanaguda, and Nimboliadda.
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=3-3-67/6+DR.RAJINI+MD+Behind+SVS+Hospital+Chapal+Bazaar+Kachiguda+Hyderabad+500027"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs whitespace-nowrap transition-colors"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
