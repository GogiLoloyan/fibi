import classNames from "classnames";

import Block from "../../../../components/Block";
import Section from "../../../../components/Section";

import BrandIcon from "../../../../public/icons/brand.svg";

import CRMIcon from "../../../../public/icons/crm.svg";
import PieChartIcon from "../../../../public/icons/pie-chart.svg";
import SettingIcon from "../../../../public/icons/setting.svg";
import DesignIcon from "../../../../public/icons/design.svg";
import MonitorIcon from "../../../../public/icons/monitor-mobile.svg";
import RefreshIcon from "../../../../public/icons/refresh-square-2.svg";
import PlayIcon from "../../../../public/icons/play.svg";
import UserIcon from "../../../../public/icons/user-tag.svg";
import MoneyIcon from "../../../../public/icons/money.svg";

import styles from "./index.module.css";

import { solutions, type SolutionIcon } from "../../../../data/solutions";

const iconsMap: Record<
  SolutionIcon,
  React.FC<React.SVGAttributes<SVGAElement>>
> = {
  crm: CRMIcon,
  "pie-chart": PieChartIcon,
  setting: SettingIcon,
  design: DesignIcon,
  monitor: MonitorIcon,
  refresh: RefreshIcon,
  play: PlayIcon,
  money: MoneyIcon,
  user: UserIcon,
};

const SolutionsSection = () => {
  return (
    <Section>
      {solutions.map((solution) => {
        const Icon = iconsMap[solution.icon];
        return (
          <Block
            key={solution.title}
            className={styles.solution}
            style={{ "--theme-color": `var(--${solution.themeColor})` }}
          >
            <div className={styles.title}>
              <Icon className={styles.icon} />
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
