import classNames from "classnames";

import Icon from "../../../../components/Icon";
import Block from "../../../../components/Block";
import Button from "../../../../components/Button";
import Section from "../../../../components/Section";
import { getStoredTheme } from "../../../../styles/theme/utils";

import BannerLogo from "../../../../public/icons/banner-logo.svg";
import { features } from "../../../../data/home";

import styles from "./index.module.css";

const FeaturesSection = () => {
  const theme = getStoredTheme();

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
      <Block
        className={classNames(
          styles.banner,
          theme === "dark" && styles.bannerDark
        )}
      >
        <div className={styles.bannerText}>
          <p className={classNames(styles.bannerTitle, "text-2xl font-bold")}>
            Want to See Fibi in Action?
          </p>
          <p className={classNames(styles.bannerSubtitle, "text-base")}>
            See Fibi in action—book a demo and unlock your streaming business
            potential.
          </p>
        </div>
        <Button>Book a Demo</Button>
        <BannerLogo className={styles.bannerLogo} />
      </Block>
    </Section>
  );
};

export default FeaturesSection;
