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
 * @param data - Contact form submission data
 * @returns Formatted message string with all fields labeled and separated by line breaks
 */
export function formatContactFormMessage(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): string {
  return `Hi, I just submitted a contact form with the following details:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Message: ${data.message}

I'd like to discuss this further.`;
}
