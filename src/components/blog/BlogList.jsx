import BlogCard from "./BlogCard";

const BlogList = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {blogs.map((blog, index) => (
        <BlogCard key={blog.ID} blog={blog} index={index} />
      ))}
    </div>
  );
};

export default BlogList;
