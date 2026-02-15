import { Link } from '@tanstack/react-router';
import { Check, Star } from 'lucide-react';

interface PlanCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export default function PlanCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  popular = false,
}: PlanCardProps) {
  return (
    <div
      className={`relative rounded-lg border bg-card p-8 transition-all ${
        popular
          ? 'border-accent glow-teal scale-105 md:scale-110'
          : 'border-border/40 hover:border-accent/40'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1 rounded-full bg-accent px-4 py-1 text-sm font-semibold text-accent-foreground">
            <Star className="h-4 w-4 fill-current" />
            Most Popular
          </div>
        </div>
      )}
      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-bold">{name}</h3>
        <div className="mb-3 flex items-baseline gap-1">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground">{period}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className={`block w-full rounded-full py-3 text-center font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
          popular
            ? 'bg-accent text-accent-foreground hover:bg-accent/90 hover:glow-teal-sm'
            : 'border-2 border-accent text-accent hover:bg-accent/10'
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}
