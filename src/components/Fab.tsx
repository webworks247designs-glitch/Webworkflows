"use client";

import { useEffect, useState, useRef } from "react";

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
    <a 
      className={`fab ${away ? "away" : ""}`} 
      href="#contact" 
      aria-label="Chat on WhatsApp"
    >
      <svg className="ic"><use href="#i-wa"/></svg>
      <span className="txt">Chat on WhatsApp</span>
    </a>
  );
}
