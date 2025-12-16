"use client";

import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          Notes from my Desk
        </Link>

        <button
          className={styles.toggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={clsx(styles.nav, { [styles.open]: isOpen })}>
          <Link href="/" className={styles.link} onClick={closeMenu}>Home</Link>
          <Link href="/blog" className={styles.link} onClick={closeMenu}>Blog</Link>
          <Link href="/about" className={styles.link} onClick={closeMenu}>About</Link>
        </nav>
      </div>
    </header>
  );
}
