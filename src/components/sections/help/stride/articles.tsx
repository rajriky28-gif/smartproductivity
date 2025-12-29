import { FadeIn } from '@/components/fade-in';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Is Stride free to use?',
    answer:
      'Yes! Stride is free to download and use. You get access to unlimited tasks, lists, and the focus timer at no cost. We may introduce premium features for power users in the future, but the core experience will always be free.',
  },
  {
    question: 'Can I access Stride on my computer?',
    answer:
      'Absolutely. Stride allows you to access your tasks from anywhere. You can download the Android app or log in via your web browser at `smart-productivity.in` to manage your tasks from your laptop or desktop.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Your privacy is our top priority. All your tasks and personal information are encrypted and stored securely in the cloud. We do not sell your data to third parties or advertisers.',
  },
  {
    question: 'Does Stride work offline?',
    answer:
      'Yes. You can create, edit, and complete tasks even without an internet connection. Stride will automatically sync your changes to the cloud the next time you connect to Wi-Fi or mobile data.',
  },
  {
    question: 'How do I delete a task?',
    answer:
      'To delete a task, simply swipe left on the task card (on mobile) or open the task details and select the trash icon. Note: Deleted tasks cannot be recovered.',
  },
  {
    question: 'What happens to my completed tasks?',
    answer:
      'Completed tasks are moved to your "Logbook" or history so they don\'t clutter your daily view. You can view your completed tasks by checking the "History" tab in the menu or scrolling to the bottom of your list (depending on your settings).',
  },
  {
    question: 'How do I change the Focus Mode timer duration?',
    answer:
      'By default, Focus Mode is set to 25 minutes (Pomodoro style). To change this, go to **Settings > Focus Mode > Timer Duration** and select your preferred time, ranging from 15 minutes to 90 minutes.',
  },
  {
    question: 'Why am I not receiving reminders?',
    answer: (
      <>
        If you are not getting notifications on your phone, please try the
        following:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>
            Check your phone&apos;s main settings to ensure Stride has permission to
            send notifications.
          </li>
          <li>Ensure &quot;Do Not Disturb&quot; mode is turned off.</li>
          <li>
            If you are using a battery saver mode, it might be restricting
            background activity. Try adding Stride to the &quot;Unrestricted&quot; list in
            your battery settings.
          </li>
        </ol>
      </>
    ),
  },
  {
    question: 'My tasks are not syncing between devices.',
    answer:
      'First, ensure you are logged into the same account on both devices. Then, check your internet connection. You can force a sync by pulling down on the task list screen (pull-to-refresh).',
  },
  {
    question: 'How do I reset my password?',
    answer:
      'If you signed up with an email and password, click the "Forgot Password" link on the login screen. We will email you a link to reset it. If you use "Login with Google," you will need to manage your password through your Google Account settings.',
  },
  {
    question: 'I found a bug or have a feature request. How do I contact you?',
    answer:
      'We love feedback! You can reach the Smart Productivity team directly by emailing support@smart-productivity.in. We aim to respond within 24 hours.',
  },
];

export function ArticlesSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <FadeIn className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center">
            Frequently Asked Questions
          </h2>
        </FadeIn>
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={200}>
            <Accordion
              type="single"
              collapsible
              className="w-full bg-background rounded-lg border"
            >
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="p-6 text-lg text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0">
                    <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90">
                      {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
