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
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border/40 bg-gradient-to-b from-background to-card py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Services That Drive{' '}
              <span className="text-gradient-teal">Real Revenue Growth</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              We build automated systems that capture leads, nurture relationships, and convert prospects into paying customers
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:glow-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {siteConfig.cta.secondary}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaBlock
        title="Ready to Automate Your Lead Generation?"
        description="Let's discuss which services will have the biggest impact on your business growth."
        primaryCta={{
          text: 'Schedule a Free Consultation',
          href: '/contact',
        }}
      />
    </div>
  );
}
