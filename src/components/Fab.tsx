"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { getWhatsAppGrowthPlanLink, trackFunnelEvent } from "@/lib/analytics";

export default function Fab() {
  const [away, setAway] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    targetRef.current = document.getElementById("contact");
    if (!targetRef.current || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      setAway(entries[0].isIntersecting);
    }, { threshold: 0.25 });

    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.a 
      className={`fab ${away ? "away" : ""}`} 
      href={getWhatsAppGrowthPlanLink("FloatingFab")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp: Get a Free Website Growth Plan"
      onClick={() => trackFunnelEvent('whatsapp_click', { source: 'floating_fab' })}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <svg className="ic"><use href="#i-wa"/></svg>
      <span className="txt">Get Free Growth Plan</span>
    </motion.a>
  );
}
