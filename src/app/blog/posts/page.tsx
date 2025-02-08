import { connectToDB } from "@/app/lib/data";
import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";

export default async function PostsPage() {
  const client = await connectToDB();
  return (
    <>
      {client && <p className="text-green-500">Connected to Database</p>}
      <h1>Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} {...post} isDetailPage={false} />
      ))}
    </>
  );
}
