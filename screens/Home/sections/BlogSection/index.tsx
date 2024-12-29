"use client";

import Card from "../../../../components/Card";
import Button from "../../../../components/Button";
import Section from "../../../../components/Section";
import useIsMobile from "../../../../hooks/useIsMobile";

import ArrowIcon from "../../../../public/icons/arrow.svg";
import { latestBlogs } from "../../../../data/home";

import styles from "./index.module.css";

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
