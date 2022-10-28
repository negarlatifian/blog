import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");
const filePath = path.join(postsDirectory, fileName);
const getPostData = (fileName) => {
  const postContent = fs.readFileSync(filePath);
  const { data, content } = matter(postContent);
  const postSlug = fileName.replace("/.md$/", "");
  const postDetail = {
    slug: postSlug,
    ...data,
    content: content,
  };
  return postDetail;
};
export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDirectory);
  const allPosts = postFiles.map((postFile) => {
    getPostData(postFile);
  });
  const sortedPosts = allPosts.sort((postA, postB) => (postA > postB ? -1 : 1));
  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
};
