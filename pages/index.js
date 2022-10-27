import React, { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    excerpt:
      "NextJS is a Rect framework for production. It makes building fullstack React apps and sites a breeze and ships with Server Side Rendering(SSR)",
    image: "getting-started-nextjs.png",
    date: "2022-10-27",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with NextJS",
    excerpt:
      "NextJS is a Rect framework for production. It makes building fullstack React apps and sites a breeze and ships with Server Side Rendering(SSR)",
    image: "getting-started-nextjs.png",
    date: "2022-10-27",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJS",
    excerpt:
      "NextJS is a Rect framework for production. It makes building fullstack React apps and sites a breeze and ships with Server Side Rendering(SSR)",
    image: "getting-started-nextjs.png",
    date: "2022-10-27",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with NextJS",
    excerpt:
      "NextJS is a Rect framework for production. It makes building fullstack React apps and sites a breeze and ships with Server Side Rendering(SSR)",
    image: "getting-started-nextjs.png",
    date: "2022-10-27",
  },
];
const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
};

export default HomePage;
