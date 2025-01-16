// import { client } from "@/sanity/lib/client";

// async function getData() {
//   const students = await client.fetch(`*[_type == 'student']`);
//   const blogPosts = await client.fetch(`*[_type == 'blog']`);
//   return { students, blogPosts };
// }

// export default async function Home() {
//   const { students, blogPosts } = await getData();

//   return (
//     <main className="container mx-auto py-8">
//       <h1 className="text-4xl font-bold text-center mb-8">
//         Welcome to the Blog
//       </h1>

//       <section>
//         <h2 className="text-2xl font-semibold mb-4">Students</h2>
//         {students.map((student: any, i: number) => (
//           <div
//             key={i}
//             className="bg-pink-500 text-2xl flex justify-center items-center mb-4"
//           >
//             {student.name}
//           </div>
//         ))}
//       </section>

//       <section className="mt-8">
//         <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
//         {blogPosts.map((post: any, i: number) => (
//           <div key={i} className="mb-4 p-4 border rounded-md shadow-md">
//             <h3 className="text-xl font-bold">{post.title}</h3>
//             <p className="text-sm text-gray-500">
//               By {post.author} on{" "}
//               {new Date(post.publishedAt).toLocaleDateString()}
//             </p>
//             <p className="text-gray-700 mt-2">{post.content}</p>
//           </div>
//         ))}
//       </section>
//     </main>
//   );
// }








import { client } from "@/sanity/lib/client";

type Student = {
  name: string;
};

type BlogPost = {
  title: string;
  author: string;
  publishedAt: string;
  content: string;
};

async function getData() {
  const students: Student[] = await client.fetch(`*[_type == 'student']`);
  const blogPosts: BlogPost[] = await client.fetch(`*[_type == 'blog']`);
  return { students, blogPosts };
}

export default async function Home() {
  const { students, blogPosts } = await getData();

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to the Blog
      </h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Students</h2>
        {students.map((student, index) => (
          <div
            key={index}
            className="bg-pink-500 text-2xl flex justify-center items-center mb-4"
          >
            {student.name}
          </div>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
        {blogPosts.map((post, index) => (
          <div key={index} className="mb-4 p-4 border rounded-md shadow-md">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p className="text-sm text-gray-500">
              By {post.author} on{" "}
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <p className="text-gray-700 mt-2">{post.content}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
