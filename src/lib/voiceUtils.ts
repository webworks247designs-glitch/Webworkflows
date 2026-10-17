export const cleanTextForSpeech = (rawText: string, lang: "Telugu" | "English" | "Hindi") => {
  let cleaned = rawText
    // 1. Remove all emojis
    .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, "")
    // 2. Replace punctuation that browsers read out loud (exclamation, question) with a period
    .replace(/[!?]+/g, ".")
    .replace(/[\'\"“”‘’]/g, "")
    .replace(/[•·—–_]/g, ", ")
    .replace(/[;:]/g, ",");

  if (lang === "Telugu") {
    cleaned = cleaned
      .replace(/₹\s*3[,.]?000/g, "మూడు వేల రూపాయలు")
      .replace(/30\s*సెకన్ల/g, "ముప్పై సెకన్ల")
      .replace(/30\s*సెకన్లు/g, "ముప్పై సెకన్లు")
      .replace(/30/g, "ముప్పై")
      .replace(/24\s*నుండి\s*48/g, "ఇరవై నాలుగు నుండి నలభై ఎనిమిది")
      .replace(/1-ట్యాప్/g, "వన్ ట్యాప్")
      .replace(/1-పేజీ/g, "వన్ పేజీ")
      .replace(/1-పేజ్/g, "వన్ పేజ్")
      .replace(/5\s*నిమిషాల/g, "ఐదు నిమిషాల")
      .replace(/Webworkflo's/gi, "వెబ్‌వర్క్‌ఫ్లోస్")
      .replace(/Webworkflos/gi, "వెబ్‌వర్క్‌ఫ్లోస్");
  } else if (lang === "Hindi") {
    cleaned = cleaned
      .replace(/₹\s*3[,.]?000/g, "तीन हज़ार रुपये")
      .replace(/30\s*सेकंड/g, "तीस सेकंड")
      .replace(/30/g, "तीस")
      .replace(/24\s*से\s*48/g, "चौबीस से अड़तालीस")
      .replace(/1-टैप/g, "वन टैप")
      .replace(/1-पेज/g, "वन पेज")
      .replace(/5\s*मिनट/g, "पांच मिनट")
      .replace(/Webworkflo's/gi, "वेबवर्कफ्लोस")
      .replace(/Webworkflos/gi, "वेబवर्कఫ్లోస");
  } else {
    cleaned = cleaned
      .replace(/₹\s*3[,.]?000/g, "3,000 rupees")
      .replace(/30\s*seconds/gi, "thirty seconds")
      .replace(/Webworkflo's/gi, "Web workflows")
      .replace(/Webworkflos/gi, "Web workflows");
  }
  return cleaned.replace(/\s+/g, " ").trim();
};

export const selectWarmFemaleVoice = (voices: SpeechSynthesisVoice[], lang: "Telugu" | "English" | "Hindi") => {
  if (!voices || voices.length === 0) return null;
  const maleIdentifiers = [
    "aman", "rishi", "alex", "fred", "daniel", "albert", "ralph", "david",
    "george", "mark", "oliver", "eddy", "reed", "grandpa", "junior", "jester",
    "bad news", "bahh", "bells", "boing", "bubbles", "cellos", "organ", "wobble"
  ];
  const isNotMale = (v: SpeechSynthesisVoice) => !maleIdentifiers.some(m => v.name.toLowerCase().includes(m));

  // Telugu priority
  if (lang === "Telugu") {
    const te = voices.find(v =>
      (v.lang.toLowerCase().replace("_", "-").startsWith("te") || v.name.toLowerCase().includes("telugu") || v.name.toLowerCase().includes("geeta")) && isNotMale(v)
    );
    if (te) return te;
    const fallbackIndian = voices.find(v => (v.lang.includes("IN") || v.name.toLowerCase().includes("tara")) && isNotMale(v));
    if (fallbackIndian) return fallbackIndian;
  }

  // Hindi priority
  if (lang === "Hindi") {
    const hi = voices.find(v =>
      (v.lang.toLowerCase().replace("_", "-").startsWith("hi") || v.name.toLowerCase().includes("hindi") || v.name.toLowerCase().includes("lekha") || v.name.toLowerCase().includes("swara") || v.name.toLowerCase().includes("kalpana")) && isNotMale(v)
    );
    if (hi) return hi;
    const fallbackIndian = voices.find(v => (v.lang.includes("IN") || v.name.toLowerCase().includes("tara")) && isNotMale(v));
    if (fallbackIndian) return fallbackIndian;
  }

  // English priority list (warm, female voices)
  const warmFemalePriority = [
    "tara", "neerja", "heera", "veena", "priya", "google uk english female", "samantha", "karen", "victoria", "tessa", "moira", "zoe", "serena", "google us english", "zira"
  ];
  for (const name of warmFemalePriority) {
    const match = voices.find(v => v.name.toLowerCase().includes(name));
    if (match) return match;
  }

  // Final fallback: any non‑male voice
  const femaleFallback = voices.find(v => (v.lang.includes("IN") || v.lang.startsWith("en")) && isNotMale(v));
  if (femaleFallback) return femaleFallback;
  return voices[0] || null;
};
