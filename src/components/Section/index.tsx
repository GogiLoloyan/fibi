// components/Section.tsx

import React, { ReactNode } from "react";
import styles from "./index.module.css";

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  actionElement?: ReactNode;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className,
  actionElement,
}) => {
  return (
    <section id={id} className={`${styles.container} ${className}`}>
      {(title || actionElement) && (
        <div className={styles.header}>
          {title && (
            <h2
              className={`${styles.sectionTitle} text-4xl font-bold leading-normal`}
            >
              {title}
            </h2>
          )}
          {actionElement && (
            <div className={styles.actionElement}>{actionElement}</div>
          )}
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;
