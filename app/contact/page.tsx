import Link from 'next/link';

export default function Contact() {
  return (
    <div className="h-screen p-10">
      <nav className="fixed top-5 right-5 text-sm">
        <Link href="/" className="mr-3 hover:underline">Home</Link>
        <Link href="/about" className="mr-3 hover:underline">About</Link>
        <Link href="/works" className="hover:underline">Works</Link>
      </nav>
      <h1 className="text-4xl">Contact us</h1>
    </div>
  );
}