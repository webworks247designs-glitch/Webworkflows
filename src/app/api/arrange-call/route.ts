import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name = "Interested Client",
      phone = "",
      business = "Local Business",
      preferredTime = "Within 24 hours",
      language = "English",
      notes = "Inquired via Meera Voice Assistant about ₹3,000 website model",
    } = body;

    // Validate phone number (at least 10 digits)
    const cleanedPhone = (phone || "").replace(/\D/g, "");
    if (!cleanedPhone || cleanedPhone.length < 10) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    const formattedClientNumber = `+91${cleanedPhone.slice(-10)}`;
    const founderWhatsAppNumber = "919959896378"; // Founder Srishanth M.

    // Format WhatsApp alert for Founder Srishanth M.
    const founderNotification = [
      `🚨 *NEW CLIENT CALL REQUEST — WEBWORKFLO'S*`,
      ``,
      `👤 *Client Name:* ${name.trim() || "Interested Client"}`,
      `📱 *Mobile Number:* ${formattedClientNumber}`,
      `🏢 *Business / Shop:* ${business.trim() || "Not specified"}`,
      `⏰ *Preferred Time:* ${preferredTime}`,
      `🌐 *Language:* ${language}`,
      `📝 *Context:* ${notes}`,
      ``,
      `👉 *Call Client Directly:* tel:${formattedClientNumber}`,
      `👉 *Chat with Client on WhatsApp:* https://wa.me/91${cleanedPhone.slice(-10)}`,
      ``,
      `_Generated live by Meera Voice Assistant on webworkflos.com_`,
    ].join("\n");

    const founderWhatsAppLink = `https://wa.me/${founderWhatsAppNumber}?text=${encodeURIComponent(founderNotification)}`;

    // Client confirmation message
    const clientConfirmation = [
      `Hi ${name.trim() || "there"}! 👋`,
      ``,
      `This is Srishanth M., Founder of Webworkflo's in Hyderabad.`,
      `Thank you for speaking with our AI assistant Meera!`,
      ``,
      `I have received your request for a call at *${preferredTime}*.`,
      `I look forward to discussing how we can build your high-converting business website starting at just ₹3,000 with zero monthly agency retainers.`,
      ``,
      `Talk to you soon!`,
    ].join("\n");

    const clientWhatsAppLink = `https://wa.me/91${cleanedPhone.slice(-10)}?text=${encodeURIComponent(clientConfirmation)}`;

    console.log(`[Lead Dossier Created]: ${name} (${formattedClientNumber}) - Scheduled for: ${preferredTime}`);

    return NextResponse.json({
      success: true,
      message: "Call scheduled successfully! Founder Srishanth M. has been notified.",
      lead: {
        name,
        phone: formattedClientNumber,
        business,
        preferredTime,
        language,
      },
      founderWhatsAppLink,
      clientWhatsAppLink,
    });
  } catch (error) {
    console.error("Error arranging call with founder:", error);
    return NextResponse.json(
      { success: false, error: "Failed to schedule call. Please try again." },
      { status: 500 }
    );
  }
}
