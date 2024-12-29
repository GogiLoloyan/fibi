import { type IconKeys } from "../components/Icon";

export const heroData = {
  title: "All-in-One Business Solutions",
  subTitle: `A Fully Integrated SaaS Platform That Simplifies<br />Content Streaming-From Creation to<br />Monetization-With Scalable, Cost-Effective<br />Solutions For Exceptional User Experiences.`,
};

export const metrics = [
  { value: "+25%", description: "Retention Rate" },
  { value: "2x", description: "Faster Launches" },
  { value: "44%", description: "Cost Savings" },
  { value: "~20%", description: "User Growth" },
];

type Solution = {
  icon: IconKeys;
  title: string;
  description?: string;
  themeColor: string;
  features: {
    title: string;
    description: string;
  }[];
};

export const solutions: Solution[] = [
  {
    icon: "crm",
    title: "User & Content Management",
    description:
      "Simple content management and seamless video experience delivery.",
    themeColor: "color-m800",
    features: [
      {
        title: "Content Library",
        description:
          "Organize videos, images, and documents in one unified space.",
      },
      {
        title: "Secure User Authentication",
        description:
          "Utilize OAuth, SSO, and other secure login mechanisms to protect user access.",
      },
      {
        title: "Multi-Format Support",
        description:
          "Upload and deliver videos in multiple formats, resolutions, and quality.",
      },
      {
        title: "Intuitive Dashboard",
        description:
          "Easy to monitor, edit, and manage your content across platforms.",
      },
    ],
  },
  {
    icon: "pie-chart",
    title: "Analytics and Reporting",
    description:
      "Transform data into insights with powerful analytics that drive growth.",
    themeColor: "color-g800",
    features: [
      {
        title: "Real-Time Monitoring",
        description:
          "Access real-time insights with live dashboards for on-the-go performance tracking.",
      },
      {
        title: "Behavioral Insights",
        description:
          "Offer bespoke services; increase engagement through the analysis of client behavior.",
      },
      {
        title: "Trend Analysis",
        description:
          "Observe patterns and seasonal shifts to anticipate market changes.",
      },
    ],
  },
  {
    icon: "setting",
    title: "Integration-Ready",
    description:
      "Fibi's integration solution increase your productivity and optimize processes.",
    themeColor: "color-p800",
    features: [
      {
        title: "API Access",
        description:
          "Connect with external systems and third-party apps using robust API support.",
      },
      {
        title: "Third-Party Integrations",
        description:
          "Integrate with popular tools like PayPal, Slack, and more for enhanced efficiency.",
      },
      {
        title: "Data Synchronization",
        description:
          "Keep everything in sync by connecting data flow between Fibi and other platforms.",
      },
      {
        title: "Extensive Integration Library",
        description:
          "Access a wide range of pre-built integrations to develop your platform’s functionality.",
      },
    ],
  },
  {
    icon: "design",
    title: "Code-Free Website Builder",
    themeColor: "color-b800",
    features: [
      {
        title: "Code-Free Builder",
        description:
          "Design and build your website with our pre-built templates",
      },
      {
        title: "Responsive Design",
        description:
          "Ensure your website looks great on mobile, tablet, and desktop.",
      },
      {
        title: "Instant Publishing",
        description: "Make updates and publish changes in real-time.",
      },
    ],
  },
  {
    icon: "monitor",
    title: "TV + Mobile App",
    description: "Deliver an exceptional viewing experience on any device.",
    themeColor: "color-o800",
    features: [
      {
        title: "Cross-Platform Access",
        description:
          "Reach users across 12 devices and OS’s, including smart TVs and mobile platforms.",
      },
      {
        title: "Fast Time-to-Market",
        description:
          "Get your TV and mobile app live faster with ready-made templates.",
      },
      {
        title: "User-Friendly UI/UX",
        description:
          "Improve user experience with an intuitive, easy-to-navigate design.",
      },
      {
        title: "App Customization",
        description: "Customize your app's appearance to match your branding.",
      },
    ],
  },
  {
    icon: "refresh",
    title: "Fibi’s Workflow Automation",
    description:
      "Use intelligent automation to simplify and optimize your company's operations.",
    themeColor: "color-g800",
    features: [
      {
        title: "Visual Workflow Designer",
        description:
          "Create and manage workflows easily with a drag-and-drop interface.",
      },
      {
        title: "Trigger-Based Automation",
        description:
          "Automate processes based on user-defined events for consistent execution.",
      },
      {
        title: "Custom Workflows",
        description:
          "Adapt workflows to specific business needs using visual tools and predefined templates.",
      },
    ],
  },
  {
    icon: "play",
    title: "Video Experience & Monetization",
    description:
      "Stream better, earn more, and reach further with Fibi's tools.",
    themeColor: "color-m800",
    features: [
      {
        title: "Fibi's Video Player",
        description:
          "Provide high-quality video experiences with a flexible, web-ready player.",
      },
      {
        title: "Multi-Language and Subtitles Support",
        description:
          "Expands the platform’s global reach, Improving accessability and user satisfaction.",
      },
      {
        title: "Monetization Models",
        description:
          "Distribute content with flexible options like SVOD, TVOD, and AVOD.",
      },
      {
        title: "Dynamic Ad Insertion (DAI)",
        description:
          "Maximizes ad revenue while offering a personalized ad experience to users.",
      },
    ],
  },
  {
    icon: "money",
    title: "Invoice and Payment Suite",
    description: "Empower your business with flexibility and reliability.",
    themeColor: "color-p800",
    features: [
      {
        title: "Flexible Billing Options",
        description: "Adapt your billing model to suit your business needs.",
      },
      {
        title: "Multi-Currency Support",
        description:
          "Manage international payments with support for multiple currencies.",
      },
      {
        title: "Automated Billing Cycles",
        description: "Automate recurring billing, reminders, and invoicing.",
      },
      {
        title: "Secure Payment Gateways",
        description:
          "Offer safe and reliable payment processing with major payment gateways.",
      },
    ],
  },
  {
    icon: "user",
    title: "Premium Support Services",
    description:
      "Keep your platform running smoothly with our support and regular updates.",
    themeColor: "color-g800",
    features: [
      {
        title: "24/7 Technical Support",
        description:
          "Get uninterrupted, expert assistance to quickly address issues and minimize downtime.",
      },
      {
        title: "Regular Feature Updates",
        description:
          "Keep your platform up-to-date with continuous improvements and bug fixes.",
      },
      {
        title: "User Feedback Integration",
        description:
          "Collect and act on user insights to refine and enhance your platform.",
      },
    ],
  },
];
