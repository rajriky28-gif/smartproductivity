export type Update = {
  version: string;
  date: string;
  product: string;
  title: string;
  description: string;
  changes: string[];
};

export const updates: Update[] = [
  {
    version: "v1.2",
    date: "September 2025",
    product: "Stride",
    title: "Improved Focus Mode customization",
    description:
      "Focus sessions can now be adjusted with greater flexibility, allowing users to better match their natural working rhythm.",
    changes: [
      "Custom session and break lengths",
      "Improved session transitions",
      "Minor performance improvements",
    ],
  },
  {
    version: "v1.1",
    date: "August 2025",
    product: "Stride",
    title: "Smarter Quick Add parsing",
    description:
      "Improved understanding of natural language when creating tasks using Quick Add.",
    changes: ["Better time recognition", "Improved subtask extraction"],
  },
  {
    version: "v1.0",
    date: "July 2025",
    product: "Stride",
    title: "Initial public release",
    description:
      "Introduced Quick Add, Focus Mode, flexible scheduling, and weekly reports.",
    changes: [],
  },
];
