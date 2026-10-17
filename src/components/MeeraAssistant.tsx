"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  PhoneOff,
  PhoneCall,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  ArrowRight,
  RotateCcw,
  Clock,
} from "lucide-react";

export default function MeeraAssistant() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<"Telugu" | "English" | "Hindi">("Telugu");
  const [callState, setCallState] = useState<"idle" | "calling" | "ringing" | "connected" | "ended">("idle");
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaker, setIsSpeaker] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [waLink, setWaLink] = useState<string>("");

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // In-call duration timer
  useEffect(() => {
    if (callState === "connected") {
      setCallDuration(0);
      timerRef.current = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [callState]);

  // Clean up speech synthesis when component unmounts or call ends
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and limit to 10 digits
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhoneNumber(val);
    if (errorMsg) setErrorMsg("");
  };

  const handleInitiateCall = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!phoneNumber || phoneNumber.length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);
    setFeedbackMsg("");

    try {
      const res = await fetch("/api/call-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phoneNumber, language: selectedLanguage }),
      });
      const data = await res.json();
      if (!data.success) {
        setErrorMsg(data.error || "Unable to dispatch call. Try again.");
        setIsSubmitting(false);
        return;
      }

      if (data.clientWaLink) {
        setWaLink(data.clientWaLink);
      }

      setIsSubmitting(false);
      setCallState("ringing");
      setFeedbackMsg(data.message || `Calling +91 ${phoneNumber}... Please pick up!`);
      playRingtoneBeep();
    } catch {
      setIsSubmitting(false);
      setErrorMsg("Network error connecting to call service. Please try again.");
    }
  };

  const playRingtoneBeep = () => {
    try {
      if (typeof window !== "undefined" && "AudioContext" in window) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.6);
      }
    } catch {
      // Ignore audio context permission restrictions
    }
  };

  const handleAcceptCall = () => {
    setCallState("connected");
    setFeedbackMsg("");

    // Meera voice synthesis greeting (Cold Call Discovery)
    const greetings = {
      Telugu: "నమస్కారం! నేను వెబ్‌వర్క్‌ఫ్లోస్ నుండి మీరాను. గూగుల్ లో మీ బిజినెస్ చూశాను, చాలా మంచి రివ్యూలు ఉన్నాయి. మీ బిజినెస్‌కి ఎక్కువ కస్టమర్ ఎంక్వైరీలు తెచ్చే వెబ్‌సైట్ గురించి మాట్లాడటానికి కాల్ చేశాను.",
      English: "Hi there! This is Meera calling from Webworkflo's in Hyderabad. I was looking at your business on Google and noticed you have great reviews, but no direct booking website. Are you looking to get more direct customer inquiries this month?",
      Hindi: "नमस्ते! मैं वेबवर्कफ्लोस हैदराबाद से मीरा बोल रही हूँ। मैंने गूगल पर आपका बिज़नेस देखा, बहुत बढ़िया रिव्यूज हैं। क्या आप इस महीने अपने बिज़नेस के लिए और डायरेक्ट कस्टमर्स और ऑर्डर्स चाहते हैं?",
    };

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const textToSpeak = greetings[selectedLanguage] || greetings.English;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 0.95;
      utterance.pitch = 1.05;
      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleDeclineCall = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setCallState("ended");
    setFeedbackMsg("Call declined. Tap 'Reset Demo' to try again.");
  };

  const handleEndCall = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setCallState("ended");
    setFeedbackMsg("Call completed! Meera is ready for your website.");
  };

  const handleReset = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setCallState("idle");
    setCallDuration(0);
    setFeedbackMsg("");
    setErrorMsg("");
  };

  const displayPhone = phoneNumber
    ? `+91 ${phoneNumber.slice(0, 5)} ${phoneNumber.slice(5) || "•••••"}`
    : "+91 •••• •••••";

  return (
    <section className="sec meera-section" id="ai-assistant" style={{ paddingTop: 0 }}>
      {/* Hidden anchor compatibility */}
      <span id="protection" style={{ position: "absolute", marginTop: "-80px", visibility: "hidden" }} />

      <div className="wrap">
        <div className="meera-container">

          {/* LEFT COLUMN: Headings, Value Proposition & Number Connect Form */}
          <div className="meera-left">

            {/* Eyebrow Pill */}
            <div className="meera-pill-badge">
              <Sparkles className="meera-pill-icon" />
              <span>LIVE COLD CALL DEMO</span>
            </div>

            {/* Main Headline */}
            <h2 className="meera-title">
              Let our AI assistant Meera{" "}
              <span className="meera-title-gradient">call you live.</span>
            </h2>

            {/* Subtitle */}
            <p className="meera-desc">
              Drop your number — Webworkflo&apos;s AI consultant <strong>Meera</strong> will place an automated cold discovery call to your phone in seconds. Hear how she introduces our website model, handles objections, and qualifies clients.
            </p>

            {/* Phone Input Bar */}
            <form onSubmit={handleInitiateCall} className="meera-input-wrapper">
              <div className="meera-input-group">
                <div className="meera-input-fields">
                  <div className="meera-country-code">
                    <span className="meera-flag">🇮🇳</span>
                    <span>+91</span>
                  </div>
                  <div className="meera-divider" />
                  <input
                    type="tel"
                    inputMode="numeric"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="your mobile number"
                    className="meera-input"
                    aria-label="Your 10-digit mobile number"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || callState === "connected"}
                  className="meera-submit-btn"
                  id="connect-now-btn"
                >
                  {isSubmitting ? (
                    <span className="meera-btn-loader">Connecting...</span>
                  ) : callState === "ringing" ? (
                    <span>Ringing... 🔔</span>
                  ) : (
                    <>
                      <span>Connect now</span>
                      <ArrowRight className="meera-btn-arrow" />
                    </>
                  )}
                </button>
              </div>

              {errorMsg && <p className="meera-error-msg">{errorMsg}</p>}
              {feedbackMsg && <p className="meera-success-msg">{feedbackMsg}</p>}
            </form>

            {/* Calling Hours Notice (9 AM to 9 PM) */}
            <div className="meera-hours-badge">
              <Clock className="meera-hours-icon" size={15} />
              <span>Calls available <strong>9:00 AM – 9:00 PM IST</strong> only (TRAI regulations). Requests after 9 PM are placed at 9 AM.</span>
            </div>

            {/* Language Selector */}
            <div className="meera-lang-selector">
              <span className="meera-lang-label">Meera speaks:</span>
              {(["Telugu", "English", "Hindi"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setSelectedLanguage(lang)}
                  className={`meera-lang-btn ${selectedLanguage === lang ? "active" : ""}`}
                >
                  {lang}
                </button>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Realistic Smartphone Mockup */}
          <div className="meera-right">
            <div className={`meera-phone-chassis ${callState === "ringing" ? "phone-vibrating" : ""}`}>

              {/* Speaker & Dynamic Notch */}
              <div className="meera-phone-notch">
                <div className="meera-phone-speaker" />
                <div className="meera-phone-camera" />
              </div>

              {/* Phone Screen Canvas */}
              <div className="meera-screen">

                {/* STATE 1 & 2: INCOMING CALL OR RINGING */}
                {callState !== "connected" && callState !== "ended" && (
                  <div className="meera-call-view">

                    {/* Top Call State Pill */}
                    <div className="meera-incoming-pill">
                      <span className="pulsing-call-dot" />
                      <span>{callState === "ringing" ? "CALLING YOU NOW" : "INCOMING CALL"}</span>
                    </div>

                    {/* Meera Avatar with Glowing Rings */}
                    <div className="meera-avatar-container">
                      <div className="meera-ring ring-1" />
                      <div className="meera-ring ring-2" />
                      <div className="meera-avatar-circle">
                        <span className="meera-avatar-letter">M</span>
                      </div>
                    </div>

                    {/* Meera Name & Language */}
                    <div className="meera-caller-info">
                      <h3 className="meera-caller-name">Meera</h3>
                      <p className="meera-caller-role">
                        AI Cold Outreach Consultant · {selectedLanguage}
                      </p>
                      <p className="meera-caller-num">{displayPhone}</p>
                    </div>

                    {/* Decline & Accept Buttons */}
                    <div className="meera-call-actions">
                      <div className="meera-action-col">
                        <button
                          type="button"
                          onClick={handleDeclineCall}
                          className="meera-action-btn btn-decline"
                          aria-label="Decline Call"
                        >
                          <PhoneOff className="meera-action-icon" />
                        </button>
                        <span className="meera-action-label">Decline</span>
                      </div>

                      <div className="meera-action-col">
                        <button
                          type="button"
                          onClick={handleAcceptCall}
                          className="meera-action-btn btn-accept"
                          aria-label="Accept Call"
                        >
                          <Phone className="meera-action-icon" />
                        </button>
                        <span className="meera-action-label accept-label">Accept</span>
                      </div>
                    </div>

                    <p className="meera-screen-hint">tap to hear live cold call demo</p>
                  </div>
                )}

                {/* STATE 3: CONNECTED ACTIVE CALL */}
                {callState === "connected" && (
                  <div className="meera-call-view connected-view">

                    <div className="meera-incoming-pill connected-pill">
                      <span className="connected-dot" />
                      <span>CONNECTED · {formatSeconds(callDuration)}</span>
                    </div>

                    {/* Avatar Compact */}
                    <div className="meera-avatar-compact">
                      <div className="meera-avatar-circle compact">
                        <span className="meera-avatar-letter">M</span>
                      </div>
                      <h4 className="meera-caller-name-compact">Meera AI</h4>
                      <p className="meera-caller-role-compact">Cold Discovery Call in {selectedLanguage}...</p>
                    </div>

                    {/* Animated Equalizer Waveform */}
                    <div className="meera-equalizer">
                      <span className="eq-bar bar-1" />
                      <span className="eq-bar bar-2" />
                      <span className="eq-bar bar-3" />
                      <span className="eq-bar bar-4" />
                      <span className="eq-bar bar-5" />
                      <span className="eq-bar bar-6" />
                      <span className="eq-bar bar-7" />
                    </div>

                    {/* Speech Transcript Bubble */}
                    <div className="meera-speech-bubble">
                      <p className="meera-transcript-quote">
                        {selectedLanguage === "Telugu" && (
                          <>&ldquo;నమస్కారం! నేను వెబ్‌వర్క్‌ఫ్లోస్ నుండి మీరాను. గూగుల్ లో మీ బిజినెస్ చూశాను, చాలా మంచి రివ్యూలు ఉన్నాయి. మీ బిజినెస్‌కి ఎక్కువ కస్టమర్ ఎంక్వైరీలు తెచ్చే వెబ్‌సైట్ గురించి మాట్లాడటానికి కాల్ చేశాను.&rdquo;</>
                        )}
                        {selectedLanguage === "English" && (
                          <>&ldquo;Hi there! This is Meera from Webworkflo&apos;s in Hyderabad. I was looking at your business on Google and noticed you have great reviews, but no direct booking website. Are you looking to get more direct customer inquiries this month?&rdquo;</>
                        )}
                        {selectedLanguage === "Hindi" && (
                          <>&ldquo;नमस्ते! मैं वेबवर्कफ्लोस हैदराबाद से मीरा बोल रही हूँ। मैंने गूगल पर आपका बिज़नेस देखा, बहुत बढ़िया रिव्यूज हैं। क्या आप इस महीने अपने बिज़नेस के लिए और डायरेक्ट कस्टमर्स और ऑर्डर्स चाहते हैं?&rdquo;</>
                        )}
                      </p>
                    </div>

                    {/* Call In-Progress Controls */}
                    <div className="meera-in-call-controls">
                      <button
                        type="button"
                        onClick={() => setIsMuted(!isMuted)}
                        className={`meera-ctrl-btn ${isMuted ? "active" : ""}`}
                        title={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? <MicOff size={18} /> : <Mic size={18} />}
                      </button>

                      <button
                        type="button"
                        onClick={handleEndCall}
                        className="meera-ctrl-btn end-call-btn"
                        title="End Call"
                      >
                        <PhoneOff size={22} />
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsSpeaker(!isSpeaker)}
                        className={`meera-ctrl-btn ${isSpeaker ? "active" : ""}`}
                        title={isSpeaker ? "Speaker On" : "Speaker Off"}
                      >
                        {isSpeaker ? <Volume2 size={18} /> : <VolumeX size={18} />}
                      </button>
                    </div>

                    <p className="meera-screen-hint">Live AI speech demo active</p>
                  </div>
                )}

                {/* STATE 4: CALL ENDED */}
                {callState === "ended" && (
                  <div className="meera-call-view ended-view">
                    <div className="meera-avatar-compact">
                      <div className="meera-avatar-circle ended">
                        <CheckCircle2 size={36} color="#10B981" />
                      </div>
                      <h4 className="meera-caller-name-compact" style={{ marginTop: "12px" }}>
                        Outreach Call Completed
                      </h4>
                      <p className="meera-caller-role-compact">
                        Meera pitched &amp; qualified the prospect.
                      </p>
                    </div>

                    <div className="meera-ended-box">
                      <p>✨ <strong>Lead Dossier</strong> recorded. Founder Srishanth has been alerted.</p>
                      {waLink && (
                        <div style={{ marginTop: "12px" }}>
                          <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="meera-wa-send-btn"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "8px",
                              background: "#25D366",
                              color: "#FFFFFF",
                              padding: "10px 16px",
                              borderRadius: "12px",
                              fontWeight: 700,
                              fontSize: "0.85rem",
                              textDecoration: "none",
                              boxShadow: "0 8px 18px -4px rgba(37, 211, 102, 0.5)",
                              transition: "transform 0.2s ease"
                            }}
                          >
                            <span>📲 1-Tap: Send Growth Plan on WhatsApp</span>
                          </a>
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="meera-reset-btn"
                      style={{ marginTop: "8px" }}
                    >
                      <RotateCcw size={16} />
                      <span>Test Call Again</span>
                    </button>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scoped CSS for Pixel-Perfect Premium Design */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .meera-section {
          position: relative;
          overflow: hidden;
          padding-top: clamp(40px, 6vw, 70px);
          padding-bottom: clamp(60px, 8vw, 100px);
        }

        .meera-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
          max-width: 1140px;
          margin: 0 auto;
          width: 100%;
        }

        @media (min-width: 960px) {
          .meera-container {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 60px;
          }
        }

        /* TABLET PORTRAIT / COMPACT (768px – 959px) */
        @media (min-width: 768px) and (max-width: 959px) {
          .meera-container {
            max-width: 680px;
            gap: 44px;
          }
          .meera-left {
            align-items: center !important;
            text-align: center !important;
          }
          .meera-title {
            text-align: center;
          }
          .meera-desc {
            text-align: center;
            margin-inline: auto;
          }
          .meera-input-wrapper {
            margin-inline: auto;
          }
          .meera-hours-badge {
            margin-inline: auto;
            text-align: left;
          }
          .meera-lang-selector {
            justify-content: center;
          }
        }

        /* LEFT SIDE */
        .meera-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          width: 100%;
        }

        .meera-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(124, 58, 237, 0.08);
          border: 1px solid rgba(124, 58, 237, 0.22);
          border-radius: 999px;
          color: #7C3AED;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        :root[data-theme="dark"] .meera-pill-badge,
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .meera-pill-badge {
            background: rgba(139, 92, 246, 0.15);
            border-color: rgba(139, 92, 246, 0.35);
            color: #C4B5FD;
          }
        }

        .meera-pill-icon {
          width: 14px;
          height: 14px;
          color: currentColor;
        }

        .meera-title {
          font-size: clamp(2.1rem, 4.4vw, 3.6rem);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.025em;
          margin: 0 0 18px 0;
          color: var(--ink);
        }

        .meera-title-gradient {
          display: inline;
          background: linear-gradient(135deg, #7C3AED 0%, #9333EA 45%, #D97706 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .meera-desc {
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          line-height: 1.6;
          color: var(--muted);
          margin: 0 0 30px 0;
          max-width: 520px;
        }

        /* INPUT BAR */
        .meera-input-wrapper {
          width: 100%;
          max-width: 540px;
          margin-bottom: 20px;
        }

        .meera-input-group {
          display: flex;
          align-items: center;
          background: var(--surface);
          border: 1.5px solid var(--line);
          border-radius: 20px;
          padding: 6px;
          box-shadow: 0 12px 36px -10px rgba(0, 0, 0, 0.06);
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          gap: 6px;
        }

        .meera-input-fields {
          display: flex;
          align-items: center;
          flex: 1;
          min-width: 0;
          gap: 4px;
        }

        .meera-input-group:focus-within {
          border-color: #7C3AED;
          box-shadow: 0 12px 36px -10px rgba(124, 58, 237, 0.25);
        }

        .meera-country-code {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 12px;
          font-weight: 700;
          font-size: 1rem;
          color: var(--ink);
          user-select: none;
          flex-shrink: 0;
        }

        .meera-flag {
          font-size: 1.15rem;
        }

        .meera-divider {
          width: 1px;
          height: 28px;
          background: var(--line);
          flex-shrink: 0;
        }

        .meera-input {
          flex: 1;
          min-width: 0;
          border: none;
          background: transparent;
          padding: 12px 10px;
          font-size: 1.05rem;
          font-family: inherit;
          color: var(--ink);
          outline: none;
        }

        .meera-input::placeholder {
          color: var(--muted);
          opacity: 0.7;
        }

        .meera-submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%);
          color: #ffffff;
          border: none;
          border-radius: 14px;
          padding: 13px 22px;
          font-size: 0.98rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
          box-shadow: 0 8px 20px -6px rgba(124, 58, 237, 0.6);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .meera-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px -6px rgba(124, 58, 237, 0.8);
        }

        .meera-submit-btn:disabled {
          opacity: 0.75;
          cursor: not-allowed;
        }

        .meera-btn-arrow {
          width: 16px;
          height: 16px;
          transition: transform 0.2s ease;
        }

        .meera-submit-btn:hover .meera-btn-arrow {
          transform: translateX(3px);
        }

        @media (max-width: 640px) {
          .meera-input-group {
            flex-direction: column;
            padding: 8px;
            border-radius: 18px;
            gap: 8px;
          }
          .meera-input-fields {
            width: 100%;
          }
          .meera-country-code {
            padding: 0 8px;
            font-size: 0.95rem;
          }
          .meera-input {
            padding: 8px 6px;
            font-size: 0.98rem;
          }
          .meera-submit-btn {
            width: 100%;
            justify-content: center;
            padding: 12px 16px;
            font-size: 0.95rem;
            border-radius: 12px;
          }
        }

        .meera-error-msg {
          color: #EF4444;
          font-size: 0.85rem;
          margin: 8px 0 0 8px;
          font-weight: 500;
        }

        .meera-success-msg {
          color: #10B981;
          font-size: 0.88rem;
          margin: 8px 0 0 8px;
          font-weight: 600;
        }

        .meera-hours-badge {
          display: inline-flex;
          align-items: flex-start;
          gap: 10px;
          background: rgba(79, 70, 229, 0.05);
          border: 1px solid rgba(79, 70, 229, 0.15);
          border-radius: 12px;
          padding: 9px 14px;
          font-size: 0.81rem;
          color: var(--muted);
          line-height: 1.45;
          margin-bottom: 20px;
          max-width: 520px;
          width: 100%;
          box-sizing: border-box;
        }

        :root[data-theme="dark"] .meera-hours-badge,
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .meera-hours-badge {
            background: rgba(110, 66, 255, 0.08);
            border-color: rgba(110, 66, 255, 0.2);
            color: #A3A8D6;
          }
        }

        .meera-hours-icon {
          color: #4F46E5;
          flex-shrink: 0;
          margin-top: 2px;
        }

        :root[data-theme="dark"] .meera-hours-icon,
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .meera-hours-icon {
            color: #A78BFA;
          }
        }

        /* TRUST BADGES */
        .meera-trust-badges {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
        }

        .meera-badge-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.84rem;
          font-weight: 500;
          color: var(--muted);
        }

        .green-badge {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: #059669;
          padding: 4px 12px;
          border-radius: 999px;
          font-weight: 600;
        }

        :root[data-theme="dark"] .green-badge,
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .green-badge {
            background: rgba(16, 185, 129, 0.15);
            border-color: rgba(16, 185, 129, 0.35);
            color: #34D399;
          }
        }

        .meera-green-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 6px #10B981;
        }

        .meera-shield-icon {
          width: 16px;
          height: 16px;
          color: var(--muted);
        }

        /* LANGUAGE SELECTOR */
        .meera-lang-selector {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 4px;
        }

        .meera-lang-label {
          font-size: 0.82rem;
          color: var(--muted);
          font-weight: 500;
        }

        .meera-lang-btn {
          border: 1px solid var(--line);
          background: var(--surface);
          color: var(--ink);
          border-radius: 8px;
          padding: 5px 12px;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .meera-lang-btn.active {
          background: #7C3AED;
          color: #ffffff;
          border-color: #7C3AED;
        }

        /* RIGHT SIDE: PHONE CHASSIS */
        .meera-right {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .meera-phone-chassis {
          width: 100%;
          max-width: min(324px, 100%);
          height: 560px;
          max-height: calc(100svh - var(--nav-total) - 30px);
          min-height: 500px;
          background: #FFFFFF;
          border: 8px solid #FFFFFF;
          border-radius: 42px;
          box-shadow:
            0 24px 60px -15px rgba(124, 58, 237, 0.18),
            0 0 0 1px rgba(0, 0, 0, 0.08),
            0 12px 24px -10px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        @media (max-width: 480px) {
          .meera-phone-chassis {
            max-width: min(310px, 100%);
            min-height: 490px;
            border-width: 7px;
            border-radius: 36px;
          }
        }

        @media (max-width: 360px) {
          .meera-phone-chassis {
            max-width: 284px;
            min-height: 460px;
            border-width: 5px;
            border-radius: 30px;
          }
        }

        :root[data-theme="dark"] .meera-phone-chassis,
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .meera-phone-chassis {
            background: #111322;
            border-color: #1A1D33;
            box-shadow:
              0 30px 80px -15px rgba(110, 66, 255, 0.3),
              0 0 0 1px rgba(255, 255, 255, 0.12),
              0 0 40px -10px rgba(110, 66, 255, 0.2);
          }
        }

        @keyframes phoneVibrate {
          0% { transform: translate(0, 0) rotate(0deg); }
          20% { transform: translate(-3px, 2px) rotate(-1deg); }
          40% { transform: translate(3px, -2px) rotate(1deg); }
          60% { transform: translate(-2px, -1px) rotate(-0.5deg); }
          80% { transform: translate(2px, 1px) rotate(0.5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        .phone-vibrating {
          animation: phoneVibrate 0.4s infinite ease-in-out;
        }

        .meera-phone-notch {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 90px;
          height: 20px;
          background: rgba(0, 0, 0, 0.08);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          z-index: 10;
        }

        :root[data-theme="dark"] .meera-phone-notch,
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .meera-phone-notch {
            background: rgba(255, 255, 255, 0.08);
          }
        }

        .meera-phone-speaker {
          width: 38px;
          height: 4px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }

        .meera-phone-camera {
          width: 6px;
          height: 6px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 50%;
        }

        :root[data-theme="dark"] .meera-phone-speaker,
        :root[data-theme="dark"] .meera-phone-camera,
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .meera-phone-speaker,
          :root:not([data-theme="light"]) .meera-phone-camera {
            background: rgba(255, 255, 255, 0.25);
          }
        }

        /* SCREEN */
        .meera-screen {
          flex: 1;
          background: linear-gradient(180deg, #FAFAFE 0%, #F3F1FA 100%);
          border-radius: 36px;
          padding: 44px 20px 24px 20px;
          display: flex;
          flex-direction: column;
          color: #111827;
        }

        :root[data-theme="dark"] .meera-screen,
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .meera-screen {
            background: linear-gradient(180deg, #131528 0%, #0E1020 100%);
            color: #F3F4F6;
          }
        }

        .meera-call-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          text-align: center;
        }

        .meera-incoming-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          background: rgba(124, 58, 237, 0.1);
          border-radius: 999px;
          color: #7C3AED;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        :root[data-theme="dark"] .meera-incoming-pill,
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .meera-incoming-pill {
            background: rgba(139, 92, 246, 0.2);
            color: #C4B5FD;
          }
        }

        .pulsing-call-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #7C3AED;
          animation: dotPulse 1.2s infinite ease-in-out;
        }

        @keyframes dotPulse {
          0% { transform: scale(0.9); opacity: 0.6; }
          50% { transform: scale(1.4); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.6; }
        }

        /* AVATAR */
        .meera-avatar-container {
          position: relative;
          width: 104px;
          height: 104px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 10px 0;
        }

        .meera-avatar-circle {
          width: 86px;
          height: 86px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7C3AED 0%, #A855F7 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 28px -6px rgba(124, 58, 237, 0.5);
          position: relative;
          z-index: 2;
        }

        .meera-avatar-letter {
          font-size: 2.2rem;
          font-weight: 800;
          color: #FFFFFF;
          font-family: inherit;
        }

        .meera-ring {
          position: absolute;
          border-radius: 50%;
          border: 1.5px solid rgba(124, 58, 237, 0.35);
          pointer-events: none;
        }

        .ring-1 {
          width: 110px;
          height: 110px;
          animation: ringPulse 2.4s infinite ease-out;
        }

        .ring-2 {
          width: 130px;
          height: 130px;
          animation: ringPulse 2.4s infinite ease-out 0.8s;
        }

        @keyframes ringPulse {
          0% { transform: scale(0.85); opacity: 0.8; }
          100% { transform: scale(1.25); opacity: 0; }
        }

        .meera-caller-info {
          margin: 6px 0;
        }

        .meera-caller-name {
          font-size: 1.65rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .meera-caller-role {
          font-size: 0.82rem;
          color: #6B7280;
          margin: 4px 0 6px 0;
          font-weight: 500;
        }

        :root[data-theme="dark"] .meera-caller-role,
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .meera-caller-role {
            color: #9CA3AF;
          }
        }

        .meera-caller-num {
          font-family: monospace;
          font-size: 0.95rem;
          color: #4B5563;
          margin: 0;
          letter-spacing: 0.04em;
        }

        :root[data-theme="dark"] .meera-caller-num,
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .meera-caller-num {
            color: #D1D5DB;
          }
        }

        /* ACTIONS */
        .meera-call-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 46px;
          width: 100%;
          margin-top: 10px;
        }

        .meera-action-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .meera-action-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.2s ease;
        }

        .meera-action-btn:hover {
          transform: scale(1.08);
        }

        .btn-decline {
          background: #EF4444;
          box-shadow: 0 10px 24px -6px rgba(239, 68, 68, 0.6);
        }

        .btn-accept {
          background: #10B981;
          box-shadow: 0 10px 24px -6px rgba(16, 185, 129, 0.7);
          animation: acceptGlow 2s infinite ease-in-out;
        }

        @keyframes acceptGlow {
          0%, 100% { box-shadow: 0 10px 24px -6px rgba(16, 185, 129, 0.7); }
          50% { box-shadow: 0 0 28px 6px rgba(16, 185, 129, 0.55); }
        }

        .meera-action-icon {
          width: 24px;
          height: 24px;
        }

        .meera-action-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: #6B7280;
        }

        .accept-label {
          color: #10B981;
        }

        .meera-screen-hint {
          font-size: 0.72rem;
          color: #9CA3AF;
          margin: 0;
          letter-spacing: 0.02em;
        }

        /* CONNECTED VIEW */
        .connected-pill {
          background: rgba(16, 185, 129, 0.12);
          color: #059669;
        }

        :root[data-theme="dark"] .connected-pill,
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .connected-pill {
            background: rgba(16, 185, 129, 0.2);
            color: #34D399;
          }
        }

        .connected-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10B981;
        }

        .meera-avatar-compact {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 10px;
        }

        .meera-avatar-circle.compact {
          width: 58px;
          height: 58px;
        }

        .meera-avatar-circle.compact .meera-avatar-letter {
          font-size: 1.5rem;
        }

        .meera-avatar-circle.ended {
          width: 64px;
          height: 64px;
          background: rgba(16, 185, 129, 0.12);
          box-shadow: none;
        }

        .meera-caller-name-compact {
          font-size: 1.15rem;
          font-weight: 700;
          margin: 6px 0 2px 0;
        }

        .meera-caller-role-compact {
          font-size: 0.75rem;
          color: #6B7280;
          margin: 0;
        }

        :root[data-theme="dark"] .meera-caller-role-compact,
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .meera-caller-role-compact {
            color: #9CA3AF;
          }
        }

        /* EQUALIZER */
        .meera-equalizer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          height: 36px;
          margin: 8px 0;
        }

        .eq-bar {
          width: 4px;
          background: #7C3AED;
          border-radius: 999px;
          animation: waveJump 1s infinite ease-in-out;
        }

        .bar-1 { height: 14px; animation-delay: 0.1s; }
        .bar-2 { height: 26px; animation-delay: 0.3s; }
        .bar-3 { height: 34px; animation-delay: 0.15s; }
        .bar-4 { height: 20px; animation-delay: 0.4s; }
        .bar-5 { height: 30px; animation-delay: 0.25s; }
        .bar-6 { height: 18px; animation-delay: 0.35s; }
        .bar-7 { height: 10px; animation-delay: 0.05s; }

        @keyframes waveJump {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }

        /* SPEECH BUBBLE */
        .meera-speech-bubble {
          background: rgba(124, 58, 237, 0.08);
          border: 1px solid rgba(124, 58, 237, 0.18);
          border-radius: 16px;
          padding: 12px 14px;
          text-align: left;
          max-width: 250px;
          margin: 0 auto;
        }

        :root[data-theme="dark"] .meera-speech-bubble,
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .meera-speech-bubble {
            background: rgba(139, 92, 246, 0.15);
            border-color: rgba(139, 92, 246, 0.3);
          }
        }

        .meera-transcript-quote {
          font-size: 0.78rem;
          line-height: 1.45;
          color: inherit;
          margin: 0;
        }

        /* IN CALL CONTROLS */
        .meera-in-call-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 10px;
        }

        .meera-ctrl-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.1);
          background: rgba(0, 0, 0, 0.05);
          color: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        :root[data-theme="dark"] .meera-ctrl-btn,
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .meera-ctrl-btn {
            border-color: rgba(255, 255, 255, 0.15);
            background: rgba(255, 255, 255, 0.08);
          }
        }

        .meera-ctrl-btn.active {
          background: #7C3AED;
          color: #FFFFFF;
          border-color: #7C3AED;
        }

        .meera-ctrl-btn.end-call-btn {
          width: 52px;
          height: 52px;
          background: #EF4444;
          color: #FFFFFF;
          border: none;
          box-shadow: 0 8px 18px -4px rgba(239, 68, 68, 0.6);
        }

        .meera-ctrl-btn.end-call-btn:hover {
          transform: scale(1.06);
        }

        /* ENDED VIEW */
        .meera-ended-box {
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 14px;
          padding: 14px 16px;
          margin: 16px 0;
          font-size: 0.8rem;
          color: #059669;
        }

        :root[data-theme="dark"] .meera-ended-box,
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .meera-ended-box {
            background: rgba(16, 185, 129, 0.15);
            border-color: rgba(16, 185, 129, 0.3);
            color: #34D399;
          }
        }

        .meera-reset-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #7C3AED;
          color: #FFFFFF;
          border: none;
          border-radius: 10px;
          padding: 9px 16px;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .meera-reset-btn:hover {
          opacity: 0.9;
        }
      `}} />
    </section>
  );
}
