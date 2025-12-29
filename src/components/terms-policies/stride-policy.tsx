
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function StrideTerms() {
  return (
    <>
      <p>
        Please read these Terms of Use (&quot;Terms&quot;) carefully before using the Stride mobile
        application (the &quot;Service&quot;) operated by Smart Productivity (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
      </p>
      <p className="mt-4">
        By accessing or using the Service, you agree to be bound by these Terms. If you
        disagree with any part of the terms, then you may not access the Service.
      </p>
      <Accordion type="multiple" defaultValue={['item-0']} className="w-full mt-6">
        <AccordionItem value="item-0">
          <AccordionTrigger className="text-2xl">
            1. Nature of the Service (Offline-First)
          </AccordionTrigger>
          <AccordionContent>
            <p>Stride is designed as an offline-first, local storage application.</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Local Data:</strong> By using this Service, you acknowledge and agree
                that all data you create (including tasks, notes, and schedules) is stored
                exclusively on the internal memory of your device.
              </li>
              <li>
                <strong>No Cloud Backup:</strong> We do not maintain copies of your task lists
                on our servers. We do not provide cloud synchronization services between
                devices.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl">2. Accounts</AccordionTrigger>
          <AccordionContent>
            <p>
              To access the app, you may be required to create an account (via Email or
              Google Login).
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Purpose of Account:</strong> Your account is strictly used for
                authentication (logging you in). It does not serve as a cloud storage
                account for your content.
              </li>
              <li>
                <strong>Security:</strong> You are responsible for safeguarding the password
                you use to access the Service. You agree not to disclose your password to any
                third party.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl">
            3. Data Loss & User Responsibility
          </AccordionTrigger>
          <AccordionContent>
            <p>
              You are solely responsible for the safety of your data. Because Stride does not
              backup your data to the cloud, Smart Productivity is not liable for any loss of
              data resulting from:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Uninstallation of the Stride application.</li>
              <li>
                Clearing the application&apos;s cache or storage in your device settings.
              </li>
              <li>Loss, theft, or damage of your mobile device.</li>
              <li>Operating system errors or device factory resets.</li>
            </ul>
            <p className="mt-4">
              If you switch devices, you understand that your tasks will not automatically
              transfer to the new device.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl">4. Intellectual Property</AccordionTrigger>
          <AccordionContent>
            <p>
              The Service and its original content (excluding Content provided by users),
              features, and functionality are and will remain the exclusive property of Smart
              Productivity. The Service is protected by copyright, trademark, and other laws
              of India.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-2xl">5. User Content</AccordionTrigger>
          <AccordionContent>
            <p>
              You retain all rights to the text and information you enter into Stride. Since
              this data is stored locally on your device, we do not claim ownership, nor do we
              access or use your content for any purpose other than displaying it to you within
              the app.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-2xl">6. Limitation of Liability</AccordionTrigger>
          <AccordionContent>
            <p>
              In no event shall Smart Productivity, nor its directors, employees, or partners,
              be liable for any indirect, incidental, special, consequential, or punitive
              damages, including without limitation:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Loss of data or content;</li>
              <li>Loss of profits, use, or goodwill;</li>
              <li>Unauthorized access to your device.</li>
            </ul>
            <p className="mt-4">
              We explicitly disclaim liability for any data lost due to the local storage
              nature of the application.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-2xl">7. Termination</AccordionTrigger>
          <AccordionContent>
            <p>
              We may terminate or suspend your access to the authentication services (your
              login) immediately, without prior notice or liability, for any reason
              whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="mt-4">
              Upon termination, your right to use the Service will immediately cease. If you
              wish to terminate your account, you may simply discontinue using the Service or
              request account deletion via the app settings.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-2xl">8. Governing Law</AccordionTrigger>
          <AccordionContent>
            <p>
              These Terms shall be governed and construed in accordance with the laws of
              India, without regard to its conflict of law provisions.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className="text-2xl">9. Changes</AccordionTrigger>
          <AccordionContent>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms
              at any time. By continuing to access or use our Service after those revisions
              become effective, you agree to be bound by the revised terms.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger className="text-2xl">10. Contact Us</AccordionTrigger>
          <AccordionContent>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
             <ul className="list-none mt-2 space-y-1">
              <li>By email: support@smart-productivity.in</li>
              <li>
                By visiting our website: https://smart-productivity.in
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
