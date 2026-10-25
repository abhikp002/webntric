import { NextResponse } from "next/server";
import { validateStartupApplication } from "@/lib/validation";
import { sendStartupApplicationEmails } from "@/lib/email";

// In-memory rate limiting map: ip -> timestamps[]
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS
  );

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, validTimestamps);
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(request: Request) {
  try {
    // 1. IP identification & Rate Limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Too many submissions received from this network. Please wait a few minutes before trying again.",
        },
        { status: 429 }
      );
    }

    // 2. Body Parsing & Strict Validation
    const body = await request.json();
    const validation = validateStartupApplication(body);

    if (!validation.success || !validation.data) {
      return NextResponse.json(
        {
          success: false,
          message: "Please review the highlighted fields and submit again.",
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const applicationData = validation.data;

    // 3. Sanitized Audit Log (Confidential details NOT printed to console logs)
    console.info("[Startup Application Received]", {
      timestamp: new Date().toISOString(),
      projectName: applicationData.projectName,
      founderName: applicationData.founderName,
      stage: applicationData.stage,
      industry: applicationData.industry,
      location: applicationData.location,
      founderCount: applicationData.founderCount,
      requestedSupport: applicationData.requestedSupport.slice(0, 50),
      timeline: applicationData.expectedTimeline,
    });

    // 4. Secure Email Dispatch (Gmail SMTP via info@webntric.com)
    try {
      await sendStartupApplicationEmails(applicationData);
    } catch (emailError) {
      console.error(
        "[Startup Application API] Notification dispatch error:",
        emailError
      );
    }

    // 5. Successful Response
    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for sharing your startup idea. Our team will review the information and contact you if there appears to be a potential fit. Submission does not guarantee acceptance or create a partnership.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Startup Application API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "We encountered an issue processing your application. Please verify your internet connection or email us directly at info@webntric.com.",
      },
      { status: 500 }
    );
  }
}
