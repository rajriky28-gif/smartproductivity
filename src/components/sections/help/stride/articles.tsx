import { FadeIn } from '@/components/fade-in';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const articles = [
  {
    id: 'getting-started',
    title: 'Welcome to Stride: The Complete Beginner’s Guide',
    description:
      'Learn how to set up your account, navigate the interface, and troubleshoot common login issues.',
    content: (
      <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90">
        <p>
          Welcome to <strong>Stride</strong>, your companion for a focused and
          organized life. Whether you are a student, professional, or creative,
          Stride helps you cut through the noise. This guide covers everything
          from your first login to mastering the dashboard.
        </p>
        <h4>Creating Your Account</h4>
        <p>
          To sync your tasks across devices, you need a Stride account. We have
          made the process seamless:
        </p>
        <ul>
          <li>
            <strong>Sign up with Email:</strong> Enter your preferred email
            address and create a strong password. You will receive a
            verification link to confirm your identity.
          </li>
          <li>
            <strong>Continue with Google:</strong> For one-tap access, use the
            "Continue with Google" button. This links your Stride account
            directly to your Gmail for faster login.
          </li>
        </ul>
        <h4>Navigating the Interface</h4>
        <p>Once logged in, you will see the <strong>Today View</strong>. This is your command center.</p>
        <ul>
            <li><strong>The "+" Button:</strong> Located at the bottom center, this is your primary tool. Tap it anytime to add a new task.</li>
            <li><strong>The Sidebar:</strong> Swipe from the left or tap the menu icon to access your "Upcoming" tasks, "Overdue" list, and custom project folders.</li>
            <li><strong>Settings Gear:</strong> Found in the top corner of the sidebar, this is where you customize your experience (Themes, Notifications, Account).</li>
        </ul>
        <h4>Troubleshooting Login Issues</h4>
        <p>Having trouble getting in? Here are solutions to common problems:</p>
        <ul>
            <li><strong>"I forgot my password":</strong> On the login screen, tap <em>Forgot Password?</em>. Enter your registered email, and we will send you a reset link immediately. <em>Note: Check your Spam folder if you don't see it within 2 minutes.</em></li>
            <li><strong>"Email already in use":</strong> This means you likely already created an account (perhaps via Google Login). Try logging in with Google instead of typing your email/password.</li>
            <li><strong>App crashing on launch:</strong> Ensure you have the latest version of Stride installed from the Google Play Store. If the issue persists, try clearing the app cache in your phone settings.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'quick-add',
    title: 'Mastering Quick Add & Smart Date Recognition',
    description: 'How to capture tasks instantly using natural language.',
    content: (
        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90">
            <p>The best to-do list is the one that does not slow you down. Stride’s <strong>Quick Add</strong> feature uses "Smart Recognition" to understand your tasks just like a human assistant would.</p>
            <h4>How Smart Recognition Works</h4>
            <p>You do not need to manually scroll through calendars to set a due date. Just type the details in your task title, and Stride will highlight them and set the reminders automatically.</p>
            <h4>Examples to Try:</h4>
            <h5>Time-Based:</h5>
            <ul>
                <li><em>You type:</em> "Submit project report <strong>tomorrow at 10am</strong>"</li>
                <li><em>Stride creates:</em> Task: "Submit project report" | Due: Tomorrow | Time: 10:00 AM.</li>
            </ul>
            <h5>Recurring Tasks:</h5>
            <ul>
                <li><em>You type:</em> "Pay electricity bill <strong>every month</strong>"</li>
                <li><em>Stride creates:</em> A repeating task that reappears on your list monthly.</li>
            </ul>
            <h5>Priority Shortcuts:</h5>
            <ul>
                <li><em>You type:</em> "Fix website bug <strong>!high</strong>"</li>
                <li><em>Stride creates:</em> A task marked with a Red (High) Priority flag.</li>
            </ul>
            <p><strong>Pro Tip:</strong> If you actually want the text "tomorrow" to be part of the task name (and not a date), simply tap the highlighted text to "un-parse" it.</p>
        </div>
    ),
  },
  {
    id: 'focus-mode',
    title: 'Deep Work with Focus Mode',
    description: 'Eliminate distractions using Stride\'s built-in Pomodoro timer.',
    content: (
        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90">
            <p>Multitasking is a myth. <strong>Focus Mode</strong> helps you single-task effectively by locking your interface to one specific goal.</p>
            <h4>Setting Up a Session</h4>
            <ol>
                <li>Open any task from your list.</li>
                <li>Tap the <strong>"Start Focus"</strong> icon (stopwatch symbol).</li>
                <li>The interface will darken, hiding all other tasks, notifications, and menus. Only your current goal and the timer remain visible.</li>
            </ol>
            <h4>The Pomodoro Technique</h4>
            <p>By default, Stride uses the Pomodoro method:</p>
            <ul>
                <li><strong>Focus:</strong> 25 Minutes of pure work.</li>
                <li><strong>Short Break:</strong> 5 Minutes to stretch or grab water.</li>
                <li><strong>Long Break:</strong> After 4 focus sessions, enjoy a 15-30 minute break.</li>
            </ul>
            <h4>Customizing Your Timer</h4>
            <p>Not everyone works in 25-minute bursts. Go to <strong>Settings &gt; Focus Mode</strong> to:</p>
            <ul>
                <li>Change the Focus duration (e.g., to 50 minutes or 90 minutes).</li>
                <li>Enable <strong>White Noise</strong> (Rain, Cafe, or White Noise) to drown out background sounds.</li>
                <li>Toggle <strong>"Keep Screen On"</strong> so your phone does not sleep while you work.</li>
            </ul>
        </div>
    ),
  },
  {
    id: 'planning-scheduling',
    title: 'Advanced Planning: Priorities, Rescheduling & Tags',
    description: 'How to organize a chaotic schedule and manage overdue items.',
    content: (
        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90">
            <p>Stride is not just a list; it is a planner. Here is how to keep your life organized when things get busy.</p>
            <h4>Using Priority Levels</h4>
            <p>Assigning priorities helps you decide what to do <em>first</em>.</p>
            <ul>
                <li>🔴 <strong>High (P1):</strong> Urgent. If you only do one thing today, make it this.</li>
                <li>🟡 <strong>Medium (P2):</strong> Important. Try to finish these if time permits.</li>
                <li>🔵 <strong>Low (P3):</strong> Maintenance tasks, chores, or "someday" items.</li>
                <li>⚪ <strong>No Priority:</strong> General inbox items.</li>
            </ul>
            <h4>Managing Overdue Tasks</h4>
            <p>We all miss deadlines sometimes. Stride groups overdue tasks at the top of your list in red.</p>
            <ul>
                <li><strong>Reschedule Button:</strong> Swipe right on any overdue task to instantly move it to "Today," "Tomorrow," or "Next Week."</li>
                <li><strong>Bulk Reschedule:</strong> Have 10 overdue tasks? Tap the "Reschedule All" button in the Overdue header to move them all to Today in one click.</li>
            </ul>
            <h4>Subtasks & Notes</h4>
            <p>For complex projects (e.g., "Plan Vacation"), do not clutter your main list. Tap the task to open <strong>Detail View</strong> and add subtasks (e.g., "Book flight," "Reserve hotel," "Pack bags"). You can also add rich text notes for extra context.</p>
        </div>
    ),
  },
  {
    id: 'reports-insights',
    title: 'Track Your Productivity Trends',
    description: 'Analyze your habits with visual charts and weekly summaries.',
    content: (
        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90">
            <p>Stride provides a "health check" for your productivity, helping you understand <em>how</em> you work, not just <em>what</em> you do.</p>
            <h4>The Insight Dashboard</h4>
            <p>Tap the chart icon in the menu to view your stats:</p>
            <ul>
                <li><strong>Completion Rate:</strong> A percentage showing how many of your assigned tasks you actually finished. Aim for 80%+!</li>
                <li><strong>Daily Activity:</strong> A bar chart showing your most productive days of the week. (e.g., "You are most productive on Tuesdays").</li>
                <li><strong>Focus Hours:</strong> Tracks the total time you spent in Focus Mode.</li>
            </ul>
            <h4>Weekly Summary</h4>
            <p>Every Monday morning, Stride generates a summary of your previous week. It highlights:</p>
            <ul>
                <li>Total tasks completed.</li>
                <li>Your longest "Streak" (consecutive days using the app).</li>
                <li>Tasks you consistently procrastinate on (so you can decide to delete or delegate them).</li>
            </ul>
        </div>
    ),
  },
  {
    id: 'account-data',
    title: 'Data Privacy, Sync, and Account Management',
    description: 'Manage your personal data, export options, and security settings.',
    content: (
        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90">
            <p>At Smart Productivity, we take your trust seriously. Here is how you stay in control of your account.</p>
            <h4>Sync Status</h4>
            <p>Stride syncs in real-time. If you switch from your phone to your laptop (via <code>smart-productivity.in</code>), your data follows you instantly.</p>
            <ul>
                <li><em>Check Sync:</em> Look for the "Cloud" icon in Settings. A green checkmark means your data is safely backed up.</li>
            </ul>
            <h4>Exporting Your Data</h4>
            <p>You own your lists. If you need a hard copy or want to move to another system:</p>
            <ol>
                <li>Go to <strong>Settings &gt; Account &gt; Export Data</strong>.</li>
                <li>Choose <strong>CSV</strong> (for spreadsheets) or <strong>PDF</strong> (for printing).</li>
                <li>The file will be emailed to your registered address instantly.</li>
            </ol>
            <h4>Deleting Your Account</h4>
            <p>If you wish to leave Stride:</p>
            <ol>
                <li>Go to <strong>Settings &gt; Account &gt; Delete Account</strong>.</li>
                <li><strong>Warning:</strong> This is permanent. All your tasks, history, and streaks will be wiped from our servers immediately. We cannot recover this data once deleted.</li>
            </ol>
        </div>
    ),
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
            <Accordion type="single" collapsible className="w-full bg-background rounded-lg border">
              {articles.map((article) => (
                <AccordionItem value={article.id} key={article.id}>
                  <AccordionTrigger className="p-6 text-lg text-left hover:no-underline">
                    {article.title}
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0">
                    {article.content}
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
