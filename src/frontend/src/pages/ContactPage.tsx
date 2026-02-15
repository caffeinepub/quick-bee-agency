import { useState } from 'react';
import { MessageSquare, Mail, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import WhatsappButton from '../components/marketing/WhatsappButton';
import InternationalPhoneInput from '../components/forms/InternationalPhoneInput';
import { useContactForm } from '../hooks/useContactForm';
import { siteConfig } from '../config/site';
import { generateWhatsAppLink, formatContactFormMessage } from '../utils/whatsappLink';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [phoneValid, setPhoneValid] = useState(true);
  const [phoneError, setPhoneError] = useState('');

  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    phone: string;
    message: string;
  } | null>(null);

  const { submitForm, isLoading, isSuccess, isError, error, isActorReady } = useContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone if provided
    if (formData.phone && !phoneValid) {
      setPhoneError('Please enter a valid phone number');
      return;
    }

    // Clear phone error
    setPhoneError('');
    
    // Capture the form data before submission
    const dataToSubmit = { ...formData };
    
    await submitForm(dataToSubmit);
    
    if (!isError) {
      // Store submitted data for WhatsApp link generation
      setSubmittedData(dataToSubmit);
      // Clear form
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePhoneChange = (e164Value: string) => {
    setFormData((prev) => ({
      ...prev,
      phone: e164Value,
    }));
    // Clear error when user starts typing
    if (phoneError) {
      setPhoneError('');
    }
  };

  const handlePhoneValidationChange = (isValid: boolean) => {
    setPhoneValid(isValid);
  };

  const canSubmit = isActorReady && !isLoading;

  // Generate WhatsApp link with submitted form data - uses dedicated contact form WhatsApp number
  const whatsappLinkWithDetails = submittedData
    ? generateWhatsAppLink(
        siteConfig.whatsapp.contactFormNumber,
        formatContactFormMessage(submittedData)
      )
    : null;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border/40 bg-gradient-to-b from-background to-card py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Let's Grow Your Business{' '}
              <span className="text-gradient-teal">Together</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Get in touch today and we'll respond within 2 hours during business hours. Let's discuss how we can help you capture more leads and increase revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="john@example.com"
                  />
                </div>

                <InternationalPhoneInput
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  onValidationChange={handlePhoneValidationChange}
                  label="Phone number (optional)"
                  error={phoneError}
                />

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="Tell us about your business and how we can help..."
                  />
                </div>

                {!isActorReady && (
                  <div className="flex items-center gap-2 rounded-lg border border-muted bg-muted/10 p-4 text-muted-foreground">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <p className="text-sm">Initializing connection... Please wait a moment.</p>
                  </div>
                )}

                {isSuccess && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 p-4 text-accent">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                      <p className="text-sm">Thank you! We'll get back to you within 2 hours.</p>
                    </div>
                    
                    {whatsappLinkWithDetails && (
                      <div className="rounded-lg border border-border/40 bg-card p-4">
                        <p className="mb-3 text-sm text-muted-foreground">
                          Want to discuss this right away? Reach us on WhatsApp with your details already filled in:
                        </p>
                        <WhatsappButton 
                          link={whatsappLinkWithDetails}
                          label="Continue on WhatsApp"
                        />
                      </div>
                    )}
                  </div>
                )}

                {isError && (
                  <div className="flex items-center gap-2 rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-destructive">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <p className="text-sm">{error?.message || 'Something went wrong. Please try again.'}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="w-full rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:glow-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : !isActorReady ? 'Connecting...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl font-bold">Prefer to Chat?</h2>
                <p className="mb-6 text-muted-foreground">
                  Get instant answers to your questions via WhatsApp. We're available during business hours and respond quickly.
                </p>
                <WhatsappButton />
              </div>

              <div className="rounded-lg border border-border/40 bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold">Quick Response Guarantee</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    <span>We respond to all inquiries within 2 hours during business hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    <span>Free consultation to understand your needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    <span>No pressure, no obligation—just honest advice</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-border/40 bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold">Other Ways to Reach Us</h3>
                <div className="space-y-3">
                  <a
                    href={siteConfig.contact.phoneTel}
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>{siteConfig.contact.phoneDisplay}</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    <Mail className="h-5 w-5" />
                    <span>{siteConfig.contact.email}</span>
                  </a>
                  <a
                    href={siteConfig.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>{siteConfig.whatsapp.number}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
