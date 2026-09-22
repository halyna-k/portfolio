import { Project } from '@/types/project';
import { aurumEstates } from './projects/aurum-estates';
import { cryptoDashboard } from './projects/crypto-dashboard';

const allProjects: Project = {
  id: 'all-projects',
  slug: 'all-projects',
  index: '↗',
  title: 'All Projects',
  description: 'View all projects in one place.',
  stack: [],
  size: 'medium',
  href: '/projects',
  isExternal: false,
};

export const projects: Project[] = [aurumEstates, cryptoDashboard, allProjects];
