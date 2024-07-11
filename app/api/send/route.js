import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_7R6KeDv8_3q2ui5WDYsjSCvjoNYoUyJs6");
export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: 'Navin <onboarding@resend.dev>',
      to: [email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
