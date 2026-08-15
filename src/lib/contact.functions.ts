import { createServerFn } from "@tanstack/react-start";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";
const TO_EMAIL = "mahmadimran383@gmail.com";

type ContactInput = { name: string; email: string; message: string };

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator((data: ContactInput) => {
    const name = (data?.name ?? "").trim();
    const email = (data?.email ?? "").trim();
    const message = (data?.message ?? "").trim();

    if (!name || name.length > 100) throw new Error("Please enter your name (max 100 characters).");
    if (!email || email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      throw new Error("Please enter a valid email address.");
    if (message.length < 5 || message.length > 5000)
      throw new Error("Message must be between 5 and 5000 characters.");

    return { name, email, message };
  })
  .handler(async ({ data }) => {
    const lovableApiKey = process.env["LOVABLE_API_KEY"];
    const resendApiKey = process.env["RESEND_API_KEY"];
    if (!lovableApiKey || !resendApiKey) {
      throw new Error("Email service is not configured yet. Please try again later.");
    }

    const response = await fetch(`${GATEWAY_URL}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableApiKey}`,
        "X-Connection-Api-Key": resendApiKey,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [TO_EMAIL],
        reply_to: data.email,
        subject: `New Portfolio Message from ${data.name}`,
        html: `<div style="font-family:Arial,sans-serif;line-height:1.6">
  <h2 style="margin:0 0 12px">New portfolio message</h2>
  <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
  <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
  <p><strong>Message:</strong></p>
  <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
</div>`,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Resend request failed [${response.status}]: ${errorBody}`);
      throw new Error("Could not send your message right now. Please email me directly.");
    }

    return { ok: true as const };
  });
