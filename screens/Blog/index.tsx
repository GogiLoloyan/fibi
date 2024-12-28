import Pattern from "../../components/Pattern";
import Section from "../../components/Section";

import HeroSection from "./sections/HeroSection";

import styles from "./index.module.css";

const Blog = () => {
  return (
    <div className={styles.page}>
      <Pattern height={500} />
      <HeroSection />
      <Section title="Next section">section  content</Section>
    </div>
  );
};

export default Blog;
