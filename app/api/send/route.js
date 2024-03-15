import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESENT_APY_KEY);
const fromEmail = process.env.FROM_EMAIL

export async function POST(req,res) {
  
  const {email, subject, message} = await req.json();

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['urieloha710@gmail.com', email],
      subject: subject,
      react: <>
        <p>
            <h1>{subject}</h1>
            <p>Thanks to contact!!</p>
            <p>{message}</p>
            
        </p>
      </>,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
