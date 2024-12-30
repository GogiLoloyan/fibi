import SingleBlog, { type SingleBlogType } from "../../../screens/SingleBlog";

const blog: SingleBlogType = {
  tags: ["OTT", "Streaming", "Technology", "AI", "Quantum", "Blockchain"],
  title: "Comprehensive OTT Experience",
  description:
    "Uncover the features of our cutting-edge OTT streaming service, tailored for effortless access on TV, web browsers and mobile devices. Relish your favorite shows and movies at your convenience!",
  publishedAt: "2021-09-01",
  readTime: "5 min read",
  views: 18544,
  image: "/images/single-blog-image.jpg",
  creator: {
    avatar: "/images/creator-avatar.png",
    fullName: "Maria De Müller",
    type: "Content Creator",
  },
  sections: [
    {
      title: "Your Gateway to Endless Viewing",
      description:
        "Enter a world of entertainment with our streaming service! Accessible on any device, whether at home or on the move, we have something for everyone. Discover gripping dramas, hilarious comedies, and the latest films. Join our community and transform your entertainment experience!",
    },
    {
      title: "All-in-One Entertainment Hub",
      description:
        "Unleash a world of entertainment with our state-of-the-art streaming platform! Whether you're lounging at home or traveling, access a treasure trove of captivating dramas, side-splitting comedies, and the hottest films right at your fingertips. It's not merely about watching; it's about making memories that last. Join our growing family and transform the way you enjoy content!",
    },
    {
      title: "Ultimate Streaming Adventure",
      description:
        "Experience the future of entertainment with our streaming service! Watch your favorite shows and movies on any device, whether at home or on the go. With a wide range of series, comedies, and blockbuster films, there's always something new to enjoy. Join our community and enhance your entertainment journey!",
    },
    {
      title: "The Complete Streaming Solution",
      description:
        "Welcome to the next generation of streaming! Our platform is designed for entertainment lovers, accessible on any device you prefer. From your smart TV to your mobile phone, dive into a vast library filled with thrilling dramas, comedies that tickle your funny bone, and the newest films. It's not just about watching; it's about creating cherished memories. Join us and revolutionize your viewing habits!",
    },
  ],
};

export default function Page() {
  return <SingleBlog data={blog} />;
}
