import Link from 'next/link';
import styles from './Pagination.module.css';

interface Props {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: Props) {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <div className={styles.pagination}>
      {prevPage ? (
        <Link href={`/blog?page=${prevPage}`} className={styles.button}>
          &larr; Previous
        </Link>
      ) : (
        <button disabled className={styles.button}>&larr; Previous</button>
      )}

      <span className={styles.button}>{currentPage} / {totalPages}</span>

      {nextPage ? (
        <Link href={`/blog?page=${nextPage}`} className={styles.button}>
          Next &rarr;
        </Link>
      ) : (
        <button disabled className={styles.button}>Next &rarr;</button>
      )}
    </div>
  );
}
