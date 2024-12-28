import HeroSection from "./sections/HeroSection";

import Pattern from "@/components/Pattern";
import MetricsSection from "@/components/MetricsSection";

import styles from "./index.module.css";
import SolutionsSection from "./sections/SolutionsSection";
import PaymentsSection from "./sections/PaymentsSection";

const metrics = [
  { value: "+25%", description: "Retention Rate" },
  { value: "2x", description: "Faster Launches" },
  { value: "44%", description: "Cost Savings" },
  { value: "~20%", description: "User Growth" },
];

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
      {/* <MetricsSection />
      <PaymentsSection />
      <BlogSection /> */}
    </div>
  );
};

export default Solutions;
