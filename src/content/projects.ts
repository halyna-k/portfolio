import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'aurum-estates',
    slug: 'aurum-estates',
    num: '01 · 2026',
    title: 'Aurum Estates',
    description:
      "Real estate platform with an integrated AI assistant for property selection and customer responses.",
    stack: ['React', 'TypeScript', 'Anthropic API'],
    size: 'large',
    href: '/projects/aurum-estates',
  },
  {
    id: 'crypto-dashboard',
    slug: 'crypto-dashboard',
    num: '02 · 2026',
    title: 'Crypto Dashboard',
    description:
      'Minimalist MVP dashboard for cryptocurrencies with live data from CoinGecko API.',
    stack: ['React', 'Tailwind'],
    size: 'medium',
    href: '/projects/crypto-dashboard',
  },
  {
    id: 'clinic-ai-bot',
    slug: 'clinic-ai-bot',
    num: '03 · 2026',
    title: 'AI-Bot for Clinic',
    description:
      'Chat-bot for lead qualification and FAQ in a medical aesthetics clinic.',
    stack: ['Node.js', 'Anthropic API'],
    size: 'medium',
    href: '/projects/clinic-ai-bot',
  },
  {
    id: 'all-projects',
    slug: 'all-projects',
    num: '↗',
    title: 'All Projects',
    description: 'View the complete portfolio on GitHub.',
    stack: [],
    size: 'medium',
    href: 'https://github.com/halyna-k',
    isExternal: true,
  },
];
