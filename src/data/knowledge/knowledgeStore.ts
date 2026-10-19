export interface KnowledgeItem {
  id: string;
  topic: string;
  keywords: string[];
  responses: {
    Telugu: string;
    Hindi: string;
    English: string;
  };
}

/**
 * Webworkflo's — Meera AI Grounded Knowledge Base
 * Sourced directly from official Webworkflo's documentation & Vapi specifications.
 */
export const meeraKnowledgeBase: KnowledgeItem[] = [
  // 1. About Webworkflo's
  {
    id: "about-webworkflos",
    topic: "What is Webworkflo's?",
    keywords: [
      "what is webworkflo",
      "who are you",
      "about webworkflo",
      "company",
      "service",
      "వెబ్‌వర్క్‌ఫ్లోస్ అంటే ఏమిటి",
      "మీరు ఎవరు",
      "కంపెనీ",
      "वेबवर्कफ्लोस क्या है",
      "आप कौन हैं",
      "कंपनी"
    ],
    responses: {
      Telugu: "వెబ్‌వర్క్‌ఫ్లోస్ అనేది హైదరాబాద్ కేంద్రంగా పనిచేసే ఫ్రీలాన్స్ వెబ్ డిజైన్ మరియు డెవలప్‌మెంట్ సర్వీస్ అండి. మా ఫౌండర్ శ్రీశాంత్ గారు స్వయంగా చిన్న వ్యాపారాలు, స్టార్టప్‌లు మరియు క్రియేటర్ల కోసం హై-స్పీడ్, కస్టమ్ వెబ్‌సైట్లను హ్యాండ్-కోడ్ చేస్తారు. ఏజెన్సీ కమీషన్లు లేదా మధ్యవర్తులు లేకుండా కేవలం విజిటర్లను లీడ్స్‌గా మార్చడమే మా లక్ష్యం!",
      Hindi: "वेबवर्कफ्लोस हैदराबाद बेस्ड एक फ्रीलांस वेब डिज़ाइन और डेवलपमेंट सर्विस है जी। हमारे फाउंडर श्रीशांत जी खुद छोटे बिज़नेस और स्टार्टअप्स के लिए सुपर-फ़ास्ट वेबसाइट्स कोड करते हैं। कोई बीच का एजेंट नहीं होता, हमारा सीधा मक़सद विज़िटर्स को असली कस्टमर्स में बदलना है!",
      English: "Webworkflo's is a freelance web design and engineering service based right here in Hyderabad. Our Founder & Lead Web Engineer, Srishanth M., personally designs and hand-codes high-speed, tailored websites for small businesses and creators, without outsourced agencies or middlemen."
    }
  },

  // 2. Free Website Growth Plan
  {
    id: "free-growth-plan",
    topic: "Free Website Growth Plan",
    keywords: [
      "growth plan",
      "free plan",
      "audit",
      "competitor audit",
      "ఫ్రీ ప్లాన్",
      "గ్రోత్ ప్లాన్",
      "ఆడిట్",
      "फ्री प्लान",
      "ग्रोथ प्लान",
      "ऑडिट"
    ],
    responses: {
      Telugu: "మా వెబ్‌సైట్ గ్రోత్ ప్లాన్ వంద శాతం ఉచితం మరియు జీరో-కమిట్‌మెంట్ అండి! ఇందులో మీ లోకల్ కాంపిటీటర్ల ఎనాలిసిస్, మూడు ముఖ్యమైన వెబ్‌సైట్ సూచనలు మరియు మొబైల్ డిజైన్ ఐడియాలు ఉంటాయి. మీరు కోరితే ఇరవై నాలుగు గంటల్లో మీ వాట్సాప్‌కి శ్రీశాంత్ గారు పంపేలా నేను రిక్వెస్ట్ చేయగలను!",
      Hindi: "हमारा वेबसाइट ग्रोथ प्लान सौ प्रतिशत फ्री और बिना किसी कमिटमेंट के है जी! इसमें आपके लोकल कॉम्पिटिटर्स का एनालिसिस, तीन ज़रूरी सुधार और मोबाइल डिज़ाइन्स शामिल हैं। आप चाहें तो मैं 24 घंटे में आपके व्हाट्सएप पर यह प्लान भिजवाने की व्यवस्था कर सकती हूँ!",
      English: "Our Website Growth Plan is 100% free with zero commitment, delivered within 24 hours on WhatsApp! It includes an assessment of your local competitors, 3 immediate website improvements, and mobile-first suggestions tailored to your business."
    }
  },

  // 3. Pricing Models: Fixed vs Enquiry-Based
  {
    id: "pricing-model-clarification",
    topic: "Pricing Models: Fixed vs Enquiry-Based",
    keywords: [
      "cost",
      "price",
      "pricing",
      "charges",
      "fee",
      "differentiate",
      "difference",
      "models",
      "pricing models",
      "model",
      "compare",
      "options",
      "fixed",
      "enquiry",
      "₹8,999",
      "8999",
      "₹4,749",
      "4749",
      "hosting",
      "ధర",
      "ఖర్చు",
      "ఫీజు",
      "హోస్టింగ్",
      "మోడల్స్",
      "తేడా",
      "రకాలు",
      "खर्च",
      "प्राइस",
      "फीस",
      "चार्ज",
      "होस्टिंग",
      "मॉडल",
      "अंतर"
    ],
    responses: {
      Telugu: "వెబ్‌వర్క్‌ఫ్లోస్ రెండు స్పష్టమైన ఇన్వెస్ట్‌మెంట్ మోడళ్లను అందిస్తుంది:\n1. ఫిక్స్‌డ్ వెబ్‌సైట్ ప్యాకేజ్ (₹8,999 నుండి): కస్టమ్ నెక్స్ట్.జేఎస్ వెబ్‌సైట్, మొబైల్-ఫస్ట్ ఆర్కిటెక్చర్, వాట్సాప్ లీడ్ రూటింగ్, మరియు 100% సోర్స్ కోడ్ యాజమాన్యం. ఎటువంటి నెలవారీ ప్లాట్‌ఫారమ్ ఫీజులు ఉండవు.\n2. ఎంక్వైరీ-బేస్డ్ మోడల్: ఒకేసారి ₹4,749 లాంచ్ సెటప్ (క్లౌడ్ హోస్టింగ్ పూర్తిగా ఇందులో ఉంది) మరియు వెరిఫై అయిన జెన్యూన్ కస్టమర్ ఎంక్వైరీలకు మాత్రమే చెల్లింపు (ఉదా. ₹80 నుండి ₹150), 48 గంటల డిస్ప్యూట్ ప్రొటెక్షన్‌తో.",
      Hindi: "वेबवर्कफ्लोस दो पारदर्शी मॉडल्स प्रदान करता है:\n1. फिक्स्ड वेबसाइट पैकेज (₹8,999 से शुरू): पूरी तरह से कस्टम नेक्स्ट.जेएस वेबसाइट, मोबाइल-फ़र्स्ट आर्किटेक्चर, व्हाट्सएप लीड फ्लो, और 100% कोड ओनरशिप, बिना किसी मासिक प्लेटफ़ॉर्म चार्ज के।\n2. इन्क्वायरी-बेस्ड परफॉर्मेंस मॉडल: ₹4,749 वन-टाइम लॉन्च सेटअप (क्लाउड होस्टिंग इसी में शामिल है) और केवल वेरिफाइड असली कस्टमर लीड्स पर फीस (जैसे ₹80 से ₹150), 48 घंटे की डिस्प्यूट विंडो के साथ।",
      English: "Webworkflo's offers two distinct investment models:\n1. Fixed Website Package (Starting from ₹8,999): Complete bespoke Next.js development, mobile-first UX, instant WhatsApp lead flow, local SEO schema, and 100% source code & domain ownership with zero recurring monthly platform fees.\n2. Enquiry-Based Performance Model: ₹4,749 one-time launch setup with cloud hosting fully included, plus a mutually agreed rate (e.g. ₹80 to ₹150) charged only for verified, high-intent prospective customers who contact your business, backed by a 48-hour dispute window in your portal."
    }
  },

  // 4. Qualified Enquiry & 48-Hour Dispute Policy
  {
    id: "qualified-enquiry-dispute",
    topic: "What is a Qualified Enquiry & Dispute Window?",
    keywords: [
      "qualified enquiry",
      "fake lead",
      "wrong number",
      "spam",
      "dispute",
      "pay per lead",
      "క్వాలిఫైడ్ లీడ్",
      "ఫేక్ లీడ్",
      "రాంగ్ నంబర్",
      "డిస్ప్యూట్",
      "क्वालिफाइड लीड",
      "फेक लीड",
      "गलत नंबर",
      "स्पैम",
      "विवाद"
    ],
    responses: {
      Telugu: "కస్టమర్ స్వయంగా వెబ్‌సైట్ ద్వారా పేరు, ఫోన్ నంబర్‌తో అపాయింట్‌మెంట్ లేదా బుకింగ్ కోరినప్పుడే అది క్వాలిఫైడ్ ఎంక్వైరీ అవుతుంది అండి. సాధారణ విజిటర్లు, బాట్లు, స్పామ్ లేదా రాంగ్ నంబర్లకు ఎలాంటి ఛార్జ్ ఉండదు! ఏదైనా ఫేక్ లేదా ఇన్వాలిడ్ నంబర్ వస్తే నలభై ఎనిమిది గంటల్లో డిస్ప్యూట్ చేసి వేవ్ చేయించుకునే సదుపాయం ఉంది!",
      Hindi: "जब कोई ग्राहक खुद नाम और फ़ोन नंबर के साथ अपॉइंटमेंट या बुकिंग सबमिट करता है, तभी उसे क्वालिफाइड इंक्वायरी माना जाता है जी। आम विज़िटर्स, स्पैम या गलत नंबर का कोई चार्ज नहीं होता। इसके अलावा इनवैलिड लीड्स के लिए 48 घंटे की डिस्प्यूट विंडो मिलती है जिसमें चार्ज माफ कर दिया जाता है!",
      English: "A qualified enquiry means a real prospective customer explicitly submitted an appointment, booking, or quote with verified contact info. Ordinary visitors, bots, and spam are never billable. Plus, we provide a 48-hour dispute window to waive any fake or unreachable leads!"
    }
  },

  // 5. Google Business Profile vs Website
  {
    id: "gbp-vs-website",
    topic: "Google Business Profile vs Website",
    keywords: [
      "google profile",
      "google maps",
      "already have google",
      "why website",
      "గూగుల్ ప్రొఫైల్",
      "గూగుల్ మ్యాప్స్",
      "వెబ్‌సైట్ ఎందుకు",
      "गूगल प्रोफाइल",
      "गूगल मैप्स",
      "वेबसाइट क्यों"
    ],
    responses: {
      Telugu: "గూగుల్ బిజినెస్ ప్రొఫైల్ చాలా ఉపయోగకరమైనది అండి! కానీ దానికి తోడు వెబ్‌సైట్ ఉంటే మీ పూర్తి సర్వీసులు, మెనూలు మరియు డైరెక్ట్ 1-ట్యాప్ వాట్సాప్ బుకింగ్స్ కస్టమర్లకు మరింత సులభంగా అందుబాటులోకి వస్తాయి. ఇది మీ గూగుల్ ర్యాంకింగ్స్‌ని మరియు కస్టమర్ల నమ్మకాన్ని గణనీయంగా పెంచుతుంది!",
      Hindi: "गूगल बिजनेस प्रोफाइल बहुत अच्छी चीज़ है जी! लेकिन एक वेबसाइट आपके पूरे मेनू, सर्विसेज और डायरेक्ट 1-टैप व्हाट्सएप बुकिंग के साथ उसे और ताकतवर बनाती है, जिससे कस्टमर बिना किसी रुकावट के तुरंत बुक कर लेता है!",
      English: "Google Business Profile is very useful! A website complements it with detailed service menus, price lists, and a direct 1-tap WhatsApp booking path, capturing visitors who would otherwise bounce to competitors."
    }
  },

  // 6. Lead Guarantees & Realistic Results
  {
    id: "lead-guarantees",
    topic: "Lead Guarantees & Volume",
    keywords: [
      "guarantee",
      "guaranteed leads",
      "promise",
      "how many leads",
      "గ్యారెంటీ",
      "ఎన్ని లీడ్స్",
      "गैरेन्टी",
      "कितनी लीड्स"
    ],
    responses: {
      Telugu: "మేము ఏ నిర్దిష్ట సంఖ్యలో లీడ్స్ వస్తాయని అసత్యపు వాగ్దానాలు చేయము అండి. వెబ్‌సైట్ పనితీరు అనేది లోకల్ డిమాండ్, మీ ఆఫర్ మరియు ప్రమోషన్‌పై ఆధారపడి ఉంటుంది. వెబ్‌సైట్ ద్వారా వచ్చే ప్రతి కస్టమర్‌ను సులభంగా కాంటాక్ట్ అయ్యేలా మరియు ట్రాక్ చేసేలా మేము సిస్టమ్‌ను అందిస్తాము!",
      Hindi: "हम झूठे वादे या किसी निश्चित संख्या की गारंटी नहीं देते जी। रिज़ल्ट्स आपके लोकल मार्केट, डिमांड और ऑफर्स पर निर्भर करते हैं। हमारा काम आपकी वेबसाइट को ऐसा बनाना है कि आने वाला हर कस्टमर आसानी से आपको कॉल या व्हाट्सएप कर सके!",
      English: "We do not guarantee a specific number of leads or revenue. Results depend on local demand, your offer, and visibility. Our focus is ensuring interested visitors can effortlessly reach you via WhatsApp with verified tracking."
    }
  },

  // 7. Case Study: Shobana Men's Salon
  {
    id: "case-study-shobana",
    topic: "Case Study: Shobana Men's Salon",
    keywords: [
      "shobana",
      "salon",
      "case study",
      "barbershop",
      "షోభన",
      "సెలూన్",
      "కేస్ స్టడీ",
      "शोभना",
      "सैलून",
      "केस स्टडी"
    ],
    responses: {
      Telugu: "హైదరాబాద్ లోని శోభన మెన్స్ లగ్జరీ సెలూన్ కోసం మేము స్లాట్ సెలెక్టర్ మరియు వాట్సాప్ బుకింగ్ వెబ్‌సైట్ తయారు చేశాము అండి. లైవ్ అనలిటిక్స్ ప్రకారం మొత్తం 479 లీడ్స్ రాగా, 330 వెరిఫైడ్ బిల్లబుల్ అపాయింట్‌మెంట్స్ కి మాత్రమే ₹3,300 బిల్లింగ్ జరిగింది. మిగతా 149 అన్-కన్ఫర్మ్డ్ విజిట్స్ కి క్లయింట్ ₹0 చెల్లించారు!",
      Hindi: "हैदराबाद के शोभना मेन्स लक्ज़री सैलून के लिए हमने अपॉइंटमेंट सेलेक्टर वाली वेबसाइट बनाई थी जी। लाइव एनालिटिक्स डैशबोर्ड के अनुसार कुल 479 लीड्स में से 330 वेरिफाइड बिल करने योग्य अपॉइंटमेंट्स के लिए केवल ₹3,300 की बिलिंग हुई (@ ₹100/लीड)। बाकी 149 अनक्वालिफाइड लीड्स पर बिल्कुल ₹0 चार्ज लगा!",
      English: "In our Shobana Men's Luxury Salon Hyderabad case study: 479 total leads were captured, 330 were verified billable appointments, and total client billing was just ₹3,300 (@ ₹100/lead). The 149 incomplete or unconfirmed visits incurred ₹0 charge, producing over 10x ROI!"
    }
  },

  // 8. Other Portfolio Examples: The Boat House & Srishanth Portfolio
  {
    id: "portfolio-examples",
    topic: "Portfolio: The Boat House & Srishanth Portfolio",
    keywords: [
      "boat house",
      "portfolio",
      "samples",
      "examples",
      "restaurant sample",
      "బోట్ హౌస్",
      "పోర్ట్‌ఫోలియో",
      "శాంపిల్స్",
      "बोट हाउस",
      "पोर्टफोलियो",
      "सैंपल"
    ],
    responses: {
      Telugu: "మా పోర్ట్‌ఫోలియోలో రెస్టారెంట్ల కోసం 'ది బోట్ హౌస్' డిజిటల్ మెనూ & టేబుల్ రిజర్వేషన్ డెమో, అలాగే ఇంజనీరింగ్ ప్రాజెక్ట్స్ కోసం శ్రీశాంత్ గారి సొంత పోర్ట్‌ఫోలియో సైట్ ఉన్నాయి అండి. మీకు లైవ్ డెమో లింక్స్ కావాలంటే వాట్సాప్‌లో శ్రీశాంత్ గారు వెంటనే పంపిస్తారు!",
      Hindi: "हमारे लाइव सैंपल्स में रेस्टोरेंट्स के लिए 'द बोट हाउस' का डिजिटल मेनू और व्हाट्सएप टेबल बुकिंग डेमो है, और श्रीशांत जी का इंजीनियरिंग पोर्टफोलियो भी है। आप चाहें तो श्रीशांत जी व्हाट्सएप पर लाइव लिंक्स अभी शेयर कर सकते हैं जी!",
      English: "We have live examples including 'The Boat House' restaurant sample featuring interactive digital menus and 1-tap table booking, as well as Srishanth M.'s engineering portfolio. Founder Srishanth can share live links to your WhatsApp anytime!"
    }
  },

  // 9. Industries & Who We Help
  {
    id: "industries-served",
    topic: "Who does Webworkflo's help?",
    keywords: [
      "industry",
      "industries",
      "restaurants",
      "clinics",
      "bakeries",
      "salons",
      "boutiques",
      "startups",
      "ఎవరికి",
      "క్లినిక్స్",
      "రెస్టారెంట్లు",
      "సెలూన్లు",
      "కిరాణా",
      "క్యాఫే",
      "इंडस्ट्री",
      "रेस्टोरेंट",
      "क्लीनिक",
      "बेकरी",
      "सैलून",
      "दुकान"
    ],
    responses: {
      Telugu: "మేము హైదరాబాద్ లోని రెస్టారెంట్లు, కేఫ్‌లు, లగ్జరీ సెలూన్లు, బేకరీలు, ఫిజియోథెరపీ క్లినిక్‌లు, బోటిక్‌లు మరియు స్టార్టప్‌లకు వెబ్‌సైట్లు డిజైన్ చేస్తాము అండి. ప్రతి బిజినెస్ రంగానికి తగినట్లుగా కస్టమ్ వాట్సాప్ బుకింగ్ సిస్టమ్ రెడీ చేస్తాము!",
      Hindi: "हम हैदराबाद के रेस्टोरेंट्स, कैफ़े, सैलून्स, केक बेकरीज, फिजियोथेरेपी क्लिनिक्स, बुटीक्स और स्टार्टअप्स के लिए काम करते हैं जी। हर बिज़नेस की ज़रूरत के हिसाब से कस्टम बुकिंग फ्लो बनाया जाता है!",
      English: "We specialize in tailored websites for cafes, restaurants, salons, bakeries, physiotherapy clinics, retail boutiques, and freelancers across Hyderabad. Each setup is uniquely customized to their customer booking flow."
    }
  },

  // 10. Reviews & Testimonials
  {
    id: "reviews-testimonials",
    topic: "Client Reviews and Google Rating",
    keywords: [
      "review",
      "reviews",
      "rating",
      "feedback",
      "testimonial",
      "రివ్యూస్",
      "రేటింగ్",
      "ఫీడ్‌బ్యాక్",
      "रिव्यूज",
      "रेटिंग",
      "फीडबैक"
    ],
    responses: {
      Telugu: "గూగుల్ లో మాకు 5.0 స్టార్ రేటింగ్ ఉంది అండి! షోభన సెలూన్ ఓనర్ సాయికృష్ణ గారు, డాక్టర్ వినోద్ గారు, బాలకృష్ణ గారు మరియు వినోద గారు మా పనితనం మరియు సర్వీస్ చాలా బాగుందని రివ్యూలు ఇచ్చారు!",
      Hindi: "गूगल पर हमारी 5.0 स्टार रेटिंग है जी! शोभना सैलून के साईकृष्णा जी, डॉ. विनोद जी, बालकृष्णा जी और अन्य क्लाइंट्स ने हमारे काम और सपोर्ट को बहुत सराहा है!",
      English: "Webworkflo's has a 5.0 Google rating! Local business clients including Saikrishna Konduri (Shobana Salon), Dr. Vinod Chahare, Balakrishna, and Vinoda have praised our clean design and prompt service."
    }
  },

  // 11. Founder Contact Details & Turnaround
  {
    id: "founder-contact-info",
    topic: "Founder Contact Information & Turnaround",
    keywords: [
      "contact",
      "phone",
      "number",
      "email",
      "founder number",
      "srishanth number",
      "కాంటాక్ట్",
      "నంబర్",
      "ఫోన్ నంబర్",
      "కాంటాక్ట్ వివరాలు",
      "कॉन्टैक्ट",
      "फोन नंबर",
      "ईमेल",
      "श्रीशांत का नंबर"
    ],
    responses: {
      Telugu: "మా ఫౌండర్ శ్రీశాంత్ గారి డైరెక్ట్ వాట్సాప్ నంబర్ +91 99598 96378 అండి. ఇమెయిల్ webworks247designs@gmail.com. సాధారణంగా ఒకటి నుండి రెండు గంటల్లో ఆయన స్పందిస్తారు. స్క్రీన్ పై ఉన్న బటన్ ద్వారా కూడా ఇప్పుడే కనెక్ట్ అవ్వవచ్చు!",
      Hindi: "हमारे फाउंडर श्रीशांत जी का व्हाट्सएप नंबर +91 99598 96378 है जी, और ईमेल webworks247designs@gmail.com है। वे आमतौर पर 1 से 2 घंटे के भीतर रिप्लाई देते हैं। आप स्क्रीन पर दिए बटन से भी तुरंत जुड़ सकते हैं!",
      English: "Founder & Lead Web Engineer Srishanth M. can be reached on WhatsApp at +91 99598 96378 or via email at webworks247designs@gmail.com. He typically responds within 1 to 2 hours."
    }
  },

  // 12. Capabilities & Speed
  {
    id: "capabilities-speed",
    topic: "Development Capabilities & PageSpeed",
    keywords: [
      "speed",
      "pagespeed",
      "performance",
      "nextjs",
      "technology",
      "mobile",
      "responsive",
      "స్పీడ్",
      "టెక్నాలజీ",
      "మొబైల్",
      "स्पीड",
      "तकनीक",
      "मोबाइल"
    ],
    responses: {
      Telugu: "మేము ఆధునిక Next.js ఆర్కిటెక్చర్ తో మొబైల్-ఫస్ట్ వెబ్‌సైట్లను హ్యాండ్-కోడ్ చేస్తాము అండి. మా శాంపిల్స్ లో 99/100 PageSpeed స్కోర్ మరియు 0.3 సెకన్ల LCP రిపోర్ట్ అయ్యాయి. డైరెక్ట్ వాట్సాప్ బటన్స్, డిజిటల్ మెనూ ఫిల్టర్లు, టేబుల్ రిజర్వేషన్లు మరియు క్లయింట్ పోర్టల్ ట్రాకింగ్ మా ప్రధాన సదుపాయాలు!",
      Hindi: "हम मॉडर्न Next.js आर्किटेक्चर के साथ मोबाइल-फर्स्ट वेबसाइट्स हैंड-कोड करते हैं जी। हमारे सैंपल्स पर 99/100 PageSpeed स्कोर और 0.3 सेकंड का LCP देखा गया है। डायरेक्ट व्हाट्सएप बटन्स, डिजिटल मेनू और क्लाइंट पोर्टल ट्रैकिंग जैसी खूबियां मिलती हैं!",
      English: "We hand-code mobile-first websites on modern Next.js architecture with instant performance (up to 99/100 PageSpeed and 0.3s LCP in live examples). Features include direct WhatsApp buttons, digital menus, appointment selectors, and client tracking portals."
    }
  },

  // 13. Process Described on the Website
  {
    id: "process-steps",
    topic: "Process: Discover, Build, Track, Grow",
    keywords: [
      "process",
      "steps",
      "how it works",
      "how do you work",
      "workflow",
      "విధానం",
      "ప్రాసెస్",
      "ఎలా పనిచేస్తుంది",
      "प्रोसेस",
      "काम कैसे होता है"
    ],
    responses: {
      Telugu: "మా ప్రాసెస్ నాలుగు స్పష్టమైన దశల్లో సాగుతుంది అండి:\n1. Discover: మీ బిజినెస్, లోకల్ కాంపిటీషన్ మరియు కస్టమర్లను అర్థం చేసుకోవడం.\n2. Build: లీడ్స్ మరియు బుకింగ్స్ ఫోకస్ తో కస్టమ్ వెబ్‌సైట్ కోడ్ చేయడం.\n3. Track: వచ్చే ఎంక్వైరీలను క్లయింట్ పోర్టల్ ద్వారా ట్రాక్ చేయడం.\n4. Grow: కేవలం వెరిఫైడ్ ఎంక్వైరీల ఆధారంగా మాత్రమే బిల్లింగ్ చేయడం!",
      Hindi: "हमारा काम 4 आसान स्टेप्स में होता है जी:\n1. Discover: आपके बिज़नेस और लोकल कॉम्पिटिटर्स को समझना।\n2. Build: डायरेक्ट बुकिंग्स और कॉल्स के लिए वेबसाइट तैयार करना।\n3. Track: आने वाली लीड्स को पोर्टल में ट्रैक करना।\n4. Grow: केवल वेरिफाइड लीड्स पर बिलिंग का पारदर्शी मॉडल!",
      English: "Our process follows 4 simple steps:\n1. Discover: Understand your local competition and ideal customer flow.\n2. Build: Design and hand-code a fast website focused on WhatsApp bookings and calls.\n3. Track: Live client portal with enquiry timestamps and verification.\n4. Grow: Pay only for agreed qualified leads."
    }
  },

  // 14. Indicative Enquiry Rates
  {
    id: "indicative-rates",
    topic: "Indicative Enquiry Rates by Industry",
    keywords: [
      "rate",
      "rates",
      "per lead",
      "enquiry rate",
      "cost per lead",
      "industry rate",
      "ధరలు",
      "లీడ్ రేటు",
      "రేట్లు",
      "दरें",
      "प्रति लीड"
    ],
    responses: {
      Telugu: "వెబ్‌సైట్ లోని ఉదాహరణల ప్రకారం:\n• కేఫ్‌లు & క్విక్ డైనింగ్: ₹20–₹40 ప్రతి కన్ఫర్మ్డ్ ఆర్డర్/టేబుల్ లీడ్ కి.\n• లగ్జరీ సెలూన్లు: ₹50–₹100 ప్రతి బుక్డ్ గ్రూమింగ్ కి.\n• బేకరీలు: ₹60–₹120 ప్రతి కస్టమ్ ప్రీ-ఆర్డర్ కి.\n• క్లినిక్‌లు: ₹150–₹250 ప్రతి పేషెంట్ కన్సల్టేషన్ కి.\nఇవి ఉజ్జాయింపు రేట్లు మాత్రమే; మీ వ్యాపారానికి కచ్చితమైన రేటు శ్రీశాంత్ గారు లిఖితపూర్వకంగా ఖరారు చేస్తారు!",
      Hindi: "वेबसाइट पर दिखाए गए अनुमानित रेट्स:\n• कैफ़े & डाइनिंग: ₹20–₹40 प्रति कन्फर्म्ड टेबल/ऑर्डर लीड।\n• लक्ज़री सैलून्स: ₹50–₹100 प्रति ग्रूमिंग अपॉइंटमेंट।\n• बेकरीज: ₹60–₹120 प्रति कस्टम ऑर्डर।\n• क्लिनिक्स: ₹150–₹250 प्रति पेशेंट कंसल्टेशन।\nये केवल सांकेतिक दरें हैं; आपके बिज़नेस के लिए सटीक रेट श्रीशांत जी लिखित में तय करेंगे!",
      English: "Indicative ranges shown on the website include:\n• Cafes & Dining: ₹20–₹40 per confirmed order/table lead (typical ticket ₹400–₹1,200)\n• Luxury Salons: ₹50–₹100 per booked grooming (typical ticket ₹800–₹2,500)\n• Bakeries: ₹60–₹120 per custom preorder (typical ticket ₹1,500–₹4,000)\n• Clinics: ₹150–₹250 per consultation (typical ticket ₹1,000–₹3,500)\n• Portfolios: ₹0 per lead (flat setup).\nExact rates are customized and confirmed in writing by Srishanth before launch."
    }
  }
];

/**
 * Searches the knowledge base for a relevant match based on keywords
 */
export function queryKnowledgeBase(
  userQuery: string,
  lang: "Telugu" | "English" | "Hindi"
): string | null {
  const clean = userQuery.toLowerCase().trim();
  if (!clean) return null;

  // Direct keyword matching with scoring
  let bestMatch: KnowledgeItem | null = null;
  let highestScore = 0;

  for (const item of meeraKnowledgeBase) {
    let score = 0;
    for (const kw of item.keywords) {
      const lowerKw = kw.toLowerCase();
      if (clean === lowerKw) {
        score += 10;
      } else if (clean.includes(lowerKw)) {
        score += lowerKw.length;
      }
    }
    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && highestScore > 0) {
    return bestMatch.responses[lang];
  }

  return null;
}
