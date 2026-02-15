import { Link } from '@tanstack/react-router';
import { ArrowRight, Target, Heart, TrendingUp, Shield } from 'lucide-react';
import ValuePropsGrid from '../components/marketing/ValuePropsGrid';
import CtaBlock from '../components/marketing/CtaBlock';
import { siteConfig } from '../config/site';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'India-First Approach',
      description: 'We understand the unique challenges of Indian small businesses and design solutions that work in the local market.',
    },
    {
      icon: Heart,
      title: 'Simplicity & Transparency',
      description: 'No confusing jargon or hidden fees. We explain everything in plain language and deliver what we promise.',
    },
    {
      icon: TrendingUp,
      title: 'Measurable Results',
      description: 'Every system we build is designed to deliver trackable ROI. You\'ll see exactly how your investment pays off.',
    },
    {
      icon: Shield,
      title: 'Long-Term Partnership',
      description: 'We\'re not just vendors—we\'re partners invested in your success. Your growth is our success.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border/40 bg-gradient-to-b from-background to-card py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Helping Indian Businesses{' '}
              <span className="text-gradient-teal">Grow Through Automation</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              We're on a mission to make powerful lead generation automation accessible to every small business and startup in India
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-b border-border/40 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Mission</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Every day, thousands of Indian small businesses lose potential customers because they can't respond fast enough, don't have proper follow-up systems, or lack the tools to manage leads effectively.
              </p>
              <p>
                We started {siteConfig.name} to change that. We believe every business deserves access to the same automation tools that big companies use—without the complexity or enterprise pricing.
              </p>
              <p className="font-semibold text-foreground">
                Our goal is simple: help you capture more leads, convert them faster, and grow your revenue predictably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <ValuePropsGrid values={values} />

      {/* Why We're Different */}
      <section className="border-b border-border/40 bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Why We're Different</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-accent">Built for Indian Businesses</h3>
                <p className="text-muted-foreground">
                  We understand WhatsApp is king in India. We know your customers prefer quick responses. We design systems that match how Indian customers actually behave.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-accent">No Technical Headaches</h3>
                <p className="text-muted-foreground">
                  You don't need to be tech-savvy. We handle all the setup, integration, and maintenance. You just watch the leads come in.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-accent">Results You Can Track</h3>
                <p className="text-muted-foreground">
                  We provide clear dashboards showing exactly how many leads you're capturing, conversion rates, and ROI. No guesswork.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-accent">Affordable & Scalable</h3>
                <p className="text-muted-foreground">
                  Start small and scale as you grow. Our pricing is designed for businesses at every stage, from startups to established companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaBlock
        title="Ready to Transform Your Lead Generation?"
        description="Join hundreds of Indian businesses already growing with automated lead capture and follow-up systems."
        primaryCta={{
          text: 'Start Your Free Audit',
          href: '/contact',
        }}
      />
    </div>
  );
}
