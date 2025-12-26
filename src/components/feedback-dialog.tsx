
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FeedbackForm } from "@/components/feedback-form";
import { useState } from "react";

interface FeedbackDialogProps {
  productName: string;
  children: React.ReactNode;
}

export function FeedbackDialog({
  productName,
  children,
}: FeedbackDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Share Your Feedback
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Help us improve {productName}. Your input is read carefully and
            shapes future updates.
          </DialogDescription>
        </DialogHeader>
        <FeedbackForm product={productName} onFormSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
