"use server";

import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(email: string): boolean {
  const now = Date.now();
  const dayMs = 24 * 60 * 60 * 1000;
  const entry = rateLimit.get(email);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(email, { count: 1, resetAt: now + dayMs });
    return true;
  }

  if (entry.count >= 5) return false;

  entry.count++;
  return true;
}

export type FormState = {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitBooking(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const result = schema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      fieldErrors: result.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const { firstName, lastName, email, message } = result.data;

  if (!checkRateLimit(email)) {
    return {
      success: false,
      error: "You've reached the daily limit of 5 messages. Please try again tomorrow.",
    };
  }

  try {
    await resend.emails.send({
      from: "Sthaptya Booking <onboarding@resend.dev>",
      to: "sthaptya@yahoo.com",
      subject: `New Booking Request from ${firstName} ${lastName}`,
      replyTo: email,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Failed to send message. Please try again later.",
    };
  }
}
