export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-[#0C162B] border-y border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-brand-accent font-bold">Credentials & Milestones</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">Certifications & Achievements</h2>
          <div className="w-12 h-1 bg-slate-900 dark:bg-brand-teal mx-auto mt-3 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-slate-50 dark:bg-[#0F1D36] p-8 rounded-2xl border border-slate-200 dark:border-slate-700/70 shadow-sm reveal-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-sky-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">Industry Certifications</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shadow-xs">
                <div className="font-bold text-slate-900 dark:text-white text-base">VLSI Design Cohort-7</div>
                <div className="text-xs font-mono font-semibold text-sky-700 dark:text-sky-300 mt-1">Samsung & Synopsys</div>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shadow-xs">
                <div className="font-bold text-slate-900 dark:text-white text-base">AI for Entrepreneurship</div>
                <div className="text-xs font-mono font-semibold text-sky-700 dark:text-sky-300 mt-1">Intel</div>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shadow-xs">
                <div className="font-bold text-slate-900 dark:text-white text-base">Low Power VLSI Trends</div>
                <div className="text-xs font-mono font-semibold text-sky-700 dark:text-sky-300 mt-1">Advanced Digital CMOS Design</div>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shadow-xs">
                <div className="font-bold text-slate-900 dark:text-white text-base">Image Processing & Computer Vision</div>
                <div className="text-xs font-mono font-semibold text-sky-700 dark:text-sky-300 mt-1">Applied Signal Analytics</div>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shadow-xs">
                <div className="font-bold text-slate-900 dark:text-white text-base">Embedded Systems in C</div>
                <div className="text-xs font-mono font-semibold text-sky-700 dark:text-sky-300 mt-1">TASK (Telangana Academy for Skill and Knowledge)</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-[#0F1D36] p-8 rounded-2xl border border-slate-200 dark:border-slate-700/70 shadow-sm reveal-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">Honors & Recognition</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shadow-xs flex items-start gap-4">
                <span className="p-2 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-400 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Scholarship Recipient</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-0.5">India Semiconductor Workforce Development Program — National initiative backing future VLSI & silicon engineers.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shadow-xs flex items-start gap-4">
                <span className="p-2 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-400 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">IEEE INDISCON 2026 Paper Presenter</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-0.5">Primary researcher on the S400 Smart Surveillance Fire Control architecture, presented to international peer reviewers.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shadow-xs flex items-start gap-4">
                <span className="p-2 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Professional Member, IETE</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-0.5">Active member of the Institution of Electronics and Telecommunication Engineers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
