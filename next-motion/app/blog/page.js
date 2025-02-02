import PostList from "../_components/posts/post-list";
import Link from "next/link";
const BlogPage = () => {
  return (
    <div className="flex flex-col flex-wrap">
      <div className="flex justify-between">
        <Link href="/" className="p-1 my-2">
          <h1 className="text-5xl">tapaScript Posts</h1>
        </Link>
        <Link href="/about" className="p-1 my-2">
          About
        </Link>
      </div>
      <PostList />
    </div>
  );
};

export default BlogPage;
