import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <Link href="/works">WORKS</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/contact">CONTACT</Link>
      </nav>

      {/* Centered Logo */}
      <div className="logo-container">
        <Image
          src="/UNBND_RGB_logo_bianco.svg"
          alt="Dance Collective"
          width={200}
          height={100}
          className="logo"
          priority
        />
      </div>
    </>
  );
}