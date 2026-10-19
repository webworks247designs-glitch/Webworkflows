export const FAQ_ITEMS = [
  {
    q: "Who is the best freelance website designer in Hyderabad for small businesses?",
    a: "Webworkflo's specializes in high-converting, custom websites and landing pages for small businesses, startups, clinics, and local services in Hyderabad. Unlike slow traditional agencies that use bulky templates, we build clean, bespoke Next.js websites that load in under 0.5 seconds, rank on Google, and convert visitors into WhatsApp inquiries.",
  },
  {
    q: "How much does a website designer in Hyderabad charge?",
    a: "Website design in Hyderabad typically ranges from ₹14,999 for high-converting single landing pages up to ₹34,999+ for full custom multi-page business websites. We also offer a performance-aligned Pay-Per-Enquiry model where you only pay ₹299 per verified customer enquiry after a nominal setup.",
  },
  {
    q: "Do you serve businesses across all areas of Hyderabad?",
    a: "Yes! We work with clients across all major hubs in Hyderabad, including Hitec City, Madhapur, Gachibowli, Kondapur, Banjara Hills, Jubilee Hills, Kukatpally, and Secunderabad. We collaborate smoothly via WhatsApp, Google Meet, and direct founder phone access.",
  },
  {
    q: "How long does it take to design and launch my website?",
    a: "A high-impact landing page takes 3 to 5 business days. A complete 4 to 8-page business website takes 10 to 14 days. We work in rapid sprint milestones with zero agency bureaucracy so you can start getting leads fast.",
  },
  {
    q: "Will my website rank on Google Search and Google Maps?",
    a: "Yes. Every website we build includes full Technical SEO: sub-0.5s loading speed (100/100 Core Web Vitals), clean semantic HTML, mobile responsiveness, XML sitemaps, robots.txt, and LocalBusiness JSON-LD Schema markup. We also help connect your site to your Google Business Profile.",
  },
  {
    q: "Do you offer support and maintenance after launch?",
    a: "Every build comes with 30 days of complimentary post-launch support and bug fixes. After that, we provide low-cost monthly maintenance retainers for content updates, speed monitoring, and ongoing SEO improvements.",
  },
];

export default function FAQ() {
  return (
    <section className="sec" id="faq">
      <div className="wrap">
        <div className="sec-head">
          <div className="tag">Frequently Asked Questions</div>
          <h2>Common Questions About Web Design in Hyderabad</h2>
          <p>
            Everything you need to know about pricing, timelines, Google ranking, and how we build fast, high-converting websites.
          </p>
        </div>
        <div className="faq">
          {FAQ_ITEMS.map((item, idx) => (
            <details key={idx}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
