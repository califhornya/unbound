import Link from 'next/link';
import Image from 'next/image';
import {PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from '@/sanity/lib/client';

const POST_QUERY = `*[_type == "danceProject" && slug.current == $slug][0]`;
const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };


export default async function Slug({
    params,
}: {params: Promise<{ slug : string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <>
    <div className="pt-12"> {/* Space for fixed nav */}
      {/* Fixed minimal nav (same as homepage) */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 h-12 flex justify-end items-center px-6 border-b">
        <div className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
        <Link href="/" className="hover:underline">
            ← Back to posts
        </Link>
        {postImageUrl && (
            <img
            src={postImageUrl}
            alt={post.title}
            className="aspect-video rounded-xl"
            width="550"
            height="310"
            />
        )}
        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
        <div className="prose">
            <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
            {Array.isArray(post.body) && <PortableText value={post.body} />}
        </div>
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