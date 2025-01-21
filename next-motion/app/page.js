import Link from "next/link";
import Rotate from "./_components/animate/rotate";
export default function Home() {
  return (
    <>
      <Link className=" m-4 text-5xl underline flex justify-center" href="/blog">Welcome to tapaScript Blog</Link>
      <Rotate />
    </>
  );
}
