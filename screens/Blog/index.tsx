import Pattern from "../../components/Pattern";

import HeroSection from "./sections/HeroSection";

import styles from "./index.module.css";
import BlobsSection from "./sections/BlobsSection";

const Blog = () => {
  return (
    <div className={styles.page}>
      <Pattern mobileMini height={500} />
      <HeroSection />
      <BlobsSection />
    </div>
  );
};

export default Blog;
