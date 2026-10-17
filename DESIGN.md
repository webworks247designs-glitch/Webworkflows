# Webworkflo's Design System & Principles

> Grounded in **impeccable**, **taste-skill**, and **motion-framer** frameworks.

## 1. Product Identity & Purpose
* **Service**: Freelance web design and engineering studio founded by Srishanth M. in Hyderabad.
* **Core Value**: Websites that turn local visitors into verified leads via WhatsApp and phone booking.
* **Pricing Model**: ₹3,000 launch fee, hosting cost + ₹200 setup fee, and verified per-enquiry billing.
* **Tone**: Confident, direct, transparent, technical excellence, zero outsourced middlemen.

---

## 2. Anti-Patterns (What We Ban)
* ❌ **No generic AI purple-blue blobs**: Color accents must be strategic, purposeful, and crisp.
* ❌ **No nested cards inside cards**: Avoid wrapping containers within containers. Use clean hairline dividers (`1px solid var(--line)`).
* ❌ **No pure dead black/grey**: Use tinted neutrals with subtle blue/zinc slate undertones (`#0A0E17`, `#111827`).
* ❌ **No raw screenshots**: Portfolio pieces must be presented inside browser viewports with address bars.
* ❌ **No jerky CSS animations**: All interactive elements use spring physics or subtle easing.

---

## 3. Color Tokens
* `--bg`: `#080B11` (Dark Mode Deep Slate) / `#F9FAFB` (Light Mode Zinc)
* `--surface`: `#0F172A` (Dark) / `#FFFFFF` (Light)
* `--surface-hover`: `#1E293B`
* `--line`: `rgba(255, 255, 255, 0.08)` (Dark) / `rgba(0, 0, 0, 0.08)` (Light)
* `--line-strong`: `rgba(255, 255, 255, 0.16)`
* `--accent-emerald`: `#10B981` (Verification, trust, WhatsApp)
* `--accent-violet`: `#7C3AED` (Interactive elements, Meera AI)
* `--ink`: `#F8FAFC` (Dark) / `#0F172A` (Light)
* `--muted`: `#94A3B8` (Dark) / `#64748B` (Light)

---

## 4. Typography Rules
* **Display Headings**: Tightly tracked (`letter-spacing: -0.03em`), bold weight, clean line-height.
* **Micro-labels / Pills**: Uppercase, tracking `0.06em`, font-size `0.72rem`, bold weight.
* **Body Copy**: Line-height `1.6`, high contrast readability.

---

## 5. Motion Tokens (Spring Physics)
* **Buttons / Chips Tap**: `scale: 0.98`
* **Card Hover**: `translateY(-3px)`, spring `stiffness: 300, damping: 20`
* **Section Reveal**: `initial={{ opacity: 0, y: 24 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true }}`
