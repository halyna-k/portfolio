import type { Metadata } from 'next';
import { about } from '@/content/about';
import Container from '@/components/layout/Container';
import BackLink from '@/components/ui/BackLink';
import DownloadLink from '@/components/ui/DownloadLink';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <Container className="pb-16 md:pb-24">
      <BackLink href="/" label="Home" />
      <div className="flex flex-col gap-12 md:gap-16">
        <section className="max-w-2xl">
          <h1 className="font-heading text-4xl md:text-5xl mb-8">About</h1>
          <p className="font-heading text-xl md:text-2xl italic leading-snug mb-8">{about.hook}</p>
          <div className="flex flex-col gap-4 text-muted leading-relaxed mb-8">
            {about.bio.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          </div>
          <DownloadLink href={about.cv.href} label={about.cv.label} />
        </section>

        <section className="pt-12 md:pt-16 border-t border-border">
          <SectionHeading className="mb-8">Skills</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {about.skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="font-heading text-xl mb-4">{group.category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-xs text-muted border border-border rounded-full px-2.5 py-1"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
