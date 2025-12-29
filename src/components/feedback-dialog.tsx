
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
import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

interface FeedbackDialogProps {
  productName: string;
  children: React.ReactNode;
}

export function FeedbackDialog({
  productName,
  children,
}: FeedbackDialogProps) {
  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFormSuccess = () => {
    setIsSuccess(true);
  };
  
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    // If we're closing the dialog, reset the success state
    if (!isOpen) {
      setTimeout(() => setIsSuccess(false), 500);
    }
  }

  const handleCloseSuccess = () => {
    setOpen(false);
    setTimeout(() => setIsSuccess(false), 500);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[90vw] max-w-2xl rounded-lg max-h-[90vh] overflow-y-auto">
        {!isSuccess ? (
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
            <FeedbackForm product={productName} onSuccess={handleFormSuccess} />
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-12 transition-opacity duration-300 animate-in fade-in">
            <CheckCircle className="size-16 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold">Thank You!</h3>
            <p className="mt-2 text-muted-foreground">
              Your feedback has been submitted successfully.
            </p>
            <Button onClick={handleCloseSuccess} variant="outline" className="mt-8">
                Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
