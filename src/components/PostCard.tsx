import { PostMetadata } from '@/lib/types';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PostCard.module.css';

interface Props {
  post: PostMetadata;
}

export default function PostCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      {post.coverImage && (
        <div className={styles.imageContainer}>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.content}>
        <time className={styles.date}>{format(parseISO(post.date), 'MMMM d, yyyy')}</time>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <span className={styles.readMore}>Read Article &rarr;</span>
      </div>
    </Link>
  );
}
