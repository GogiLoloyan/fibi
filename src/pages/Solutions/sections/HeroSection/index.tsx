import Section from "@/components/Section";

import styles from "./index.module.css";

const HeroSection = () => {
  return (
    <Section className={styles.heroSection}>
      <div className={styles.heroSectionMain}>
        <h1 className={`${styles.heroTitle} text-4xl font-bold color-n800`}>
          All-in-One Business Solutions
        </h1>
        <p className={`${styles.heroSubTitle} color-n500`}>
          A Fully Integrated SaaS Platform That Simplifies
          <br /> Content Streaming—From Creation to
          <br /> Monetization—With Scalable, Cost-Effective
          <br /> Solutions For Exceptional User Experiences.
        </p>
      </div>
    </Section>
  );
};

export default HeroSection;
