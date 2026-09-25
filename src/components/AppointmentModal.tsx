import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, Phone, Download, Printer, MessageCircle, AlertCircle } from 'lucide-react';
import { LOCATIONS, SERVICES, CLINIC_INFO } from '../data/clinicData';
import { SriGuruLogo } from './SriGuruLogo';
import { DoctorRaginiPortrait } from './DoctorRaginiPortrait';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialLocationId?: string;
  initialServiceTitle?: string;
  initialNote?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialLocationId = 'kachiguda-center',
  initialServiceTitle = '',
  initialNote = ''
}) => {
  const [selectedLocation, setSelectedLocation] = useState(initialLocationId);
  const [selectedService, setSelectedService] = useState(initialServiceTitle || SERVICES[0].title);
  const [selectedDate, setSelectedDate] = useState(() => {
    // Tomorrow as default
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('11:00 AM');
  const [consultType, setConsultType] = useState<'in-person' | 'video'>('in-person');

  // Patient Info
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Prefer not to say');
  const [symptomsNote, setSymptomsNote] = useState(initialNote);

  // Flow State
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [bookingRef, setBookingRef] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialLocationId) setSelectedLocation(initialLocationId);
    if (initialServiceTitle) setSelectedService(initialServiceTitle);
    if (initialNote) setSymptomsNote(initialNote);
  }, [initialLocationId, initialServiceTitle, initialNote, isOpen]);

  if (!isOpen) return null;

  // Available slots based on location
  const slots = selectedLocation === 'sunridge-hospital'
    ? ['02:15 PM', '03:00 PM', '03:45 PM', '04:15 PM']
    : ['10:30 AM', '11:15 AM', '12:00 PM', '12:45 PM', '05:45 PM', '06:30 PM', '07:15 PM', '08:00 PM'];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!patientName.trim()) errs.patientName = 'Please enter patient name';
    if (!phone.trim()) {
      errs.phone = 'Please enter a 10-digit phone number';
    } else if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit Indian mobile number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate reference code
    const randomCode = 'SGC-' + Math.floor(1000 + Math.random() * 9000);
    setBookingRef(randomCode);
    setStep('confirmed');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadIcs = () => {
    const locationObj = LOCATIONS.find(l => l.id === selectedLocation);
    const locationName = consultType === 'video' ? 'Secure Teleconsultation (Video Link will be sent)' : (locationObj ? `${locationObj.name}, ${locationObj.address}` : 'DR.RAJINI MD');

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//DR.RAJINI MD//Dr M Ragini Appointment//EN
BEGIN:VEVENT
SUMMARY:Psychiatric Consultation - Dr. M. Ragini (${bookingRef})
DESCRIPTION:Consultation with Dr. M. Ragini MD (Psychiatry) for ${selectedService}. Patient: ${patientName}.
LOCATION:${locationName}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Dr_Ragini_Appointment_${bookingRef}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const activeLocation = LOCATIONS.find(l => l.id === selectedLocation) || LOCATIONS[0];

  const whatsappConfirmationText = `Hello DR.RAJINI MD Hospital & Clinic desk, I have scheduled an appointment:%0A%0A` +
    `Ref ID: ${bookingRef}%0A` +
    `Patient: ${patientName}%0A` +
    `Phone: ${phone}%0A` +
    `Location: ${consultType === 'video' ? 'Online Video Consultation' : activeLocation.name}%0A` +
    `Date: ${selectedDate}%0A` +
    `Time: ${selectedTimeSlot}%0A` +
    `Specialty: ${selectedService}%0A` +
    (symptomsNote ? `Note: ${encodeURIComponent(symptomsNote)}` : '');

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative my-8 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50 rounded-t-2xl no-print">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-teal-600 shadow-xs flex-shrink-0 bg-white">
              <DoctorRaginiPortrait className="w-full h-full" showBadge={false} />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
                Direct Clinical Scheduler
              </span>
              <h3 className="text-xl font-serif font-semibold text-slate-900 mt-0.5">
                Book Consultation with Dr. M. Ragini, M.D.
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Consultation Mode Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Select Consultation Mode & Location
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setConsultType('in-person');
                    setSelectedLocation('kachiguda-center');
                  }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    consultType === 'in-person' && selectedLocation === 'kachiguda-center'
                      ? 'border-teal-700 bg-teal-50/40 ring-1 ring-teal-700'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xs font-bold block text-slate-900">DR.RAJINI MD (Kachiguda)</span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">Behind SVS Hospital, Chapal Bazaar</span>
                  <span className="text-[10px] text-teal-700 font-medium block mt-1">Morning & Evening OPD · ₹300</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setConsultType('in-person');
                    setSelectedLocation('champapet-center');
                  }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    consultType === 'in-person' && selectedLocation === 'champapet-center'
                      ? 'border-teal-700 bg-teal-50/40 ring-1 ring-teal-700'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xs font-bold block text-slate-900">DR.RAJINI MD (Champapet)</span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">Champapet, Sagar Ring Rd</span>
                  <span className="text-[10px] text-teal-700 font-medium block mt-1">Afternoon 2:00–4:30 PM</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setConsultType('video');
                  }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    consultType === 'video'
                      ? 'border-teal-700 bg-teal-50/40 ring-1 ring-teal-700'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xs font-bold block text-slate-900">Teleconsultation</span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">Online Video Session</span>
                  <span className="text-[10px] text-teal-700 font-medium block mt-1">Digital Prescription</span>
                </button>
              </div>
            </div>

            {/* Specialty / Reason for Visit */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                2. Clinical Specialty / Reason for Consultation
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-700"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title} ({s.duration})
                  </option>
                ))}
                <option value="General Initial Psychiatric Assessment">
                  General Initial Comprehensive Psychiatric Assessment (45 min)
                </option>
                <option value="Second Opinion / Medication Review">
                  Second Opinion / Prescription & Medication Review
                </option>
              </select>
            </div>

            {/* Date and Time Slot Picker */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  3. Preferred Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-700"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  4. Available Time Slot
                </label>
                <div className="grid grid-cols-2 gap-2 max-h-36 overflow-y-auto p-1 border border-slate-100 rounded-xl">
                  {slots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`py-1.5 px-2 text-xs rounded-lg font-medium transition-colors ${
                        selectedTimeSlot === slot
                          ? 'bg-teal-800 text-white'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Patient Credentials */}
            <div className="pt-2 border-t border-slate-100 space-y-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                5. Patient Details (Kept Strictly Confidential)
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-600 mb-1">Patient Full Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Kumar"
                    value={patientName}
                    onChange={(e) => {
                      setPatientName(e.target.value);
                      if (errors.patientName) setErrors({ ...errors, patientName: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 ${
                      errors.patientName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                    }`}
                  />
                  {errors.patientName && (
                    <span className="text-[11px] text-rose-600 mt-1 block">{errors.patientName}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs text-slate-600 mb-1">Mobile Contact Number *</label>
                  <input
                    type="tel"
                    placeholder="e.g. 9980204013"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 ${
                      errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-rose-600 mt-1 block">{errors.phone}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-600 mb-1">Age (Years)</label>
                  <input
                    type="number"
                    placeholder="e.g. 34"
                    min="1"
                    max="110"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-600 mb-1">Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 bg-white"
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-600 mb-1">
                  Brief description of symptoms / concerns (Optional & Confidential)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Chronic difficulty sleeping for 3 weeks, anxiety during meetings, etc."
                  value={symptomsNote}
                  onChange={(e) => setSymptomsNote(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs">
                <span className="font-semibold text-slate-800 block">Consultation Fee: ₹300/-</span>
                <span className="text-slate-500 text-[11px]">Payable directly at clinic desk · Zero prepayment required</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-teal-800 hover:bg-teal-900 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Confirm & Reserve Slot
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Step with Voucher & Options */
          <div className="p-6 sm:p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Appointment Reserved Successfully
              </span>
              <h3 className="text-2xl font-serif text-slate-900 font-medium">
                Consultation Confirmed with Dr. M. Ragini
              </h3>
              <p className="text-xs text-slate-500">
                A confirmation has been logged. Please save your booking token below.
              </p>
            </div>

            {/* Printable Appointment Pass */}
            <div className="bg-slate-50 rounded-2xl p-6 border-2 border-dashed border-slate-300 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center p-1">
                    <SriGuruLogo className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block uppercase tracking-wider">Booking Reference</span>
                    <span className="font-mono text-lg font-bold text-teal-900">{bookingRef}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block uppercase tracking-wider">Doctor</span>
                  <span className="font-semibold text-slate-800 text-sm">Dr. M. Ragini, MD (Psychiatry)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block">Patient Name</span>
                  <span className="font-semibold text-slate-800">{patientName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Date & Time</span>
                  <span className="font-semibold text-slate-800">{selectedDate} at {selectedTimeSlot}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Consultation Fee</span>
                  <span className="font-bold text-teal-800">₹300/- (Nominal)</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 text-xs">
                <span className="text-slate-400 block">Venue / Practice Location</span>
                <span className="font-medium text-slate-800">
                  {consultType === 'video'
                    ? 'Secure Telehealth Room link will be sent to your phone.'
                    : `${activeLocation.name} – ${activeLocation.address} (${activeLocation.landmark})`}
                </span>
              </div>
            </div>

            {/* Actions: WhatsApp / Calendar / Print */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 no-print">
              <a
                href={`https://wa.me/919980204013?text=${whatsappConfirmationText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                onClick={handleDownloadIcs}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Add to Calendar</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Appointment</span>
              </button>
            </div>

            <div className="pt-2 text-center no-print">
              <button
                onClick={onClose}
                className="text-xs font-medium text-slate-500 hover:text-slate-800"
              >
                Return to Clinic Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
