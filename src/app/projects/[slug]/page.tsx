export default function ProjectPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-serif">Project: {params.slug}</h1>
    </main>
  );
}
