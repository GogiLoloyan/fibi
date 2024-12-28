import Section from "../../../../components/Section";

import styles from "./index.module.css";

const HeroSection = () => {
  return (
    <Section className={styles.heroSection}>
      <div className={styles.heroSectionMain}>
        <h1 className={`${styles.heroTitle} text-4xl font-bold color-n800`}>
          Insights, Trends, and More
        </h1>
        <p className={`${styles.heroSubTitle} color-n500`}>
          Your one-stop destination for industry news,
          <br /> expert tips, and fun, engaging content about
          <br /> streaming and OTT.
        </p>
      </div>
    </Section>
  );
};

export default HeroSection;
