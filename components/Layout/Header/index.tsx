"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Logo from "../../../assets/images/logo.svg";
import LogoMobile from "../../../assets/images/logo-mobile.svg";

import Button from "../../../components/Button";

import HamburgerIcon from "../../../public/icons/hamburger.svg";
import CloseMenuIcon from "../../../public/icons/close-menu.svg";

import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import ThemeToggleButton from "./ThemeToggleButton";

import styles from "./index.module.css";

const Header: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.container}>
        <Link href="/">
          <Logo className={styles.logo} width={64} height={40} />
          <LogoMobile className={styles.logoMobile} width={27} height={40} />
        </Link>
        <Menu />
        <div className={styles.actions}>
          <ThemeToggleButton />
          <Button size="medium" onClick={() => router.push("/book-a-demo")}>
            Book a Demo
          </Button>
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
