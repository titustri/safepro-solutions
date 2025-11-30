import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "6281234567890"; // Replace with actual WhatsApp number
    const message = "Halo, saya ingin bertanya tentang program pelatihan K3";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 p-0 shadow-lg bg-accent hover:bg-accent/90"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};
