import React from "react";
import Breadcrump from "./Breadcrump";
import BlogContainer from "./BlogContainer";
// import BlogDetail from "./BlogDetail";
// import BlogDetail2 from "./BlogDetail2";

const Blog = () => {
  return (
    <div className="bg-gray-50">
      <Breadcrump/>
      <BlogContainer/>
      {/* <BlogDetail2/> */}
      {/* <BlogDetail/> */}
    </div>
  );
};

export default Blog;
