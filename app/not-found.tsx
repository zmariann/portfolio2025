import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col">
      <p className="uppercase">| Page not found |</p>
      <Link className="underline" href="/portfolio">Click here to go back</Link>
    </main>
  );
}
