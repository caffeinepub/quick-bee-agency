import { LucideIcon } from 'lucide-react';

interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ValuePropsGridProps {
  values: ValueProp[];
}

export default function ValuePropsGrid({ values }: ValuePropsGridProps) {
  return (
    <section className="border-b border-border/40 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Our Core Values
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            What drives us to deliver exceptional results for every client
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="rounded-lg border border-border/40 bg-card p-8 transition-all hover:border-accent/40 hover:glow-teal-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
