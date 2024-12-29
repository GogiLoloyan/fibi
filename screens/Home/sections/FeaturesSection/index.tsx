import Icon from "../../../../components/Icon";
import Block from "../../../../components/Block";
import Section from "../../../../components/Section";

import { features } from "../../../../data/home";

import Banner from "./Banner";
import styles from "./index.module.css";

const FeaturesSection = () => {
  return (
    <Section title="Why Choose fibi?">
      <div className={styles.featureContainer}>
        {features.map((featureRow, index) => (
          <div key={String(index)} className={styles.featureRow}>
            {featureRow.items.map((feature, index) => (
              <Block key={String(index)} className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <Icon name={feature.icon} />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureSubtitle}>{feature.subtitle}</p>
              </Block>
            ))}
          </div>
        ))}
      </div>
      <Banner />
    </Section>
  );
};

export default FeaturesSection;
