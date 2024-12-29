"use client";
import { useState } from "react";

import Button from "../../Button";

import SunIcon from "../../../public/icons/sun.svg";
import MoonIcon from "../../../public/icons/moon.svg";

import { getStoredTheme, toggleTheme } from "../../../styles/theme/utils";

import styles from "./index.module.css";

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState(() => getStoredTheme());

  return (
    <Button
      variant="secondaryFill"
      size="medium"
      onClick={() => {
        toggleTheme();
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
      }}
      leftIcon={theme === "light" ? <MoonIcon /> : <SunIcon />}
      className={styles.themeButton}
    />
  );
};

export default ThemeToggleButton;
