import Link from 'next/link';
import Image from 'next/image';
import { type SanityDocument } from "next-sanity";
import { client } from '@/sanity/lib/client';

const POSTS_QUERY = `*[
  _type == "danceProject"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };


export default async function WorksPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <>
    <div className="pt-12"> {/* Space for fixed nav */}
      {/* Fixed minimal nav (same as homepage) */}
      <nav className="nav-space">
        <div className="logo-nav">
          <a href="/" className="svg-symbol">
            <Image
              src="UNBND_RGB_logo abbreviato_bianco_ed.svg"
              alt="Logo Symbol"
              width={280}
              height={32}
            />
          </a>
        </div>
        <div className="flex gap-6 text-sm">
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
      </nav>

      {/* Posts List */}
      <main className="container mx-auto min-h-screen max-w-3xl p-8 pt-64">
        {/* <h1 className="text-4xl font-bold mb-8">Posts</h1> */}
        <ul className="flex flex-col gap-y-4">
          {posts.map((post) => (
            <li className="hover:underline" key={post._id}>
              <Link href={`/${post.slug.current}`}>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      
      {/* <div className="works-grid">
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
      </div> */}
    </div>
    </>
  );
}