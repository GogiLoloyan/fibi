import React from "react";
import classNames from "classnames";

import ImageWithErrorHandler from "../ImageWithErrorHandler";
import styles from "./index.module.css";

export interface CardProps {
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

  return (
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
          <span className={styles.separator}>•</span>
          <span>{readTime} read</span>
          <span className={styles.separator}>•</span>
          <span>{formatViews(views)} views</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
