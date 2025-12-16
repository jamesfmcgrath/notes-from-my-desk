"use client";

import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from './ShareButtons.module.css';

interface Props {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: Props) {
  // In a real app, use the actual domain.
  const url = `https://notes-from-my-desk.vercel.app/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className={styles.container}>
      <span className={styles.label}>Share this post:</span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        aria-label="Share on Twitter"
      >
        <FaTwitter />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        aria-label="Share on LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        aria-label="Share on Facebook"
      >
        <FaFacebook />
      </a>
    </div>
  );
}
