export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  content: string;
}

export type PostMetadata = Omit<Post, 'content'>;
