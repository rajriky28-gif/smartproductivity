"use server";

import { z } from "zod";
import { redirect } from 'next/navigation';

const emailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export async function subscribeToUpdates(
  prevState: any,
  formData: FormData
) {
  const validatedFields = emailSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      message:
        validatedFields.error.flatten().fieldErrors.email?.[0] ||
        "Invalid email.",
    };
  }

  // Here you would typically save the email to a database or a mailing list service.
  console.log("New subscription:", validatedFields.data.email);

  redirect('/success');
}

const feedbackActionSchema = z.object({
    name: z.string().min(1, { message: "Please enter your name." }),
    email: z.string().email("Invalid email address"),
    product: z.string(),
    feedbackType: z.enum([
      "bug",
      "feature",
      "suggestion",
      "other",
    ]),
    feedback: z.string().min(10, "Please provide more details."),
    priority: z.enum(["low", "medium", "high"]).optional(),
  });
  

export async function submitFeedback(prevState: any, formData: FormData) {
  const validatedFields = feedbackActionSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    product: formData.get("product"),
    feedbackType: formData.get("feedbackType"),
    feedback: formData.get("feedback"),
    priority: formData.get("priority"),
  });
  
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
      success: false,
    };
  }

  // Here you would typically save the feedback to a database.
  console.log("New feedback received:", validatedFields.data);

  redirect('/success');
}


const contactActionSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  subject: z.enum([
    "general",
    "partnership",
    "press",
    "other",
  ]),
  message: z.string().min(10, "Please share a bit more detail."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactActionSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
      success: false,
    };
  }

  console.log("New contact message:", validatedFields.data);

  redirect('/success');
}
