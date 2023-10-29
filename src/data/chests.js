const chests = [
  {
    id: 1,
    title: "Code Retreat",
    message: "Relax and refactor! Collect 200 gems.",
  },
  {
    id: 2,
    title: "API Key Leak",
    message: "Security patch required! Pay 150 gems.",
  },
  {
    id: 3,
    title: "Feature Launch",
    message: "Your new feature is a hit! Collect 100 gems.",
  },
  {
    id: 4,
    title: "Browser Cache",
    message: "Speed boost! Move ahead 3 spaces.",
  },
  {
    id: 5,
    title: "Plugin Conflict",
    message: "Fix required! Go back 2 spaces.",
  },
  {
    id: 6,
    title: "Contributor Bonus",
    message: "For your open source contributions, collect 50 gems.",
  },
  {
    id: 7,
    title: "Database Optimization",
    message: "Your sites run smoother! Collect 80 gems.",
  },
  { id: 8, title: "Beta Test", message: "Collect feedback and 60 gems." },
  {
    id: 9,
    title: "UI Breakpoint",
    message: "Adaptability pays off! Collect 70 gems.",
  },
  { id: 10, title: "API Deprecation", message: "Update needed! Pay 50 gems." },
  {
    id: 11,
    title: "Performance Bonus",
    message: "For optimized code, collect 100 gems.",
  },
  {
    id: 12,
    title: "Memory Leak",
    message: "Troubleshoot the issue! Go back 3 spaces.",
  },
  { id: 13, title: "Agile Sprint", message: "Move forward 4 spaces." },
  {
    id: 14,
    title: "Cloud Migration",
    message: "Seamless transition! Collect 90 gems.",
  },
  {
    id: 15,
    title: "Plugin Update",
    message: "Enhance functionalities! Pay 30 gems.",
  },
  {
    id: 16,
    title: "Community Support",
    message: "For your help on forums, collect 40 gems.",
  },
  {
    id: 17,
    title: "SEO Boost",
    message: "Your sites rank higher! Collect 60 gems.",
  },
  {
    id: 18,
    title: "Frontend Framework",
    message: "New learning! Move to the start.",
  },
  {
    id: 19,
    title: "Deprecated Library",
    message: "Transition required! Pay 40 gems.",
  },
  { id: 20, title: "CSS Grid", message: "Design mastery! Collect 70 gems." },
  {
    id: 21,
    title: "Unhandled Exception",
    message: "Debug the code! Go back to start.",
  },
  {
    id: 22,
    title: "Module Bundler",
    message: "Optimized load time! Collect 50 gems.",
  },
  {
    id: 23,
    title: "Browser Support",
    message: "Cross-browser fixes! Pay 60 gems.",
  },
  {
    id: 24,
    title: "Backend Logic",
    message: "Smooth operations! Collect 80 gems.",
  },
  {
    id: 25,
    title: "Referral Bonus",
    message: "For bringing a new client, collect 100 gems.",
  },
  {
    id: 26,
    title: "TypeScript Types",
    message: "Strongly-typed win! Collect 40 gems.",
  },
  { id: 27, title: "Domain Renewal", message: "Keep your brand! Pay 50 gems." },
  {
    id: 28,
    title: "Offline First",
    message: "Enhanced user experience! Collect 60 gems.",
  },
  {
    id: 29,
    title: "Data Breach",
    message: "Strengthen security! Pay 200 gems.",
  },
  {
    id: 30,
    title: "Template Engine",
    message: "Dynamic content! Move ahead 3 spaces.",
  },
  {
    id: 31,
    title: "Version Control",
    message: "Efficient teamwork! Collect 50 gems.",
  },
  {
    id: 32,
    title: "Deprecated Endpoint",
    message: "Integration fixes required! Pay 40 gems.",
  },
  {
    id: 33,
    title: "UI Component",
    message: "Reusable assets! Collect 30 gems.",
  },
  {
    id: 34,
    title: "CSS Preprocessor",
    message: "Styling mastery! Move forward 2 spaces.",
  },
  {
    id: 35,
    title: "Service Worker",
    message: "App-like behavior! Collect 80 gems.",
  },
  {
    id: 36,
    title: "Plugin Vulnerability",
    message: "Patch required! Pay 100 gems.",
  },
  {
    id: 37,
    title: "Third-party Library",
    message: "Expand capabilities! Move ahead 1 space.",
  },
  {
    id: 38,
    title: "Data Model",
    message: "Structured success! Collect 40 gems.",
  },
  {
    id: 39,
    title: "Web Component",
    message: "Interoperable UI! Collect 50 gems.",
  },
  {
    id: 40,
    title: "Query Optimization",
    message: "Fast data retrieval! Move ahead 3 spaces.",
  },
  {
    id: 41,
    title: "Algorithm Challenge",
    message: "Show your skills! Collect 100 gems.",
  },
  {
    id: 42,
    title: "Continuous Integration",
    message: "Your build passes! Collect 50 gems.",
  },
  {
    id: 43,
    title: "Virtual DOM",
    message: "Rendering efficiency! Collect 60 gems.",
  },
  {
    id: 44,
    title: "Throttling Issue",
    message: "Traffic overload! Pay 50 gems.",
  },
  {
    id: 45,
    title: "Code Convention",
    message: "Consistency is key! Collect 40 gems.",
  },
  {
    id: 46,
    title: "Wireframe Mockup",
    message: "A prototype is approved! Collect 70 gems.",
  },
  {
    id: 47,
    title: "SVG Animation",
    message: "Graphics delight! Collect 40 gems.",
  },
  {
    id: 48,
    title: "Progressive Web App",
    message: "Offline capabilities! Collect 80 gems.",
  },
  {
    id: 49,
    title: "Code Splitting",
    message: "Optimized load! Collect 50 gems.",
  },
  {
    id: 50,
    title: "Hot Module Replacement",
    message: "Instant updates! Move ahead 2 spaces.",
  },
  {
    id: 51,
    title: "GraphQL Query",
    message: "Efficient data fetch! Collect 70 gems.",
  },
  {
    id: 52,
    title: "RESTful Endpoint",
    message: "API success! Collect 60 gems.",
  },
  {
    id: 53,
    title: "Database Indexing",
    message: "Fast queries! Move ahead 3 spaces.",
  },
  {
    id: 54,
    title: "Responsive Design",
    message: "Multi-device win! Collect 40 gems.",
  },
  {
    id: 55,
    title: "Serverless Function",
    message: "Scalable backend! Collect 50 gems.",
  },
  {
    id: 56,
    title: "Parallax Scrolling",
    message: "UI magic! Collect 40 gems.",
  },
  {
    id: 57,
    title: "AJAX Request",
    message: "Dynamic update! Move ahead 2 spaces.",
  },
  {
    id: 58,
    title: "Web Accessibility",
    message: "Inclusive design! Collect 50 gems.",
  },
  {
    id: 59,
    title: "MVC Architecture",
    message: "Structured app design! Move forward 3 spaces.",
  },
  {
    id: 60,
    title: "Web Sockets",
    message: "Real-time updates! Collect 60 gems.",
  },
  {
    id: 61,
    title: "Legacy Code",
    message: "Refactoring needed! Pay 40 gems.",
  },
  {
    id: 62,
    title: "Server Migration",
    message: "Expand infrastructure! Collect 80 gems.",
  },
  {
    id: 63,
    title: "Load Balancer",
    message: "Manage traffic! Collect 70 gems.",
  },
  {
    id: 64,
    title: "Compression Algorithm",
    message: "Save bandwidth! Collect 60 gems.",
  },
  {
    id: 65,
    title: "Regular Expression",
    message: "Pattern match win! Collect 50 gems.",
  },
  {
    id: 66,
    title: "Single Page App",
    message: "Smooth navigation! Collect 40 gems.",
  },
  {
    id: 67,
    title: "Tech Debt",
    message: "Refactor time! Move back 3 spaces.",
  },
  {
    id: 68,
    title: "Static Site Generator",
    message: "Fast load times! Collect 50 gems.",
  },
  {
    id: 69,
    title: "CSS Variables",
    message: "Dynamic theming! Collect 40 gems.",
  },
  {
    id: 70,
    title: "Drag and Drop UI",
    message: "Interactive design! Collect 70 gems.",
  },
  {
    id: 71,
    title: "Client-side Storage",
    message: "Persistent data! Collect 50 gems.",
  },
];
