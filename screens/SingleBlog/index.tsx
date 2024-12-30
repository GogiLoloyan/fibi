import ContentSection from "./sections/ContentSection";

import styles from "./index.module.css";

export interface SingleBlogType {
  tags: string[];
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  views: number;
  image: string;
  creator: {
    avatar: string;
    fullName: string;
    type: string;
  };
  sections: {
    title: string;
    description: string;
  }[];
}

const SingleBlog: React.FC<{ data: SingleBlogType }> = ({ data }) => {
  return (
    <div className={styles.page}>
      <ContentSection data={data} />
    </div>
  );
};

export default SingleBlog;
