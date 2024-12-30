"use client";

import { useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/navigation";

import Button from "../../../../components/Button";
import Section from "../../../../components/Section";
import ImageWithErrorHandler from "../../../../components/ImageWithErrorHandler";

import CopyIcon from "../../../../public/icons/copy.svg";
import ArrowIcon from "../../../../public/icons/arrow.svg";
import VectorIcon from "../../../../public/icons/vector.svg";
import CheckIcon from "../../../../public/icons/checkmark.svg";

import TwitterIcon from "../../../../public/icons/twitter.svg";
import LinkedinIcon from "../../../../public/icons/linkedin.svg";
import InstagramIcon from "../../../../public/icons/instagram.svg";

import type { SingleBlogType } from "../..";
import styles from "./index.module.css";
import Tab from "../../../../components/Tab";
import Block from "../../../../components/Block";
import Banner from "./Banner";

const ContentSection: React.FC<{ data: SingleBlogType }> = ({ data }) => {
  const router = useRouter();
  const [isCopied, setIsCopied] = useState(false);

  const formatViews = (count: number): string => {
    return new Intl.NumberFormat("en-US").format(count);
  };

  const date = new Date(data.publishedAt);
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

  return (
    <Section className={styles.section}>
      <div className={styles.actions}>
        <Button
          variant="primaryOutline"
          size="medium"
          leftIcon={<ArrowIcon />}
          onClick={() => router.push("/blog")}
        >
          Back
        </Button>
        <div className={styles.socials}>
          <Button
            variant="secondaryFill"
            size="medium"
            leftIcon={isCopied ? <CheckIcon /> : <CopyIcon />}
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setIsCopied(true);
              setTimeout(() => {
                setIsCopied(false);
              }, 2000);
            }}
            className={styles.copyButton}
          >
            Copy Link
          </Button>
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
      <div className={styles.content}>
        <div className={styles.titleContent}>
          <h1
            className={classNames(
              styles.title,
              "text-3xl mobile-text-24 font-bold color-n800"
            )}
          >
            {data.title}
          </h1>
          <p
            className={classNames(
              styles.description,
              "text-lg mobile-text-base color-n500"
            )}
          >
            {data.description}
          </p>

          <div className={styles.meta}>
            <span>{formattedDate}</span>
            {divider}
            <span>{data.readTime} read</span>
            {divider}
            <span>{formatViews(data.views)} views</span>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <ImageWithErrorHandler
            src={data.image}
            alt={data.title}
            defaultSrc="/images/default-bg.png"
          />
        </div>
        {data.sections.map((section, index) => (
          <div key={String(index)} className={styles.blogContentSection}>
            <h3 className={"text-24 mobile--text-lg font-bold color-n800"}>
              {section.title}
            </h3>
            <p className={"text-lg mobile--text-base color-n500"}>
              {section.description}
            </p>
          </div>
        ))}
        <div className={styles.footer}>
          <div className={styles.tags}>
            {data.tags.map((tag, index) => (
              <Button size="small" variant="secondaryFill" key={index}>
                {tag}
              </Button>
            ))}
          </div>
          <Block compact className={styles.creatorBlock}>
            <div className={styles.creatorImage}>
              <img src={data.creator.avatar} alt={data.creator.fullName} />
            </div>
            <div className={styles.info}>
              <p className="text-base font-bold color-n800">
                {data.creator.fullName}
              </p>
              <p className="text-sm color-n500">{data.creator.type}</p>
            </div>
            <Button
              variant="primaryOutline"
              size="medium"
              leftIcon={<VectorIcon />}
              onClick={() => router.push("/creator/id")}
            />
          </Block>
          <Banner />
        </div>

        {/* {blogs.map((blog, index) => (
          <Card
            key={index}
            variant={"vertical"}
            title={blog.title}
            description={blog.description}
            imageUrl={blog.imageUrl}
            readTime={blog.readTime}
            views={blog.views}
            isLogo={blog.isLogo}
            createdDate={blog.createdDate}
          />
        ))} */}
      </div>
    </Section>
  );
};

export default ContentSection;
