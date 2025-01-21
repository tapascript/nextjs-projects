import PostDetails from "@/app/_components/posts/post-details";
const BlogDetailsPage = async ({ params }) => {
  const id = (await params).id;
  const postDetailsResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const postDetailsData = await postDetailsResponse.json();

  console.log(id);
  return <PostDetails post={postDetailsData} />;
};

export default BlogDetailsPage;
