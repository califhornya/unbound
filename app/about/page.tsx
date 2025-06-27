import Link from 'next/link';

export default function About() {
  return (
    <div className="h-screen p-10">
      <nav className="fixed top-5 right-5 text-sm">
        <Link href="/" className="mr-3 hover:underline">Home</Link>
        <Link href="/works" className="mr-3 hover:underline">Works</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>
      <h1 className="text-4xl">About</h1>
    </div>
  );
}