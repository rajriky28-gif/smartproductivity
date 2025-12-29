
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function PlatformPolicy() {
  return (
    <Accordion type="multiple" defaultValue={['item-0']} className="w-full">
      <AccordionItem value="item-0">
        <AccordionTrigger className="text-2xl">Information We Collect</AccordionTrigger>
        <AccordionContent>
          <ul>
            <li>
              <strong>Contact Information:</strong> If you submit a form (e.g.,
              contact, feedback, newsletter), we collect the information you
              provide, such as your name and email.
            </li>
            <li>
              <strong>Usage Analytics:</strong> We collect non-identifying
              analytics about page visits to understand how our website is used
              and how to improve it.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-2xl">How We Use Information</AccordionTrigger>
        <AccordionContent>
          <ul>
            <li>To respond to your inquiries or feedback.</li>
            <li>To send you our newsletter if you have subscribed.</li>
            <li>To operate and improve our website and ecosystem.</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-2xl">Cookies & Tracking</AccordionTrigger>
        <AccordionContent>
          <p>
            We use a minimal number of essential cookies to operate this
            website. We do not use third-party advertising trackers. Any analytics
            cookies are used solely for our internal improvement and do not
            track you across other websites.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-2xl">Data Storage & Security</AccordionTrigger>
        <AccordionContent>
          <p>
            Information submitted through our website is stored securely. We
            apply strong security practices to protect it.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-2xl">Data Sharing</AccordionTrigger>
        <AccordionContent>
          <h4>We do not sell your data.</h4>
          <p>
            We do not share your personal data with third-party advertisers. We
            will only disclose data if required by law.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-2xl">Children’s Privacy</AccordionTrigger>
        <AccordionContent>
          <p>
            Our website and products are not designed for or intentionally
            targeted at children under the age of 13.
          </p>
        </AccordionContent>
      </AccordionItem>
       <AccordionItem value="item-6">
        <AccordionTrigger className="text-2xl">Changes to This Policy</AccordionTrigger>
        <AccordionContent>
          <p>
            If we make changes to this policy, we will update the "Last updated"
            date on this page.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
