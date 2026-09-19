export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-[#0A1120] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-brand-accent font-bold">Engineering Portfolio</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">Featured Projects</h2>
          <p className="text-slate-700 dark:text-slate-300 mt-2 font-medium">Hardware designs, computer vision pipelines, and embedded real-time systems.</p>
          <div className="w-12 h-1 bg-slate-900 dark:bg-brand-teal mx-auto mt-3 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col bg-white dark:bg-[#0F1D36] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-xl transition-all duration-300 reveal-on-scroll">
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">AI / Computer Vision</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">Signature Forgery Identification</h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 flex-grow">
              Built an image processing and computer-vision pipeline using OpenCV and Matplotlib to analyze stroke anomalies, feature contours, and detect forged signatures with high accuracy.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-800">
              {["OpenCV", "Matplotlib", "Python"].map(t => <span key={t} className="px-2 py-0.5 text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 rounded">{t}</span>)}
            </div>
          </div>

          <div className="flex flex-col bg-white dark:bg-[#0F1D36] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-xl transition-all duration-300 reveal-on-scroll">
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
              <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 border border-amber-200 dark:border-amber-800">IEEE INDISCON '26</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">S400 Smart Surveillance Fire Control System</h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 flex-grow">
              Engineered an automated real-time radar-servo tracking mechanism and responsive fire-control platform. Research paper authored and accepted at IEEE INDISCON 2026.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-800">
              {["Embedded Systems", "Radar-Servo", "C/C++"].map(t => <span key={t} className="px-2 py-0.5 text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 rounded">{t}</span>)}
            </div>
          </div>

          <div className="flex flex-col bg-white dark:bg-[#0F1D36] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-xl transition-all duration-300 reveal-on-scroll">
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">VLSI / Fabrication</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">Chip Fabrication Design & Simulation</h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 flex-grow">
              Simulated semiconductor fabrication process parameters using TCAD to evaluate doping gradients, oxidation profiles, and analyze device electrical characteristics.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-800">
              {["TCAD", "Semiconductor Sim", "Device Physics"].map(t => <span key={t} className="px-2 py-0.5 text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 rounded">{t}</span>)}
            </div>
          </div>

          <div className="flex flex-col bg-white dark:bg-[#0F1D36] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-xl transition-all duration-300 reveal-on-scroll">
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">Optical Comms</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">Li-Fi Sound Transmission</h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 flex-grow">
              Constructed a laser-based visible-light communication (VLC) transmitter and receiver system employing pulse-width modulation (PWM) for wireless audio delivery without RF interference.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-800">
              {["VLC / Laser", "PWM", "Circuit Design"].map(t => <span key={t} className="px-2 py-0.5 text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 rounded">{t}</span>)}
            </div>
          </div>

          <div className="flex flex-col bg-white dark:bg-[#0F1D36] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-xl transition-all duration-300 reveal-on-scroll">
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">IoT & Safety</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">Gas Leakage Detector</h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 flex-grow">
              Designed an autonomous safety system integrating Arduino, MQ-2 gas transducer, and GSM telephony to broadcast instant alerts during combustible gas threshold spikes.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-800">
              {["Arduino", "MQ-2 Sensor", "GSM Module"].map(t => <span key={t} className="px-2 py-0.5 text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 rounded">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
