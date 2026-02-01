// lib/email.ts
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  // This will warn in logs if you forgot to set the env var
  console.warn("RESEND_API_KEY is not set. Email sending will fail.");
}

export const resend = new Resend(resendApiKey);

export const EMAIL_FROM =
  process.env.EMAIL_FROM || "SKY AVENUE <no-reply@yourdomain.com>";

export const RESERVATION_NOTIFICATION_EMAIL =
  process.env.RESERVATION_NOTIFICATION_EMAIL || "reservations@yourdomain.com";

export const CONTACT_NOTIFICATION_EMAIL =
  process.env.CONTACT_NOTIFICATION_EMAIL || "info@yourdomain.com";

/** Email template for reservation requests */
export async function sendReservationEmail(params: {
  fullName: string;
  date: string;
  time: string;
  guests: number;
  phone: string;
  notes?: string;
}) {
  const { fullName, date, time, guests, phone, notes } = params;

  return resend.emails.send({
    from: EMAIL_FROM,
    to: RESERVATION_NOTIFICATION_EMAIL,
    subject: `New reservation request from ${fullName}`,
    html: `
      <h1>New Reservation Request</h1>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Guests:</strong> ${guests}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Notes:</strong> ${notes || "—"}</p>
      <hr />
      <p>This email was sent from the SKY AVENUE website reservation form.</p>
    `
  });
}

/** Email template for contact form messages */
export async function sendContactEmail(params: {
  name: string;
  email: string;
  message: string;
}) {
  const { name, email, message } = params;

  return resend.emails.send({
    from: EMAIL_FROM,
    to: CONTACT_NOTIFICATION_EMAIL,
    subject: `New contact message from ${name}`,
    replyTo: email, // so you can reply directly from your inbox
    html: `
      <h1>New Contact Message</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
      <hr />
      <p>This email was sent from the SKY AVENUE website contact form.</p>
    `
  });
}