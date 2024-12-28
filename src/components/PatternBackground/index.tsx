// PatternBackground.tsx
import React from "react";
import styles from "./index.module.css";

const PatternBackground: React.FC = () => {
  return (
    <div className={styles.container}>
      <svg width="100%" height="100%" className={styles.patternSvg}>
        <defs>
          <pattern
            id="logo-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-15)"
          >
            <path
              className={styles.patternElement}
              d="M40,20 L60,20 C70,20 70,40 60,40 L55,40 C45,40 45,60 55,60 L60,60"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#logo-pattern)" />
      </svg>
    </div>
  );
};

export default PatternBackground;
