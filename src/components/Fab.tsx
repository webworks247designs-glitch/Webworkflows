"use client";

import React, { useState, useEffect, useRef } from "react";
import { getWhatsAppGrowthPlanLink, trackFunnelEvent } from "@/lib/analytics";
import { queryKnowledgeBase } from "@/data/knowledge/knowledgeStore";

interface ChatMessage {
  id: string;
  sender: "user" | "meera";
  text: string;
  timestamp: string;
  actionType?: "whatsapp" | "booking" | "growth-plan";
}

const GREETINGS: Record<"English" | "Telugu" | "Hindi", string> = {
  English:
    "Hello! I am Meera, the AI assistant at Webworkflo's.",
  Telugu:
    "నమస్కారం! నేను వెబ్‌వర్క్‌ఫ్లోస్ AI అసిస్టెంట్ మీరాని.",
  Hindi:
    "नमस्ते! मैं वेबवर्कफ्लोस की AI असिस्टेंट मीरा हूँ।",
};

const PROMPT_CHIPS: Record<"English" | "Telugu" | "Hindi", { label: string; query: string }[]> = {
  English: [
    { label: "Differentiate Price Models", query: "Differentiate the price models" },
    { label: "Fixed ₹8,999 Package", query: "What is included in the Fixed Website Package starting from ₹8,999?" },
    { label: "Enquiry ₹4,749 Model", query: "How does the ₹4,749 enquiry model and pay-per-lead work?" },
    { label: "Salon Case Study (₹3,300)", query: "Tell me about the Shobana Salon case study with 479 leads and ₹3,300 billing" },
    { label: "Call Founder Srishanth", query: "I want to arrange a direct call with Founder Srishanth" },
  ],
  Telugu: [
    { label: "ప్రైసింగ్ మోడల్స్ తేడా", query: "ప్రైసింగ్ మోడల్స్ మధ్య తేడా ఏమిటి?" },
    { label: "ఫిక్స్‌డ్ ₹8,999 ప్యాకేజ్", query: "ఫిక్స్‌డ్ వెబ్‌సైట్ ప్యాకేజ్ ₹8,999 వివరాలు ఏమిటి?" },
    { label: "ఎంక్వైరీ ₹4,749 మోడల్", query: "₹4,749 ఎంక్వైరీ మోడల్ మరియు హోస్టింగ్ వివరాలు ఏమిటి?" },
    { label: "శెలూన్ కేస్ స్టడీ (₹3,300)", query: "శోభన సెలూన్ కేస్ స్టడీ వివరాలు చెప్పండి" },
    { label: "ఫౌండర్‌తో మాట్లాడండి", query: "ఫౌండర్ శ్రీశాంత్ గారితో నేరుగా మాట్లాడటం ఎలా?" },
  ],
  Hindi: [
    { label: "प्राइसिंग मॉडल्स में अंतर", query: "प्राइसिंग मॉडल्स में क्या अंतर है?" },
    { label: "फिक्स्ड ₹8,999 पैकेज", query: "फिक्स्ड वेबसाइट पैकेज ₹8,999 में क्या शामिल है?" },
    { label: "इन्क्वायरी ₹4,749 मॉडल", query: "₹4,749 इन्क्वायरी मॉडल और होस्टिंग कैसे काम करता है?" },
    { label: "सैलून केस स्टडी (₹3,300)", query: "शोभना सैलून केस स्टडी और ₹3,300 बिलिंग के बारे में बताएं" },
    { label: "फाउंडर से बात करें", query: "फाउंडर श्रीशांत जी से सीधे कॉल कैसे अरेंज करें?" },
  ],
};

export default function Fab() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<"English" | "Telugu" | "Hindi">("English");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Founder Direct Call Booking State
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingBusiness, setBookingBusiness] = useState("");
  const [bookingStatus, setBookingStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [bookingFeedback, setBookingFeedback] = useState("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Initialize or reset chat on language switch
  useEffect(() => {
    setMessages([
      {
        id: "init-msg",
        sender: "meera",
        text: GREETINGS[selectedLanguage],
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  }, [selectedLanguage]);

  // Scroll messages to bottom smoothly inside the container
  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    trackFunnelEvent("cta_click", { source: "floating_meera_chat", query: text, language: selectedLanguage });

    const lower = text.toLowerCase();

    setTimeout(() => {
      let replyText = "";
      let actionType: "whatsapp" | "booking" | "growth-plan" | undefined = undefined;

      // 1. Founder Call intent
      if (
        lower.includes("call") ||
        lower.includes("srishanth") ||
        lower.includes("founder") ||
        lower.includes("కాల్") ||
        lower.includes("बात")
      ) {
        if (selectedLanguage === "Telugu") {
          replyText = "ఖచ్చితంగా! కింద ఉన్న బటన్‌ను క్లిక్ చేసి మీ వివరాలు తెలియజేయండి. ఫౌండర్ శ్రీశాంత్ గారు నేరుగా మీకు కాల్ చేస్తారు.";
        } else if (selectedLanguage === "Hindi") {
          replyText = "ज़रूर! नीचे दिए बटन पर क्लिक करके अपनी डिटेल्स दर्ज करें। फाउंडर श्रीशांत जी सीधे आपसे संपर्क करेंगे।";
        } else {
          replyText = "Certainly! Click the button below to submit your preferred time, and Founder Srishanth will connect with you directly.";
        }
        actionType = "booking";
      }
      // 2. Differentiate / Compare Pricing Models
      else if (
        lower.includes("differentiate") ||
        lower.includes("difference") ||
        lower.includes("compare") ||
        lower.includes("pricing model") ||
        lower.includes("price model") ||
        lower.includes("models") ||
        lower.includes("options") ||
        lower.includes("తేడా") ||
        lower.includes("మోడల్స్") ||
        lower.includes("రకాలు") ||
        lower.includes("अंतर") ||
        lower.includes("मॉडल")
      ) {
        if (selectedLanguage === "Telugu") {
          replyText = "వెబ్‌వర్క్‌ఫ్లోస్ రెండు స్పష్టమైన ఇన్వెస్ట్‌మెంట్ మోడళ్లను అందిస్తుంది:\n\n1. ఫిక్స్‌డ్ వెబ్‌సైట్ ప్యాకేజ్ (₹8,999 నుండి):\nపూర్తిగా కస్టమ్ నెక్స్ట్.జేఎస్ వెబ్‌సైట్, మొబైల్-ఫస్ట్ డిజైన్, వాట్సాప్ లీడ్ రూటింగ్, మరియు 100% సోర్స్ కోడ్ & డొమైన్ యాజమాన్యం. ఎటువంటి నెలవారీ ప్లాట్‌ఫారమ్ మెయింటెనెన్స్ ఫీజులు ఉండవు.\n\n2. ఎంక్వైరీ-బేస్డ్ పర్ఫార్మెన్స్ మోడల్ (₹4,749 ఒకేసారి లాంచ్, హోస్టింగ్ సహితం):\nక్లౌడ్ హోస్టింగ్ పూర్తిగా ఈ లాంచ్ సెటప్‌లోనే ఉంది. మీరు కేవలం వెరిఫై అయిన జెన్యూన్ కస్టమర్ ఎంక్వైరీలకు మాత్రమే ముందుగా నిర్ణయించిన రుసుము చెల్లిస్తారు (ఉదా. ₹80 నుండి ₹150). 48 గంటల డిస్ప్యూట్ ప్రొటెక్షన్‌తో ఫేక్ లేదా తప్పుడు నంబర్లకు ₹0 ఛార్జ్.";
        } else if (selectedLanguage === "Hindi") {
          replyText = "वेबवर्कफ्लोस दो पारदर्शी मॉडल्स प्रदान करता है:\n\n1. फिक्स्ड वेबसाइट पैकेज (₹8,999 से शुरू):\nपूरी तरह से कस्टम नेक्स्ट.जेएस वेबसाइट, मोबाइल-फ़र्स्ट आर्किटेक्चर, व्हाट्सएप डायरेक्ट लीड फ्लो, और 100% कोड ओनरशिप, बिना किसी मासिक प्लेटफ़ॉर्म चार्ज के।\n\n2. इन्क्वायरी-बेस्ड परफॉर्मेंस मॉडल (₹4,749 वन-टाइम लॉन्च, क्लाउड होस्टिंग शामिल):\nक्लाउड होस्टिंग इसी लॉन्च पैकेज में शामिल है। आप केवल वेरिफाइड असली कस्टमर लीड्स/कॉल्स पर तय फीस पे करते हैं (जैसे ₹80 से ₹150), 48 घंटे की डिस्प्यूट विंडो के साथ।";
        } else {
          replyText = "Webworkflo's offers two distinct investment models:\n\n1. Fixed Website Package (Starting from ₹8,999):\nComplete bespoke Next.js development, mobile-first UX, instant WhatsApp lead flow, local SEO schema, and 100% source code & domain ownership with zero recurring monthly platform fees.\n\n2. Enquiry-Based Performance Model (₹4,749 one-time launch, hosting included):\nCloud hosting is fully included at ₹0 ongoing fee. You pay an agreed rate (e.g. ₹80 to ₹150) ONLY for verified, high-intent prospective customers who contact your business, backed by a 48-hour dispute window in your portal where invalid or unreachable numbers are excluded at ₹0 charge.";
        }
      }
      // 3. Specific Fixed Package
      else if (
        lower.includes("8999") ||
        lower.includes("fixed") ||
        lower.includes("package") ||
        lower.includes("8,999")
      ) {
        if (selectedLanguage === "Telugu") {
          replyText = "మా ఫిక్స్‌డ్ వెబ్‌సైట్ ప్యాకేజ్ ₹8,999 నుండి ప్రారంభమవుతుంది. ఇందులో మొబైల్-ఫస్ట్ నెక్స్ట్.జేఎస్ కోడింగ్, వాట్సాప్ లీడ్ రూటింగ్, మరియు 100% సోర్స్ కోడ్ యాజమాన్యం ఉంటాయి. ఎటువంటి నెలవారీ ప్లాట్‌ఫారమ్ ఫీజులు ఉండవు.";
        } else if (selectedLanguage === "Hindi") {
          replyText = "हमारा फिक्स्ड वेबसाइट पैकेज ₹8,999 से शुरू होता है। इसमें पूरी तरह से कस्टम नेक्स्ट.जेएस कोड, व्हाट्सएप लीड फ्लो और 100% कोड ओनरशिप मिलती है। कोई हर महीने का हिडन चार्ज नहीं है।";
        } else {
          replyText = "Our Fixed Custom Website Package starts from ₹8,999. It includes bespoke Next.js engineering, instant WhatsApp lead capture, complete local SEO setup, and 100% full source code ownership with zero recurring monthly platform fees.";
        }
      }
      // 4. Specific Enquiry Model
      else if (
        lower.includes("4749") ||
        lower.includes("4,749") ||
        lower.includes("enquiry") ||
        lower.includes("hosting") ||
        lower.includes("lead")
      ) {
        if (selectedLanguage === "Telugu") {
          replyText = "మా ఎంక్వైరీ మోడల్ ఒకేసారి ₹4,749 లాంచ్ సెటప్‌తో మొదలవుతుంది (క్లౌడ్ హోస్టింగ్ పూర్తిగా ఇందులో ఉంది). మీరు కేవలం వెరిఫై అయిన జెన్యూన్ కస్టమర్ ఎంక్వైరీలకు మాత్రమే చెల్లిస్తారు (ఉదా. ₹80 నుండి ₹150). 48 గంటల డిస్ప్యూట్ సౌకర్యం కూడా ఉంది.";
        } else if (selectedLanguage === "Hindi") {
          replyText = "हमारा इन्क्वायरी मॉडल केवल ₹4,749 वन-टाइम लॉन्च चार्ज से शुरू होता है (क्लाउड होस्टिंग इसी में शामिल है)। आप केवल असली, वेरिफाइड कस्टमर कॉल्स/लीड्स के लिए पे करते हैं और 48 घंटे की डिस्प्यूट विंडो भी उपलब्ध है।";
        } else {
          replyText = "Our Enquiry-Based Model features a ₹4,749 one-time launch setup with cloud hosting fully included. You pay a pre-agreed fee only for verified, high-intent prospective customers who contact your business, backed by a 48-hour dispute filter in your portal.";
        }
      }
      // 5. Case Study
      else if (
        lower.includes("salon") ||
        lower.includes("shobana") ||
        lower.includes("479") ||
        lower.includes("330") ||
        lower.includes("3300")
      ) {
        replyText =
          "In our Shobana Men's Luxury Salon Hyderabad case study: 479 total leads were captured, 330 were verified billable appointments, and total client billing was just ₹3,300 under our pay-per-lead model, delivering over 10x ROI.";
      }
      // 6. Knowledge Store Fallback
      else {
        const kb = queryKnowledgeBase(text, selectedLanguage);
        replyText =
          kb ||
          (selectedLanguage === "Telugu"
            ? "మీ ప్రశ్నకు వివరాల కోసం మీరు మా వాట్సాప్ ద్వారా నేరుగా కనెక్ట్ అవ్వవచ్చు లేదా ఫౌండర్ కాల్ బుక్ చేసుకోవచ్చు."
            : selectedLanguage === "Hindi"
            ? "विस्तृत जानकारी के लिए आप सीधे हमारे व्हाट्सएप पर कनेक्ट कर सकते हैं या फाउंडर से कॉल शेड्यूल कर सकते हैं।"
            : "For specific requirements, you can message directly on WhatsApp for a Free Website Growth Plan or request a direct founder call.");
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "meera",
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        actionType,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingPhone.trim()) {
      setBookingFeedback("Please enter a valid phone number.");
      return;
    }

    setBookingStatus("submitting");
    try {
      const res = await fetch("/api/meera/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName: bookingName.trim() || "Prospective Client",
          phone: bookingPhone.trim(),
          businessType: bookingBusiness.trim() || "General Inquiry",
          language: selectedLanguage,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setBookingStatus("success");
        setBookingFeedback("Call request sent! Founder Srishanth M. will call you back within 24 hours.");
        trackFunnelEvent("lead_capture", {
          source: "floating_meera_call_request",
          business: bookingBusiness,
        });

        // Automatically open WhatsApp directly to Founder Srishanth M.
        if (data?.founderWhatsAppLink) {
          window.open(data.founderWhatsAppLink, "_blank");
        }
      } else {
        setBookingStatus("error");
        setBookingFeedback("Unable to submit right now. Please message directly on WhatsApp.");
      }
    } catch {
      setBookingStatus("error");
      setBookingFeedback("Network issue. Please connect directly on WhatsApp.");
    }
  };

  return (
    <>
      {/* FLOATING ACTION POPOUT STACK */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "84px",
            right: "20px",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "12px",
            maxWidth: "calc(100vw - 32px)",
          }}
        >
          {/* 1. WHATSAPP FAST ACTION BUTTON */}
          <a
            href={getWhatsAppGrowthPlanLink("FloatingMeera_WhatsAppButton")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackFunnelEvent("whatsapp_click", { source: "floating_popout_whatsapp" })}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--wa)",
              color: "#FFFFFF",
              padding: "10px 18px",
              borderRadius: "4px",
              border: "1px solid var(--wa)",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "0.88rem",
              letterSpacing: "0.01em",
              cursor: "pointer",
            }}
          >
            <svg style={{ width: "18px", height: "18px", fill: "currentColor" }} viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Chat on WhatsApp: Free Growth Plan</span>
          </a>

          {/* 2. MEERA AI CHAT ASSISTANT WINDOW */}
          <div className="chat-window">
            {/* Window Header */}
            <div className="chat-header">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--wa)",
                    display: "inline-block",
                  }}
                />
                <div>
                  <strong style={{ fontSize: "0.95rem", display: "block", color: "#FFFFFF", lineHeight: 1.1 }}>
                    Meera AI Assistant
                  </strong>
                  <span style={{ fontSize: "0.75rem", color: "#94A3B8", display: "block" }}>
                    Online | Webworkflo&apos;s
                  </span>
                </div>
              </div>

              {/* Language Selector */}
              <div style={{ display: "flex", gap: "4px" }}>
                {(["English", "Telugu", "Hindi"] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setSelectedLanguage(lang)}
                    style={{
                      padding: "4px 8px",
                      fontSize: "0.72rem",
                      borderRadius: "4px",
                      border: "none",
                      background: selectedLanguage === lang ? "var(--wa)" : "rgba(255,255,255,0.18)",
                      color: "#FFFFFF",
                      cursor: "pointer",
                      fontWeight: 700,
                    }}
                  >
                    {lang === "English" ? "EN" : lang === "Telugu" ? "TE" : "HI"}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#FFFFFF",
                    fontSize: "1.1rem",
                    cursor: "pointer",
                    padding: "0 4px",
                    marginLeft: "6px",
                  }}
                  aria-label="Close assistant"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                background: "var(--bg)",
              }}
            >
              {messages.map((m) => {
                const isMeera = m.sender === "meera";
                return (
                  <div
                    key={m.id}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: isMeera ? "flex-start" : "flex-end",
                    }}
                  >
                    <div className={isMeera ? "chat-meera-bubble" : "chat-user-bubble"}>
                      {m.text}
                    </div>

                    {/* Action buttons if triggered */}
                    {m.actionType === "booking" && (
                      <button
                        type="button"
                        onClick={() => setShowBookingModal(true)}
                        style={{
                          marginTop: "8px",
                          padding: "8px 14px",
                          borderRadius: "4px",
                          border: "1px solid var(--wa)",
                          background: "var(--wa)",
                          color: "#FFFFFF",
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        Request Direct Call With Founder Srishanth
                      </button>
                    )}

                    <span style={{ fontSize: "0.7rem", color: "var(--muted)", marginTop: "3px" }}>
                      {m.timestamp}
                    </span>
                  </div>
                );
              })}

              {/* SKELETON LOADER WHILE MEERA IS GENERATING */}
              {isTyping && (
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                    padding: "12px",
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: "4px",
                    maxWidth: "88%",
                  }}
                >
                  <div className="skeleton-box" style={{ width: "22px", height: "22px", flexShrink: 0 }} />
                  <div style={{ display: "grid", gap: "6px", width: "100%" }}>
                    <div className="skeleton-text" style={{ width: "80%" }} />
                    <div className="skeleton-text" style={{ width: "95%" }} />
                    <div className="skeleton-text" style={{ width: "55%" }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div
              style={{
                padding: "8px 12px",
                background: "var(--surface)",
                borderTop: "1px solid var(--line)",
                display: "flex",
                gap: "6px",
                overflowX: "auto",
                whiteSpace: "nowrap",
              }}
            >
              {PROMPT_CHIPS[selectedLanguage].map((c, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSendMessage(c.query)}
                  className="chat-chip"
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              style={{
                padding: "10px 12px",
                background: "var(--surface)",
                borderTop: "1px solid var(--line-strong)",
                display: "flex",
                gap: "8px",
              }}
            >
              <input
                type="text"
                className="chat-input-field"
                placeholder={
                  selectedLanguage === "Telugu"
                    ? "మీ సందేశాన్ని టైప్ చేయండి..."
                    : selectedLanguage === "Hindi"
                    ? "अपना सवाल यहाँ लिखें..."
                    : "Ask about pricing, case studies..."
                }
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                type="submit"
                style={{
                  padding: "8px 16px",
                  borderRadius: "4px",
                  border: "none",
                  background: "var(--wa)",
                  color: "#FFFFFF",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}

      {/* PRIMARY FLOATING TRIGGER BUTTON */}
      <button
        type="button"
        onClick={() => {
          const nextState = !isOpen;
          setIsOpen(nextState);
          trackFunnelEvent("cta_click", { source: "floating_meera_toggle", state: nextState ? "open" : "closed" });
        }}
        aria-label="Toggle Meera AI Assistant and WhatsApp"
        className="floating-assistant-btn"
      >
        <span
          style={{
            width: "9px",
            height: "9px",
            borderRadius: "50%",
            background: "var(--wa)",
            display: "inline-block",
          }}
        />
        <span>{isOpen ? "Close Assistant" : "Ask Meera AI"}</span>
      </button>

      {/* FOUNDER DIRECT CALL MODAL */}
      {showBookingModal && (
        <div
          className="lightbox-backdrop"
          onClick={() => setShowBookingModal(false)}
          style={{ zIndex: 10000 }}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "480px",
              borderRadius: "4px",
              border: "1px solid var(--line-strong)",
              background: "var(--surface)",
              padding: "24px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h3 style={{ margin: 0, fontSize: "1.2rem", color: "var(--ink)" }}>Request Direct Founder Call</h3>
              <button
                type="button"
                onClick={() => setShowBookingModal(false)}
                style={{ background: "none", border: "none", fontSize: "1.2rem", cursor: "pointer", color: "var(--muted)" }}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <p style={{ fontSize: "0.88rem", color: "var(--muted)", marginBottom: "16px" }}>
              Leave your contact info and Founder Srishanth M. will call you back within 24 hours to discuss your website project.
            </p>

            <form onSubmit={handleBookingSubmit} style={{ display: "grid", gap: "12px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "var(--ink)", marginBottom: "4px" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  value={bookingName}
                  onChange={(e) => setBookingName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    border: "1px solid var(--line-strong)",
                    background: "var(--bg)",
                    color: "var(--ink)",
                    fontSize: "0.9rem",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "var(--ink)", marginBottom: "4px" }}>
                  Phone Number (Required)
                </label>
                <input
                  type="tel"
                  required
                  value={bookingPhone}
                  onChange={(e) => setBookingPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    border: "1px solid var(--line-strong)",
                    background: "var(--bg)",
                    color: "var(--ink)",
                    fontSize: "0.9rem",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "var(--ink)", marginBottom: "4px" }}>
                  Business Type
                </label>
                <input
                  type="text"
                  value={bookingBusiness}
                  onChange={(e) => setBookingBusiness(e.target.value)}
                  placeholder="e.g. Salon, Restaurant, Clinic, Retail"
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    border: "1px solid var(--line-strong)",
                    background: "var(--bg)",
                    color: "var(--ink)",
                    fontSize: "0.9rem",
                  }}
                />
              </div>

              {bookingFeedback && (
                <div
                  style={{
                    fontSize: "0.86rem",
                    color: bookingStatus === "success" ? "var(--wa)" : "#DC2626",
                    background: bookingStatus === "success" ? "rgba(37, 211, 102, 0.1)" : "rgba(220, 38, 38, 0.1)",
                    border: `1px solid ${bookingStatus === "success" ? "rgba(37, 211, 102, 0.3)" : "rgba(220, 38, 38, 0.3)"}`,
                    borderRadius: "6px",
                    padding: "10px 12px",
                    margin: "4px 0",
                  }}
                >
                  {bookingFeedback}
                </div>
              )}

              {bookingStatus === "success" ? (
                <a
                  href={`https://wa.me/919959896378?text=${encodeURIComponent(
                    `Hi Srishanth, I just requested a callback on your website for my ${bookingBusiness || "business"} (${bookingName || "Client"}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    marginTop: "6px",
                    padding: "12px 18px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: 700,
                    color: "#FFFFFF",
                  }}
                >
                  Chat with Srishanth on WhatsApp &rarr;
                </a>
              ) : (
                <button
                  type="submit"
                  disabled={bookingStatus === "submitting"}
                  style={{
                    marginTop: "6px",
                    padding: "12px 18px",
                    borderRadius: "6px",
                    border: "none",
                    background: "var(--wa)",
                    color: "#FFFFFF",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {bookingStatus === "submitting" ? "Scheduling..." : "Schedule Callback"}
                </button>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
