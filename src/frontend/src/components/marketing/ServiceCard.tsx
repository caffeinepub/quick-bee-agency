interface ServiceCardProps {
  title: string;
  whatItIs: string;
  whyItMatters: string;
  businessImpact: string;
}

export default function ServiceCard({ title, whatItIs, whyItMatters, businessImpact }: ServiceCardProps) {
  return (
    <div className="rounded-lg border border-border/40 bg-card p-8 transition-all hover:border-accent/40 hover:glow-teal-sm">
      <h3 className="mb-6 text-2xl font-bold">{title}</h3>
      <div className="space-y-4">
        <div>
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
            What It Is
          </h4>
          <p className="text-muted-foreground">{whatItIs}</p>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
            Why It Matters
          </h4>
          <p className="text-muted-foreground">{whyItMatters}</p>
        </div>
        <div className="rounded-lg border border-accent/40 bg-accent/5 p-4">
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
            Business Impact
          </h4>
          <p className="font-semibold text-foreground">{businessImpact}</p>
        </div>
      </div>
    </div>
  );
}
