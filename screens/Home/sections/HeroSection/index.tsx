import Button from "../../../../components/Button";
import Section from "../../../../components/Section";
import Partners from "../../../../components/Partners";

import BookDemoButton from "./BookDemoButton";

import styles from "./index.module.css";

const HeroSection = () => {
  return (
    <Section className={styles.heroSection}>
      <div className={styles.heroSectionMain}>
        <h1
          className={`${styles.heroTitle} text-5xl leading-snug color-n700 font-medium`}
        >
          <b className="font-bold">Integrated</b> Systems,
          <br /> Simplified{" "}
          <b className={`${styles.gradientTitle} font-bold`}>Solutions.</b>
        </h1>
        <p className={`${styles.heroSubTitle} color-n500`}>
          No coding, no IT teams, no profit sharing
          <br />
          {"-just a Fibis All-in-One Platform."}
        </p>
        <div className={styles.heroActions}>
          <BookDemoButton />
          <Button variant="secondaryFill">Talk to Sales</Button>
        </div>
      </div>
      <Partners />
    </Section>
  );
};

export default HeroSection;
