import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    console.log("[Bolna Webhook Received]:", JSON.stringify(payload, null, 2));

    const userNumber = payload.user_number || payload.recipient_phone_number || payload.telephony_data?.to_number || "";
    const cleanedNumber = userNumber.replace(/\D/g, "");
    const transcript = payload.transcript || payload.summary || "Call completed";
    const recordingUrl = payload.telephony_data?.recording_url || payload.recording_url || "";

    // Pre-filled WhatsApp message for Srishanth to send to the client
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

    const clientWaLink = `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(growthPlanMessage)}`;

    console.log(`[Lead Dossier Created for +${cleanedNumber}]`);
    console.log(`1-Tap Client Reply Link: ${clientWaLink}`);
    if (recordingUrl) console.log(`Call Recording: ${recordingUrl}`);

    return NextResponse.json({
      success: true,
      message: "Lead processed successfully",
      userNumber: cleanedNumber,
      clientWaLink,
      recordingUrl,
    });
  } catch (error) {
    console.error("[Bolna Webhook Error]:", error);
    return NextResponse.json({ success: false, error: "Failed to process webhook" }, { status: 500 });
  }
}
