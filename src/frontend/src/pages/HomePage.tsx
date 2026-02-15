import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle2, Zap, Target, TrendingUp, Clock, Users, BarChart3 } from 'lucide-react';
import CtaBlock from '../components/marketing/CtaBlock';
import ProblemStatements from '../components/marketing/ProblemStatements';
import ThreeStepProcess from '../components/marketing/ThreeStepProcess';
import IconBulletList from '../components/marketing/IconBulletList';
import SocialProof from '../components/marketing/SocialProof';
import PlanCard from '../components/marketing/PlanCard';
import FaqAccordion from '../components/marketing/FaqAccordion';
import { siteConfig } from '../config/site';

export default function HomePage() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹9,999',
      period: '/month',
      description: 'Perfect for small businesses starting their automation journey',
      features: [
        'Basic lead capture page',
        'WhatsApp auto-response',
        'Up to 500 leads/month',
        'Email support',
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
        'Full automation system',
        'Booking integration',
        'Follow-up sequences',
        'Up to 2,000 leads/month',
        'Priority support',
        'Performance analytics',
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
        'Advanced automation',
        'CRM tracking & integration',
        'Unlimited leads',
        'Dedicated account manager',
        'Custom optimization',
        'White-label options',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Faster Response Time',
      description: 'Respond to leads instantly, 24/7, even while you sleep',
    },
    {
      icon: TrendingUp,
      title: 'Higher Conversions',
      description: 'Convert up to 3x more leads with automated follow-ups',
    },
    {
      icon: Users,
      title: 'Organized Lead Tracking',
      description: 'Never lose a lead with centralized tracking and management',
    },
    {
      icon: BarChart3,
      title: '24/7 Automated System',
      description: 'Your business works around the clock without manual effort',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background to-card">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="/assets/generated/hero-glow-bg.dim_1600x900.png"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>

        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Turn Missed Leads Into{' '}
              <span className="text-gradient-teal">Paying Customers</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Automated WhatsApp and booking systems that capture, nurture, and convert leads while you focus on growing your business
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:glow-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {siteConfig.cta.primary}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-accent px-8 py-4 text-base font-semibold text-accent transition-all hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {siteConfig.cta.secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <ProblemStatements />

      {/* Solution Section */}
      <ThreeStepProcess />

      {/* Benefits Section */}
      <IconBulletList benefits={benefits} />

      {/* Social Proof Section */}
      <SocialProof />

      {/* Pricing Preview Section */}
      <section className="border-b border-border/40 bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your business growth goals
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PlanCard key={plan.name} {...plan} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 text-accent transition-colors hover:text-accent/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              View detailed pricing comparison
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqAccordion />

      {/* Final CTA */}
      <CtaBlock
        title="Limited Onboarding Slots Available"
        description="We only take on a limited number of clients each month to ensure exceptional results. Secure your spot today."
        primaryCta={{
          text: siteConfig.cta.primary,
          href: '/contact',
        }}
      />
    </div>
  );
}
