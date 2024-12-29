import { type IconKeys } from "../components/Icon";

export type Feature = {
  icon: IconKeys;
  title: string;
  subtitle: string;
};

export const features: Array<{ items: Feature[] }> = [
  {
    items: [
      {
        icon: "send",
        title: "Faster Launches, Rapid Growth",
        subtitle: "Go-to-market fast with our ready-to-deploy OTT solutions.",
      },
      {
        icon: "layer",
        title: "User-Centric Design",
        subtitle:
          "User-friendly interface for intuitive management and user engagement.",
      },
    ],
  },
  {
    items: [
      {
        icon: "candle",
        title: "No Coding, No Problem",
        subtitle: "No-code tools for quick app streaming.",
      },
      {
        icon: "play",
        title: "All-In-One OTT",
        subtitle: "Manage your streaming service – in one place.",
      },
      {
        icon: "category",
        title: "Customizable and Scalable",
        subtitle: "Your Tailored white-label OTT Platform.",
      },
    ],
  },
  {
    items: [
      {
        icon: "monitor",
        title: "Multi-Device Optimization",
        subtitle:
          "Develop your streaming in more than 10+ devices and operating systems.",
      },
      {
        icon: "setting",
        title: "Seamless Integrations",
        subtitle:
          "Integrate with popular third-party tools through powerful API integrations․",
      },
    ],
  },
];

export const latestBlogs = [
  {
    title: "OTT Experience",
    description:
      "Uncover the features of our cutting-edge OTT streaming service, tailored for effortless access on TV, web browsers and mobile devices. Relish your favorite shows and movies at your convenience!",
    imageUrl: "/images/blog-image-example.png",
    readTime: "5 min",
    views: 18544,
    createdDate: "2021-09-01",
    isLogo: false,
  },
  {
    title: "Streaming",
    description:
      "Uncover the features of our cutting-edge OTT streaming service, tailored for effortless access on TV, web browsers and mobile devices.",
    imageUrl: "/path/to/fibi-logo.jpg",
    readTime: "5 min",
    views: 18544,
    createdDate: "2021-09-01",
    isLogo: true,
  },
  {
    title: "Comprehensive OTT",
    description:
      "Uncover the features of our cutting-edge OTT streaming service, tailored for effortless access on TV, web browsers and mobile devices.",
    imageUrl: "/path/to/fibi-logo.jpg",
    readTime: "5 min",
    views: 18544,
    createdDate: "2021-09-01",
    isLogo: true,
  },
  {
    title: "Fibi OTT Solutions",
    description:
      "Uncover the features of our cutting-edge OTT streaming service, tailored for effortless access on TV, web browsers and mobile devices.",
    imageUrl: "/images/blog-image-example.png",
    readTime: "5 min",
    views: 18544,
    createdDate: "2021-09-01",
    isLogo: false,
  },
];
