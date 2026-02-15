import { Quote, TrendingUp } from 'lucide-react';

export default function SocialProof() {
  const testimonials = [
    {
      quote: "Within 2 months, our lead conversion rate jumped from 12% to 38%. The automated follow-ups are a game-changer.",
      author: "Rajesh Kumar",
      business: "Digital Marketing Agency, Mumbai",
    },
    {
      quote: "We were losing 60% of inquiries because we couldn't respond fast enough. Now we capture every single lead automatically.",
      author: "Priya Sharma",
      business: "Coaching Institute, Delhi",
    },
  ];

  const caseStudy = {
    title: "Real Estate Agency Case Study",
    before: "15 leads/month, 8% conversion",
    after: "127 leads/month, 31% conversion",
    timeframe: "3 months",
  };

  return (
    <section className="border-b border-border/40 bg-card py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Real Results from Real Businesses
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            See how Indian businesses are growing with our automation systems
          </p>
        </div>

        {/* Testimonials */}
        <div className="mx-auto mb-12 grid max-w-5xl gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg border border-border/40 bg-background p-8"
            >
              <Quote className="mb-4 h-8 w-8 text-accent/40" />
              <p className="mb-6 text-lg italic text-muted-foreground">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study */}
        <div className="mx-auto max-w-3xl rounded-lg border border-accent/40 bg-accent/5 p-8">
          <div className="mb-6 flex items-center gap-3">
            <TrendingUp className="h-8 w-8 text-accent" />
            <h3 className="text-2xl font-bold">{caseStudy.title}</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border/40 bg-background p-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Before
              </p>
              <p className="text-xl font-bold text-foreground">{caseStudy.before}</p>
            </div>
            <div className="rounded-lg border border-accent/40 bg-accent/10 p-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
                After {caseStudy.timeframe}
              </p>
              <p className="text-xl font-bold text-accent">{caseStudy.after}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
