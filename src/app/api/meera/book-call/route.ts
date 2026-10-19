import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      clientName = "Interested Client",
      name,
      phone = "",
      businessType = "Local Business",
      business,
      language = "English",
      preferredTime = "Within 24 hours",
    } = body;

    const resolvedName = (clientName || name || "Interested Client").trim();
    const resolvedBusiness = (businessType || business || "Local Business").trim();

    // Clean and validate phone (at least 10 digits)
    const cleanedPhone = (phone || "").replace(/\D/g, "");
    if (!cleanedPhone || cleanedPhone.length < 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    const formattedClientNumber = `+91${cleanedPhone.slice(-10)}`;
    const founderWhatsAppNumber = "919959896378";

    // Format WhatsApp message text
    const founderNotification = [
      `🚨 *NEW FOUNDER CALL REQUEST — WEBWORKFLO'S*`,
      ``,
      `👤 *Client Name:* ${resolvedName}`,
      `📱 *Phone Number:* ${formattedClientNumber}`,
      `🏢 *Business Type:* ${resolvedBusiness}`,
      `🌐 *Language:* ${language}`,
      `⏰ *Requested Callback:* ${preferredTime}`,
      ``,
      `👉 *Call Directly:* tel:${formattedClientNumber}`,
      `👉 *Chat on WhatsApp:* https://wa.me/91${cleanedPhone.slice(-10)}`,
      ``,
      `_Submitted via Website Lead Capture Modal_`,
    ].join("\n");

    const founderWhatsAppLink = `https://wa.me/${founderWhatsAppNumber}?text=${encodeURIComponent(founderNotification)}`;
    const clientWhatsAppLink = `https://wa.me/91${cleanedPhone.slice(-10)}?text=${encodeURIComponent(
      `Hi ${resolvedName}! Thank you for contacting Webworkflo's. Founder Srishanth M. will call you back within 24 hours to discuss your website.`
    )}`;

    // 1. Dispatch Email Notification if SMTP credentials are configured
    const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER || "webworks247designs@gmail.com";
    const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD;

    if (smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Webworkflo's Website Lead" <${smtpUser}>`,
          to: "webworks247designs@gmail.com",
          subject: `🚨 New Call Request: ${resolvedName} (${resolvedBusiness})`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E5E7EB; border-radius: 8px;">
              <h2 style="color: #111827; margin-bottom: 16px; border-bottom: 2px solid #25D366; padding-bottom: 8px;">
                🚨 New Founder Call Request
              </h2>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 8px 0; color: #4B5563; font-weight: bold; width: 140px;">Client Name:</td>
                  <td style="padding: 8px 0; color: #111827; font-size: 16px;">${resolvedName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #4B5563; font-weight: bold;">Mobile Number:</td>
                  <td style="padding: 8px 0; color: #111827; font-size: 16px;">
                    <a href="tel:${formattedClientNumber}" style="color: #2563EB; text-decoration: none; font-weight: bold;">${formattedClientNumber}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #4B5563; font-weight: bold;">Business Type:</td>
                  <td style="padding: 8px 0; color: #111827;">${resolvedBusiness}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #4B5563; font-weight: bold;">Language:</td>
                  <td style="padding: 8px 0; color: #111827;">${language}</td>
                </tr>
              </table>

              <div style="margin-top: 24px; display: flex; gap: 12px;">
                <a href="https://wa.me/91${cleanedPhone.slice(-10)}" style="background: #25D366; color: #FFFFFF; padding: 12px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block;">
                  💬 Chat Client on WhatsApp
                </a>
                <a href="tel:${formattedClientNumber}" style="background: #111827; color: #FFFFFF; padding: 12px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; margin-left: 10px;">
                  📞 Call Client Directly
                </a>
              </div>
            </div>
          `,
        });
        console.log(`[Email Sent] Call request email delivered to webworks247designs@gmail.com`);
      } catch (emailErr) {
        console.error("[Email Notification Warning] Could not deliver email:", emailErr);
      }
    } else {
      console.log(`[Email Notice] SMTP_PASS not set in .env.local yet. Add Gmail 16-character App Password to enable instant inbox delivery.`);
    }

    console.log(`[Lead Captured] ${resolvedName} (${formattedClientNumber}) - ${resolvedBusiness}`);

    return NextResponse.json({
      success: true,
      message: "Call scheduled successfully! Founder Srishanth M. has been notified.",
      founderWhatsAppLink,
      clientWhatsAppLink,
      lead: {
        name: resolvedName,
        phone: formattedClientNumber,
        business: resolvedBusiness,
      },
    });
  } catch (error) {
    console.error("Error booking call:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
