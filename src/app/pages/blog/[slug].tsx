import {client} from '@/sanity/lib/client'

export default async function BlogDetails({ params }: { params: { slug: string } }) {
  const blog = await client.fetch(`*[_type == "blog" && slug.current == $slug][0]`, { slug: params.slug });

  return (
    <article className="container mx-auto py-8">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <img src={blog.image.asset.url} alt={blog.title} className="w-full my-4 rounded-md" />
      <p className="text-lg">{blog.content}</p>
    </article>
  );
}
