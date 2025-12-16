import markdownStyles from '@/components/Markdown.module.css';
import ShareButtons from '@/components/ShareButtons';
import { getAdjacentPosts, getAllPostSlugs, getPostData } from '@/lib/posts';
import { format, parseISO } from 'date-fns';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);
  return {
    title: `${post.title} | Notes from my Desk`,
    description: post.excerpt,
  };
}

import Image from 'next/image';

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Add try/catch for existence check
  let post;
  try {
     post = await getPostData(slug);
  } catch (e) {
     notFound();
  }

  const { prev, next } = getAdjacentPosts(slug);

  return (
    <article className="container">
      <header className={styles.header}>
        <time className={styles.date}>{format(parseISO(post.date), 'MMMM d, yyyy')}</time>
        <h1 className={styles.title}>{post.title}</h1>
        {post.coverImage && (
          <div className={styles.imageContainer} style={{ position: 'relative', height: '400px', width: '100%' }}>
             <Image
               src={post.coverImage}
               alt={post.title}
               fill
               priority
               className={styles.image}
               style={{ objectFit: 'cover' }}
             />
          </div>
        )}
      </header>

      <div
        className={markdownStyles.markdown}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <ShareButtons title={post.title} slug={post.slug} />

      <nav className={styles.nav}>
        {next ? (
          <Link href={`/blog/${next.slug}`} className={`${styles.navLink} ${styles.prev}`}>
            <span className={styles.navLabel}>&larr; Previous Article (Newer)</span>
            <span className={styles.navTitle}>{next.title}</span>
          </Link>
        ) : <div />}

        {prev ? (
          <Link href={`/blog/${prev.slug}`} className={`${styles.navLink} ${styles.next}`}>
            <span className={styles.navLabel}>Next Article (Older) &rarr;</span>
            <span className={styles.navTitle}>{prev.title}</span>
          </Link>
        ) : <div />}
      </nav>
    </article>
  );
}
