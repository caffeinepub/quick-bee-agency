import { Link } from '@tanstack/react-router';
import { ArrowRight, Check } from 'lucide-react';
import PlanCard from '../components/marketing/PlanCard';
import CtaBlock from '../components/marketing/CtaBlock';
import { siteConfig } from '../config/site';

export default function PricingPage() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹9,999',
      period: '/month',
      description: 'Perfect for small businesses starting their automation journey',
      features: [
        'Basic lead capture page',
        'WhatsApp auto-response setup',
        'Up to 500 leads per month',
        'Email support',
        'Basic analytics dashboard',
        'Setup & training included',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Growth',
      price: '₹24,999',
      period: '/month',
      description: 'Most popular for businesses ready to scale their lead generation',
      features: [
        'Everything in Starter, plus:',
        'Full automation system',
        'Booking system integration',
        'Automated follow-up sequences',
        'Up to 2,000 leads per month',
        'Priority support',
        'Advanced performance analytics',
        'Monthly optimization review',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Scale',
      price: '₹49,999',
      period: '/month',
      description: 'Enterprise solution for maximum growth and optimization',
      features: [
        'Everything in Growth, plus:',
        'Advanced automation workflows',
        'Full CRM tracking & integration',
        'Unlimited leads',
        'Dedicated account manager',
        'Custom optimization & A/B testing',
        'White-label options',
        'Weekly strategy calls',
        'Custom integrations',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const roiPoints = [
    'Average clients see 3x ROI within the first 3 months',
    'Typical lead capture rate increases by 300%',
    'Response time drops from hours to seconds',
    'Conversion rates improve by 40-60%',
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border/40 bg-gradient-to-b from-background to-card py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Pricing That Grows{' '}
              <span className="text-gradient-teal">With Your Business</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Simple, transparent pricing with no hidden fees. Choose the plan that matches your growth stage.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PlanCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="border-y border-border/40 bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
              Your Investment, Your Returns
            </h2>
            <p className="mb-8 text-center text-lg text-muted-foreground">
              Every rupee you invest should generate measurable returns. Here's what our clients typically see:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {roiPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg border border-border/40 bg-background p-4">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <p className="text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-lg border border-accent/40 bg-accent/5 p-6">
              <p className="text-center text-lg font-semibold text-foreground">
                Most businesses recover their investment within 30-60 days through increased lead conversion alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
              Pricing Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-accent">Can I switch plans later?</h3>
                <p className="text-muted-foreground">
                  Absolutely. You can upgrade or downgrade your plan at any time. We'll prorate the difference.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-accent">What happens if I exceed my lead limit?</h3>
                <p className="text-muted-foreground">
                  We'll notify you when you're approaching your limit. You can either upgrade to the next tier or pay a small overage fee. We never cut off your leads.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-accent">Is there a setup fee?</h3>
                <p className="text-muted-foreground">
                  No setup fees. All plans include complete setup, training, and onboarding at no extra cost.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-accent">Do you offer custom enterprise plans?</h3>
                <p className="text-muted-foreground">
                  Yes. If you need custom features, higher volume, or special integrations, contact us for a tailored enterprise plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaBlock
        title="Ready to Start Growing?"
        description="Choose your plan and start capturing more leads today. No credit card required for the free trial."
        primaryCta={{
          text: 'Get Started Now',
          href: '/contact',
        }}
      />
    </div>
  );
}
