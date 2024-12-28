// "use client";

import Block from "@/components/Block";
import Section from "@/components/Section";
import { getStoredTheme } from "@/styles/theme/utils";

import SendIcon from "../../../../../public/icons/send.svg";
import BannerLogo from "../../../../../public/icons/banner-logo.svg";

import styles from "./index.module.css";
import classNames from "classnames";
import Button from "@/components/Button";

type Feature = {
  icon: React.FC;
  title: string;
  subtitle: string;
};

const features: Array<{ items: Feature[] }> = [
  {
    items: [
      {
        icon: SendIcon,
        title: "Faster Launches, Rapid Growth",
        subtitle: "Go-to-market fast with our ready-to-deploy OTT solutions.",
      },
      {
        icon: SendIcon,
        title: "User-Centric Design",
        subtitle:
          "User-friendly interface for intuitive management and user engagement.",
      },
    ],
  },
  {
    items: [
      {
        icon: SendIcon,
        title: "No Coding, No Problem",
        subtitle: "No-code tools for quick app streaming.",
      },
      {
        icon: SendIcon,
        title: "All-In-One OTT",
        subtitle: "Manage your streaming service – in one place.",
      },
      {
        icon: SendIcon,
        title: "Customizable and Scalable",
        subtitle: "Your Tailored white-label OTT Platform.",
      },
    ],
  },
  {
    items: [
      {
        icon: SendIcon,
        title: "Multi-Device Optimization",
        subtitle:
          "Develop your streaming in more than 10+ devices and operating systems.",
      },
      {
        icon: SendIcon,
        title: "Seamless Integrations",
        subtitle:
          "Integrate with popular third-party tools through powerful API integrations․",
      },
    ],
  },
];

const FeaturesSection = () => {
  const theme = getStoredTheme();

  return (
    <Section title="Why Choose fibi?">
      <div className={styles.featureContainer}>
        {features.map((featureRow, index) => (
          <div key={String(index)} className={styles.featureRow}>
            {featureRow.items.map((feature, index) => (
              <Block key={String(index)} className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <feature.icon />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureSubtitle}>{feature.subtitle}</p>
              </Block>
            ))}
          </div>
        ))}
      </div>
      <Block
        className={classNames(
          styles.banner,
          theme === "dark" && styles.bannerDark
        )}
      >
        <div className={styles.bannerText}>
          <p className={classNames(styles.bannerTitle, "text-2xl font-bold")}>
            Want to See Fibi in Action?
          </p>
          <p className={classNames(styles.bannerSubtitle, "text-base")}>
            See Fibi in action—book a demo and unlock your streaming business
            potential.
          </p>
        </div>
        <Button>Book a Demo</Button>
        <BannerLogo className={styles.bannerLogo}  />
      </Block>
    </Section>
  );
};

export default FeaturesSection;
