import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import styles from "./page.module.css"; // Need to create this for grid layout

export default function Home() {
  const allPosts = getSortedPostsData();
  const latestPosts = allPosts.slice(0, 3);

  return (
    <div className="container">
      <Hero />

      <section className={styles.section}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Latest Entries</h2>
          <Link href="/blog" className={styles.viewAll}>View all articles</Link>
        </div>

        <div className={styles.grid}>
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
