import React, { ButtonHTMLAttributes } from "react";
import styles from "./index.module.css";

export type ButtonVariant =
  | "primaryFill"
  | "primaryOutline"
  | "primaryText"
  | "secondaryFill"
  | "inverseFill";
export type ButtonSize = "large" | "medium" | "small";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primaryFill",
  size = "large",
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  children,
  disabled,
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button {...props} disabled={disabled} className={buttonClasses}>
      {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
      {children && <span className={styles.text}>{children}</span>}
      {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
    </button>
  );
};

export default Button;
