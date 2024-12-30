import classNames from "classnames";

import Icon from "../../../../components/Icon";
import Block from "../../../../components/Block";
import Section from "../../../../components/Section";

import BrandIcon from "../../../../public/icons/brand.svg";

import { solutions } from "../../../../data/solutions";

import styles from "./index.module.css";

const SolutionsSection = () => {
  return (
    <Section>
      {solutions.map((solution) => {
        return (
          <Block
            key={solution.title}
            className={styles.solution}
            style={{
              "--theme-color": `var(--${solution.themeColor})`,
              "--theme-gradient": solution.gradient,
            }}
          >
            <div className={styles.title}>
              <Icon name={solution.icon} className={styles.icon} />
              <h3 className="text-2xl font-bold color-n800">
                {solution.title}
              </h3>
            </div>
            {solution.description && (
              <p
                className={classNames(styles.description, "text-lg color-n500")}
              >
                {solution.description}
              </p>
            )}
            <div className={styles.features}>
              {solution.features.map((feature) => {
                return (
                  <div key={feature.title} className={styles.feature}>
                    <BrandIcon className={styles.featureIcon} />
                    <h3
                      className={classNames(
                        styles.featureTitle,
                        "text-lg font-bold color-n800"
                      )}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-base color-n500">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Block>
        );
      })}
    </Section>
  );
};

export default SolutionsSection;
