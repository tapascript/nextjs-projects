import * as motion from "motion/react-client";
import Link from "next/link"
const PostListItem = ({post}) => {
  return (
    <Link href={`/blog/${post.id}`}>
      <motion.div
        className="flex flex-col m-2 p-1 border border-purple-800 shadow-lg rounded-xl bg-purple-300"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.5,
          type: "spring",
          stiffness: 100,
        }}>
        <h2 className="text-3xl my-2">{post.title}</h2>
        <p className="text-xl text-gray-700">{post.body}</p>
      </motion.div>
    </Link>
  )
}

export default PostListItem