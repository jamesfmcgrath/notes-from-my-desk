import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About | Notes from my Desk",
  description: "About James McGrath and the story behind Notes from my Desk.",
};

export default function About() {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Me</h1>

      <div style={{ lineHeight: '1.8', fontSize: '1.125rem' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          Hello! I'm James McGrath, a freelance engineer and budding writer based in Ireland.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          **Notes from my Desk** is my little corner of the internet where I share what I'm learning,
          what I'm building, and the occasional rambling thought about the state of technology.
        </p>

        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem' }}>My Background</h2>

        <p style={{ marginBottom: '1.5rem' }}>
          I've been building for the web for several years, focusing on creating accessible,
          performant, and beautiful user experiences. I believe that the best software feels invisible —
          it just works, and looks good doing it.
        </p>

        <p>
          Thanks for stopping by. Feel free to connect with me on the social links below!
        </p>
      </div>
    </div>
  );
}
