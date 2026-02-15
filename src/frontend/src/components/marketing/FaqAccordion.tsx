import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly can you set up the automation system?',
      answer: 'Most systems are fully operational within 5-7 business days. This includes setup, integration, testing, and training your team.',
    },
    {
      question: 'Do I need technical knowledge to use the system?',
      answer: 'Not at all. We handle all the technical setup and provide simple training. You just need to know how to check messages and view your dashboard.',
    },
    {
      question: 'What if I already have a website?',
      answer: 'Perfect! We integrate with your existing website. We can add lead capture forms and connect them to your automation system without rebuilding anything.',
    },
    {
      question: 'Can I customize the automated messages?',
      answer: 'Absolutely. Every message, sequence, and workflow is customized to match your brand voice and business needs. You have full control over what gets sent.',
    },
    {
      question: 'What happens to leads when I\'m offline?',
      answer: 'The system works 24/7. Leads are captured, responded to, and nurtured automatically. You can review and take over conversations whenever you\'re available.',
    },
    {
      question: 'Is there a contract or can I cancel anytime?',
      answer: 'No long-term contracts. You can cancel anytime with 30 days notice. We believe in earning your business every month through results.',
    },
    {
      question: 'How do you measure ROI and success?',
      answer: 'We provide detailed analytics showing lead capture rates, response times, conversion rates, and revenue generated. You\'ll see exactly how the system performs.',
    },
  ];

  return (
    <section className="border-b border-border/40 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our services
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-border/40 bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                  aria-expanded={openIndex === index}
                >
                  <span className="pr-8 font-semibold text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-accent transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="border-t border-border/40 px-6 py-4">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
