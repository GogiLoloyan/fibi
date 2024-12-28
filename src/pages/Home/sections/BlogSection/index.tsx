"use client";

import Card from "@/components/Card";
import Button from "@/components/Button";
import Section from "@/components/Section";
import useIsMobile from "@/hooks/useIsMobile";

import ArrowIcon from "../../../../../public/icons/arrow.svg";

import styles from "./index.module.css";

const latestBlogs = [
  {
    title: "OTT Experience",
    description:
      "Uncover the features of our cutting-edge OTT streaming service, tailored for effortless access on TV, web browsers and mobile devices. Relish your favorite shows and movies at your convenience!",
    imageUrl: "/images/blog-image-example.png",
    readTime: "5 min",
    views: 18544,
    createdDate: "2021-09-01",
    isLogo: false,
  },
  {
    title: "Streaming",
    description:
      "Uncover the features of our cutting-edge OTT streaming service, tailored for effortless access on TV, web browsers and mobile devices.",
    imageUrl: "/path/to/fibi-logo.jpg",
    readTime: "5 min",
    views: 18544,
    createdDate: "2021-09-01",
    isLogo: true,
  },
  {
    title: "Comprehensive OTT",
    description:
      "Uncover the features of our cutting-edge OTT streaming service, tailored for effortless access on TV, web browsers and mobile devices.",
    imageUrl: "/path/to/fibi-logo.jpg",
    readTime: "5 min",
    views: 18544,
    createdDate: "2021-09-01",
    isLogo: true,
  },
  {
    title: "Fibi OTT Solutions",
    description:
      "Uncover the features of our cutting-edge OTT streaming service, tailored for effortless access on TV, web browsers and mobile devices.",
    imageUrl: "/images/blog-image-example.png",
    readTime: "5 min",
    views: 18544,
    createdDate: "2021-09-01",
    isLogo: false,
  },
];

const BlogSection = () => {
  const isMobile = useIsMobile();

  return (
    <Section
      title={"Blog"}
      actionElement={
        <Button
          className={styles.actionButton}
          variant="primaryText"
          size="small"
          rightIcon={<ArrowIcon />}
        >
          View All
        </Button>
      }
      className={styles.blogSection}
    >
      <div className={styles.blogList}>
        {latestBlogs.map((blog, index) => (
          <Card
            key={index}
            variant={isMobile ? "vertical" : "horizontal"}
            title={blog.title}
            description={blog.description}
            imageUrl={blog.imageUrl}
            readTime={blog.readTime}
            views={blog.views}
            isLogo={blog.isLogo}
            createdDate={blog.createdDate}
          />
        ))}
      </div>
    </Section>
  );
};

export default BlogSection;
