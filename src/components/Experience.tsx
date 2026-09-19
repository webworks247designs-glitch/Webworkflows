export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-[#0C162B] border-y border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-brand-accent font-bold">Career Journey</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">Professional Experience</h2>
          <div className="w-12 h-1 bg-slate-900 dark:bg-brand-teal mx-auto mt-3 rounded-full"></div>
        </div>
        <div className="relative pl-6 md:pl-10 border-l-2 border-slate-300 dark:border-slate-700 space-y-12">
          <div className="relative reveal-on-scroll">
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-[#0C162B] bg-slate-900 dark:bg-sky-400"></div>
            <div className="bg-slate-50 dark:bg-[#0F1D36] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-700/70 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">Hardware Engineering Intern</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 w-fit">Present</span>
              </div>
              <div className="text-sm font-semibold text-sky-800 dark:text-sky-300 mb-4">SANSI RF and Communication Systems Pvt. Ltd.</div>
              <ul className="space-y-2.5 text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed list-disc list-outside pl-4">
                <li>Engineered and validated embedded hardware interfaces and sensor modules for precision signal processing.</li>
                <li>Performed hands-on hardware bring-up and debugging utilizing oscilloscopes, logic analyzers, and digital multimeters.</li>
                <li>Collaborated cross-functionally on system integration, noise filtering, and rigorous verification test benches.</li>
              </ul>
            </div>
          </div>

          <div className="relative reveal-on-scroll">
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-[#0C162B] bg-sky-500"></div>
            <div className="bg-slate-50 dark:bg-[#0F1D36] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-700/70 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">Freelance AI-Assisted Web & Digital Experience Developer</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 w-fit">Contract</span>
              </div>
              <div className="text-sm font-semibold text-sky-800 dark:text-sky-300 mb-4">Independent Digital Workflows</div>
              <ul className="space-y-2.5 text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed list-disc list-outside pl-4">
                <li>Prototyped responsive, high-performance web experiences using AI-assisted, modern no-code workflows (Google Stitch, Antigravity).</li>
                <li>Translated client concepts and interface architecture rapidly into functional, accessible frontend deliverables.</li>
                <li>Streamlined asset pipelines and UI state management for lightweight, framework-agnostic client deployments.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
