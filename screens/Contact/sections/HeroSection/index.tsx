import Block from "../../../../components/Block";
import Section from "../../../../components/Section";
import Partners from "../../../../components/Partners";
import CopyButton from "../../../../components/CopyButton";

import PhoneIcon from "../../../../public/icons/phone.svg";
import EmailIcon from "../../../../public/icons/email.svg";

import GetInTouchForm from "./GetInTouchForm";
import styles from "./index.module.css";

const HeroSection = () => {
  return (
    <Section className={styles.heroSection}>
      <div className={styles.innerSection}>
        <div className={styles.heroSectionMain}>
          <h1 className={`${styles.heroTitle} text-4xl font-bold color-n800`}>
            Let’s Build Together
          </h1>
          <p className={`${styles.heroSubTitle} color-n500`}>
            Have questions or ready to start? Reach out to our team for expert
            guidance and unique solutions.
          </p>
          <Block className={styles.contactInfoBlock}>
            <div className={styles.contactInfo}>
              <PhoneIcon />
              <div className={styles.contactInfoTexts}>
                <p className="text-base color-n500">Phone</p>
                <div className={styles.contactInfoTextMain}>
                  <p className="text-lg color-n800">+1 888-800-0607</p>
                  <CopyButton textToCopy="+1 888-800-0607" />
                </div>
              </div>
            </div>
            <div className={styles.contactInfo}>
              <EmailIcon />
              <div className={styles.contactInfoTexts}>
                <p className="text-base color-n500">Email</p>
                <div className={styles.contactInfoTextMain}>
                  <p className="text-lg color-n800">info@fibi.com</p>
                  <CopyButton textToCopy="info@fibi.com" />
                </div>
              </div>
            </div>
          </Block>
        </div>
        <GetInTouchForm />
      </div>
      <Partners />
    </Section>
  );
};

export default HeroSection;
