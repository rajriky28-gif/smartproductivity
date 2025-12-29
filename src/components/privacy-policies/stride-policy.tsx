import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function StridePolicy() {
  return (
    <div>
      <p className="mb-4">
        Smart Productivity ("we," "our," or "us") operates the Stride mobile
        application. This page informs you of our policies regarding the
        collection, use, and disclosure of personal data when you use our
        Service.
      </p>
      <p className="mb-6 font-medium">
        Summary: Stride is a local-first application. Your task data is stored
        securely on your device and is not uploaded to our servers. We only
        collect basic authentication details to manage your account access.
      </p>

      <Accordion type="multiple" defaultValue={['item-1']} className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl">
            1. Information We Collect
          </AccordionTrigger>
          <AccordionContent>
            <h4 className="font-semibold mt-4 mb-2">
              a. Personal Data (Authentication Only)
            </h4>
            <p>
              To provide account access and security, we collect limited personal
              information when you sign up:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Email Address & Name:</strong> We store this solely to
                authenticate your identity (e.g., via Google Sign-In or
                Email/Password). This allows you to log in to the app securely.
              </li>
            </ul>

            <h4 className="font-semibold mt-4 mb-2">
              b. User Content (Stored Locally)
            </h4>
            <p>
              <strong>We do NOT collect or store your task data.</strong>
            </p>
            <p className="mt-2">
              All data you create within the app—including task lists, notes,
              priorities, and schedules—is stored locally on your specific device.
            </p>
            <p className="mt-2">
              This data is never transmitted to, stored on, or accessible by
              Smart Productivity servers.
            </p>

            <h4 className="font-semibold mt-4 mb-2">
              c. Usage & Device Data
            </h4>
            <p>
              We may collect anonymous, non-identifiable crash logs and
              performance data (via Google Play Services) to help us fix bugs
              and improve app stability.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl">
            2. How We Use Your Data
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Since we hold very little data, our usage is strictly limited:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Authentication:</strong> We use your email to verify
                your identity when you open the app.
              </li>
              <li>
                <strong>Customer Support:</strong> If you contact us via email,
                we use your email address to respond to your inquiries.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl">
            3. Data Storage & Security
          </AccordionTrigger>
          <AccordionContent>
            <h4 className="font-semibold mt-4 mb-2">a. Local Storage</h4>
            <p>
              Your task data resides exclusively in your device's internal
              memory. You have full control and ownership of this data.
            </p>
            <h4 className="font-semibold mt-4 mb-2">
              b. Cloud Security (Auth Only)
            </h4>
            <p>
              Your login credentials (email/password) are managed securely
              through Google Firebase Authentication, which utilizes
              industry-standard encryption to keep your account safe.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-2xl">
            4. Important: Data Backup & Loss
          </AccordionTrigger>
          <AccordionContent>
            <p className="font-bold text-lg mb-2">
              ⚠️ WARNING: No Cloud Backup
            </p>
            <p>Because Stride does not sync your tasks to the cloud:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>If you uninstall the app:</strong> All your tasks and
                data will be permanently deleted from your device.
              </li>
              <li>
                <strong>If you clear app data:</strong> Your tasks will be erased.
              </li>
              <li>
                <strong>If you lose your device:</strong> We cannot recover your
                data because we do not have a copy of it.
              </li>
            </ul>
            <p className="mt-4">
              We strongly recommend you avoid clearing the app's storage
              manually in your phone settings unless you intend to wipe your
              data.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-2xl">
            5. Third-Party Services
          </AccordionTrigger>
          <AccordionContent>
            <p>
              We use the following third-party services to facilitate core app
              functions:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Google Firebase Authentication:</strong> Used strictly
                to manage user login and registration.
              </li>
              <li>
                <strong>Google Play Services:</strong> Used for app
                distribution and essential Android system libraries.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-2xl">
            6. Children's Privacy
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 13.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-2xl">
            7. Changes to This Privacy Policy
          </AccordionTrigger>
          <AccordionContent>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className="text-2xl">8. Contact Us</AccordionTrigger>
          <AccordionContent>
            <p>
              If you have any questions about this Privacy Policy, please contact
              us:
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
    </div>
  );
}
