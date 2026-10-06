import React from "react";
import { ArrowRight, Mail, User, Building, MessageSquare, CheckCircle2 } from "lucide-react";

export default function InquiryPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-6">
            Let's build something extraordinary
          </h1>
          <p className="text-lg leading-8 text-neutral-400">
            Tell us about your project, and our team will get back to you within 24 hours to discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="mx-auto max-w-xl">
          <div className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 p-8 sm:p-12 rounded-3xl shadow-2xl">
            <form action="#" method="POST" className="space-y-6">
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-neutral-300">
                    First name
                  </label>
                  <div className="mt-2 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-neutral-500" />
                    </div>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="block w-full rounded-xl border-0 py-3 pl-10 pr-4 bg-neutral-950/50 text-white shadow-sm ring-1 ring-inset ring-neutral-800 placeholder:text-neutral-500 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6 transition-all"
                      placeholder="Jane"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-neutral-300">
                    Last name
                  </label>
                  <div className="mt-2 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-neutral-500" />
                    </div>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="block w-full rounded-xl border-0 py-3 pl-10 pr-4 bg-neutral-950/50 text-white shadow-sm ring-1 ring-inset ring-neutral-800 placeholder:text-neutral-500 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6 transition-all"
                      placeholder="Smith"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-neutral-300">
                  Email address
                </label>
                <div className="mt-2 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-neutral-500" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-xl border-0 py-3 pl-10 pr-4 bg-neutral-950/50 text-white shadow-sm ring-1 ring-inset ring-neutral-800 placeholder:text-neutral-500 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6 transition-all"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium leading-6 text-neutral-300">
                  Company (optional)
                </label>
                <div className="mt-2 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building className="h-5 w-5 text-neutral-500" />
                  </div>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="block w-full rounded-xl border-0 py-3 pl-10 pr-4 bg-neutral-950/50 text-white shadow-sm ring-1 ring-inset ring-neutral-800 placeholder:text-neutral-500 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6 transition-all"
                    placeholder="Acme Inc."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="project-details" className="block text-sm font-medium leading-6 text-neutral-300">
                  Project details
                </label>
                <div className="mt-2 relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-neutral-500" />
                  </div>
                  <textarea
                    id="project-details"
                    name="project-details"
                    rows={4}
                    className="block w-full rounded-xl border-0 py-3 pl-10 pr-4 bg-neutral-950/50 text-white shadow-sm ring-1 ring-inset ring-neutral-800 placeholder:text-neutral-500 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6 transition-all resize-none"
                    placeholder="Tell us about your timeline, budget, and goals..."
                  />
                </div>
              </div>

              <div className="flex items-center gap-x-3 mt-6">
                <input
                  id="newsletter"
                  name="newsletter"
                  type="checkbox"
                  className="h-4 w-4 rounded border-neutral-800 bg-neutral-950 text-purple-600 focus:ring-purple-600 focus:ring-offset-neutral-900"
                />
                <label htmlFor="newsletter" className="text-sm leading-6 text-neutral-400">
                  Keep me updated on news and special offers.
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group relative flex w-full justify-center items-center gap-2 rounded-xl bg-white px-3 py-4 text-sm font-semibold text-black hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Submit Inquiry
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-8 flex justify-center gap-6 text-sm text-neutral-500">
             <span className="flex items-center gap-2">
               <CheckCircle2 className="h-4 w-4 text-purple-500" /> No commitment required
             </span>
             <span className="flex items-center gap-2">
               <CheckCircle2 className="h-4 w-4 text-purple-500" /> NDA available upon request
             </span>
          </div>
        </div>
      </div>
    </div>
  );
}
