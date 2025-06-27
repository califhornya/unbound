import Link from 'next/link';
import Image from 'next/image';

const works = [
  {
    id: 'urban-echoes',
    title: 'Urban Echoes',
    year: '2023',
    image: '/urban-echoes/urbanechoes.jpg'
  },
  {
    id: 'silent-waves',
    title: 'Silent Waves',
    year: '2022',
    image: '/silent-waves/silentwaves.jpg'
  },
  // Add more works...
];

export default function WorksPage() {
  return (
    <div className="pt-12"> {/* Space for fixed nav */}
      {/* Fixed minimal nav (same as homepage) */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 h-12 flex justify-end items-center px-6 border-b">
        <div className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      {/* Works grid */}
      <div className="works-grid">
        {works.map((work) => (
          <Link 
            key={work.id}
            href={`/works/${work.id}`}
            className="work-item"
          >
            <Image
              src={work.image}
              alt={work.title}
              width={500}
              height={500}
            />
            <div className="work-caption">
              <h3 className="font-medium">{work.title}</h3>
              <p className="text-xs opacity-80">{work.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}