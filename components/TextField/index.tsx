"use client";

import React from "react";
import styles from "./index.module.css";

export type TextFieldSize = "medium" | "large";

export interface TextFieldProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "size" | "prefix"
  > {
  label?: string;
  value?: string;
  size?: TextFieldSize;
  disabled?: boolean;
  error?: string;
  placeholder?: string;
  prefix?: React.ReactNode;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChange,
  size = "medium",
  disabled = false,
  error,
  placeholder,
  prefix,
}) => {
  const inputClasses = [
    styles.input,
    styles[size],
    disabled && styles.disabled,
    prefix && styles.withPrefix,
    error && styles.error,
  ]
    .filter(Boolean)
    .join(" ");

  const labelClasses = [styles.label, disabled && styles.labelDisabled]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.fieldWrapper}>
      {label && <label className={labelClasses}>{label}</label>}
      <div className={styles.inputWrapper}>
        {prefix && <div className={styles.prefix}>{prefix}</div>}
        <input
          type="text"
          className={inputClasses}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
        />
      </div>
      {error && (
        <div className={styles.errorMessage}>
          <svg
            className={styles.errorIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="10" stroke-width="2.5"></circle>
            <line x1="12" y1="6" x2="12" y2="13" stroke-width="2.5"></line>
            <circle cx="12" cy="16" r="1" stroke-width="2"></circle>
          </svg>
          {error}
        </div>
      )}
    </div>
  );
};

export default TextField;
