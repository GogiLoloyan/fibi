"use client";

import classNames from "classnames";
import { useRouter } from "next/navigation";

import Block from "../../../../components/Block";
import Button from "../../../../components/Button";

import BannerLogo from "../../../../public/icons/banner-logo.svg";
import { getStoredTheme } from "../../../../styles/theme/utils";

import styles from "./index.module.css";

const Banner = () => {
  const router = useRouter();
  const theme = getStoredTheme();

  return (
    <Block
      className={classNames(
        styles.banner,
        theme === "dark" && styles.bannerDark
      )}
    >
      <div className={styles.bannerText}>
        <p className={classNames(styles.bannerTitle, "text-2xl font-bold")}>
          Want to See Fibi in Action?
        </p>
        <p className={classNames(styles.bannerSubtitle, "text-base")}>
          See Fibi in action-book a demo and unlock your streaming business
          potential.
        </p>
      </div>
      <Button onClick={() => router.push("/book-a-demo")}>Book a Demo</Button>
      <BannerLogo className={styles.bannerLogo} />
    </Block>
  );
};

export default Banner;
