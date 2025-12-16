import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import { Post, PostMetadata } from './types';

const postsDirectory = path.join(process.cwd(), 'posts');

// Default: only show published posts (date <= today).
// Pass { includeFuture: true } to see all posts.
export function getSortedPostsData({ includeFuture = false }: { includeFuture?: boolean } = {}): PostMetadata[] {
  // Get file names under /posts
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        slug,
        ...(matterResult.data as { title: string; date: string; excerpt: string; coverImage?: string }),
      };
    });

  // Filter out future posts unless requested
  const now = new Date();
  const today = now.toISOString().split('T')[0];

  const filteredPosts = includeFuture
    ? allPostsData
    : allPostsData.filter(post => post.date <= today);

  // Sort posts by date
  return filteredPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAdjacentPosts(slug: string): { prev: PostMetadata | null; next: PostMetadata | null } {
  // Only navigate between visible posts
  const allPosts = getSortedPostsData();
  const index = allPosts.findIndex((post) => post.slug === slug);

  if (index === -1) {
    return { prev: null, next: null };
  }

  // Next post is index - 1 (because sorted descending by date)
  // Prev post is index + 1
  const next = index > 0 ? allPosts[index - 1] : null;
  const prev = index < allPosts.length - 1 ? allPosts[index + 1] : null;

  return { prev, next };
}

export function getAllPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    content: contentHtml,
    ...(matterResult.data as { title: string; date: string; excerpt: string; coverImage?: string }),
  };
}
