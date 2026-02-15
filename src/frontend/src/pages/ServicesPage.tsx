import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import ServiceCard from '../components/marketing/ServiceCard';
import CtaBlock from '../components/marketing/CtaBlock';
import { siteConfig } from '../config/site';

export default function ServicesPage() {
  const services = [
    {
      title: 'Lead Capture Page Design',
      whatItIs: 'Custom-designed landing pages optimized to capture visitor information and convert them into qualified leads.',
      whyItMatters: 'Your website visitors are potential customers. Without a proper lead capture system, you lose 95% of them forever.',
      businessImpact: 'Increase lead generation by 300% and build a database of interested prospects ready to buy.',
    },
    {
      title: 'WhatsApp Automation Setup',
      whatItIs: 'Automated WhatsApp messaging system that instantly responds to inquiries and nurtures leads through personalized conversations.',
      whyItMatters: 'Indian customers prefer WhatsApp. Delayed responses mean lost sales to competitors who reply faster.',
      businessImpact: 'Respond to every inquiry within seconds, convert 40% more leads, and never miss a potential customer again.',
    },
    {
      title: 'Booking System Integration',
      whatItIs: 'Seamless appointment scheduling system that lets customers book consultations, demos, or services directly through automated flows.',
      whyItMatters: 'Manual booking wastes time and creates friction. Customers abandon the process when it\'s too complicated.',
      businessImpact: 'Fill your calendar automatically, reduce no-shows by 60%, and free up hours of admin work every week.',
    },
    {
      title: 'Follow-Up Automation',
      whatItIs: 'Smart automated sequences that follow up with leads at the right time with the right message to move them closer to purchase.',
      whyItMatters: 'Most sales happen after 5-7 follow-ups, but most businesses give up after one attempt.',
      businessImpact: 'Recover 50% of lost leads, increase conversion rates, and generate revenue from prospects who weren\'t ready to buy immediately.',
    },
    {
      title: 'CRM Setup',
      whatItIs: 'Customer relationship management system that organizes all your leads, tracks interactions, and provides insights into your sales pipeline.',
      whyItMatters: 'Without organized tracking, leads fall through the cracks and you have no visibility into what\'s working.',
      businessImpact: 'Know exactly where every lead stands, identify bottlenecks, and make data-driven decisions to grow revenue.',
    },
    {
      title: 'Performance Optimization',
      whatItIs: 'Ongoing analysis and refinement of your automation systems to maximize conversion rates and ROI.',
      whyItMatters: 'Set-it-and-forget-it doesn\'t work. Markets change, and your systems need continuous improvement.',
      businessImpact: 'Increase conversion rates by 20-30% through testing and optimization, ensuring maximum return on your investment.',
    },
    {
      title: 'Complete Business Automation System',
      whatItIs: 'End-to-end automation solution that integrates lead capture, WhatsApp automation, CRM, booking systems, and follow-up sequences into one seamless workflow.',
      whyItMatters: 'Disconnected tools create gaps where leads are lost. A unified system ensures every prospect is tracked, nurtured, and converted efficiently.',
      businessImpact: 'Transform your entire sales process, reduce manual work by 80%, and scale your business without hiring more staff. Get a complete system that works 24/7 to grow your revenue.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border/40 bg-gradient-to-b from-background to-card py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Services That Drive{' '}
              <span className="text-gradient-teal">Real Results</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              We don't just build systems—we build revenue-generating machines. Every service is designed to capture more leads, convert them faster, and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl space-y-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaBlock
        title="Ready to Transform Your Business?"
        description="Let's discuss which services will have the biggest impact on your revenue. Book a free consultation today."
        primaryCta={{
          text: siteConfig.cta.primary,
          href: '/contact',
        }}
        secondaryCta={{
          text: 'View Pricing',
          href: '/pricing',
        }}
      />
    </div>
  );
}
