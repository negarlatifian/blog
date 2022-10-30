import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostData = (fileIdentifier) => {
  const postSlug = fileIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const postContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(postContent);
  const postDetail = {
    slug: postSlug,
    ...data,
    content: content,
  };
  return postDetail;
};

export const getPostFile = () => {
  return fs.readdirSync(postsDirectory);
};

export const getAllPosts = () => {
  const postFiles = getPostFile();
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });
  const sortedPosts = allPosts.sort((postA, postB) => (postA > postB ? -1 : 1));
  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
};
