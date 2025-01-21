import Link from "next/link";
import Rotate from "./_components/animate/rotate";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Link className=" m-10 text-5xl underline" href="/blog">Welcome to tapaScript Blog</Link>
      <Rotate />
    </div>
  );
}
