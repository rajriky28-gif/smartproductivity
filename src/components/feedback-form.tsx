"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { feedbackSchema, submitFeedback } from "@/app/actions";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

type FeedbackFormValues = z.infer<typeof feedbackSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant="outline"
      className="w-full sm:w-auto bg-background border-foreground text-foreground hover:bg-foreground hover:text-background"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit Feedback"}
    </Button>
  );
}

interface FeedbackFormProps {
  product: string;
  onFormSuccess?: () => void;
}

export function FeedbackForm({ product, onFormSuccess }: FeedbackFormProps) {
  const [state, formAction] = useActionState(submitFeedback, {
    message: "",
    errors: {},
    success: false,
  });
  
  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      product,
      name: "",
      email: "",
      feedback: "",
    },
  });

  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Feedback Submitted",
        description: state.message,
      });
      form.reset();
      onFormSuccess?.();
    } else if (state.message) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, form, onFormSuccess]);


  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        className="space-y-8 mt-4"
        onSubmit={form.handleSubmit(() => formRef.current?.requestSubmit())}
      >
        <FormField
          control={form.control}
          name="product"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Stride">Stride</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid sm:grid-cols-2 gap-8">
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Name (Optional)</FormLabel>
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
                <FormLabel>Email (Optional)</FormLabel>
                <FormControl>
                    <Input placeholder="Your email for follow-up" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>

        <FormField
          control={form.control}
          name="feedbackType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Feedback Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select feedback type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="bug">Bug / Issue</SelectItem>
                  <SelectItem value="feature">Feature Request</SelectItem>
                  <SelectItem value="suggestion">Suggestion</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="feedback"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Feedback Details</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your feedback here..."
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
          name="priority"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Priority (Optional)</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="low" />
                    </FormControl>
                    <FormLabel className="font-normal">Low</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="medium" />
                    </FormControl>
                    <FormLabel className="font-normal">Medium</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="high" />
                    </FormControl>
                    <FormLabel className="font-normal">High</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center">
            <SubmitButton />
        </div>
      </form>
    </Form>
  );
}
