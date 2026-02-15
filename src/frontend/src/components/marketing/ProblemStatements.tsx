import { XCircle } from 'lucide-react';

export default function ProblemStatements() {
  const problems = [
    'Missed leads because you responded too late',
    'Lost sales to competitors who follow up faster',
    'No system to track and manage inquiries',
    'Revenue leaking from poor lead conversion',
  ];

  return (
    <section className="border-b border-border/40 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Sound Familiar?
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            These problems cost Indian businesses thousands of rupees every month
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-lg border border-destructive/40 bg-destructive/5 p-6 text-left"
              >
                <XCircle className="mt-1 h-6 w-6 flex-shrink-0 text-destructive" />
                <p className="text-lg font-semibold text-foreground">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
