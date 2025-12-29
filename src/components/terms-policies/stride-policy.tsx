
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function StrideTerms() {
  return (
    <Accordion type="multiple" defaultValue={['item-0']} className="w-full">
      <AccordionItem value="item-0">
        <AccordionTrigger className="text-2xl">Acceptance of Terms</AccordionTrigger>
        <AccordionContent>
          <p>
            By using the Stride application ("Product"), you agree to be bound
            by these Terms of Use. If you do not agree to these terms, please do
            not use the Product.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-2xl">Eligibility</AccordionTrigger>
        <AccordionContent>
          <p>
            You must be at least 13 years old to use Stride. You agree to use
            the Product in compliance with all applicable local, state,
            national, and international laws. You are responsible for all
            activities that occur under your account.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-2xl">Use of the Product</AccordionTrigger>
        <AccordionContent>
          <p>You agree not to:</p>
          <ul>
            <li>
              Misuse, abuse, or disrupt the service, including attempting to
              gain unauthorized access.
            </li>
            <li>
              Use the Product for any illegal or unauthorized purpose.
            </li>
            <li>
              Resell or charge others for use of or access to the Product.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-2xl">User Content & Data</AccordionTrigger>
        <AccordionContent>
          <p>
            You retain full ownership of the data you create in Stride, including
            your tasks, notes, and other content ("User Content"). We do not
            claim any ownership over your User Content. By using Stride, you
            grant us a limited license solely to process, store, and display
            your data as necessary to provide the service to you.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-2xl">Privacy & Data Handling</AccordionTrigger>
        <AccordionContent>
          <p>
            Your privacy is paramount. Our data handling practices are detailed
            in our Privacy Policy, which is an integral part of these terms.
          </p>
          <Link href="/privacy?product=stride" className="text-primary hover:underline">
            View Stride Privacy Policy →
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-2xl">Intellectual Property</AccordionTrigger>
        <AccordionContent>
          <p>
            All rights, title, and interest in and to the Stride application
            itself—including its design, branding, code, and features—are the
            exclusive property of Smart Productivity. You may not copy, modify,
            or redistribute any part of the Product without our express written
            permission.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="text-2xl">Availability & Changes</AccordionTrigger>
        <AccordionContent>
          <p>
            We strive to ensure Stride is reliable and available, but we cannot
            guarantee uninterrupted service. We reserve the right to modify or
            discontinue features at our discretion, with a commitment to
            thoughtful evolution over disruptive change.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger className="text-2xl">Termination</AccordionTrigger>
        <AccordionContent>
          <p>
            You may stop using Stride at any time. We reserve the right to
            suspend or terminate your access to the service if you violate
            these terms or if we are required to do so by law.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger className="text-2xl">Limitation of Liability</AccordionTrigger>
        <AccordionContent>
          <p>
            To the maximum extent permitted by law, Smart Productivity shall not
            be liable for any indirect, incidental, or consequential damages
            arising out of your use of Stride. You use the Product at your own
            risk.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger className="text-2xl">Governing Law</AccordionTrigger>
        <AccordionContent>
          <p>
            These terms shall be governed by the laws of India, without regard
            to its conflict of law provisions.
          </p>
        </AccordionContent>
      </AccordionItem>
       <AccordionItem value="item-10">
        <AccordionTrigger className="text-2xl">Changes to These Terms</AccordionTrigger>
        <AccordionContent>
          <p>
            We may update these terms from time to time. Any changes will be
            posted on this page, and the "Last updated" date will be revised.
            Your continued use of the Product after changes constitutes your
            acceptance of the new terms.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
