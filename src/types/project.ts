export interface Project {
  id: string;
  slug: string;
  index: string;   // '01', '02', '↗'
  year?: string;    // '2026', empty for 'All Projects'
  title: string;
  description: string;
  stack: string[];
  size: 'large' | 'medium';
  href: string;
  isExternal?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  problem?: string;
  solution?: string;
  results?: string;
  image?: string;  // Optional image URL for the project
}
