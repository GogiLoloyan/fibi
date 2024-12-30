"use client";

import classNames from "classnames";
import { useRouter } from "next/navigation";

import Block from "../../../../components/Block";
import Button from "../../../../components/Button";

import BannerLogo from "../../../../public/icons/banner-logo.svg";
import { getStoredTheme } from "../../../../styles/theme/utils";

import styles from "./banner.module.css";

const Banner = () => {
  const router = useRouter();
  const theme = getStoredTheme();

  return (
    <Block
      compact
      className={classNames(
        styles.banner,
        theme === "dark" && styles.bannerDark
      )}
    >
      <div className={styles.bannerText}>
        <p className={classNames(styles.bannerTitle, "font-bold")}>
          Want to See Fibi in Action?
        </p>
        <p className={classNames(styles.bannerSubtitle, "text-base")}>
          See Fibi in action-Book Your Free Demo Today!
        </p>
      </div>
      <Button onClick={() => router.push("/book-a-demo")}>Contact Us</Button>
      <BannerLogo className={styles.bannerLogo} />
    </Block>
  );
};

export default Banner;
