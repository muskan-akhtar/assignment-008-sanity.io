import BlogCard from './BlogCard';

const BlogList = ({ blogs }: { blogs: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogs.map((blog) => (
        <BlogCard
          key={blog._id}
          title={blog.title}
          slug={blog.slug.current}
          image={blog.image.asset.url}
        />
      ))}
    </div>
  );
};

export default BlogList;
