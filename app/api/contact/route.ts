import { NextResponse } from 'next/server';
import { transporter, mailOptions } from '@/lib/email';

export async function POST(req: Request) {
  const { name, email, company, projectType, message } = await req.json();
  
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `New Contact Form Submission from alexrayer.com`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || 'Not provided'}
        Project Type: ${projectType}
        Message: ${message}
      `,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}


