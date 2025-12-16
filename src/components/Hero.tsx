import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Reflections on Code, Design, and Life.</h1>
      <p className={styles.subtitle}>
        Hi, I'm James based in Ireland. I build accessible, high-performance web applications.
        Notes from my Desk is my personal collection of thoughts and learnings.
      </p>
    </section>
  );
}
