import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "27836219880"; // Cello Sports Management WhatsApp number
  const message = encodeURIComponent("Hi! I'm interested in learning more about Cello Sports Management services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover-elevate active-elevate-2 transition-all duration-300"
        data-testid="button-whatsapp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="sr-only">Chat on WhatsApp</span>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-card text-card-foreground text-sm font-medium rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Chat with us on WhatsApp
        </div>
      </a>
    </div>
  );
}
