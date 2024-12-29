"use client";
import { useState } from "react";

import Logo from "../../../assets/images/logo.svg";
import Button from "../../../components/Button";
import { toggleTheme } from "../../../styles/theme/utils";

import MoonIcon from "../../../public/icons/moon.svg";
import HamburgerIcon from "../../../public/icons/hamburger.svg";
import CloseMenuIcon from "../../../public/icons/close-menu.svg";

import Menu from "./Menu";
import styles from "./index.module.css";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
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
          <div
            className={styles.menuButton}
            tabIndex={0}
            role="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <CloseMenuIcon /> : <HamburgerIcon />}
          </div>
        </div>
      </header>
      <MobileMenu onClose={() => setIsMenuOpen(false)} open={isMenuOpen} />
    </>
  );
};

export default Header;
