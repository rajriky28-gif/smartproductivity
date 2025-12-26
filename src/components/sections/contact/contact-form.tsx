import { FadeIn } from "@/components/fade-in";
import { ContactForm as Form } from "@/components/contact-form";

export function ContactFormSection() {
  return (
    <FadeIn delay={200}>
      <Form />
    </FadeIn>
  );
}
