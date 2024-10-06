"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();

  return (
    <>
      <div>
        <ul className="flex gap-4 text-white bg-yellow-600 justify-end pr-3">
          <li>
            <Link href="/">
              <h1>Home</h1>
            </Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <Link href="/navbar">Navbar</Link>
          </li>
        </ul>
      </div>

      <hr />

      <div className="fixed bottom-0 left-0 w-full flex flex-col items-center gap-2">
        <button
          className="p-2 bg-blue-900 text-white"
          onClick={() => route.push("/about")}
        >
          Go to About Page
        </button>
        
        <button
          className="p-2 bg-blue-900 text-white"
          onClick={() => route.push("/contact")}
        >
          Go to Contact Page
        </button>
        
        <button
          className="p-2 bg-blue-900 text-white"
          onClick={() => route.push("/navbar")}
        >
          Go to Navbar Page
        </button>
      </div>
    </>
  );
}
