import Link from 'next/link';

const BlogCard = ({ title, slug, image }: { title: string; slug: string; image: string }) => {
  return (
    <div className="border rounded-md shadow-md p-4">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-xl font-bold my-2">{title}</h2>
      <Link href={`/blog/${slug}`}>
        <button className="text-blue-500 hover:underline">Read More</button>
      </Link>
    </div>
  );
};

export default BlogCard;
