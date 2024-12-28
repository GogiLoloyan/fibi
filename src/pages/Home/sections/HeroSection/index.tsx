import Button from "@/components/Button";
import Section from "@/components/Section";
import Pattern from "@/components/Pattern";

import Partners from "./Partners";

import styles from "./index.module.css";

const HeroSection = () => {
  return (
    <Section className={styles.heroSection}>
      {/* <Pattern /> */}
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
          —just a Fibi's All-in-One Platform.
        </p>
        <div className={styles.heroActions}>
          <Button>Book a Demo</Button>
          <Button variant="secondaryFill">Talk to Sales</Button>
        </div>
      </div>
      <Partners />
    </Section>
  );
};

export default HeroSection;
