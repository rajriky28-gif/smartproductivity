"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { subscribeToUpdates } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="link" className="text-foreground p-0 h-auto" disabled={pending}>
      Join early updates
      <ArrowRight className="ml-2 size-4" />
    </Button>
  );
}

export function CommunityForm() {
  const [state, formAction] = useActionState(subscribeToUpdates, {
    message: "",
    success: false,
  });
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Subscribed!",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <form
      ref={formRef}
      action={formAction}
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
