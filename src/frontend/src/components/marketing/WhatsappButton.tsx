import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/site';

export default function WhatsappButton() {
  return (
    <a
      href={siteConfig.whatsapp.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#20BA5A] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <MessageCircle className="h-5 w-5" />
      Chat on WhatsApp
    </a>
  );
}
