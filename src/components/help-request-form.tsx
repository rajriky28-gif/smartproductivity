
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
import { Paperclip, CheckCircle } from "lucide-react";

const helpRequestSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  product: z.string(),
  topic: z.enum(
    ["getting-started", "feature-question", "bug-issue", "other"],
    { required_error: "Please select a topic." }
  ),
  message: z.string().min(10, "Please describe your issue or question clearly."),
  attachment: z.any().optional(),
});

type HelpFormValues = z.infer<typeof helpRequestSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant="outline"
      className="w-full bg-background border-foreground text-foreground hover:bg-foreground hover:text-background"
      disabled={pending}
    >
      {pending ? "Sending..." : "Send request"}
    </Button>
  );
}

interface HelpRequestFormProps {
  product: string;
}

export function HelpRequestForm({ product }: HelpRequestFormProps) {
  const [state, formAction] = useActionState(submitContactForm, {
    message: "",
    errors: {},
    success: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const form = useForm<HelpFormValues>({
    resolver: zodResolver(helpRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      product: product,
    },
  });

  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.message && !state.success && Object.keys(state.errors ?? {}).length > 0) {
      for (const [key, value] of Object.entries(state.errors)) {
        if (value) {
          form.setError(key as keyof HelpFormValues, { message: value[0] });
        }
      }
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
      setSubmitted(false); 
    }
  }, [state, form, toast]);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 text-center rounded-lg p-8 min-h-[400px]">
        <CheckCircle className="size-12 text-green-500" />
        <h3 className="text-2xl font-bold text-foreground">
          Thank you.
        </h3>
        <p className="text-muted-foreground">
          Your request has been sent successfully. We read every message carefully.
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
        onSubmit={(evt) => {
          form.handleSubmit(() => {
            setSubmitted(true);
          })(evt);
        }}
      >
        <input type="hidden" {...form.register("product")} />
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
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Topic</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="getting-started">Getting Started</SelectItem>
                  <SelectItem value="feature-question">Feature Question</SelectItem>
                  <SelectItem value="bug-issue">Bug / Issue</SelectItem>
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
                  placeholder="Describe your issue or question clearly…"
                  className="min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="attachment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Attachment (optional)</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input type="file" className="pl-12" />
                   <Paperclip className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
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
