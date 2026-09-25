import { about } from '@/content/about';
import { Back, Download, SectionLabel } from '@/components';

export default function AboutPage() {
  return (
    <>
      <Back href="/" label="Home" />
      <div className="px-16 pb-24 flex flex-col gap-16">
        <section className="max-w-3xl">
          <h1 className="font-heading text-4xl leading-snug mb-12">
            {about.hook}
          </h1>
          <p className="whitespace-pre-line text-muted text-base leading-relaxed mb-16">
            {about.bio}
          </p>
          <Download href={about.cv.href} label={about.cv.label} />
        </section>

        <section className="pt-16 border-t border-border">
          <SectionLabel className="mb-8">Skills & Focus</SectionLabel>
          <div className="grid grid-cols-2 gap-x-12 gap-y-10">
            {about.skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="font-heading text-xl mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-muted border border-border rounded-full px-2.5 py-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
