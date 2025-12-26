"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "@/app/actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  subject: z.enum(
    ["general", "partnership", "press", "other"],
    { required_error: "Please select a subject." }
  ),
  message: z.string().min(10, "Please share a bit more detail."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant="outline"
      className="w-full bg-background border-foreground text-foreground hover:bg-foreground hover:text-background"
      disabled={pending}
    >
      {pending ? "Sending..." : "Send message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, {
    message: "",
    errors: {},
    success: false,
  });
  
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const lastSuccessState = useRef(false);

  useEffect(() => {
    if (state.success && !lastSuccessState.current) {
      setIsSuccess(true);
      form.reset();
      lastSuccessState.current = true;
    } else if (state.message && !state.success && Object.keys(state.errors ?? {}).length > 0) {
      for (const [key, value] of Object.entries(state.errors)) {
        if (value) {
          form.setError(key as keyof ContactFormValues, { message: value[0] });
        }
      }
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
      lastSuccessState.current = false;
    } else if (!state.success) {
      lastSuccessState.current = false;
    }
  }, [state, form, toast]);

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 border rounded-lg bg-muted/50 h-full">
        <CheckCircle className="size-12 text-green-500 mb-4" />
        <h3 className="text-xl font-bold">Thank You</h3>
        <p className="mt-2 text-muted-foreground">
          Your message has been sent successfully.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        className="space-y-6"
        onSubmit={form.handleSubmit(() => {
          lastSuccessState.current = false;
          formRef.current?.requestSubmit();
        })}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name (optional)</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                  <SelectItem value="press">Press</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share what’s on your mind…"
                  className="min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton />
      </form>
    </Form>
  );
}
