"use client";

import { useEffect, useRef } from "react";
import { getWhatsAppGrowthPlanLink, trackFunnelEvent } from "@/lib/analytics";

const PROJECTS = [
  {
    name: 'The Boat House',
    kind: 'Restaurant website with online ordering',
    year: '2026',
    domain: 'boat-house-site.vercel.app',
    mock: 'boathouse',
    category: 'Restaurant',
    status: 'Verified Live Site',
    colors: { b: '#1C1917', f: '#FFFFFF', a: '#EAB308', s: '#292524', on: '#000000' },
    font: "Georgia,'Times New Roman',serif",
    desc: 'Slow-smoked Mandi and dum biryani fine dining website in Hyderabad. Features high-res food showcases, an interactive digital menu, and 1-tap table reservation enquiries directly via WhatsApp.',
    result: 'Live online ordering system eliminating delivery aggregator commissions.',
    proofTag: '🟢 Verified Live Deployment',
    clientQuote: 'Seamless digital menu with instant WhatsApp reservation tracking.',
    tags: ['Restaurant', 'Online ordering', 'Digital Menu', 'WhatsApp Direct'],
    liveUrl: 'https://boat-house-site.vercel.app/'
  },
  {
    name: "Shobana Men's Salon",
    kind: 'Barbershop website with bookings',
    year: '2026',
    domain: 'shobanamensalon.vercel.app',
    mock: 'salon',
    category: 'Luxury Salon',
    status: 'Verified Live Site',
    colors: { b: '#171717', f: '#ffffff', a: '#FDE047', s: '#262626', on: '#000000' },
    font: "system-ui,'Segoe UI',sans-serif",
    desc: 'Premium men\'s grooming studio in Hyderabad. Built a dark luxury digital presence with live service menus, hair styling packages, and an interactive appointment slot selector.',
    result: '5 leads captured → 2 verified billable appointments billed at ₹200 total under our pay-per-lead model.',
    proofTag: '★★★★★ 5.0 Google Review',
    clientQuote: '"i made my salon online and i loved the service,its oustanding." — Saikrishna Konduri (Owner)',
    tags: ['Barbershop', 'Slot Booking', 'Dark Mode', 'Pay-Per-Enquiry'],
    liveUrl: 'https://shobanamensalon.vercel.app/'
  },
  {
    name: 'Srishanth M. Portfolio',
    kind: 'Personal portfolio for AI Engineer',
    year: '2026',
    domain: 'srishanth-seven.vercel.app',
    mock: 'srishanth',
    category: 'Tech Portfolio',
    status: 'Verified Live Site',
    colors: { b: '#0B1120', f: '#FFFFFF', a: '#06B6D4', s: '#1E293B', on: '#000000' },
    font: "system-ui,'Segoe UI',sans-serif",
    desc: 'High-performance Next.js portfolio for an AI & Embedded Systems engineer. Highlights open-source publications, dynamic tech stack tokens, and interactive project cards with sub-second load times.',
    result: '0.3s Core Web Vitals score and an authoritative technical presence for global recruiters.',
    proofTag: '★★★★★ 5.0 Google Review',
    clientQuote: '"I made a portfolio for me and i liked it a lot....." — Srishanth Madanapally',
    tags: ['Next.js', 'AI & Embedded', 'Speed 99', 'Personal Brand'],
    liveUrl: 'https://srishanth-seven.vercel.app/'
  }
];

const MockSalon = () => (
  <a href="https://shobanamensalon.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}>
    <img src="/images/salon1.png" alt="Shobana Men's Salon 1" style={{ width: '100%', display: 'block' }} />
    <img src="/images/salon2.png" alt="Shobana Men's Salon 2" style={{ width: '100%', display: 'block' }} />
    <img src="/images/salon3.png" alt="Shobana Men's Salon 3" style={{ width: '100%', display: 'block' }} />
  </a>
);

const MockSrishanth = () => (
  <a href="https://srishanth-seven.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}>
    <img src="/images/srishanth1.png" alt="Srishanth Portfolio 1" style={{ width: '100%', display: 'block' }} />
    <img src="/images/srishanth2.png" alt="Srishanth Portfolio 2" style={{ width: '100%', display: 'block' }} />
  </a>
);

const MockBoatHouse = () => (
  <a href="https://boat-house-site.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}>
    <img src="/images/boathouse1.png" alt="Boat House 1" style={{ width: '100%', display: 'block' }} />
    <img src="/images/boathouse2.png" alt="Boat House 2" style={{ width: '100%', display: 'block' }} />
  </a>
);

const MockBakery = () => (
  <a href="#contact" style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}>
    <img src="/images/bakery-showcase.jpg" alt="Kaveri Kitchen & Bakery Website" style={{ width: '100%', display: 'block' }} />
  </a>
);

const MockClinic = () => (
  <a href="#contact" style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}>
    <img src="/images/clinic-showcase.jpg" alt="Northwind Physio & Wellness Website" style={{ width: '100%', display: 'block' }} />
  </a>
);

const MockStore = () => (
  <a href="#contact" style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}>
    <img src="/images/ecommerce-showcase.jpg" alt="Loom & Leaf Boutique Website" style={{ width: '100%', display: 'block' }} />
  </a>
);

const getMockComponent = (mockName: string) => {
  switch (mockName) {
    case 'boathouse': return <MockBoatHouse />;
    case 'salon': return <MockSalon />;
    case 'srishanth': return <MockSrishanth />;
    case 'bakery': return <MockBakery />;
    case 'clinic': return <MockClinic />;
    case 'store': return <MockStore />;
    default: return null;
  }
};

export default function WorkDeck() {
  const deckRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!deckRef.current) return;
    
    const slots = Array.from(deckRef.current.querySelectorAll('.slot')) as HTMLElement[];
    const cards = Array.from(deckRef.current.querySelectorAll('.card')) as HTMLElement[];
    let tops: number[] = [];
    let vh = window.innerHeight;
    let queued = false;
    
    const st = cards.map(() => ({ s: 1, rx: 0, tx: 0, ty: 0 }));

    const measure = () => {
      vh = window.innerHeight;
      tops = slots.map(s => parseFloat(getComputedStyle(s).top) || 0);
    };

    const apply = (i: number) => {
      const s = st[i];
      cards[i].style.transform = `perspective(1400px) rotateX(${(s.rx + s.tx).toFixed(2)}deg) rotateY(${s.ty.toFixed(2)}deg) scale(${s.s.toFixed(4)})`;
    };

    const update = () => {
      queued = false;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      const cov = slots.map((sl, i) => {
        const span = Math.max(vh - tops[i], 1);
        return Math.min(Math.max((vh - sl.getBoundingClientRect().top) / span, 0), 1);
      });
      
      let front = 0;
      cov.forEach((c, i) => { if (c >= 0.98) front = i; });
      
      for (let i = 0; i < slots.length; i++) {
        if (!reduce) {
          let depth = 0;
          for (let j = i + 1; j < slots.length; j++) depth += cov[j];
          st[i].s = 1 - Math.min(depth * 0.025, 0.1);
          st[i].rx = -(1 - cov[i]) * 8;
          cards[i].style.setProperty('--dim', Math.min(depth * 0.1, 0.42).toFixed(3));
          apply(i);
        }
        slots[i].classList.toggle('is-front', i === front);
      }
    };

    const queue = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    };

    measure();
    update();

    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', () => { measure(); queue(); });

    // Handle hover 3D effect
    cards.forEach((card, i) => {
      card.addEventListener('pointermove', (e: PointerEvent) => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce || e.pointerType !== 'mouse' || !slots[i].classList.contains('is-front')) return;
        const r = card.getBoundingClientRect();
        st[i].ty = ((e.clientX - r.left) / r.width - 0.5) * 4;
        st[i].tx = -((e.clientY - r.top) / r.height - 0.5) * 4;
        apply(i);
      });
      card.addEventListener('pointerleave', () => {
        st[i].tx = 0;
        st[i].ty = 0;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!reduce) apply(i);
      });
    });

    return () => {
      window.removeEventListener('scroll', queue);
    };
  }, []);

  const handleTabClick = (i: number) => {
    if (!deckRef.current) return;
    const slots = Array.from(deckRef.current.querySelectorAll('.slot')) as HTMLElement[];
    const slot = slots[i];
    const tops = slots.map(s => parseFloat(getComputedStyle(s).top) || 0);
    const gap = parseFloat(getComputedStyle(slot).marginBottom) || 0;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const natural = deckRef.current.getBoundingClientRect().top + window.scrollY + i * (slot.offsetHeight + gap);
    window.scrollTo({ top: natural - tops[i], behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <section className="sec work" id="work">
      <div className="wrap">
        <div className="sec-head">
          <h2>Recent work</h2>
          <p>
            <span className="only-hover">Scroll to flip through the deck. Hover a card to browse the full website inside it. Click a tab to jump back to any project.</span>
            <span className="only-touch">Scroll to flip through the deck. The website inside the front card scrolls by itself. Tap a tab to jump back to any project.</span>
          </p>
        </div>
        
        <div className="work-filters" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {PROJECTS.map((p, i) => (
            <button
              key={i}
              type="button"
              className="sample-pill"
              onClick={() => handleTabClick(i)}
              aria-label={`Jump to ${p.name}`}
            >
              <span>{p.category}</span>
            </button>
          ))}
        </div>
        
        <div className="deck" id="deck" ref={deckRef} style={{ "--n": PROJECTS.length } as React.CSSProperties}>
          {PROJECTS.map((p, i) => {
            const c = p.colors;
            const vars = {
              '--mb': c.b, '--mf': c.f, '--ma': c.a, '--ms': c.s, '--mon': c.on, '--mfont': p.font,
              '--ac': c.a, '--i': i
            } as React.CSSProperties;

            return (
              <div className="slot" style={vars} key={i}>
                <article className="card" style={vars} aria-label={p.name}>
                  <button className="tab" type="button" onClick={() => handleTabClick(i)} aria-label={`Bring ${p.name} to the front`}>
                    <span className="dot"></span>
                    <span className="name">{p.name}</span>
                    <span className="kind">{p.kind}</span>
                    <span className="yr">{p.year}</span>
                  </button>
                  <div className="body">
                    <div className="browser" role="img" aria-label={`Scrolling preview of the ${p.name} website`}>
                      <div className="bar"><i></i><i></i><i></i><span className="url">{p.domain}</span></div>
                      <div className="view">
                        <div className="page" style={vars}>
                          {getMockComponent(p.mock)}
                        </div>
                      </div>
                    </div>
                    <div className="info">
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
                        <h3>{p.name}</h3>
                        <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 8px', borderRadius: '12px', background: 'color-mix(in srgb, var(--ac) 15%, transparent)', color: 'var(--ac)' }}>
                          {p.proofTag}
                        </span>
                      </div>
                      <p className="desc">{p.desc}</p>
                      
                      {p.clientQuote ? (
                        <blockquote style={{ margin: '10px 0', padding: '8px 12px', borderLeft: '3px solid var(--ac)', background: 'var(--bg)', borderRadius: '0 8px 8px 0', fontSize: '0.86rem', fontStyle: 'italic', color: 'var(--ink)' }}>
                          {p.clientQuote}
                        </blockquote>
                      ) : null}

                      <ul className="tags">
                        {p.tags.map(t => <li key={t}>{t}</li>)}
                      </ul>
                      <p className="result"><b>Result</b>{p.result}</p>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
                        <a 
                          className="btn btn-wa btn-sm" 
                          href={p.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={() => trackFunnelEvent('live_site_click', { client: p.name, url: p.liveUrl })}
                        >
                          Live Site ↗
                        </a>
                        <a 
                          className="btn btn-ghost btn-sm" 
                          href={getWhatsAppGrowthPlanLink(`WorkDeck_${p.name}`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackFunnelEvent('cta_click', { source: `workdeck_growth_plan_${p.name}` })}
                        >
                          Get Similar Growth Plan →
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        <div className="deck-end">
          <h3>Want a high-converting website built for your business?</h3>
          <p style={{ color: 'var(--muted)', margin: '8px 0 20px', fontSize: '1rem' }}>
            Get a tailored breakdown of your competitors, mobile design suggestions, and estimated enquiry numbers.
          </p>
          <div className="cta-row">
            <a 
              className="btn btn-wa btn-growth-plan" 
              href={getWhatsAppGrowthPlanLink("WorkDeck_Bottom")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackFunnelEvent('cta_click', { source: 'workdeck_bottom_growth_plan' })}
            >
              <svg className="ic"><use href="#i-wa"/></svg>
              Get a Free Website Growth Plan
            </a>
            <a className="btn btn-ghost" href="#case-study">View Verified Case Study ↓</a>
          </div>
        </div>
      </div>
    </section>
  );
}
