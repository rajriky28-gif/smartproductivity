"use server";

import { z } from "zod";

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
  // For this example, we'll just simulate a success response.
  console.log("New subscription:", validatedFields.data.email);

  return { message: "Thank you for subscribing!", success: true };
}
