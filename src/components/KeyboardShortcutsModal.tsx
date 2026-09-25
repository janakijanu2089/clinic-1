import React from 'react';
import { X, Keyboard, Sparkles } from 'lucide-react';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: 'B', description: 'Open Appointment Booking Scheduler' },
    { key: 'C', description: 'Direct Call Clinic Desk (+91 9980204013)' },
    { key: 'L', description: 'Jump to Clinic & Hospital Locations' },
    { key: 'S', description: 'Take 2-Minute Emotional Health Screener (PHQ-4)' },
    { key: 'A', description: 'Jump to About Dr. M. Ragini' },
    { key: 'F', description: 'View Frequently Asked Questions' },
    { key: '?', description: 'Open this Keyboard Shortcuts Guide' },
    { key: 'Esc', description: 'Close any active popup or modal' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-lg"
          aria-label="Close shortcuts dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center">
            <Keyboard className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
              Quick Accessibility
            </span>
            <h3 className="text-lg font-serif font-semibold text-slate-900">
              Keyboard Navigation Shortcuts
            </h3>
          </div>
        </div>

        <p className="text-xs text-slate-500 mb-5 leading-relaxed">
          Navigate the clinic website smoothly using single key commands on your desktop:
        </p>

        <div className="divide-y divide-slate-100">
          {shortcuts.map((sc, i) => (
            <div key={i} className="py-2.5 flex items-center justify-between text-xs">
              <span className="text-slate-700">{sc.description}</span>
              <kbd className="px-2 py-1 bg-slate-100 border border-slate-300 text-slate-900 font-mono font-bold rounded text-[11px] shadow-2xs">
                {sc.key}
              </kbd>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-3 border-t border-slate-100 text-center">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Got it, continue browsing
          </button>
        </div>
      </div>
    </div>
  );
};
