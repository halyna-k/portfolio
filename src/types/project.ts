export interface Project {
  id: string;
  slug: string;
  num: string;
  title: string;
  description: string;
  stack: string[];
  size: 'large' | 'medium';
  href: string;
  isExternal?: boolean;
}
