import { NextResponse } from 'next/server';

// Rate limiting in-memory storage (resets on server restart)
const rateLimitMap = new Map<string, { count: number; lastRequest: number }>();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 3;

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  service: 'epc' | 'om' | 'rooftop' | 'general';
  message: string;
  honeypot: string; // Bot protection
}

export async function POST(request: Request) {
  // 1. Rate Limiting Check
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : 'anonymous';
  const now = Date.now();
  const userData = rateLimitMap.get(ip);

  if (userData) {
    if (now - userData.lastRequest < RATE_LIMIT_WINDOW) {
      if (userData.count >= MAX_REQUESTS) {
        return NextResponse.json(
          { success: false, message: 'Too many requests. Please try again after 10 minutes.' },
          { status: 429 }
        );
      }
      userData.count += 1;
      userData.lastRequest = now;
    } else {
      rateLimitMap.set(ip, { count: 1, lastRequest: now });
    }
  } else {
    rateLimitMap.set(ip, { count: 1, lastRequest: now });
  }

  try {
    const body: ContactRequest = await request.json();
    const { name, email, phone, service, message, honeypot } = body;

    // 2. Honeypot check (reject silently or with error if filled)
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'We will be in touch within 24 hours.' }, { status: 200 });
    }

    // 3. Server-side validation
    const errors: Record<string, string> = {};

    if (!name || name.length < 2 || name.length > 100) {
      errors.name = 'Name must be between 2 and 100 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = 'Please provide a valid email address.';
    }

    const indianPhoneRegex = /^[6-9]\d{9}$/;
    if (phone && !indianPhoneRegex.test(phone)) {
      errors.phone = 'Please provide a valid 10-digit Indian mobile number.';
    }

    const validServices = ['epc', 'om', 'rooftop', 'general'];
    if (!service || !validServices.includes(service)) {
      errors.service = 'Please select a valid service.';
    }

    if (!message || message.length < 20 || message.length > 2000) {
      errors.message = 'Message must be between 20 and 2000 characters.';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 422 });
    }

    // 4. Log submission (Placeholder for actual email service)
    console.log('--- NEW CONTACT SUBMISSION ---');
    console.log(`From: ${name} (${email})`);
    console.log(`Phone: ${phone || 'N/A'}`);
    console.log(`Service: ${service}`);
    console.log(`Message: ${message}`);
    console.log('------------------------------');

    /**
     * TODO: Integrate Email Service
     * Recommendation: Use Resend or Nodemailer here.
     * Example:
     * await resend.emails.send({
     *   from: 'contact@sunfraaglobal.com',
     *   to: 'admin@sunfraaglobal.com',
     *   subject: `New Enquiry: ${service}`,
     *   react: ContactEmailTemplate({ name, email, message })
     * });
     */

    return NextResponse.json(
      { success: true, message: 'We will be in touch within 24 hours.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[API_CONTACT_ERROR]', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error.' }, 
      { status: 500 }
    );
  }
}
