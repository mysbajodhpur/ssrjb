import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, phone } = await request.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Admin Email Template (To Ramesh Bishnoi)
    const adminMailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Sender address
      to: process.env.EMAIL_USER, // My email
      replyTo: email,
      subject: `New Contact Inquiry: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0b2b30; padding: 20px; text-align: center;">
            <h2 style="color: #d4af37; margin: 0; font-family: 'Times New Roman', serif;">संत श्री रणधीर जी बाबल सेवा संस्थान</h2>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="color: #666; font-size: 14px;">नमस्ते,</p>
            <h3 style="color: #333; margin-top: 5px;">New Message from Website Form</h3>
            
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #d4af37; margin: 20px 0;">
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
              <p style="margin: 5px 0;"><strong>Message:</strong></p>
              <p style="margin: 5px 0; color: #555;">${message}</p>
            </div>

            <p style="color: #999; font-size: 12px; margin-top: 30px; text-align: center;">This message was sent from the SSRJB Website Contact Form.</p>
          </div>
        </div>
      `,
    };

    // 2. User Confirmation Email Template
    const userMailOptions = {
      from: `"SSRJB Seva Sansthan" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `हमें आपका संदेश प्राप्त हुआ - संत श्री रणधीर जी बाबल सेवा संस्थान`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #0b2b30 0%, #1a4a52 100%); padding: 30px 20px; text-align: center;">
             <h1 style="color: #d4af37; margin: 0; font-family: 'Cinzel', serif; font-size: 24px; letter-spacing: 1px;">संत श्री रणधीर जी बाबल</h1>
             <p style="color: rgba(255,255,255,0.7); margin: 5px 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">सेवा संस्थान</p>
          </div>

          <!-- Body -->
          <div style="padding: 40px 30px; background-color: #ffffff;">
            <h2 style="color: #0b2b30; margin-top: 0;">नमस्ते ${nameDisplayName(name)},</h2>
            <p style="color: #555; line-height: 1.6; font-size: 16px;">
              हमें आपका संदेश प्राप्त हुआ है। <strong>संत श्री रणधीर जी बाबल सेवा संस्थान</strong> में संपर्क करने के लिए धन्यवाद।
            </p>
            <p style="color: #555; line-height: 1.6; font-size: 16px;">
              हमारी टीम आपके संदेश की समीक्षा कर रही है और हम जल्द से जल्द (24-48 घंटों के भीतर) आपसे संपर्क करेंगे।
            </p>
            
            <div style="margin: 30px 0; border-top: 1px solid #eee; border-bottom: 1px solid #eee; padding: 20px 0;">
              <p style="margin: 0 0 10px; color: #888; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">आपका विवरण:</p>
              <p style="margin: 5px 0; color: #333;"><strong>विषय:</strong> ${subject}</p>
              <p style="margin: 5px 0; color: #333;"><strong>संदेश सारांश:</strong> ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</p>
            </div>

            <p style="color: #555; line-height: 1.6;">
              यदि आपको तत्काल सहायता की आवश्यकता है, तो कृपया हमें <a href="tel:+919818757905" style="color: #d4af37; text-decoration: none; font-weight: bold;">+91 98187 57905</a> पर कॉल करें।
            </p>

            <a href="https://randheerseva.org" style="display: inline-block; background-color: #d4af37; color: #0b2b30; text-decoration: none; padding: 12px 25px; border-radius: 50px; font-weight: bold; margin-top: 20px; transition: all 0.3s ease;">वेबसाइट पर जाएँ</a>
          </div>

          <!-- Footer -->
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center; border-top: 1px solid #eaeaea;">
            <p style="color: #888; font-size: 12px; margin: 0;">© ${new Date().getFullYear()} संत श्री रणधीर जी बाबल सेवा संस्थान। सर्वाधिकार सुरक्षित।</p>
            <p style="color: #aaa; font-size: 11px; margin: 10px 0 0;">मुख्यालय श्री जम्भेश्वर भगवान मंदिर, फिटकासनी, जोधपुर, राजस्थान</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}

function nameDisplayName(name: string) {
  return name.split(' ')[0];
}
