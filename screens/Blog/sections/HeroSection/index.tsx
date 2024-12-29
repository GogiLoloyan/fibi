import Section from "../../../../components/Section";

import styles from "./index.module.css";

const HeroSection = () => {
  return (
    <Section className={styles.heroSection}>
      <div className={styles.heroSectionMain}>
        <h1 className={`${styles.heroTitle} text-4xl font-bold color-n800`}>
          Check out fibi blog!
        </h1>
        <p className={`${styles.heroSubTitle} color-n500`}>
          Check out our blog for cool insights,
          <br /> the latest news, fun articles, and
          <br />
          interesting podcasts just for you!
        </p>
      </div>
    </Section>
  );
};

export default HeroSection;
