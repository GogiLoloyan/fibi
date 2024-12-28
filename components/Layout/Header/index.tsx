"use client";

import Logo from "../../../assets/images/logo.svg";
import Button from "../../../components/Button";
import { toggleTheme } from "../../../styles/theme/utils";

import MoonIcon from "../../../public/icons/moon.svg";

import Menu from "./Menu";
import styles from "./index.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <Logo className={styles.logo} width={64} height={40} />
      <Menu />
      <div className={styles.actions}>
        <Button
          variant="secondaryFill"
          size="medium"
          onClick={() => toggleTheme()}
          leftIcon={<MoonIcon />}
          className={styles.themeButton}
        />
        <Button size="medium">Book a Demo</Button>
      </div>
    </header>
  );
};

export default Header;
