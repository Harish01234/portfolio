// src/app/api/sendEmail/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface FormData {
  email: string;   // User's email
  message: string; // Message content from user
}

// Ensure you replace this with your actual email
// const RECIPIENT_EMAIL = 'your-email@example.com'; // Your email address where you want to receive messages

export async function POST(req: NextRequest) {
  try {
    const body: FormData = await req.json();
    const { email, message } = body;

    // Validate input
    if (!email || !message) {
      return NextResponse.json(
        { success: false, message: 'Email and message are required.' },
        { status: 400 }
      );
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or any other email service
      auth: {
        user: process.env.EMAIL_USER, // Your email (for sending)
        pass: process.env.EMAIL_PASS, // Your email password (use app-specific password)
      },
    });

    // Email options
    const mailOptions = {
      from: email, // Sender address (user's email)
      to: process.env.EMAIL_USER, // Recipient address (your email)
      subject: 'New Contact Us Form Submission',
      text: `Message from: ${email}\n\n${message}`, // Email body
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 500 }
    );
  }
}
