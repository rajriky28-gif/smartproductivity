
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

  const handleSuccess = () => {
    // Keep dialog open to show success message,
    // feedback-form will handle showing the message.
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[90vw] max-w-2xl rounded-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Share Your Feedback
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Help us improve {productName}. Your input is read carefully and
            shapes future updates.
          </DialogDescription>
        </DialogHeader>
        <FeedbackForm product={productName} onSuccess={handleSuccess} />
      </DialogContent>
    </Dialog>
  );
}
