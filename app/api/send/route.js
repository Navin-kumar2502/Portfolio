import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_7R6KeDv8_3q2ui5WDYsjSCvjoNYoUyJs6");

export async function POST(req, res) {
  const { email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: '2502navinkumar@gmail.com',
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>from {email} to me</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message });
  }
}
