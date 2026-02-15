import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';

interface CtaBlockProps {
  title: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

export default function CtaBlock({ title, description, primaryCta, secondaryCta }: CtaBlockProps) {
  return (
    <section className="border-t border-border/40 bg-gradient-to-b from-card to-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="mb-8 text-lg text-muted-foreground">{description}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to={primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:glow-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {primaryCta.text}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            {secondaryCta && (
              <Link
                to={secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-full border-2 border-accent px-8 py-4 text-base font-semibold text-accent transition-all hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
