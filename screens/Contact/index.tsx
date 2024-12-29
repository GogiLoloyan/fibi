import Pattern from "../../components/Pattern";

import HeroSection from "./sections/HeroSection";

import styles from "./index.module.css";

const Contact = () => {
  return (
    <div className={styles.page}>
      <Pattern />
      <HeroSection />
    </div>
  );
};

export default Contact;