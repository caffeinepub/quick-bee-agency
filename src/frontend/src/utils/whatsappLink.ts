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
