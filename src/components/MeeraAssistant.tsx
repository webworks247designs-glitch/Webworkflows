"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Send,
  User,
  Bot,
  RotateCcw,
  CheckCircle2,
  Calendar,
  Phone,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  HelpCircle,
  X,
  Loader2,
} from "lucide-react";
import { queryKnowledgeBase } from "@/data/knowledge/knowledgeStore";
import { trackFunnelEvent } from "@/lib/analytics";

interface ChatMessage {
  id: string;
  sender: "user" | "meera";
  text: string;
  timestamp: string;
  actionType?: "whatsapp" | "booking" | "growth-plan";
}

const initialGreetings: Record<"English" | "Telugu" | "Hindi", string> = {
  English:
    "Hello! I am Meera, the AI assistant at Webworkflo's. I can answer questions about our ₹3,000 launch pricing, verified per-enquiry billing, portfolio case studies, or help you request a 100% Free Website Growth Plan. How can I help you today?",
  Telugu:
    "నమస్కారం! నేను వెబ్‌వర్క్‌ఫ్లోస్ AI అసిస్టెంట్ మీరాని. మా ₹3,000 లాంచ్ మోడల్, వెరిఫైడ్ ఎంక్వైరీ బిల్లింగ్ లేదా ఫ్రీ వెబ్‌సైట్ గ్రోత్ ప్లాన్ గురించి ఏ వివరాలైనా నన్ను అడగవచ్చు. మీకు ఎలా సహాయపడగలను?",
  Hindi:
    "नमस्ते! मैं वेबवर्कफ्लोस की AI असिस्टेंट मीरा हूँ। आप हमारी ₹3,000 वेबसाइट लॉन्च प्राइसिंग, वेरिफाइड लीड्स बिलिंग या फ्री वेबसाइट ग्रोथ प्लान के बारे में कुछ भी पूछ सकते हैं। बताइए मैं आपकी क्या मदद करूँ?",
};

const quickChips: Record<"English" | "Telugu" | "Hindi", { label: string; query: string; isFounder?: boolean }[]> = {
  English: [
    { label: "💰 ₹3,000 Pricing", query: "What is the cost and pricing model?" },
    { label: "🎁 Free Growth Plan", query: "Tell me about the Free Website Growth Plan" },
    { label: "✂️ Salon Case Study", query: "Tell me about the Shobana Men's Salon case study" },
    { label: "🛡️ Verified Leads", query: "What is a qualified enquiry and 48-hour dispute window?" },
    { label: "⚡ 99/100 Speed", query: "What technology and speed do you deliver?" },
    { label: "🍽️ Boat House Sample", query: "Tell me about The Boat House restaurant live sample" },
    { label: "📞 Call Founder", query: "How can I contact Founder Srishanth directly?", isFounder: true },
  ],
  Telugu: [
    { label: "💰 ₹3,000 ధరల వివరాలు", query: "వెబ్‌సైట్ ధర మరియు ఖర్చుల వివరాలు ఏమిటి?" },
    { label: "🎁 ఉచిత గ్రోత్ ప్లాన్", query: "ఫ్రీ వెబ్‌సైట్ గ్రోత్ ప్లాన్ గురించి చెప్పండి" },
    { label: "✂️ శోభన సెలూన్ ప్రూఫ్", query: "శోభన మెన్స్ సెలూన్ కేస్ స్టడీ వివరాలు చెప్పండి" },
    { label: "🛡️ వెరిఫైడ్ లీడ్స్", query: "క్వాలిఫైడ్ లీడ్ అంటే ఏమిటి మరియు డిస్ప్యూట్ విధానం?" },
    { label: "⚡ స్పీడ్ & కోడ్", query: "వెబ్‌సైట్ స్పీడ్ మరియు టెక్నాలజీ ఏమిటి?" },
    { label: "🍽️ బోట్ హౌస్ సైట్", query: "ది బోట్ హౌస్ రెస్టారెంట్ వెబ్‌సైట్ వివరాలు చెప్పండి" },
    { label: "📞 ఫౌండర్ కాంటాక్ట్", query: "ఫౌండర్ శ్రీశాంత్ గారి నంబర్ మరియు కాంటాక్ట్ వివరాలు?", isFounder: true },
  ],
  Hindi: [
    { label: "💰 ₹3,000 प्राइसिंग", query: "वेबसाइट का खर्च और प्राइसिंग मॉडल क्या है?" },
    { label: "🎁 फ्री ग्रोथ प्लान", query: "फ्री वेबसाइट ग्रोथ प्लान के बारे में बताएं" },
    { label: "✂️ शोभना सैलून प्रूफ", query: "शोभना सैलून केस स्टडी के बारे में बताएं" },
    { label: "🛡️ वेरिफाइड लीड्स", query: "क्वालिफाइड लीड और 48 घंटे की डिस्प्यूट विंडो क्या है?" },
    { label: "⚡ 99/100 स्पीड", query: "वेबसाइट की स्पीड और तकनीक क्या है?" },
    { label: "🍽️ बोट हाउस साइट", query: "द बोट हाउस रेस्टोरेंट वेबसाइट के बारे में बताएं" },
    { label: "📞 फाउंडर से बात", query: "फाउंडर श्रीशांत जी से सीधे कैसे बात करें?", isFounder: true },
  ],
};

export default function MeeraAssistant() {
  const [selectedLanguage, setSelectedLanguage] = useState<"English" | "Telugu" | "Hindi">("English");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Founder Direct Call Booking Modal State
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingBusiness, setBookingBusiness] = useState("");
  const [bookingTime, setBookingTime] = useState("Within 24 Hours");
  const [bookingStatus, setBookingStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const messagesAreaRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isFirstRender = useRef(true);

  // Initialize or reset chat on language switch
  useEffect(() => {
    setMessages([
      {
        id: "msg-init",
        sender: "meera",
        text: initialGreetings[selectedLanguage],
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  }, [selectedLanguage]);

  // Auto-scroll ONLY inside the chat container when user actively chats (never hijacks the main window scroll)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (messagesAreaRef.current) {
      messagesAreaRef.current.scrollTo({
        top: messagesAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    trackFunnelEvent("cta_click", { source: "meera_chat_query", query: text, language: selectedLanguage });

    // Conversational small-talk & intent detection
    const cleanLower = text.toLowerCase().trim();

    setTimeout(() => {
      let replyText = "";
      let actionType: "whatsapp" | "booking" | "growth-plan" | undefined = undefined;

      // 1. Explicit Booking / Call request
      if (
        cleanLower.includes("book call") ||
        cleanLower.includes("call me") ||
        cleanLower.includes("arrange call") ||
        cleanLower.includes("speak to founder") ||
        cleanLower.includes("talk to srishanth") ||
        cleanLower.includes("షెడ్యూల్ కాల్") ||
        cleanLower.includes("కాల్ చేయండి") ||
        cleanLower.includes("बात करनी है")
      ) {
        if (selectedLanguage === "Telugu") {
          replyText = "ఖచ్చితంగా అండి! కింద ఉన్న బటన్‌ను క్లిక్ చేసి మీ వివరాలు నమోదు చేయండి, శ్రీశాంత్ గారు నేరుగా మీకు కాల్ చేస్తారు.";
        } else if (selectedLanguage === "Hindi") {
          replyText = "ज़रूर जी! नीचे दिए बटन पर क्लिक करके अपनी डिटेल्स सबमिट करें, श्रीशांत जी खुद आपको कॉल करेंगे।";
        } else {
          replyText = "Certainly! You can request a direct call with Founder Srishanth below, and he'll connect with you at your preferred time.";
        }
        actionType = "booking";
      }
      // 2. Explicit WhatsApp / Growth Plan request
      else if (
        cleanLower.includes("free plan") ||
        cleanLower.includes("growth plan") ||
        cleanLower.includes("గ్రోత్ ప్లాన్") ||
        cleanLower.includes("ఫ్రీ ప్లాన్") ||
        cleanLower.includes("फ्री प्लान")
      ) {
        const kb = queryKnowledgeBase(text, selectedLanguage);
        replyText =
          kb ||
          (selectedLanguage === "Telugu"
            ? "మా వెబ్‌సైట్ గ్రోత్ ప్లాన్ 100% ఉచితం మరియు జీరో-కమిట్‌మెంట్ అండి! మీ లోకల్ కాంపిటీటర్ల అనాలిసిస్ మరియు 3 ముఖ్యమైన వెబ్‌సైట్ ఐడియాలు 24 గంటల్లో వాట్సాప్‌లో పంపబడతాయి."
            : selectedLanguage === "Hindi"
            ? "हमारा वेबसाइट ग्रोथ प्लान 100% फ्री और बिना किसी कमिटमेंट के है जी! 24 घंटे में आपके व्हाट्सएप पर भेजा जाता है।"
            : "Our Website Growth Plan is 100% free with zero commitment, delivered within 24 hours on WhatsApp with competitor analysis and mobile improvements!");
        actionType = "growth-plan";
      }
      // 3. Greetings & Casual Hello
      else if (
        cleanLower === "hi" ||
        cleanLower === "hello" ||
        cleanLower === "hey" ||
        cleanLower === "namaste" ||
        cleanLower.startsWith("hi ") ||
        cleanLower.startsWith("hello ") ||
        cleanLower === "హలో" ||
        cleanLower === "నమస్తే" ||
        cleanLower === "నమస్కారం" ||
        cleanLower === "नमस्ते" ||
        cleanLower === "हेलो"
      ) {
        if (selectedLanguage === "Telugu") {
          replyText = "నమస్కారం అండి! ఎలా ఉన్నారు? వెబ్‌వర్క్‌ఫ్లోస్ గురించి మీరు ఏమి తెలుసుకోవాలనుకుంటున్నారు? మా ₹3,000 మోడల్, వెరిఫైడ్ లీడ్స్ లేదా పోర్ట్‌ఫోలియో గురించి నన్ను అడగవచ్చు!";
        } else if (selectedLanguage === "Hindi") {
          replyText = "नमस्ते जी! कैसे हैं आप? वेबवर्कफ्लोस की ₹3,000 वेबसाइट लॉन्च प्राइसिंग, स्पीड या केस स्टडीज के बारे में आप क्या जानना चाहते हैं?";
        } else {
          replyText = "Hello! Great to connect with you. How can I help you today? Feel free to ask about our ₹3,000 launch model, PageSpeed benchmarks, or how we turn visitors into paying leads.";
        }
      }
      // 4. Gratitude / Acknowledgment
      else if (
        cleanLower.includes("thank") ||
        cleanLower === "ok" ||
        cleanLower === "okay" ||
        cleanLower === "cool" ||
        cleanLower === "nice" ||
        cleanLower === "great" ||
        cleanLower === "super" ||
        cleanLower === "థాంక్స్" ||
        cleanLower === "సరే" ||
        cleanLower === "ధన్యవాదాలు" ||
        cleanLower === "शुक्रिया" ||
        cleanLower === "धन्यवाद" ||
        cleanLower === "ठीक है" ||
        cleanLower === "बढ़िया"
      ) {
        if (selectedLanguage === "Telugu") {
          replyText = "చాలా సంతోషం అండి! మీకు ఇంకా ఏవైనా సందేహాలు ఉంటే అడగండి, సమాధానం ఇవ్వడానికి నేను ఎల్లప్పుడూ సిద్ధంగా ఉన్నాను.";
        } else if (selectedLanguage === "Hindi") {
          replyText = "आपका बहुत स्वागत है जी! अगर कोई और सवाल हो तो ज़रूर पूछिए, मुझे आपकी मदद करके खुशी होगी।";
        } else {
          replyText = "You're very welcome! If there is anything else you'd like to explore about our website work or process, just let me know.";
        }
      }
      // 5. How are you / Who are you
      else if (
        cleanLower.includes("how are you") ||
        cleanLower.includes("who are you") ||
        cleanLower.includes("ఎలా ఉన్నారు") ||
        cleanLower.includes("మీరు ఎవరు") ||
        cleanLower.includes("आप कौन हैं") ||
        cleanLower.includes("कैसे हैं")
      ) {
        if (selectedLanguage === "Telugu") {
          replyText = "నేను చాలా బాగున్నాను అండి! నేను మీరా — వెబ్‌వర్క్‌ఫ్లోస్ అధికారిక AI అసిస్టెంట్ ని. మా వెబ్‌సైట్ సర్వీసులు, ధరలు మరియు పనితీరు గురించి సరైన సమాచారం అందించడమే నా పని.";
        } else if (selectedLanguage === "Hindi") {
          replyText = "मैं बहुत अच्छी हूँ जी, शुक्रिया! मैं मीरा हूँ — वेबवर्कफ्लोस की AI असिस्टेंट। मैं आपको हमारी सर्विसेज, प्राइसिंग और वर्कफ्लो के बारे में हर जानकारी दे सकती हूँ।";
        } else {
          replyText = "I'm doing great, thank you for asking! I'm Meera, the AI assistant for Webworkflo's. I'm here to answer any questions about how we design, build, and deploy fast lead-generating websites.";
        }
      }
      // 6. General Knowledge Base query (Pricing, Technology, Salons, etc.)
      else {
        const kbAnswer = queryKnowledgeBase(text, selectedLanguage);
        if (kbAnswer) {
          replyText = kbAnswer;
          // Keep it conversational! Do not force any button popups unless specifically relevant.
        } else {
          // Graceful conversational fallback
          if (selectedLanguage === "Telugu") {
            replyText = "నేను వెబ్‌వర్క్‌ఫ్లోస్ వెబ్‌సైట్ మోడల్, ధరలు మరియు ఫ్రీ గ్రోత్ ప్లాన్ సమాచారంలో సహాయపడగలను అండి. మీకు ఏ రకమైన బిజినెస్ వెబ్‌సైట్ కావాలి?";
          } else if (selectedLanguage === "Hindi") {
            replyText = "मैं वेबवर्कफ्లోస్ की प्राइसिंग, परफॉर्मेंस और फ्री ग्रोथ प्लान से जुड़े सवालों के जवाब दे सकती हूँ जी। क्या आप अपने बिज़नेस के लिए वेबसाइट बनवाना चाहते हैं?";
          } else {
            replyText = "I can help with details about our ₹3,000 launch model, mobile-first design, PageSpeed, and verified per-enquiry billing. What type of business or website are you planning?";
          }
        }
      }

      const meeraMsg: ChatMessage = {
        id: `meera-${Date.now()}`,
        sender: "meera",
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        actionType,
      };

      setMessages((prev) => [...prev, meeraMsg]);
      setIsTyping(false);
    }, 380);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `msg-reset-${Date.now()}`,
        sender: "meera",
        text: initialGreetings[selectedLanguage],
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        actionType: "growth-plan",
      },
    ]);
  };

  // Submit direct founder call request
  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = bookingPhone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      setFeedbackMsg("Please enter a valid 10-digit mobile number.");
      return;
    }

    setBookingStatus("submitting");
    setFeedbackMsg("");

    try {
      const res = await fetch("/api/arrange-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: bookingName.trim() || "Website Visitor",
          phone: cleanPhone,
          business: bookingBusiness.trim() || "Local Business",
          preferredTime: bookingTime,
          language: selectedLanguage,
          notes: "Requested direct call with Founder Srishanth via Meera AI Chat Agent",
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setBookingStatus("success");
        trackFunnelEvent("cta_click", { source: "meera_founder_call_booked" });
        setTimeout(() => {
          setShowBookingModal(false);
          setBookingStatus("idle");
          setBookingName("");
          setBookingPhone("");
          setBookingBusiness("");
          // Add confirmation to chat
          setMessages((prev) => [
            ...prev,
            {
              id: `booking-conf-${Date.now()}`,
              sender: "meera",
              text:
                selectedLanguage === "Telugu"
                  ? `మీ కాల్ రిక్వెస్ట్ ఫౌండర్ శ్రీశాంత్ గారికి అందింది! త్వరలోనే ${cleanPhone} నంబర్‌కు వారు సంప్రదిస్తారు.`
                  : selectedLanguage === "Hindi"
                  ? `आपकी कॉल रिक्वेस्ट फाउंडर श्रीशांत जी को मिल गई है! वे जल्द ही आपके नंबर पर संपर्क करेंगे।`
                  : `Call request sent to Founder Srishanth M.! He will connect with you at ${cleanPhone} around ${bookingTime}.`,
              timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            },
          ]);
        }, 1800);
      } else {
        setBookingStatus("error");
        setFeedbackMsg(data.error || "Unable to submit request. Please reach out via WhatsApp directly.");
      }
    } catch {
      setBookingStatus("error");
      setFeedbackMsg("Network error. Please connect directly via WhatsApp.");
    }
  };

  const founderWaLink = `https://wa.me/919959896378?text=${encodeURIComponent(
    `Hi Srishanth! I'm inquiring via your AI Assistant Meera on Webworkflo's website. I'd like to get more details about your ₹3,000 website launch model and the Free Growth Plan.`
  )}`;

  const freeGrowthPlanWaLink = `https://wa.me/919959896378?text=${encodeURIComponent(
    `Hi Srishanth! I would like to request the 100% Free 1-Page Website Growth Plan for my business within 24 hours.`
  )}`;

  return (
    <section className="sec meera-chat-section" id="ai-assistant">
      {/* Compatibility anchor */}
      <span id="protection" style={{ position: "absolute", marginTop: "-80px", visibility: "hidden" }} />

      <div className="wrap">
        <div className="meera-chat-container">
          {/* TOP HEADER & INTRO */}
          <div className="meera-chat-header-area">
            <div className="meera-badge-row">
              <span className="meera-live-pill">
                <span className="pulse-dot" />
                <span>MEERA AI ASSISTANT • ONLINE 24/7</span>
              </span>
              <span className="meera-kb-pill">
                <ShieldCheck size={13} className="pill-check" />
                <span>Grounded Knowledge Base</span>
              </span>
            </div>

            <h2 className="meera-main-heading">
              Have questions? Ask <span className="highlight-gradient">Meera AI</span> instantly.
            </h2>

            <p className="meera-subheading">
              Get immediate, accurate answers about our <strong>₹3,000 launch model</strong>, verified enquiry pricing,
              PageSpeed benchmarks, and the <strong>100% Free Growth Plan</strong>.
            </p>

            {/* Language Selector */}
            <div className="meera-language-bar">
              <span className="lang-prompt">Language:</span>
              <div className="lang-pills">
                {(["English", "Telugu", "Hindi"] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setSelectedLanguage(lang)}
                    className={`lang-pill-btn ${selectedLanguage === lang ? "active" : ""}`}
                  >
                    {lang === "Telugu" ? "తెలుగు (Telugu)" : lang === "Hindi" ? "हिंदी (Hindi)" : "English"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* MAIN CHAT WINDOW */}
          <div className="meera-chat-card">
            {/* CARD TOP BAR */}
            <div className="chat-card-top">
              <div className="assistant-identity">
                <div className="assistant-avatar">
                  <Bot size={22} className="avatar-bot-icon" />
                  <span className="avatar-online-dot" />
                </div>
                <div className="assistant-meta">
                  <div className="assistant-name-row">
                    <span className="assistant-name">Meera AI</span>
                    <span className="verified-badge">Webworkflo&apos;s Assistant</span>
                  </div>
                  <span className="assistant-status">
                    Replies instantly in {selectedLanguage} • Direct connection to Founder Srishanth
                  </span>
                </div>
              </div>

              <div className="chat-card-actions">
                <button
                  type="button"
                  onClick={handleResetChat}
                  className="chat-icon-btn"
                  title="Reset Conversation"
                  aria-label="Reset Conversation"
                >
                  <RotateCcw size={15} />
                  <span className="btn-tip-text">Reset</span>
                </button>
              </div>
            </div>

            {/* MESSAGES SCROLL AREA */}
            <div className="chat-messages-area" ref={messagesAreaRef} role="log" aria-live="polite">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    className={`chat-message-row ${msg.sender === "user" ? "user-row" : "meera-row"}`}
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    {msg.sender === "meera" && (
                      <div className="msg-avatar meera-msg-avatar">
                        <Bot size={16} />
                      </div>
                    )}

                    <div className={`chat-bubble ${msg.sender === "user" ? "user-bubble" : "meera-bubble"}`}>
                      <div className="bubble-text">
                        {msg.text.split("\n").map((line, idx) => (
                          <p key={idx} className={line.startsWith("•") || line.match(/^\d+\./) ? "list-line" : ""}>
                            {line}
                          </p>
                        ))}
                      </div>

                      <div className="bubble-footer">
                        <span className="bubble-timestamp">{msg.timestamp}</span>
                      </div>

                      {/* Contextual Action Buttons in Meera's response */}
                      {msg.sender === "meera" && msg.actionType && (
                        <div className="bubble-action-row">
                          {msg.actionType === "growth-plan" && (
                            <a
                              href={freeGrowthPlanWaLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bubble-action-btn growth-plan-action"
                              onClick={() => trackFunnelEvent("whatsapp_click", { source: "meera_chat_growth_btn" })}
                            >
                              <Zap size={14} />
                              <span>Claim 100% Free Growth Plan on WhatsApp</span>
                              <ExternalLink size={12} />
                            </a>
                          )}

                          {msg.actionType === "whatsapp" && (
                            <a
                              href={founderWaLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bubble-action-btn wa-action"
                              onClick={() => trackFunnelEvent("whatsapp_click", { source: "meera_chat_wa_btn" })}
                            >
                              <MessageSquare size={14} />
                              <span>Chat with Srishanth on WhatsApp</span>
                              <ExternalLink size={12} />
                            </a>
                          )}

                          {msg.actionType === "booking" && (
                            <button
                              type="button"
                              onClick={() => setShowBookingModal(true)}
                              className="bubble-action-btn call-action"
                            >
                              <Phone size={14} />
                              <span>Request Direct Call with Founder</span>
                              <ArrowRight size={12} />
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    {msg.sender === "user" && (
                      <div className="msg-avatar user-msg-avatar">
                        <User size={16} />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Animated Typing Indicator */}
              {isTyping && (
                <motion.div 
                  className="chat-message-row meera-row typing-row"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="msg-avatar meera-msg-avatar">
                    <Bot size={16} />
                  </div>
                  <div className="chat-bubble meera-bubble typing-bubble">
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-label">Meera is checking Knowledge Base...</span>
                  </div>
                </motion.div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* QUICK SUGGESTION CHIPS ROW */}
            <div className="chat-chips-container">
              <div className="chips-scroll-hint">
                <HelpCircle size={12} />
                <span>Suggested questions:</span>
              </div>
              <div className="chat-chips-scroll">
                {quickChips[selectedLanguage].map((chip, index) => (
                  <motion.button
                    key={index}
                    type="button"
                    onClick={() => handleSendMessage(chip.query)}
                    className={`chat-chip-btn ${chip.isFounder ? "founder-chip" : ""}`}
                    disabled={isTyping}
                    style={{ whiteSpace: "nowrap", flexShrink: 0 }}
                    whileHover={{ y: -1, scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 450, damping: 25 }}
                  >
                    <span style={{ whiteSpace: "nowrap", display: "inline" }}>{chip.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* INPUT COMPOSER */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="chat-input-form"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={
                  selectedLanguage === "Telugu"
                    ? "మీరాని ఏదైనా అడగండి (ఉదా: ₹3,000 ప్లాన్ వివరాలు)..."
                    : selectedLanguage === "Hindi"
                    ? "मीरा से कुछ भी पूछें (उदा: ₹3,000 मॉडल और फ्री प्लान)..."
                    : "Ask Meera anything (e.g., How does the ₹3,000 launch work?)..."
                }
                className="chat-input-field"
                disabled={isTyping}
                maxLength={250}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="chat-send-btn"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FOUNDER CALL BOOKING MODAL */}
      {showBookingModal && (
        <div className="booking-modal-backdrop" onClick={() => setShowBookingModal(false)}>
          <div className="booking-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="booking-modal-header">
              <div className="modal-title-row">
                <Calendar className="modal-icon" size={20} />
                <h3>Request a Direct Call with Srishanth</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowBookingModal(false)}
                className="modal-close-btn"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <p className="modal-desc">
              Share your contact details. Founder Srishanth M. will call you directly to discuss your business requirements and growth strategy.
            </p>

            <form onSubmit={handleBookingSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="client-name">Your Name</label>
                <input
                  id="client-name"
                  type="text"
                  required
                  placeholder="e.g., Rajesh Sharma"
                  value={bookingName}
                  onChange={(e) => setBookingName(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="client-phone">Mobile / WhatsApp Number</label>
                <div className="phone-input-wrap">
                  <span className="phone-prefix">+91</span>
                  <input
                    id="client-phone"
                    type="tel"
                    required
                    placeholder="99598 96378"
                    value={bookingPhone}
                    onChange={(e) => setBookingPhone(e.target.value)}
                    className="form-input phone-input"
                    maxLength={10}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="client-business">Business or Shop Name (Optional)</label>
                <input
                  id="client-business"
                  type="text"
                  placeholder="e.g., Kondapur Bakery / Men's Salon"
                  value={bookingBusiness}
                  onChange={(e) => setBookingBusiness(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="preferred-time">Preferred Call Time</label>
                <select
                  id="preferred-time"
                  value={bookingTime}
                  onChange={(e) => setBookingTime(e.target.value)}
                  className="form-input form-select"
                >
                  <option value="Within 24 Hours">Within 24 Hours</option>
                  <option value="Today Evening (5 PM - 8 PM)">Today Evening (5 PM - 8 PM)</option>
                  <option value="Tomorrow Morning (10 AM - 1 PM)">Tomorrow Morning (10 AM - 1 PM)</option>
                  <option value="Tomorrow Afternoon (2 PM - 5 PM)">Tomorrow Afternoon (2 PM - 5 PM)</option>
                </select>
              </div>

              {feedbackMsg && (
                <div className={`form-feedback ${bookingStatus === "error" ? "error" : "info"}`}>
                  {feedbackMsg}
                </div>
              )}

              {bookingStatus === "success" ? (
                <div className="booking-success-box">
                  <CheckCircle2 size={24} className="success-icon" />
                  <div>
                    <strong>Call Request Received!</strong>
                    <p>Srishanth will call you around {bookingTime}.</p>
                  </div>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={bookingStatus === "submitting"}
                  className="modal-submit-btn"
                >
                  {bookingStatus === "submitting" ? (
                    <>
                      <Loader2 size={16} className="spin-icon" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm Call Request</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              )}
            </form>
          </div>
        </div>
      )}

      {/* COMPONENT STYLES */}
      <style jsx>{`
        .meera-chat-section {
          padding: 80px 0 60px 0;
          background: linear-gradient(180deg, var(--bg) 0%, rgba(124, 58, 237, 0.03) 50%, var(--bg) 100%);
          position: relative;
        }

        .meera-chat-container {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        /* HEADER AREA */
        .meera-chat-header-area {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .meera-badge-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .meera-live-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.35);
          color: #059669;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 5px 12px;
          border-radius: 999px;
        }

        :root[data-theme="dark"] .meera-live-pill {
          background: rgba(16, 185, 129, 0.18);
          color: #34D399;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          70% {
            box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }

        .meera-kb-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(124, 58, 237, 0.08);
          border: 1px solid rgba(124, 58, 237, 0.25);
          color: #7C3AED;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 999px;
        }

        :root[data-theme="dark"] .meera-kb-pill {
          color: #A78BFA;
        }

        .meera-main-heading {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 800;
          line-height: 1.2;
          color: var(--ink);
          margin: 0;
        }

        .highlight-gradient {
          background: linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .meera-subheading {
          font-size: clamp(0.95rem, 1.8vw, 1.05rem);
          color: var(--muted);
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.5;
        }

        /* LANGUAGE SELECTOR */
        .meera-language-bar {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--surface);
          border: 1px solid var(--line);
          padding: 4px 10px;
          border-radius: 999px;
          margin-top: 4px;
        }

        .lang-prompt {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .lang-pills {
          display: flex;
          gap: 4px;
        }

        .lang-pill-btn {
          border: none;
          background: transparent;
          color: var(--ink);
          font-size: 0.78rem;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 999px;
          cursor: pointer;
          transition: all 0.18s ease;
        }

        .lang-pill-btn:hover {
          background: rgba(124, 58, 237, 0.1);
          color: #7C3AED;
        }

        .lang-pill-btn.active {
          background: #7C3AED;
          color: #FFFFFF;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(124, 58, 237, 0.35);
        }

        /* CHAT CARD */
        .meera-chat-card {
          background: var(--surface);
          border: 1.5px solid var(--line);
          border-radius: 20px;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.08), 0 0 25px rgba(124, 58, 237, 0.05);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 640px;
        }

        :root[data-theme="dark"] .meera-chat-card {
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.4), 0 0 30px rgba(124, 58, 237, 0.1);
        }

        /* CARD TOP */
        .chat-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          border-bottom: 1px solid var(--line);
          background: rgba(124, 58, 237, 0.03);
        }

        .assistant-identity {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .assistant-avatar {
          position: relative;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          box-shadow: 0 4px 10px rgba(124, 58, 237, 0.3);
        }

        .avatar-online-dot {
          position: absolute;
          bottom: 1px;
          right: 1px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #10B981;
          border: 2px solid var(--surface);
        }

        .assistant-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .assistant-name-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .assistant-name {
          font-weight: 800;
          font-size: 1.02rem;
          color: var(--ink);
        }

        .verified-badge {
          font-size: 0.68rem;
          font-weight: 700;
          background: rgba(124, 58, 237, 0.12);
          color: #7C3AED;
          padding: 2px 7px;
          border-radius: 6px;
        }

        :root[data-theme="dark"] .verified-badge {
          color: #C4B5FD;
        }

        .assistant-status {
          font-size: 0.74rem;
          color: var(--muted);
        }

        .chat-icon-btn {
          border: 1px solid var(--line);
          background: transparent;
          color: var(--muted);
          padding: 6px 10px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          transition: all 0.15s ease;
        }

        .chat-icon-btn:hover {
          border-color: #7C3AED;
          color: #7C3AED;
          background: rgba(124, 58, 237, 0.05);
        }

        /* MESSAGES SCROLL AREA */
        .chat-messages-area {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          scroll-behavior: smooth;
        }

        .chat-message-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          max-width: 88%;
          animation: fadeIn 0.25s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .meera-row {
          align-self: flex-start;
        }

        .user-row {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .msg-avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .meera-msg-avatar {
          background: #7C3AED;
          color: #FFFFFF;
        }

        .user-msg-avatar {
          background: var(--line-strong);
          color: var(--ink);
        }

        .chat-bubble {
          padding: 12px 16px;
          border-radius: 16px;
          font-size: 0.88rem;
          line-height: 1.55;
          position: relative;
        }

        .meera-bubble {
          background: rgba(124, 58, 237, 0.05);
          border: 1px solid rgba(124, 58, 237, 0.15);
          color: var(--ink);
          border-top-left-radius: 4px;
        }

        :root[data-theme="dark"] .meera-bubble {
          background: rgba(124, 58, 237, 0.1);
          border-color: rgba(124, 58, 237, 0.25);
        }

        .user-bubble {
          background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%);
          color: #FFFFFF;
          border-top-right-radius: 4px;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.25);
        }

        .bubble-text p {
          margin: 0 0 6px 0;
        }

        .bubble-text p:last-child {
          margin-bottom: 0;
        }

        .bubble-text .list-line {
          padding-left: 4px;
          margin-bottom: 4px;
          font-size: 0.86rem;
        }

        .bubble-footer {
          margin-top: 6px;
          display: flex;
          justify-content: flex-end;
        }

        .bubble-timestamp {
          font-size: 0.65rem;
          opacity: 0.7;
        }

        /* CONTEXTUAL ACTION BUTTONS */
        .bubble-action-row {
          margin-top: 12px;
          padding-top: 10px;
          border-top: 1px dashed rgba(124, 58, 237, 0.25);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .bubble-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.76rem;
          font-weight: 700;
          padding: 8px 14px;
          border-radius: 8px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.18s ease;
          border: none;
        }

        .growth-plan-action {
          background: #ECFDF5;
          border: 1.5px solid #10B981;
          color: #047857;
        }

        .growth-plan-action:hover {
          background: #10B981;
          color: #FFFFFF;
        }

        .wa-action {
          background: #F0FDF4;
          border: 1.5px solid #22C55E;
          color: #15803D;
        }

        .wa-action:hover {
          background: #22C55E;
          color: #FFFFFF;
        }

        .call-action {
          background: #EDE9FE;
          border: 1.5px solid #8B5CF6;
          color: #5B21B6;
        }

        .call-action:hover {
          background: #7C3AED;
          color: #FFFFFF;
        }

        /* TYPING INDICATOR */
        .typing-bubble {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 14px;
        }

        .typing-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #7C3AED;
          animation: bounce 1.2s infinite;
        }

        .typing-dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes bounce {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-5px);
          }
        }

        .typing-label {
          font-size: 0.74rem;
          color: var(--muted);
          margin-left: 6px;
        }

        /* CHIPS CONTAINER */
        .chat-chips-container {
          padding: 8px 16px 10px 16px;
          background: var(--surface);
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .chips-scroll-hint {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--muted);
          margin-bottom: 6px;
          letter-spacing: 0.02em;
        }

        .chat-chips-scroll {
          display: flex;
          align-items: center;
          gap: 7px;
          overflow-x: auto;
          padding: 2px 2px 4px 2px;
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
          width: 100%;
        }

        .chat-chips-scroll::-webkit-scrollbar {
          display: none;
        }

        .chat-chip-btn {
          border: 1.5px solid var(--line-strong);
          background: transparent;
          color: var(--ink);
          padding: 5px 13px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap !important;
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          line-height: 1.2;
          transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
        }

        .chat-chip-btn span {
          white-space: nowrap !important;
          display: inline-block;
        }

        :root[data-theme="dark"] .chat-chip-btn {
          border-color: rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.04);
          color: #F1F5F9;
        }
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .chat-chip-btn {
            border-color: rgba(255, 255, 255, 0.18);
            background: rgba(255, 255, 255, 0.04);
            color: #F1F5F9;
          }
        }

        .chat-chip-btn:hover:not(:disabled) {
          background: var(--ink);
          color: var(--bg);
          border-color: var(--ink);
          transform: translateY(-1px);
        }

        :root[data-theme="dark"] .chat-chip-btn:hover:not(:disabled) {
          background: #FFFFFF;
          color: #0F172A;
          border-color: #FFFFFF;
        }
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .chat-chip-btn:hover:not(:disabled) {
            background: #FFFFFF;
            color: #0F172A;
            border-color: #FFFFFF;
          }
        }

        /* Founder Direct Call Highlight Chip */
        .chat-chip-btn.founder-chip {
          border-color: #10B981;
          color: #065F46;
          background: rgba(16, 185, 129, 0.08);
        }

        :root[data-theme="dark"] .chat-chip-btn.founder-chip {
          border-color: rgba(16, 185, 129, 0.5);
          background: rgba(16, 185, 129, 0.12);
          color: #34D399;
        }
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .chat-chip-btn.founder-chip {
            border-color: rgba(16, 185, 129, 0.5);
            background: rgba(16, 185, 129, 0.12);
            color: #34D399;
          }
        }

        .chat-chip-btn.founder-chip:hover:not(:disabled) {
          background: #10B981;
          color: #FFFFFF;
          border-color: #10B981;
        }

        .chat-chip-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* INPUT COMPOSER */
        .chat-input-form {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: var(--surface);
        }

        .chat-input-field {
          flex: 1;
          border: 1.5px solid var(--line-strong);
          background: var(--bg);
          color: var(--ink);
          font-size: 0.9rem;
          padding: 10px 16px;
          border-radius: 999px;
          outline: none;
          transition: border-color 0.18s ease;
        }

        .chat-input-field:focus {
          border-color: #7C3AED;
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);
        }

        .chat-send-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: none;
          background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.18s ease;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(124, 58, 237, 0.3);
        }

        .chat-send-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 6px 14px rgba(124, 58, 237, 0.4);
        }

        .chat-send-btn:disabled {
          background: var(--line-strong);
          color: var(--muted);
          cursor: not-allowed;
          box-shadow: none;
        }

        /* MODAL STYLES */
        .booking-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          animation: fadeIn 0.2s ease-out;
        }

        .booking-modal-card {
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 20px;
          max-width: 460px;
          width: 100%;
          padding: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
          position: relative;
        }

        .booking-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .modal-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .modal-icon {
          color: #7C3AED;
        }

        .booking-modal-header h3 {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--ink);
          margin: 0;
        }

        .modal-close-btn {
          border: none;
          background: transparent;
          color: var(--muted);
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
        }

        .modal-close-btn:hover {
          color: var(--ink);
          background: var(--line);
        }

        .modal-desc {
          font-size: 0.84rem;
          color: var(--muted);
          margin: 0 0 18px 0;
          line-height: 1.5;
        }

        .booking-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .form-group label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--muted);
        }

        .form-input {
          border: 1.5px solid var(--line-strong);
          background: var(--bg);
          color: var(--ink);
          font-size: 0.88rem;
          padding: 9px 12px;
          border-radius: 10px;
          outline: none;
          transition: border-color 0.16s ease;
        }

        .form-input:focus {
          border-color: #7C3AED;
        }

        .phone-input-wrap {
          display: flex;
          align-items: center;
          border: 1.5px solid var(--line-strong);
          border-radius: 10px;
          background: var(--bg);
          overflow: hidden;
        }

        .phone-input-wrap:focus-within {
          border-color: #7C3AED;
        }

        .phone-prefix {
          padding: 9px 12px;
          background: rgba(124, 58, 237, 0.08);
          color: #7C3AED;
          font-weight: 700;
          font-size: 0.86rem;
          border-right: 1px solid var(--line-strong);
        }

        .phone-input {
          border: none !important;
          flex: 1;
        }

        .form-select {
          cursor: pointer;
        }

        .modal-submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%);
          color: #FFFFFF;
          border: none;
          padding: 12px 20px;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.16s ease;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
          margin-top: 6px;
        }

        .modal-submit-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(124, 58, 237, 0.4);
        }

        .modal-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .form-feedback {
          font-size: 0.78rem;
          padding: 8px 12px;
          border-radius: 8px;
        }

        .form-feedback.error {
          background: rgba(239, 68, 68, 0.1);
          color: #EF4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .booking-success-box {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #ECFDF5;
          border: 1px solid #10B981;
          color: #065F46;
          padding: 12px 16px;
          border-radius: 10px;
        }

        .success-icon {
          color: #10B981;
          flex-shrink: 0;
        }

        .booking-success-box strong {
          display: block;
          font-size: 0.92rem;
        }

        .booking-success-box p {
          margin: 2px 0 0 0;
          font-size: 0.8rem;
        }

        @media (max-width: 640px) {
          .meera-chat-card {
            height: 580px;
          }
          .chat-message-row {
            max-width: 95%;
          }
        }
      `}</style>
    </section>
  );
}
