// Optional Email Handler for inquiries via Resend / Formspree
// Reads RESEND_API_KEY from environment variables (never hardcoded)

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, fullName, phone, email, details, honeypot } = body;

    // Spam prevention honeypot
    if (honeypot) {
      return new Response(JSON.stringify({ error: "Spam detected" }), { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.NOTIFICATION_EMAIL || "info@amorekalutara.com";

    if (!apiKey) {
      // If no email service is configured, return gracefully since WhatsApp is primary
      return new Response(JSON.stringify({ 
        success: true, 
        message: "Email service not configured; inquiry delivered via WhatsApp link." 
      }), { status: 200 });
    }

    // Call Resend API
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Amore Website <onboarding@resend.dev>",
        to: [recipientEmail],
        subject: `[Amore Website] New ${type} from ${fullName}`,
        text: `Customer Name: ${fullName}\nPhone: ${phone}\nEmail: ${email || 'Not provided'}\n\nDetails:\n${JSON.stringify(details, null, 2)}`
      })
    });

    if (!res.ok) {
      const err = await res.text();
      return new Response(JSON.stringify({ error: err }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to process inquiry" }), { status: 500 });
  }
}
