/**
 * Generates a WhatsApp deep link with prefilled text
 * @param phoneNumber - Business WhatsApp number (can include +, spaces, etc.)
 * @param message - Message text to prefill
 * @returns Properly formatted wa.me link with URL-encoded text
 */
export function generateWhatsAppLink(phoneNumber: string, message: string): string {
  // Normalize phone number: remove all non-digit characters
  const normalizedNumber = phoneNumber.replace(/\D/g, '');
  
  // URL encode the message
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${normalizedNumber}?text=${encodedMessage}`;
}

/**
 * Formats contact form data into a structured WhatsApp message
 * @param data - Contact form submission data with all required fields
 * @returns Formatted message string matching the Quick Bee Agency template
 */
export function formatContactFormMessage(data: {
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  city: string;
  selectedServices: string[];
  budgetRange: string;
  projectDetails: string;
}): string {
  // Format selected services as a readable list
  const servicesList = data.selectedServices.map(service => `• ${service}`).join('\n');
  
  return `New Inquiry – Quick Bee Agency

Name: ${data.fullName}
Business: ${data.businessName}
Phone: ${data.phone}
Email: ${data.email}
City: ${data.city}

Selected Services:
${servicesList}

Budget:
${data.budgetRange}

Project Details:
${data.projectDetails}`;
}
