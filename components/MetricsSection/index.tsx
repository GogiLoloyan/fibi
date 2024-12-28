import classNames from "classnames";

import Block from "../../components/Block";
import Section from "../../components/Section";

import styles from "./index.module.css";

type Metric = {
  value: number | string;
  description: string;
};

interface MetricsSectionProps {
  metrics: Metric[];
}

const MetricsSection: React.FC<MetricsSectionProps> = ({ metrics }) => {
  return (
    <Section className="metric-section">
      <Block className={styles.block}>
        {metrics.map((metric, index) => (
          <div key={String(index)} className={styles.metricItem}>
            <p
              className={classNames(styles.metricNumber, "text-3xl font-bold")}
            >
              {metric.value}
            </p>
            <p className={classNames(styles.metricDescription, "text-lg")}>
              {metric.description}
            </p>
          </div>
        ))}
      </Block>
    </Section>
  );
};

export default MetricsSection;
