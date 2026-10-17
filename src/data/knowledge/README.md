# Meera AI Voice Assistant — Knowledge Base Ingestion

This folder is designed to receive your business knowledge base documents, including **PDFs, FAQs, pricing guides, or service catalogues**.

---

## 📄 How to Provide Your PDF / Knowledge Base

You can provide your knowledge base in **any of the following 3 ways**:

### Method 1: Drop your PDF file into the project
1. Place your PDF file in this directory:
   `src/data/knowledge/knowledge-base.pdf` (or `public/knowledge/knowledge-base.pdf`).
2. Ask the assistant:
   > *"I have placed `knowledge-base.pdf` in the folder. Please read it and add its questions and answers to Meera."*
3. The assistant will parse the PDF and extract key questions, answers, packages, and policies across English, Telugu, and Hindi into `knowledgeStore.ts`.

### Method 2: Share / Paste the PDF Content Directly in Chat
- You can simply copy-paste the text of your PDF directly in our conversation, or upload the file through the chat UI.
- The assistant will immediately structure your content and update `meeraKnowledgeBase` in `knowledgeStore.ts` with custom, native conversational responses.

### Method 3: Edit `knowledgeStore.ts` directly
- Open `src/data/knowledge/knowledgeStore.ts`.
- Add items to the `meeraKnowledgeBase` array following the `KnowledgeItem` interface:
```typescript
{
  id: "custom-topic",
  topic: "Your Custom Topic",
  keywords: ["keyword1", "keyword2", "కీవర్డ్", "कीवर्ड"],
  responses: {
    Telugu: "మీ తెలుగు సమాధానం ఇక్కడ వ్రాయండి.",
    Hindi: "अपना हिंदी जवाब यहाँ लिखें।",
    English: "Your English conversational response here."
  }
}
```

---

## ⚡ Active Knowledge Topics Included
- **Hosting & Domain Setup** (SSL, cloud servers, custom domains)
- **Local SEO & Google Rankings** (Hyderabad keywords, Google Maps placement)
- **Payment & UPI Gateways** (PhonePe, Google Pay, direct bank transfer)
- **Ongoing Support & Maintenance** (Fast turnaround, zero agency retainers)
- **Portfolio & Client Work** (Live local business examples)
