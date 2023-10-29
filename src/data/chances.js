const chances = [
  {
    id: 1,
    title: "Refactor Request",
    message: "Move back to the start to rework some code.",
  },
  { id: 2, title: "Unexpected Token", message: "Pay 50 gems for debugging." },
  { id: 3, title: "Successful Demo", message: "Collect 200 gems." },
  {
    id: 4,
    title: "External Library Bug",
    message: "Skip one turn for patching.",
  },
  { id: 5, title: "Hosting Renewal", message: "Pay 100 gems." },
  {
    id: 6,
    title: "Backward Compatibility",
    message: "Move back to a previously owned space.",
  },
  {
    id: 7,
    title: "Tech Talk",
    message: "Move forward three spaces to attend.",
  },
  { id: 8, title: "Framework Update", message: "Upgrade a property you own." },
  { id: 9, title: "Hackathon Win", message: "Jump ahead six spaces." },
  {
    id: 10,
    title: "Open Source",
    message: "Collect 150 gems for your contribution.",
  },
  { id: 11, title: "Code Audit", message: "Collect 100 gems." },
  {
    id: 12,
    title: "Database Breach",
    message: "Pay 200 gems for security upgrades.",
  },
  {
    id: 13,
    title: "GraphQL Query",
    message: "Choose a player to exchange positions with.",
  },
  { id: 14, title: "Agile Iteration", message: "Roll the dice again." },
  { id: 15, title: "Freelance Gig", message: "Collect 250 gems." },
  { id: 16, title: "Timeout", message: "Drop back two spaces." },
  { id: 17, title: "Promise Rejection", message: "Go back three spaces." },
  { id: 18, title: "DevOps Job Offer", message: "Jump ahead five spaces." },
  {
    id: 19,
    title: "A/B Testing",
    message: "Flip a coin to move forward or back three spaces.",
  },
  { id: 20, title: "Lighthouse Score", message: "Collect 100 gems." },
  {
    id: 21,
    title: "Rendering",
    message: "Jump ahead to the next available property.",
  },
  {
    id: 22,
    title: "Dependency Hell",
    message: "Resolve conflicts. Pay 50 gems.",
  },
  {
    id: 23,
    title: "Unit Testing",
    message: "Protect your assets! Collect 50 gems.",
  },
  {
    id: 24,
    title: "Git Merge Conflict",
    message: "Roll the dice again to solve.",
  },
  {
    id: 25,
    title: "Responsive Design",
    message: "Upgrade any of your properties.",
  },
  {
    id: 26,
    title: "End-to-end Test Failed",
    message: "Pay 100 gems to fix the pipeline.",
  },
  {
    id: 27,
    title: "Viral Blog Post",
    message: "Your blog went viral! Collect 150 gems.",
  },
  {
    id: 29,
    title: "Inherited Legacy Code",
    message: "Go directly to the Legacy Code Labyrinth. Do not pass Start.",
  },
  {
    id: 30,
    title: "Continuous Integration",
    message: "Move forward two spaces.",
  },
  {
    id: 31,
    title: "New Framework Release",
    message: "Rush to the start to explore the updates.",
  },
  {
    id: 32,
    title: "CORS Error",
    message: "Go back three spaces while you figure it out.",
  },
  {
    id: 33,
    title: "npm Audit",
    message: "Fix vulnerabilities. Pay 50 gems.",
  },
  {
    id: 34,
    title: "Technical Debt",
    message: "Pay 10 gems for each property you own.",
  },
  {
    id: 35,
    title: "Browser Incompatibility",
    message: "Debugging needed. Go back two spaces.",
  },
  {
    id: 36,
    title: "Pair Programming",
    message: "Choose a player to join you on your current space.",
  },
  {
    id: 37,
    title: "Contentful Integration",
    message: "Your content scales! Collect 80 gems.",
  },
  {
    id: 38,
    title: "Dark Mode Trend",
    message: "Upgrade one of your properties.",
  },
  {
    id: 39,
    title: "Docker Container",
    message: "Your environment is isolated. Move anywhere on the board.",
  },
  {
    id: 40,
    title: "Deprecated Function",
    message: "Update your methods. Pay 30 gems.",
  },
  {
    id: 41,
    title: "Performance Audit",
    message: "Optimize! Collect 70 gems.",
  },
  {
    id: 42,
    title: "Headless CMS",
    message: "Your flexibility increases. Collect 60 gems.",
  },
  {
    id: 43,
    title: "Machine Learning API",
    message: "Predict the future! Take another turn.",
  },
  {
    id: 44,
    title: "New Client Project",
    message:
      "Advance to the nearest empty property. If unowned, you can buy it.",
  },
  {
    id: 45,
    title: "Hot Module Replacement",
    message: "Swap places with any player on the board.",
  },
  {
    id: 46,
    title: "JSON Parsing Error",
    message: "You missed a comma. Go back one space.",
  },
  {
    id: 47,
    title: "New Plugin",
    message: "Expand functionalities. Upgrade a property for free.",
  },
  {
    id: 48,
    title: "WebAssembly",
    message: "Boost performance! Move forward four spaces.",
  },
  {
    id: 49,
    title: "New Design System",
    message: "Collect 50 gems for the fresh look.",
  },
  {
    id: 51,
    title: "Database Indexing",
    message: "Optimize search. Collect 30 gems.",
  },
  {
    id: 52,
    title: "Animation Library",
    message: "Make a flashy move! Jump ahead seven spaces.",
  },
  {
    id: 53,
    title: "Open Source Sponsor",
    message: "Support from community. Collect 100 gems.",
  },
  {
    id: 54,
    title: "Code Review Feedback",
    message: "Implement changes. Move back to the start.",
  },
  {
    id: 55,
    title: "Web Accessibility",
    message: "Your site is for everyone. Collect 70 gems.",
  },
  {
    id: 56,
    title: "Push Notification",
    message: "Stay alert! Roll the dice again.",
  },
  {
    id: 57,
    title: "Infinite Scroll",
    message: "Endless content! Move forward 2 spaces.",
  },
  {
    id: 58,
    title: "Code Review",
    message: "Feedback helps! Move back 1 space.",
  },
  {
    id: 59,
    title: "Third-Party API",
    message: "Integrate external data! Move ahead 2 spaces.",
  },
  {
    id: 60,
    title: "A/B Testing",
    message: "User experience insights! Move back 1 space.",
  },
  {
    id: 61,
    title: "Dependency Injection",
    message: "Flexible modules! Move ahead 2 spaces.",
  },
  {
    id: 62,
    title: "Push Notification",
    message: "Engage users! Move ahead 2 spaces.",
  },
];
