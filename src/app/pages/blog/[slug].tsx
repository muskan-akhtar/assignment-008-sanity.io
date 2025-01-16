import { client } from "@/sanity/lib/client";
import Image from "next/image";

export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]`,
    { slug: params.slug }
  );

  return (
    <article className="container mx-auto py-8">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <div className="w-full my-4 rounded-md overflow-hidden">
        <Image
          src={blog.image.asset.url}
          alt={blog.title}
          width={800}
          height={400}
          className="rounded-md"
        />
      </div>
      <p className="text-lg">{blog.content}</p>
    </article>
  );
}
