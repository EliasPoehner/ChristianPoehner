"use server";

import nodemailer from "nodemailer";
import { headers } from "next/headers";
import { checkRateLimit } from "./rate-limit";

export interface ContactFormState {
  success: boolean;
  error?: string;
}

export async function sendContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot prüfen
  const honeypot = formData.get("website") as string;
  if (honeypot) {
    return { success: true }; // Silent fail für Bots
  }

  // Timestamp prüfen (mind. 3 Sekunden)
  const timestamp = parseInt(formData.get("_timestamp") as string, 10);
  if (!timestamp || Date.now() - timestamp < 3000) {
    return { success: true }; // Silent fail
  }

  // Rate Limit
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return {
      success: false,
      error: "Sie haben zu viele Nachrichten gesendet. Bitte versuchen Sie es später erneut.",
    };
  }

  // Validierung
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const betreff = (formData.get("betreff") as string)?.trim();
  const nachricht = (formData.get("nachricht") as string)?.trim();
  const dsgvo = formData.get("dsgvo");

  if (!name || name.length < 2) {
    return { success: false, error: "Bitte geben Sie Ihren Namen ein." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return { success: false, error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." };
  }

  if (!nachricht || nachricht.length < 10) {
    return { success: false, error: "Bitte geben Sie eine Nachricht ein (mind. 10 Zeichen)." };
  }

  if (!dsgvo) {
    return { success: false, error: "Bitte stimmen Sie der Datenschutzerklärung zu." };
  }

  // E-Mail senden
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT ?? "587", 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Kontaktformular" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      replyTo: `"${name}" <${email}>`,
      subject: betreff
        ? `Kontaktformular: ${betreff}`
        : `Neue Nachricht von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${nachricht}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        ${betreff ? `<p><strong>Betreff:</strong> ${betreff}</p>` : ""}
        <hr />
        <p><strong>Nachricht:</strong></p>
        <p>${nachricht.replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error("Mail error:", err);
    return {
      success: false,
      error: "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder schreiben Sie direkt an chris@poehni.de.",
    };
  }
}
