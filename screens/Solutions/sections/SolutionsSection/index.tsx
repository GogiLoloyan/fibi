import classNames from "classnames";

import Block from "../../../../components/Block";
import Section from "../../../../components/Section";

import BrandIcon from "../../../../public/icons/brand.svg";

import CRMIcon from "../../../../public/icons/crm.svg";
import PieChartIcon from "../../../../public/icons/pie-chart.svg";
import SettingIcon from "../../../../public/icons/setting.svg";
import DesignIcon from "../../../../public/icons/design.svg";

const iconsMap = {
  crm: CRMIcon,
  "pie-chart": PieChartIcon,
  setting: SettingIcon,
  design: DesignIcon,
};

import styles from "./index.module.css";

type Solution = {
  icon: keyof typeof iconsMap;
  title: string;
  description: string;
  themeColor: string;
  features: {
    title: string;
    description: string;
  }[];
};

const solutions: Solution[] = [
  {
    icon: "crm",
    title: "User & Content Management",
    description:
      "Simple content management and seamless video experience delivery.",
    themeColor: "color-m800",
    features: [
      {
        title: "Content Library",
        description:
          "Organize videos, images, and documents in one unified space.",
      },
      {
        title: "Secure User Authentication",
        description:
          "Utilize OAuth, SSO, and other secure login mechanisms to protect user access.",
      },
      {
        title: "Multi-Format Support",
        description:
          "Upload and deliver videos in multiple formats, resolutions, and quality.",
      },
      {
        title: "Intuitive Dashboard",
        description:
          "Easy to monitor, edit, and manage your content across platforms.",
      },
    ],
  },
  {
    icon: "pie-chart",
    title: "Analytics and Reporting",
    description:
      "Transform data into insights with powerful analytics that drive growth.",
    themeColor: "color-g800",
    features: [
      {
        title: "Feature 1",
        description: "Description 1",
      },
      {
        title: "Feature 2",
        description: "Description 2",
      },
      {
        title: "Feature 3",
        description: "Description 3",
      },
    ],
  },
  {
    icon: "setting",
    title: "Integration-Ready",
    description:
      "Fibi's integration solution increase your productivity and optimize processes.",
    themeColor: "color-p800",
    features: [
      {
        title: "Feature 1",
        description: "Description 1",
      },
      {
        title: "Feature 2",
        description: "Description 2",
      },
      {
        title: "Feature 3",
        description: "Description 3",
      },
    ],
  },
  {
    icon: "design",
    title: "Code-Free Website Builder",
    description: "Create, modify, and maintain your functional website.",
    themeColor: "color-b800",
    features: [
      {
        title: "Feature 1",
        description: "Description 1",
      },
      {
        title: "Feature 2",
        description: "Description 2",
      },
      {
        title: "Feature 3",
        description: "Description 3",
      },
    ],
  },
];

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
            <p className={classNames(styles.description, "text-lg color-n500")}>
              {solution.description}
            </p>
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
