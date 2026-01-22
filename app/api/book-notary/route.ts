import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface BookingPayload {
  service: string;
  clarifier: string;
  urgencyValue: string;
  urgencyLabel: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  contactPref?: string;
  location: string;
  note: string;
}

export async function POST(request: Request) {
  const data = (await request.json()) as BookingPayload;

  // Configure nodemailer transporter for IONOS SMTP. Provide credentials via env variables.
  const transporter = nodemailer.createTransport({
    host: process.env.IONOS_HOST,
    port: process.env.IONOS_PORT ? parseInt(process.env.IONOS_PORT) : 587,
    secure: false,
    auth: {
      user: process.env.IONOS_USER as string,
      pass: process.env.IONOS_PASS as string,
    },
  });

  // Compose internal booking email
  const internalSubject = `New Booking Request: ${data.service} – ${data.urgencyLabel}`;
  const internalBody = [
    'New booking request from the NotariesBy website',
    '',
    `Service: ${data.service}`,
    `Details: ${data.clarifier}`,
    `Urgency: ${data.urgencyLabel}`,
    '',
    `Name: ${data.firstName} ${data.lastName ?? ''}`.trim(),
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Preferred contact method: ${data.contactPref || 'Not specified'}`,
    `Location: ${data.location}`,
    '',
    'Extra details and possible days/times:',
    data.note,
    '',
    'Please respond directly to the client to confirm an appointment time within their requested timeframe.',
  ].join('\n');

  // Compose confirmation email for the user
  const confirmationSubject = 'We received your booking request – NotariesBy';
  const confirmationBody = [
    'Thank you for your booking request with NotariesBy. We\u2019ve received the following details:',
    '',
    `Service: ${data.service}`,
    `Details: ${data.clarifier}`,
    `Urgency: ${data.urgencyLabel}`,
    '',
    `Name: ${data.firstName} ${data.lastName ?? ''}`.trim(),
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Location: ${data.location}`,
    '',
    'Extra details and possible days/times:',
    data.note,
    '',
    'We typically respond within 24 hours to confirm your appointment and finalize a date and time within your requested timeframe.',
    '',
    '– NotariesBy',
  ].join('\n');

  try {
    // Send internal email to business with reply-to user email
    await transporter.sendMail({
      from: process.env.IONOS_FROM || 'info@notariesby.com',
      to: 'info@notariesby.com',
      replyTo: data.email,
      subject: internalSubject,
      text: internalBody,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.IONOS_FROM || 'info@notariesby.com',
      to: data.email,
      subject: confirmationSubject,
      text: confirmationBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending booking emails:', error);
    return new NextResponse('Error sending booking emails', { status: 500 });
  }
}
