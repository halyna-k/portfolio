import { about } from '@/content/about';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import InternalLink from '../ui/InternalLink';

export default function AboutPreview() {
  return (
    <Container as="section" className="py-16 md:py-24 border-t border-border">
      <SectionHeading className="mb-8">About</SectionHeading>
      <p className="font-heading text-xl md:text-2xl italic leading-snug max-w-lg md:max-w-2xl mb-8">
        {about.hook}
      </p>
      <InternalLink href="/about">More about me</InternalLink>
    </Container>
  );
}
