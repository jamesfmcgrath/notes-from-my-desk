import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export const metadata = {
  title: "All Posts (Including Drafts)",
  robots: "noindex, nofollow"
};

export default function HiddenPage() {
  const allPosts = getSortedPostsData({ includeFuture: true });

  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>All Posts (Hidden)</h1>
      <p style={{ marginBottom: '2rem' }}>This page lists all posts, including those scheduled for the future.</p>

      <ul style={{ listStyle: 'none' }}>
        {allPosts.map((post) => (
          <li key={post.slug} style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
            <Link href={`/blog/${post.slug}`} style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
              {post.title}
            </Link>
            <div style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>
              {post.date}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
