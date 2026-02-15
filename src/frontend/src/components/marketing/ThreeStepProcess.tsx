import { Zap, RefreshCw, Target } from 'lucide-react';

export default function ThreeStepProcess() {
  const steps = [
    {
      icon: Zap,
      number: '01',
      title: 'Capture Leads',
      description: 'Beautiful landing pages and forms that turn visitors into qualified leads instantly',
    },
    {
      icon: RefreshCw,
      number: '02',
      title: 'Automate Follow-Ups',
      description: 'Smart WhatsApp sequences that nurture leads and keep your business top-of-mind',
    },
    {
      icon: Target,
      number: '03',
      title: 'Convert to Bookings',
      description: 'Seamless booking system that turns interested leads into confirmed appointments',
    },
  ];

  return (
    <section className="border-b border-border/40 bg-card py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            How It Works
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Three simple steps to transform your lead generation
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative rounded-lg border border-border/40 bg-background p-8 transition-all hover:border-accent/40 hover:glow-teal-sm"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-4xl font-bold text-muted-foreground/20">{step.number}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
