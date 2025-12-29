
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function PlatformTerms() {
  return (
    <Accordion type="multiple" defaultValue={['item-0']} className="w-full">
      <AccordionItem value="item-0">
        <AccordionTrigger className="text-2xl">Acceptance of Terms</AccordionTrigger>
        <AccordionContent>
          <p>
            By using the Smart Productivity website and any associated services
            ("Platform"), you agree to be bound by these Terms of Use. If you do
            not agree, please do not use the Platform.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-2xl">Eligibility</AccordionTrigger>
        <AccordionContent>
          <p>
            You must be at least 13 years old to use the Platform. You agree to
            use the Platform lawfully and are responsible for your activity.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-2xl">Use of the Platform</AccordionTrigger>
        <AccordionContent>
          <p>You agree not to:</p>
          <ul>
            <li>
              Disrupt or interfere with the security or accessibility of the
              Platform.
            </li>
            <li>
              Use the Platform for any illegal purpose or to transmit malicious
              code.
            </li>
            <li>
              Scrape, reproduce, or redistribute content without our express
              permission.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-2xl">User Content (Feedback & Forms)</AccordionTrigger>
        <AccordionContent>
          <p>
            If you submit information through forms (e.g., contact, feedback),
            you grant us permission to use this information to operate our
            services and communicate with you. You retain ownership of your
            ideas but grant us the right to implement feedback.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-2xl">Privacy & Data Handling</AccordionTrigger>
        <AccordionContent>
          <p>
            Our data handling practices for the website are detailed in our
            Platform Privacy Policy.
          </p>
          <Link href="/privacy?product=platform" className="text-primary hover:underline">
            View Platform Privacy Policy →
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-2xl">Intellectual Property</AccordionTrigger>
        <AccordionContent>
          <p>
            All content, branding, and design on this Platform are the
            exclusive property of Smart Productivity. You may not use our
            branding or content without permission.
          p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="text-2xl">Availability & Changes</AccordionTrigger>
        <AccordionContent>
          <p>
            The Platform is provided "as is." We do not guarantee uninterrupted
            access and reserve the right to change the site at any time.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger className="text-2xl">Termination</AccordionTrigger>
        <AccordionContent>
          <p>
            We may suspend or terminate your access to the Platform if these
            terms are violated.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger className="text-2xl">Limitation of Liability</AccordionTrigger>
        <AccordionContent>
          <p>
            To the maximum extent permitted by law, Smart Productivity shall not
            be liable for any damages arising from your use of the Platform.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger className="text-2xl">Governing Law</AccordionTrigger>
        <AccordionContent>
          <p>
            These terms shall be governed by the laws of India.
          </p>
        </AccordionContent>
      </AccordionItem>
       <AccordionItem value="item-10">
        <AccordionTrigger className="text-2xl">Changes to These Terms</AccordionTrigger>
        <AccordionContent>
          <p>
            Updates will be posted on this page, and the "Last updated" date
            will be revised accordingly.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
