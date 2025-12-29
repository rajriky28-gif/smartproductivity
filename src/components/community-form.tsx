"use client";

import { useActionState, useState, useRef } from "react";
import { useFormStatus } from "react-dom";
import { subscribeToUpdates } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="link" className="text-foreground p-0 h-auto" disabled={pending}>
      {pending ? 'Joining...' : 'Join early updates'}
      <ArrowRight className="ml-2 size-4" />
    </Button>
  );
}

export function CommunityForm() {
  const [state, formAction] = useActionState(subscribeToUpdates, {
    message: "",
    success: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  if (submitted) {
    return (
      <div className="mt-8 flex w-full max-w-md mx-auto items-center justify-center space-x-2 text-center">
        <CheckCircle className="size-6 text-green-500" />
        <p className="text-lg text-muted-foreground">Thank you for subscribing!</p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={() => {
        setSubmitted(true);
      }}
      className="mt-8 flex w-full max-w-md mx-auto items-center space-x-2 border-b border-foreground"
    >
      <Input
        type="email"
        name="email"
        placeholder="Email address"
        className="flex-1 bg-transparent border-none text-lg placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
        required
      />
      <SubmitButton />
    </form>
  );
}
