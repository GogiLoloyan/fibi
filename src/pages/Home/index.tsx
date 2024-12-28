import Section from "@/components/Section";

import Pattern from "@/components/Pattern";
import MetricsSection from "@/components/MetricsSection";

import HeroSection from "./sections/HeroSection";
import BlogSection from "./sections/BlogSection";
import FeaturesSection from "./sections/FeaturesSection";
import PaymentsSection from "./sections/PaymentsSection";

import styles from "./index.module.css";

const metrics = [
  { value: "2500+", description: "TV Channels" },
  { value: "400+", description: "Clients" },
  { value: "135,000+", description: "Subscribers" },
  { value: "2003+", description: "Since Providing" },
];

const Home = () => {
  return (
    <div className={styles.page}>
      <Pattern />
      <HeroSection />
      <MetricsSection metrics={metrics} />
      <FeaturesSection />
      <PaymentsSection />
      <BlogSection />
    </div>
  );
};

export default Home;
