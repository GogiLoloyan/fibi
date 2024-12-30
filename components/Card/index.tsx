import React from "react";
import Link from "next/link";
import classNames from "classnames";

import ImageWithErrorHandler from "../ImageWithErrorHandler";
import styles from "./index.module.css";

export interface CardProps {
  href?: string;
  variant: "vertical" | "horizontal";
  title: string;
  description: string;
  imageUrl: string;
  readTime: string;
  createdDate: string;
  views: number;
  isLogo?: boolean;
}

const Card: React.FC<CardProps> = ({
  href,
  variant,
  title,
  description,
  imageUrl,
  readTime,
  createdDate,
  views,
  isLogo = false,
}) => {
  const cardClasses = `${styles.card} ${styles[variant]}`;
  const imageClasses = `${styles.image} ${isLogo ? styles.logo : ""}`;

  const formatViews = (count: number): string => {
    return new Intl.NumberFormat("en-US").format(count);
  };

  const date = new Date(createdDate);
  const formattedDate = `${String(date.getDate()).padStart(2, "0")}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${date.getFullYear()}`;

  const divider = (
    <svg
      width="4"
      height="4"
      viewBox="0 0 4 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.separator}
    >
      <rect
        x="0.25"
        y="0.5"
        width="3"
        height="3"
        rx="1.5"
        fill="currentColor"
      />
    </svg>
  );

  const cardContent = (
    <div className={cardClasses}>
      <div className={styles.imageWrapper}>
        <ImageWithErrorHandler
          src={imageUrl}
          alt={isLogo ? `${title} logo` : title}
          className={imageClasses}
          defaultSrc="/images/default-bg.png"
        />
      </div>
      <div className={styles.content}>
        <h3 className={classNames(styles.title, "text-lg font-bold")}>
          {title}
        </h3>
        <p className={classNames(styles.description, "text-base")}>
          {description}
        </p>
        <div className={styles.meta}>
          <span>{formattedDate}</span>
          {divider}
          <span>{readTime} read</span>
          {divider}
          <span>{formatViews(views)} views</span>
        </div>
      </div>
    </div>
  );

  if (!href) {
    return cardContent;
  }

  return (
    <Link href={href} className={styles.linkWrapper}>
      {cardContent}
    </Link>
  );
};

export default Card;
