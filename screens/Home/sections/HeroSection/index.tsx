import Section from "../../../../components/Section";
import Partners from "../../../../components/Partners";

import BrandMiniIcon from "../../../../public/icons/brand-mini.svg";

import BookDemoButton from "./BookDemoButton";

import styles from "./index.module.css";
import TalkToSales from "./TalkToSales";

const HeroSection = () => {
  return (
    <Section className={styles.heroSection}>
      <div className={styles.heroSectionMain}>
        <BrandMiniIcon className={styles.brandIcon} />
        <h1
          className={`${styles.heroTitle} leading-snug text-5xl mobile--text-30 color-n700 font-medium`}
        >
          <b className="font-bold">Integrated</b> Systems,
          <br /> Simplified{" "}
          <b className={`${styles.gradientTitle} font-bold`}>Solutions.</b>
        </h1>
        <p className={`${styles.heroSubTitle} text-22 mobile--text-base color-n500`}>
          No coding, no IT teams, no profit sharing
          <br />
          {"-just a Fibis All-in-One Platform."}
        </p>
        <div className={styles.heroActions}>
          <BookDemoButton />
          <TalkToSales />
        </div>
      </div>
      <Partners />
    </Section>
  );
};

export default HeroSection;
