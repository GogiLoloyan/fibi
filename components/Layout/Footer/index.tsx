import Link from "next/link";
import classNames from "classnames";

import Logo from "../../../assets/images/logo.svg";

import TwitterIcon from "../../../public/icons/twitter.svg";
import InstagramIcon from "../../../public/icons/instagram.svg";
import LinkedinIcon from "../../../public/icons/linkedin.svg";

import Button from "../../Button";
import RequestCallBackBlock from "./RequestCallBackBlock";

import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.primaryFooter}>
        <div className={styles.navigation}>
          <ul className={styles.navigationList}>
            <li
              className={classNames(
                styles.navigationListItem,
                "text-lg font-bold color-n800"
              )}
            >
              Company
            </li>
            <li
              className={classNames(
                styles.navigationListItem,
                "text-base color-n500"
              )}
            >
              <Link href="/solutions">Solutions</Link>
            </li>
            <li
              className={classNames(
                styles.navigationListItem,
                "text-base color-n500"
              )}
            >
              <Link href="/blog">Blog</Link>
            </li>
            <li
              className={classNames(
                styles.navigationListItem,
                "text-base color-n500"
              )}
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <ul className={styles.navigationList}>
            <li
              className={classNames(
                styles.navigationListItem,
                "text-lg font-bold color-n800"
              )}
            >
              Other
            </li>
            <li
              className={classNames(
                styles.navigationListItem,
                "text-base color-n500"
              )}
            >
              <Link href="/terms">Terms</Link>
            </li>
            <li
              className={classNames(
                styles.navigationListItem,
                "text-base color-n500"
              )}
            >
              <Link href="/privacy">Privacy</Link>
            </li>
            <li
              className={classNames(
                styles.navigationListItem,
                "text-base color-n500"
              )}
            >
              <Link href="/cookies">Cookies</Link>
            </li>
          </ul>
        </div>
        <RequestCallBackBlock />
      </div>
      <div className={styles.divider}></div>
      <div className={styles.secondaryFooter}>
        <Logo className={styles.logo} />
        <p className={classNames(styles.copyRight, "text-base")}>
          © 2024 fibi. All rights reserved.
        </p>
        <div className={styles.socialIcons}>
          <Button
            variant="secondaryFill"
            size="medium"
            leftIcon={<TwitterIcon />}
            className={styles.socialButton}
          />
          <Button
            variant="secondaryFill"
            size="medium"
            leftIcon={<InstagramIcon />}
            className={styles.socialButton}
          />
          <Button
            variant="secondaryFill"
            size="medium"
            leftIcon={<LinkedinIcon />}
            className={styles.socialButton}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
