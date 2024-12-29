import React from "react";
import styles from "./index.module.css";

export interface ButtonProps {
  selected?: boolean;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  onSelect?: () => void;
}

export const Tab: React.FC<ButtonProps> = ({
  className,
  children,
  disabled,
  selected,
  onSelect,
  ...props
}) => {
  const tagClasses = [
    styles.tab,
    selected && styles.selected,
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button {...props} className={tagClasses} onClick={onSelect}>
      <span className={styles.text}>{children}</span>
    </button>
  );
};

export default Tab;
