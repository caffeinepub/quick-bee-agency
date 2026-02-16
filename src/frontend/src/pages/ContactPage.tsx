import { useState } from 'react';
import { MessageSquare, Mail, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import WhatsappButton from '../components/marketing/WhatsappButton';
import { useContactForm } from '../hooks/useContactForm';
import { siteConfig } from '../config/site';
import { generateWhatsAppLink, formatContactFormMessage } from '../utils/whatsappLink';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SERVICE_OPTIONS = [
  'Custom Business Website',
  'Sales Funnel System',
  'WhatsApp Automation',
  'CRM & Workflow Automation',
  'E-commerce Website',
  'Booking System Setup',
  'AI Chatbot Setup',
  'Conversion Optimization',
  'Brand Identity & UI/UX',
  'Complete Business Automation',
];

const BUDGET_RANGES = [
  'Rs 2,999 - Rs 9,999',
  'Rs 10,000 - Rs 19,999',
  'Rs 20,000 - Rs 29,999',
  'Rs 30,000 - Rs 39,999',
  'Rs 40,000 - Rs 49,999',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    city: '',
    selectedServices: [] as string[],
    budgetRange: '',
    projectDetails: '',
  });

  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [popupBlocked, setPopupBlocked] = useState(false);

  const { submitForm, isLoading, isSuccess, isError, error, isActorReady } = useContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset popup blocked state
    setPopupBlocked(false);
    
    // Capture the form data before submission
    const dataToSubmit = { ...formData };
    
    // CRITICAL: Open a blank window synchronously from the user click event
    // This must happen BEFORE any async work to avoid popup blocking
    let whatsappWindow: Window | null = null;
    try {
      whatsappWindow = window.open('about:blank', '_blank', 'noopener,noreferrer');
      
      // Check if popup was blocked
      if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed === 'undefined') {
        setPopupBlocked(true);
        whatsappWindow = null;
      }
    } catch (err) {
      // Popup blocked or error opening window
      setPopupBlocked(true);
      whatsappWindow = null;
    }
    
    try {
      // Submit the form to backend
      await submitForm(dataToSubmit);
      
      // Store submitted data for WhatsApp link generation
      setSubmittedData(dataToSubmit);
      
      // Generate WhatsApp link with form data
      const whatsappLink = generateWhatsAppLink(
        siteConfig.whatsapp.contactFormNumber,
        formatContactFormMessage(dataToSubmit)
      );
      
      // Navigate the pre-opened window to WhatsApp
      if (whatsappWindow && !whatsappWindow.closed) {
        try {
          whatsappWindow.location.href = whatsappLink;
        } catch (err) {
          // If navigation fails, close the blank window and show fallback
          try {
            whatsappWindow.close();
          } catch (closeErr) {
            // Ignore close errors
          }
          setPopupBlocked(true);
        }
      } else if (!popupBlocked) {
        // Window was closed by user or became invalid
        setPopupBlocked(true);
      }
      
      // Clear form
      setFormData({
        fullName: '',
        businessName: '',
        phone: '',
        email: '',
        city: '',
        selectedServices: [],
        budgetRange: '',
        projectDetails: '',
      });
    } catch (err) {
      // Submission failed - close the blank window if it's still open
      if (whatsappWindow && !whatsappWindow.closed) {
        try {
          whatsappWindow.close();
        } catch (closeErr) {
          // Ignore close errors
        }
      }
      // Reset popup blocked state on error (don't show popup warning for submission errors)
      setPopupBlocked(false);
      console.error('Form submission error:', err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter((s) => s !== service)
        : [...prev.selectedServices, service],
    }));
  };

  const handleBudgetChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      budgetRange: value,
    }));
  };

  const canSubmit = isActorReady && !isLoading && formData.selectedServices.length > 0;

  // Generate WhatsApp link with submitted form data
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
          <div className="mx-auto max-w-4xl">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Send Us Your Requirements</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-foreground">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Business Name */}
                <div>
                  <label htmlFor="businessName" className="mb-2 block text-sm font-medium text-foreground">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="Enter your business name"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="+91 9876543210"
                  />
                </div>

                {/* Email */}
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
                    placeholder="your@email.com"
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className="mb-2 block text-sm font-medium text-foreground">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="Enter your city"
                  />
                </div>

                {/* Select Services */}
                <div>
                  <label className="mb-3 block text-sm font-medium text-foreground">
                    Select Service(s) * <span className="text-xs text-muted-foreground">(Multiple selection allowed)</span>
                  </label>
                  <div className="space-y-3 rounded-lg border border-input bg-background p-4">
                    {SERVICE_OPTIONS.map((service) => (
                      <div key={service} className="flex items-center space-x-3">
                        <Checkbox
                          id={service}
                          checked={formData.selectedServices.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                        />
                        <Label
                          htmlFor={service}
                          className="cursor-pointer text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {formData.selectedServices.length === 0 && (
                    <p className="mt-2 text-xs text-muted-foreground">Please select at least one service</p>
                  )}
                </div>

                {/* Budget Range */}
                <div>
                  <label htmlFor="budgetRange" className="mb-2 block text-sm font-medium text-foreground">
                    Budget Range *
                  </label>
                  <Select value={formData.budgetRange} onValueChange={handleBudgetChange} required>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {BUDGET_RANGES.map((range) => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="projectDetails" className="mb-2 block text-sm font-medium text-foreground">
                    Project Details *
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="Tell us about your business and project requirements..."
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
                      <p className="text-sm">Thank you! We've received your inquiry and will get back to you within 2 hours.</p>
                    </div>
                    
                    {popupBlocked && whatsappLinkWithDetails && (
                      <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-4">
                        <div className="mb-3 flex items-start gap-2">
                          <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                          <p className="text-sm text-amber-900 dark:text-amber-100">
                            Your browser blocked the automatic WhatsApp window. Please click the button below to open WhatsApp and continue the conversation:
                          </p>
                        </div>
                        <WhatsappButton 
                          link={whatsappLinkWithDetails}
                          label="Chat on WhatsApp"
                        />
                      </div>
                    )}

                    {!popupBlocked && whatsappLinkWithDetails && (
                      <div className="rounded-lg border border-border/40 bg-card p-4">
                        <p className="mb-3 text-sm text-muted-foreground">
                          WhatsApp should have opened automatically. If not, click below to continue the conversation:
                        </p>
                        <WhatsappButton 
                          link={whatsappLinkWithDetails}
                          label="Chat on WhatsApp"
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
                  {isLoading ? 'Sending...' : !isActorReady ? 'Connecting...' : 'Chat on WhatsApp'}
                </button>
              </form>
            </div>

            {/* Quick Response Section */}
            <div className="mt-12 rounded-lg border border-border/40 bg-card p-6">
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

            {/* Other Contact Methods */}
            <div className="mt-8 rounded-lg border border-border/40 bg-card p-6">
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
      </section>
    </div>
  );
}
