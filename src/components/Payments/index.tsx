"use client";

import { useEffect, useState } from "react";
import styles from "./index.module.css";

interface Logo {
  name: string;
  imgUrl: string;
  darkImgUrl: string;
}

const logos: Logo[] = [
  {
    name: "Paypal",
    imgUrl: "/images/payments/paypal.png",
    darkImgUrl: "/images/payments/paypal-dark.png",
  },
  {
    name: "Clover",
    imgUrl: "/images/payments/clover.png",
    darkImgUrl: "/images/payments/clover-dark.png",
  },
  {
    name: "Paystack",
    imgUrl: "/images/payments/paystack.png",
    darkImgUrl: "/images/payments/paystack-dark.png",
  },
  {
    name: "Square",
    imgUrl: "/images/payments/square.png",
    darkImgUrl: "/images/payments/square-dark.png",
  },
  {
    name: "Autorize.Net",
    imgUrl: "/images/payments/autorizenet.png",
    darkImgUrl: "/images/payments/autorizenet-dark.png",
  },
  {
    name: "Stripe",
    imgUrl: "/images/payments/stripe.png",
    darkImgUrl: "/images/payments/stripe-dark.png",
  },
];

const tripleLogos = [...logos, ...logos, ...logos];

const Payments = () => {
  const [theme, setTheme] = useState<"dark" | "light">(
    () =>
      (document.documentElement.getAttribute("data-theme") as
        | "dark"
        | "light") ?? "light"
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(
        (document.documentElement.getAttribute("data-theme") as
          | "dark"
          | "light") ?? "light"
      );
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.leftEffect} />
      <div className={styles.innerContainer}>
        <div className={styles.scrollContainer}>
          <div className={styles.logoTrack}>
            {tripleLogos.map((logo, index) => (
              <div key={`${logo.name}-${index}`} className={styles.logoWrapper}>
                <img
                  src={theme === "light" ? logo.imgUrl : logo.darkImgUrl}
                  alt={logo.name}
                  className={styles.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.rightEffect} />
    </div>
  );
};

export default Payments;
