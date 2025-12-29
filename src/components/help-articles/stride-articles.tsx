export function GettingStartedArticle() {
  return (
    <>
      <p>
        Welcome to <strong>Stride</strong>, your companion for a focused and organized
        life. Whether you are a student, professional, or creative, Stride helps you
        cut through the noise. This guide covers everything from your first login to
        mastering the dashboard.
      </p>
      <h4>Creating Your Account</h4>
      <p>
        To sync your tasks across devices, you need a Stride account. We have made
        the process seamless:
      </p>
      <ul>
        <li>
          <strong>Sign up with Email:</strong> Enter your preferred email address and
          create a strong password. You will receive a verification link to confirm
          your identity.
        </li>
        <li>
          <strong>Continue with Google:</strong> For one-tap access, use the
          &quot;Continue with Google&quot; button. This links your Stride account
          directly to your Gmail for faster login.
        </li>
      </ul>
      <h4>Navigating the Interface</h4>
      <p>
        Once logged in, you will see the <strong>Today View</strong>. This is your
        command center.
      </p>
      <ul>
        <li>
          <strong>The &quot;+&quot; Button:</strong> Located at the bottom
          center, this is your primary tool. Tap it anytime to add a new task.
        </li>
        <li>
          <strong>The Sidebar:</strong> Swipe from the left or tap the menu icon to
          access your &quot;Upcoming&quot; tasks, &quot;Overdue&quot; list, and
          custom project folders.
        </li>
        <li>
          <strong>Settings Gear:</strong> Found in the top corner of the sidebar, this
          is where you customize your experience (Themes, Notifications, Account).
        </li>
      </ul>
      <h4>Troubleshooting Login Issues</h4>
      <p>Having trouble getting in? Here are solutions to common problems:</p>
      <ul>
        <li>
          <strong>&quot;I forgot my password&quot;:</strong> On the login
          screen, tap <em>Forgot Password?</em>. Enter your registered email, and we
          will send you a reset link immediately. <em>Note: Check your Spam folder if you don&apos;t see it within 2 minutes.</em>
        </li>
        <li>
          <strong>&quot;Email already in use&quot;:</strong> This means you
          likely already created an account (perhaps via Google Login). Try
          logging in with Google instead of typing your email/password.
        </li>
        <li>
          <strong>App crashing on launch:</strong> Ensure you have the latest
          version of Stride installed from the Google Play Store. If the issue
          persists, try clearing the app cache in your phone settings.
        </li>
      </ul>
    </>
  );
}

export function QuickAddArticle() {
  return (
    <>
      <p>
        The best to-do list is the one that doesn&apos;t slow you down. Stride’s{' '}
        <strong>Quick Add</strong> feature uses &quot;Smart Recognition&quot; to
        understand your tasks just like a human assistant would.
      </p>
      <h4>How Smart Recognition Works</h4>
      <p>
        You don&apos;t need to manually scroll through calendars to set a due date.
        Just type the details in your task title, and Stride will highlight them
        and set the reminders automatically.
      </p>
      <h4>Examples to Try:</h4>
      <ul>
        <li>
          <strong>Time-Based:</strong>
          <br />
          <em>You type:</em> &quot;Submit project report{' '}
          <strong>tomorrow at 10am</strong>&quot;
          <br />
          <em>Stride creates:</em> Task: &quot;Submit project report&quot; | Due:
          Tomorrow | Time: 10:00 AM.
        </li>
        <li>
          <strong>Recurring Tasks:</strong>
          <br />
          <em>You type:</em> &quot;Pay electricity bill <strong>every month</strong>
          &quot;
          <br />
          <em>Stride creates:</em> A repeating task that reappears on your list
          monthly.
        </li>
        <li>
          <strong>Priority Shortcuts:</strong>
          <br />
          <em>You type:</em> &quot;Fix website bug <strong>!high</strong>&quot;
          <br />
          <em>Stride creates:</em> A task marked with a Red (High) Priority flag.
        </li>
      </ul>
      <p>
        <strong>Pro Tip:</strong> If you actually want the text
        &quot;tomorrow&quot; to be part of the task name (and not a date),
        simply tap the highlighted text to &quot;un-parse&quot; it.
      </p>
    </>
  );
}

export function FocusModeArticle() {
  return (
    <>
      <p>
        Multitasking is a myth. <strong>Focus Mode</strong> helps you single-task
        effectively by locking your interface to one specific goal.
      </p>
      <h4>Setting Up a Session</h4>
      <ol>
        <li>Open any task from your list.</li>
        <li>
          Tap the <strong>&quot;Start Focus&quot;</strong> icon (stopwatch
          symbol).
        </li>
        <li>
          The interface will darken, hiding all other tasks, notifications, and
          menus. Only your current goal and the timer remain visible.
        </li>
      </ol>
      <h4>The Pomodoro Technique</h4>
      <p>By default, Stride uses the Pomodoro method:</p>
      <ul>
        <li>
          <strong>Focus:</strong> 25 Minutes of pure work.
        </li>
        <li>
          <strong>Short Break:</strong> 5 Minutes to stretch or grab water.
        </li>
        <li>
          <strong>Long Break:</strong> After 4 focus sessions, enjoy a 15-30 minute
          break.
        </li>
      </ul>
      <h4>Customizing Your Timer</h4>
      <p>
        Not everyone works in 25-minute bursts. Go to{' '}
        <strong>Settings &gt; Focus Mode</strong> to:
      </p>
      <ul>
        <li>
          Change the Focus duration (e.g., to 50 minutes or 90 minutes).
        </li>
        <li>
          Enable <strong>White Noise</strong> (Rain, Cafe, or White Noise) to drown
          out background sounds.
        </li>
        <li>
          Toggle <strong>&quot;Keep Screen On&quot;</strong> so your phone
          doesn&apos;t sleep while you work.
        </li>
      </ul>
    </>
  );
}

export function PlanningSchedulingArticle() {
  return (
    <>
      <p>
        Stride isn&apos;t just a list; it&apos;s a planner. Here is how to keep
        your life organized when things get busy.
      </p>
      <h4>Using Priority Levels</h4>
      <p>Assigning priorities helps you decide what to do <em>first</em>.</p>
      <ul>
        <li>🔴 <strong>High (P1):</strong> Urgent. If you only do one thing today, make it this.</li>
        <li>🟡 <strong>Medium (P2):</strong> Important. Try to finish these if time permits.</li>
        <li>🔵 <strong>Low (P3):</strong> Maintenance tasks, chores, or &quot;someday&quot; items.</li>
        <li>⚪️ <strong>No Priority:</strong> General inbox items.</li>
      </ul>
      <h4>Managing Overdue Tasks</h4>
      <p>
        We all miss deadlines sometimes. Stride groups overdue tasks at the top of
        your list in red.
      </p>
      <ul>
        <li>
          <strong>Reschedule Button:</strong> Swipe right on any overdue task to
          instantly move it to &quot;Today,&quot; &quot;Tomorrow,&quot; or
          &quot;Next Week.&quot;
        </li>
        <li>
          <strong>Bulk Reschedule:</strong> Have 10 overdue tasks? Tap the
          &quot;Reschedule All&quot; button in the Overdue header to move them
          all to Today in one click.
        </li>
      </ul>
      <h4>Subtasks &amp; Notes</h4>
      <p>
        For complex projects (e.g., &quot;Plan Vacation&quot;), don&apos;t
        clutter your main list. Tap the task to open <strong>Detail View</strong> and
        add subtasks (e.g., &quot;Book flight,&quot; &quot;Reserve
        hotel,&quot; &quot;Pack bags&quot;). You can also add rich text notes
        for extra context.
      </p>
    </>
  );
}

export function ReportsInsightsArticle() {
  return (
    <>
      <p>
        Stride provides a &quot;health check&quot; for your productivity,
        helping you understand <em>how</em> you work, not just <em>what</em> you
        do.
      </p>
      <h4>The Insight Dashboard</h4>
      <p>Tap the chart icon in the menu to view your stats:</p>
      <ul>
        <li>
          <strong>Completion Rate:</strong> A percentage showing how many of your
          assigned tasks you actually finished. Aim for 80%+!
        </li>
        <li>
          <strong>Daily Activity:</strong> A bar chart showing your most productive
          days of the week. (e.g., &quot;You are most productive on Tuesdays&quot;).
        </li>
        <li>
          <strong>Focus Hours:</strong> Tracks the total time you spent in Focus
          Mode.
        </li>
      </ul>
      <h4>Weekly Summary</h4>
      <p>
        Every Monday morning, Stride generates a summary of your previous week. It
        highlights:
      </p>
      <ul>
        <li>Total tasks completed.</li>
        <li>
          Your longest &quot;Streak&quot; (consecutive days using the app).
        </li>
        <li>
          Tasks you consistently procrastinate on (so you can decide to delete or
          delegate them).
        </li>
      </ul>
    </>
  );
}

export function AccountDataArticle() {
  return (
    <>
      <p>
        At Smart Productivity, we take your trust seriously. Here is how you stay in
        control of your account.
      </p>
      <h4>Sync Status</h4>
      <p>
        Stride syncs in real-time. If you switch from your phone to your laptop
        (via <code>smart-productivity.in</code>), your data follows you
        instantly.
      </p>
      <ul>
        <li>
          <em>Check Sync:</em> Look for the &quot;Cloud&quot; icon in Settings.
          A green checkmark means your data is safely backed up.
        </li>
      </ul>
      <h4>Exporting Your Data</h4>
      <p>
        You own your lists. If you need a hard copy or want to move to another
        system:
      </p>
      <ol>
        <li>
          Go to <strong>Settings &gt; Account &gt; Export Data</strong>.
        </li>
        <li>
          Choose <strong>CSV</strong> (for spreadsheets) or <strong>PDF</strong> (for
          printing).
        </li>
        <li>The file will be emailed to your registered address instantly.</li>
      </ol>
      <h4>Deleting Your Account</h4>
      <p>If you wish to leave Stride:</p>
      <ol>
        <li>
          Go to <strong>Settings &gt; Account &gt; Delete Account</strong>.
        </li>
        <li>
          <strong>Warning:</strong> This is permanent. All your tasks, history, and
          streaks will be wiped from our servers immediately. We cannot recover
          this data once deleted.
        </li>
      </ol>
    </>
  );
}
