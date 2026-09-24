import { Project } from '@/types/project';

export const aurumEstates: Project = {
  id: 'aurum-estates',
  slug: 'aurum-estates',
  index: '01',
  year: '2026',
  title: 'Aurum Estates',
  description: "Real estate platform with an integrated AI assistant for property selection and customer responses.",
  stack: ['React', 'TypeScript', 'Groq API'],
  size: 'large',
  featured: true,
  href: '/projects/aurum-estates',
  isExternal: false,
  liveUrl: 'https://aurum-estates-uk.vercel.app',
  githubUrl: 'https://github.com/halyna-k/aurum-estates',
  problem: "Real estate agencies lose potential clients to slow response times and unqualified leads reaching agents' inboxes. Manually screening every inquiry — checking budget, timeline, and genuine intent — takes time agents don't have, while serious buyers expect an immediate response.",
  solution: "An AI assistant embedded directly in the Aurum Estates site engages visitors in real time, gathers the information needed to assess fit, and classifies each lead as qualified or unqualified against the agency's criteria. Once qualified, it books a property viewing through Google Calendar integration, logs the lead in the agency's Google Sheet, and triggers two automated emails — one notifying the agent of a new, pre-qualified lead with a confirmed viewing, and one confirming the booking to the client. Calendar and spreadsheet integrations are built to be swapped per agency's existing tools.",
  results: ''
};
