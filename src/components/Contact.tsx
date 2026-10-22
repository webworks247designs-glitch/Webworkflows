"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  
  const [selectedServices, setSelectedServices] = useState<string[]>(["New website"]);
  const [selectedWhen, setSelectedWhen] = useState<string>("Within a month");

  const services = ["New website", "Redesign", "Landing page", "Online store", "Web app screens", "Not sure yet"];
  const whens = ["As soon as possible", "Within a month", "Just exploring"];

  const toggleService = (s: string) => {
    setSelectedServices(prev => 
      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
    );
  };

  const getMessage = () => {
    const need = selectedServices.length > 0 ? selectedServices.join(", ") : "a new website";
    const lines = [
      `Hi Webworkflo's, ${name ? `I'm ${name}.` : "I found your portfolio."}`,
      `I'm looking for: ${need}.`,
      `Timeline: ${selectedWhen.toLowerCase()}.`
    ];
    if (details) {
      lines.push("", details);
    }
    return lines.join("\n");
  };

  const waLink = `https://wa.me/919959896378?text=${encodeURIComponent(getMessage())}`;
  const mailSubject = `Project enquiry${name ? ` from ${name}` : ""}`;
  const mailLink = `mailto:webworks247designs@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(getMessage())}`;

  return (
    <section className="sec" id="contact" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="contact-panel">
          <div className="contact-info">
            <h2>Get Your Free Website Growth Plan</h2>
            <p className="lede">
              Tell us about your business. We will analyse your competitors, outline 3 immediate website improvements, and propose a transparent per-enquiry rate tailored to your model.
            </p>
            <div className="cta-row">
              <a 
                className="btn btn-wa btn-growth-plan" 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Get a Free Website Growth Plan on WhatsApp"
              >
                <svg className="ic"><use href="#i-wa"/></svg>
                Get a Free Website Growth Plan
              </a>
              <a className="btn btn-ghost" href="#pricing">View Pricing Models ↓</a>
            </div>
            <p className="contact-guarantee-note">
              24-hour turnaround on WhatsApp / 100% Free / Zero commitment
            </p>
            <div className="direct">
              <span><b>Studio</b> <span>Webworkflo&apos;s</span></span>
              <span><b>WhatsApp</b> <span>+91 99598 96378</span></span>
              <span><b>Email</b> <span>webworks247designs@gmail.com</span></span>
              <span><b>Reply time</b> Within 1-2 hours</span>
            </div>
          </div>

          <div className="form" id="brief">
            <fieldset>
              <legend>What do you need?</legend>
              <div className="chips">
                {services.map(s => (
                  <button 
                    key={s}
                    className="chip-btn" 
                    type="button" 
                    aria-pressed={selectedServices.includes(s)}
                    onClick={() => toggleService(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend>When do you need it?</legend>
              <div className="chips">
                {whens.map(w => (
                  <button 
                    key={w}
                    className="chip-btn" 
                    type="button" 
                    aria-pressed={selectedWhen === w}
                    onClick={() => setSelectedWhen(w)}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </fieldset>
            <div>
              <label className="t" htmlFor="f-name">Your name</label>
              <input 
                className="field" 
                id="f-name" 
                type="text" 
                autoComplete="name" 
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="t" htmlFor="f-details">About your project</label>
              <textarea 
                className="field" 
                id="f-details" 
                placeholder="What does your business do, and what should the website help you achieve?"
                value={details}
                onChange={e => setDetails(e.target.value)}
              ></textarea>
            </div>
            <div className="send">
              <a className="btn btn-wa btn-growth-plan" href={waLink} target="_blank" rel="noopener noreferrer"><svg className="ic"><use href="#i-wa"/></svg>Request Free Growth Plan on WhatsApp</a>
              <a className="btn btn-ghost" href={mailLink}><svg className="ic"><use href="#i-mail"/></svg>Send by email</a>
            </div>
            <div style={{ marginTop: '16px', textAlign: 'center', fontSize: '0.88rem', color: 'var(--muted)' }}>
              Prefer a comprehensive project brief?{" "}
              <a href="/inquiry" style={{ color: "var(--accent)", textDecoration: "underline", fontWeight: 500 }}>
                Open Full Project Inquiry Form &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
