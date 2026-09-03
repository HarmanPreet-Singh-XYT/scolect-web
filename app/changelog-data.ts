// changelog-data.ts
// Centralized release data for TimeMark changelog

export interface Release {
  version: string;
  date: string;
  isLatest?: boolean;
  features?: string[];
  improvements?: string[];
  fixes?: string[];
  tech?: string[];
  note?: string;
  size?:number;
  // Platform download links
  macLink?: string;
  appleStore?:string;
  windowsLink?: string;
  linuxLink?: string;
}

export const releases: Release[] = [
  {
    version: "v2.3.1",
    date: "September 3, 2026",
    isLatest: true,
    fixes: [
      "Bug fixes and stability improvements."
    ],
    size: 24.1,
    macLink: "https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/releases/download/v2.3.1/screentime-2.3.1-macos.dmg",
  },
  {
    version: "v2.3.0",
    date: "September 1, 2026",
    isLatest: false,
    features: [
      "Added Private Mode: password-protect and hide specific apps or websites from view, with a backup code and security question for recovery.",
      "Added Multiple Browser Sync: connect and track more than one browser's website data from the extension into a single unified dashboard.",
    ],
    improvements: [
      "Redesigned the Browser tab with more useful overview, history, categories, and limits views.",
      "Updated onboarding UI for a smoother first-run setup on both desktop and the extension.",
      "(Windows) Improved tracking accuracy for UWP apps, resolving real app names instead of generic host process names.",
    ],
    fixes: [
      "Various bug fixes and general improvements."
    ],
    size: 24.1,
    macLink: "https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/releases/download/v2.3.0/screentime-2.3.0-macos.dmg",
  },
  {
    version: "v2.2.2",
    date: "August 9, 2026",
    isLatest: false,
    features: [
      "Added app blocking feature for both macOS & Windows.",
      "Web Extension is now available, making Scolect available for website tracking.",
      "Added the ability to sync website data from the extension and view it directly in the app.",
      "Added sorting for tables & search in the Alerts & Limits section."
    ],
    improvements: [
      "Updated version history and download links."
    ],
    fixes: [
      "Various bug fixes and improvements."
    ],
    size: 23.2,
    macLink: "https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/releases/download/v2.2.2/Scolect.dmg",
    windowsLink: "https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/releases/download/v2.2.2/Scolect.-.Track.Screen.Time.App.Usage.exe"
  },
  {
    version: "v2.1.3",
    date: "June 30, 2026",
    isLatest: false,
    improvements: [
      "Improved stability."
    ]
  },
  {
    version: "v2.1.2",
    date: "June 25, 2026",
    isLatest: false,
    improvements: [
      "Added improvements for stability on Windows (migrated from C++ to Rust for native implementations)."
    ]
  },
  {
    version: "v2.1.1",
    date: "April 20, 2026",
    isLatest: false,
    improvements: [
      "Improved the way focus mode sync works, now allows resume of sessions same day.",
      "General improvements"
    ],
    fixes: [
      "Fixed Slider values in the Alerts & Limits not being implemented or to say not working."
    ],
    size: 22.7,
    macLink: "https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/releases/download/v2.1.1/Scolect.dmg"
  },
  {
    version: "v2.1.0",
    date: "April 7, 2026",
    isLatest: false,
    features: [
      "Added ability to change the daily reset time."
    ],
    improvements: [
      "General optimizations.",
      "(MacOS) Changed data save location to Documents/Scolect with automatic migration to prevent data loss during app updates or removal."
    ],
    fixes: [
      "(MacOS) Fixed issue where Auto Update was not working correctly.",
      "Fixed slider snapping issues at 15-minute intervals in Alerts & Limits for Daily Limits."
    ],
    note: "It is highly recommended to download this update manually.",
    size: 22.7,
    macLink: "https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/releases/download/v2.1.0/Scolect.-.Track.Screen.Time.App.Usage.dmg"
  },
  {
    version: "v2.0.10",
    date: "March 6, 2026",
    isLatest: false,
    fixes: [
      "Fixed Focus Mode sessions not accumulating correctly and incorrectly continuing previous sessions instead of creating new ones.",
      "Fixed Session History chart showing monthly data instead of the intended weekly data."
    ],
    improvements: [
      "Improved session lifecycle handling for Focus Mode timers."
    ],
    tech: [
      "Focus Mode session state management fix",
      "Session history aggregation correction",
      "Chart data range correction (monthly → weekly)"
    ],
    note: "If a previous Focus Mode session was left incomplete, run the Focus Mode timer once so the pending session can be finalized. New sessions will then be created correctly going forward. Fast-forwarding the timer will also complete the pending session.",
    size: 22.7,
    macLink: "https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/releases/download/v2.0.10/Scolect.-.Track.Screen.Time.App.Usage.dmg"
  },
  {
    version: "v2.0.9",
    date: "March 2, 2026",
    isLatest: false,
    improvements: [
      "General optimizations for performance and UI handling.",
      "Enabled auto update for distributions outside official stores.",
      "Audio, Keyboard, and Mouse monitoring enabled by default.",
      "HID and Controller monitoring disabled by default to reduce overhead."
    ],
    tech: [
      "Auto-update system activation for non-store builds",
      "Default monitoring configuration refactor",
      "Performance and UI optimization pass"
    ],
    size: 22.7,
    macLink: "https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/releases/download/v2.0.9/Scolect.-.Track.Screen.Time.App.Usage.dmg"
  },
  {
    version: "v2.0.8",
    date: "February 27, 2026",
    improvements: [
      "Disabled advanced idle tracking parameters by default to prevent unnecessary resource usage.",
      "Added migration logic for existing users."
    ],
    tech: [
      "Idle detection configuration refactor",
      "Resource optimization for background monitoring",
      "Migration handling for tracking parameter changes"
    ]
  },
  {
    version: "v2.0.7",
    date: "February 24, 2026",
    improvements: [
      "Optimized Idle Detection handling on Windows.",
    ],
    fixes: [
      "Fixed Focus Mode crashes related to monitoring engine."
    ],
    tech: [
      "Windows idle detection performance improvements",
      "Monitoring engine stability fixes"
    ]
  },
  {
  version: "v2.0.6",
  date: "February 22, 2026",
  isLatest: false,
  improvements: [
    "In-depth detail dialog of app report now shows more insights with updated graph visualization.",
    "Optimized tracking engine to account for OS states such as sleep mode, screen off, and inactive states.",
    "Focus Mode now automatically refreshes the UI when a session completes."
  ],
  tech: [
    "OS state-aware tracking optimization (sleep, screen off handling)",
    "Enhanced analytics graph rendering pipeline",
    "Improved Focus Mode state management and UI synchronization"
  ],
  size: 21.8,
  macLink: "https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/releases/download/v2.0.6/Scolect.-.Track.Screen.Time.App.Usage.dmg",
},
  {
    version: "v2.0.5",
    date: "February 15, 2026",
    isLatest: false,
    improvements: [
      "Improved Windows tracking to resolve and display actual system application names.",
      "Enhanced UWP app name detection for more accurate reporting."
    ],
    fixes: [
      "Fixed UWP applications being shown as 'Application Frame Host' instead of their real app names."
    ],
    tech: [
      "Improved Windows UWP process-to-application name resolution",
      "Optimized Windows-specific tracking pipeline"
    ],
    windowsLink: "https://apps.microsoft.com/detail/9phbzxnpvhsq?hl=en-US&gl=CA",
    macLink: "https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/releases/download/v2.0.4/Scolect.-.Track.Screen.Time.App.Usage.dmg",
  },
  {
   version: "v2.0.4",
    date: "February 14, 2026",
    isLatest: false,
    improvements: [
      "Optimized local database read/write operations.",
      "Reduced memory usage by avoiding full data loads into memory.",
      "Introduced smart in-memory caching for instant access (up to 5MB)."
    ],
    tech: [
      "Streaming-based data access instead of eager loading",
      "Memory-bounded caching strategy for frequently accessed records"
    ],
    macLink: "https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/releases/download/v2.0.4/Scolect.-.Track.Screen.Time.App.Usage.dmg",
  },
  {
    version: "v2.0.3",
    date: "February 14, 2026",
    improvements: [
      "Improved Applications section UX.",
      "Optimized data storage and retrieval pipeline.",
      "Latest tracking data now appears instantly on the UI.",
      "Reduced unnecessary background UI refreshes."
    ],
    fixes: [
      "Fixed application tracking toggle unintentionally stopping tracking.",
      "Fixed large application names not being stored correctly.",
      "Resolved issues causing delayed UI updates."
    ],
    features: [
      "Application now tracks its own usage."
    ],
    macLink: "https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/releases/download/v2.0.3/Scolect.-.Track.Screen.Time.App.Usage.dmg",
  },
  {
    version: "v2.0.2",
    date: "February 12, 2026",
    features: [
      "Added option to enable or disable keyboard input monitoring."
    ],
    fixes: [
      "Fixed idle detection crash on Windows monitoring engine."
    ],
    improvements: [
      "Restored rebranding model on Windows builds."
    ],
    note: "Monitoring if crashes still occur. Report issues to bugs@scolect.com or via the Report Bugs page if you can reproduce them.",
    macLink: "https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/releases/download/v2.0.2/Scolect.-.Track.Screen.Time.App.Usage.dmg",
  },
  {
    version: "v2.0.0",
    date: "February 10, 2026",
    isLatest: false,
    features: [
      "Rebranded and restructured the application (TimeMark → Scolect)",
      "Native macOS support with deep OS-level integration",
      "Fully rebuilt tracking engine with up to 60× improved accuracy",
      "Advanced idle detection using keyboard, mouse, audio, HID devices, and controllers",
      "Fully customizable theming system",
      "Automated Excel report generation with detailed analytics",
      "Complete UI refresh focused on clarity, responsiveness, and performance"
    ],
    tech: [
      "macOS permissions and entitlement handling",
      "Low-level input monitoring across multiple device types",
      "High-performance tracking engine optimization",
      "Scalable theming architecture",
      "Cross-platform Flutter architecture for Windows and macOS"
    ],
    macLink: "https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/releases/download/v2.0.1/Scolect.-.Track.Screen.Time.App.Usage.dmg",
    note: "This is a major architectural release introducing Scolect as the new identity of TimeMark. Significant internal systems were redesigned to support cross-platform accuracy, performance, and extensibility."
  },
  {
    version: "v1.2.1",
    date: "December 23, 2025",
    isLatest: false,
    fixes: [
      "Fixed issue where opening another instance of the application would fail to load. New instances now correctly bring the existing window to focus instead of creating duplicates."
    ],
    note: "Setups here do not support auto launch at startup. Prefer Microsoft Store for that feature. GitHub Release is only used for provision and testing."
  },
  {
    version: "v1.2.0",
    date: "December 22, 2025",
    features: [
      "Import/Export Data: Backup and restore your tracking data across devices with the new data portability feature.",
      "Multi-Language Support: TimeMark now supports 11 languages including Chinese (中文), Hindi (हिन्दी), Spanish (Español), French (Français), Arabic (العربية), Bengali (বাংলা), Portuguese (Português), Russian (Русский), Urdu (اردو), Indonesian (Bahasa Indonesia), and Japanese (日本語)."
    ],
    improvements: [
      "Enhanced application tracking name recognition for better accuracy",
      "Improved scrollbar behavior to prevent overlap with applications in overview"
    ],
    fixes: [
      "Fixed scrollbar overlap with applications in overview page"
    ],
    note: "Setups here do not support auto launch at startup. Prefer Microsoft Store for that feature. GitHub Release is only used for provision and testing."
  },
  {
    version: "v1.1.0",
    date: "May 12, 2025",
    features: [
      "Custom Date Range Reports: View analytics for specific dates or date ranges with the new flexible reporting system."
    ]
  },
  {
    version: "v1.0.3",
    date: "April 27, 2025",
    improvements: [
      "Updated tracking mechanism with more reliable detection methods",
      "Enhanced error handling for improved stability",
      "Improved app usage record functionality for better accuracy"
    ]
  },
  {
    version: "v1.0.1",
    date: "March 27, 2025",
    improvements: [
      "Now uses MSIX's native launch at startup functionality",
      "Removed manual launch at startup toggle as it's handled by the system"
    ],
    fixes: [
      "Fixed settings not changing properly",
      "Removed exit confirmation dialog for smoother workflow",
      "Fixed hidden value filter not working correctly"
    ]
  },
  {
    version: "v1.0.0",
    date: "March 25, 2025",
    features: [
      "Initial Windows Release: Real-time application tracking for Windows",
      "Daily screen time analytics with detailed breakdowns",
      "Productive Score calculation to measure your productivity",
      "Custom categories for organizing tracked applications",
      "Overall daily time limits to help manage screen time",
      "Light and dark theme support for comfortable viewing"
    ]
  }
];

export interface UpcomingFeature {
  title: string;
  status: "development" | "consideration";
}

export const upcomingFeatures: UpcomingFeature[] = [
//   { title: "Focus Mode with Pomodoro timer", status: "development" },
//   { title: "Application time limits", status: "development" },
//   { title: "Distraction blocking features", status: "development" },
  { title: "Do Not Disturb scheduling", status: "consideration" },
  { title: "Weekly email reports", status: "consideration" },
  { title: "Browser extension integration", status: "consideration" },
  { title: "macOS support", status: "consideration" }
];

export const releasePhilosophy = {
  description: "TimeMark follows semantic versioning (MAJOR.MINOR.PATCH).",
  versioningRules: [
    { type: "Patch", description: "Critical bug fixes (as needed)" },
    { type: "Minor", description: "New features (every 4-6 weeks)" },
    { type: "Major", description: "Breaking changes (rare)" }
  ],
  additionalInfo: "All releases are tested internally. Critical bugs are hotfixed immediately. Microsoft Store handles updates automatically."
};