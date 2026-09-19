export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-[#0A1120] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-brand-accent font-bold">Technical Arsenal</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">Skills & Competencies</h2>
          <p className="text-slate-700 dark:text-slate-300 mt-2 font-medium">Grouped engineering proficiencies spanning silicon logic to rapid intelligent software delivery.</p>
          <div className="w-12 h-1 bg-slate-900 dark:bg-brand-teal mx-auto mt-3 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0F1D36] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow reveal-on-scroll">
            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-sky-400 flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect height="16" rx="2" strokeWidth="2" width="16" x="4" y="4"></rect><rect height="6" strokeWidth="2" width="6" x="9" y="9"></rect><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" strokeLinecap="round" strokeWidth="2"></path></svg>
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-3">Digital Design & RTL</h3>
            <div className="flex flex-wrap gap-2">
              {["Verilog", "VHDL", "FPGA", "Xilinx Vivado", "Digital Logic"].map(skill => (
                <span key={skill} className="px-2.5 py-1 text-xs font-mono font-semibold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0F1D36] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow reveal-on-scroll">
            <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-3">Embedded & Hardware</h3>
            <div className="flex flex-wrap gap-2">
              {["ESP32", "STM32", "Arduino", "Raspberry Pi", "PCB Design", "Sensors"].map(skill => (
                <span key={skill} className="px-2.5 py-1 text-xs font-mono font-semibold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">{skill}</span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0F1D36] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow reveal-on-scroll">
            <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-3">AI & Digital Experience</h3>
            <div className="flex flex-wrap gap-2">
              {["Google Stitch", "Antigravity", "AI No/Low-Code", "OpenCV", "Matplotlib"].map(skill => (
                <span key={skill} className="px-2.5 py-1 text-xs font-mono font-semibold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">{skill}</span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0F1D36] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow reveal-on-scroll">
            <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-3">Programming</h3>
            <div className="flex flex-wrap gap-2">
              {["C", "Embedded C", "Python"].map(skill => (
                <span key={skill} className="px-2.5 py-1 text-xs font-mono font-semibold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">{skill}</span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0F1D36] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow reveal-on-scroll md:col-span-2 lg:col-span-2">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-3">Engineering Tools & EDA</h3>
            <div className="flex flex-wrap gap-2">
              {["MATLAB", "Keil uVision", "Proteus", "MultiSim", "TCAD (Semiconductor Sim)"].map(skill => (
                <span key={skill} className="px-2.5 py-1 text-xs font-mono font-semibold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
