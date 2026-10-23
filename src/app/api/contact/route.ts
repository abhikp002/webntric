import { NextResponse } from "next/server";
import { validateContactForm } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = validateContactForm(body);
    if (!validation.success || !validation.data) {
      return NextResponse.json(
        {
          success: false,
          message: "Please review the highlighted fields and try again.",
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const payload = {
      ...validation.data,
      submittedAt: new Date().toISOString(),
      source: "webntric.com/contact",
    };

    // Optional webhook / email forwarding when CONTACT_WEBHOOK_URL is configured
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (webhookError) {
        console.error(
          "[Webntric Contact API] Webhook delivery warning:",
          webhookError
        );
      }
    }

    console.info("[Webntric Contact Enquiry]", {
      name: payload.name,
      businessName: payload.businessName,
      email: payload.email,
      phone: payload.phone,
      businessType: payload.businessType,
      currentChallenge: payload.currentChallenge,
      desiredService: payload.desiredService,
      budgetRange: payload.budgetRange || "unspecified",
      timeline: payload.timeline || "unspecified",
      submittedAt: payload.submittedAt,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you. Your project enquiry has been received and a senior team member will reply within 1 business day.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message:
          "We encountered an issue processing your request. Please try again or reach us directly via email or phone.",
      },
      { status: 500 }
    );
  }
}
