
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
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";

interface FeedbackDialogProps {
  productName: string;
  children: React.ReactNode;
}

export function FeedbackDialog({
  productName,
  children,
}: FeedbackDialogProps) {
  const [open, setOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormSuccess = () => {
    setShowSuccess(true);
  };
  
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    // Reset success state when dialog is closed
    if (!isOpen) {
        setTimeout(() => setShowSuccess(false), 300);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[90vw] max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg">
        {!showSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">
                Share Your Feedback
              </DialogTitle>
              <DialogDescription className="text-center text-muted-foreground">
                Help us improve {productName}. Your input is read carefully and
                shapes future updates.
              </DialogDescription>
            </DialogHeader>
            <FeedbackForm
              product={productName}
              onFormSuccess={handleFormSuccess}
            />
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-12">
            <CheckCircle className="size-16 text-green-500 mb-4" />
            <DialogTitle className="text-2xl font-bold">
              Thank You!
            </DialogTitle>
            <DialogDescription className="mt-2 text-muted-foreground">
              Your feedback has been submitted successfully.
            </DialogDescription>
            <Button onClick={() => setOpen(false)} className="mt-8">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
