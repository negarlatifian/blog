import React, { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
};

export default HomePage;