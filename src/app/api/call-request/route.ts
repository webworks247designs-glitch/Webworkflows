import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone, language = "English" } = body;

    // Validate phone number (10 digits)
    const cleanedPhone = (phone || "").replace(/\D/g, "");
    if (!cleanedPhone || cleanedPhone.length < 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    const recipientNumber = `+91${cleanedPhone.slice(-10)}`;
    const bolnaApiKey = process.env.BOLNA_API_KEY;
    const bolnaAgentId = process.env.BOLNA_AGENT_ID;

    // 1. PRIMARY: Dispatch live call via Bolna
    if (bolnaApiKey && bolnaAgentId) {
      console.log(`[Bolna AI] Dispatching live outbound call to ${recipientNumber} using Agent ${bolnaAgentId}`);
      
      try {
        const bolnaRes = await fetch("https://api.bolna.dev/call", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${bolnaApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            agent_id: bolnaAgentId,
            recipient_phone_number: recipientNumber,
          }),
        });

        const bolnaData = await bolnaRes.json();
        console.log("[Bolna AI Response]:", bolnaData);

        if (!bolnaRes.ok) {
          const errMsg = bolnaData.message || bolnaData.error || "Bolna call dispatch failed.";
          console.warn("[Bolna AI Warning]:", errMsg);
          return NextResponse.json({
            success: false,
            error: errMsg,
          }, { status: bolnaRes.status });
        }

        const growthPlanMessage = [
          `Hi! This is Srishanth M., founder of Webworkflo's in Hyderabad.`,
          ``,
          `Our AI assistant Meera just connected with you regarding your business website.`,
          ``,
          `As promised, here is your Free Website Growth Plan outline:`,
          `1. Local Google Search & Competitor Analysis: Identify where your ideal customers are searching and how to outrank local competitors.`,
          `2. 1-Tap WhatsApp Conversion Engine: Stop losing mobile visitors by connecting direct WhatsApp ordering and booking buttons.`,
          `3. Zero-Risk Pricing Model: Fast setup starting at ₹3,000, with no heavy monthly retainers — you only pay as you get genuine enquiries.`,
          ``,
          `When would be a good time for a quick 5-minute chat to tailor this specifically to your business?`
        ].join("\n");

        const clientWaLink = `https://wa.me/91${cleanedPhone}?text=${encodeURIComponent(growthPlanMessage)}`;

        // Check if currently within Indian calling hours (9 AM - 9 PM IST)
        const now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const istDate = new Date(utc + (3600000 * 5.5));
        const istHour = istDate.getHours();
        const isOutsideHours = istHour < 9 || istHour >= 21;

        const successMessage = isOutsideHours
          ? `Request received! Per telecom guidelines, Meera calls between 9:00 AM – 9:00 PM IST. Your call is scheduled for 9:00 AM.`
          : `Meera is calling your number ${recipientNumber} now! Please pick up.`;

        return NextResponse.json({
          success: true,
          message: successMessage,
          phone: cleanedPhone,
          callId: bolnaData.call_id || bolnaData.id || `bolna_${Date.now()}`,
          clientWaLink,
          isLive: !isOutsideHours,
          isScheduled: isOutsideHours,
        });
      } catch (bolnaErr) {
        console.error("[Bolna Dispatch Error]:", bolnaErr);
        return NextResponse.json({
          success: false,
          error: "Failed to connect to Bolna API. Please check your network or credentials.",
        }, { status: 500 });
      }
    }

    // 2. FALLBACK: Demo mode if keys are missing
    console.log(`[Meera AI Demo] Dispatching simulated call to ${recipientNumber} in ${language}`);

    return NextResponse.json({
      success: true,
      message: `Call scheduled! Meera is ringing your device in demo mode...`,
      phone: cleanedPhone,
      language,
      callId: `demo_call_${Date.now()}`,
      isLive: false,
    });
  } catch (error) {
    console.error("Call request error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to dispatch call. Please try again." },
      { status: 500 }
    );
  }
}
