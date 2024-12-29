"use client";

import { useState } from "react";

import Tab from "../../../../components/Tab";
import Card from "../../../../components/Card";
import Section from "../../../../components/Section";
import TextField from "../../../../components/TextField";

import SearchIcon from "../../../../public/icons/search.svg";

import { blogs } from "../../../../data/blogs";
import styles from "./index.module.css";

const filters = [
  { value: "all", label: "All" },
  { value: "news", label: "News & Trends" },
  { value: "hub", label: "Inspiration Hub" },
  { value: "focus", label: "Feature Focus" },
  { value: "papers", label: "White Papers" },
];

const BlobsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  return (
    <Section className={styles.section}>
      <div className={styles.topBar}>
        <div className={styles.filters}>
          {filters.map((filter, index) => (
            <Tab
              key={filter.value}
              selected={selectedFilter === filter.value}
              onSelect={() => setSelectedFilter(filter.value)}
            >
              {filter.label}
            </Tab>
          ))}
        </div>
        <div className={styles.search}>
          <TextField placeholder="Search" prefix={<SearchIcon />} />
        </div>
      </div>
      <div className={styles.blogList}>
        {blogs.map((blog, index) => (
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
        ))}
      </div>
    </Section>
  );
};

export default BlobsSection;
