import HeroSection from "./sections/HeroSection";

import Pattern from "../../components/Pattern";
import MetricsSection from "../../components/MetricsSection";

import styles from "./index.module.css";
import SolutionsSection from "./sections/SolutionsSection";
import PaymentsSection from "./sections/PaymentsSection";

import { metrics } from "../../data/solutions";

const Solutions = () => {
  return (
    <div className={styles.page}>
      <Pattern height={500} />
      <HeroSection />
      <div className={styles.metricSection}>
        <MetricsSection metrics={metrics} />
      </div>
      <SolutionsSection />
      <PaymentsSection />
    </div>
  );
};

export default Solutions;
