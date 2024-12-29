import Section from "../../../../components/Section";

import styles from "./index.module.css";

import { heroData } from "../../../../data/solutions";

const HeroSection = () => {
  return (
    <Section className={styles.heroSection}>
      <div className={styles.heroSectionMain}>
        <h1 className={`${styles.heroTitle} text-4xl font-bold color-n800`}>
          {heroData.title}
        </h1>
        <p
          className={`${styles.heroSubTitle} color-n500`}
          dangerouslySetInnerHTML={{ __html: heroData.subTitle }}
        />
      </div>
    </Section>
  );
};

export default HeroSection;
