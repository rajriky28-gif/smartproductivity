
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function StridePolicy() {
  return (
    <Accordion type="multiple" defaultValue={['item-0']} className="w-full">
      <AccordionItem value="item-0">
        <AccordionTrigger className="text-2xl">Information We Collect</AccordionTrigger>
        <AccordionContent>
          <ul>
            <li>
              <strong>Account Information:</strong> If you create an account, we
              collect your email address and name.
            </li>
            <li>
              <strong>Task & Productivity Data:</strong> All tasks, notes,
              projects, and associated metadata you create are stored.
            </li>
            <li>
              <strong>Usage Analytics:</strong> We collect non-intrusive,
              anonymized data about how you interact with the app to improve
              it.
            </li>
            <li>
              <strong>Device Information:</strong> Basic, non-identifiable
              information like OS version to help with bug fixing.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-2xl">How We Use Information</AccordionTrigger>
        <AccordionContent>
          <ul>
            <li>To operate and improve the Stride product.</li>
            <li>To generate your personal productivity reports and insights.</li>
            <li>To fix bugs and improve reliability.</li>
            <li>To respond to your support or feedback requests.</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-2xl">Data Storage & Security</AccordionTrigger>
        <AccordionContent>
          <p>
            Your data is stored securely using industry-standard cloud
            infrastructure. We apply strong encryption and security practices to
            protect it. We do not retain data longer than necessary to provide
            the service to you.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-2xl">Data Sharing</AccordionTrigger>
        <AccordionContent>
          <h4>We do not sell your data.</h4>
          <p>
            We do not share your personal data with third-party advertisers.
            Sharing is limited to essential infrastructure providers (like cloud
            hosting) who are bound by strict privacy obligations. We will only
            disclose data if required by law.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-2xl">User Control</AccordionTrigger>
        <AccordionContent>
          <p>You have full control over your data. You can:</p>
          <ul>
            <li>Access and view your data at any time.</li>
            <li>Edit or delete any task, project, or note.</li>
            <li>Request full data deletion by contacting us.</li>
            <li>Control notification permissions in your device settings.</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-2xl">Children’s Privacy</AccordionTrigger>
        <AccordionContent>
          <p>
            Stride is not designed for or intentionally targeted at children
            under the age of 13. We do not knowingly collect personal information
            from children.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="text-2xl">Changes to This Policy</AccordionTrigger>
        <AccordionContent>
          <p>
            If we make changes to this policy, we will update the "Last updated"
            date on this page. For significant changes, we may notify you via
            email or an in-app notification.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
