import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { AuditionInstructionsEmail } from "@/emails/audition-instructions";

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_API_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, roles, experience } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Store registration in Supabase
    const { error: dbError } = await supabase.from("auditions").insert({
      name,
      email,
      roles: roles || [],
      experience: experience || "",
    });

    if (dbError) {
      console.error("Supabase error:", dbError);
      return NextResponse.json(
        { error: "Failed to register. Please try again." },
        { status: 500 }
      );
    }

    // Send confirmation email
    const { error: emailError } = await resend.emails.send({
      from: "SYNTHETICA Auditions <hello@schoolbored.ai>",
      to: [email],
      subject: "SYNTHETICA — Audition Instructions",
      react: AuditionInstructionsEmail({ name }),
    });

    if (emailError) {
      console.error("Resend error:", emailError);
      // Registration saved but email failed — don't block the user
    }

    return NextResponse.json(
      { message: "Registration successful. Check your email for audition instructions." },
      { status: 200 }
    );
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
