import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import ContactModal from "./ContactModal";

export default function FloatingCTA() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);

  const handleDesktopClick = () => {
    setIsContactModalOpen(true);
  };

  const handleMobileClick = () => {
    setIsMobileSheetOpen(true);
  };

  return (
    <>
      {/* Desktop Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleDesktopClick}
          className="hidden md:flex bg-brand-red text-white font-bold border-0 hover:bg-brand-red-hover px-6 py-3 rounded-full shadow-lg animate-float animate-pulse-scale items-center"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Get a Free Quote
        </Button>

        {/* Mobile Action Button */}
        <Button
          onClick={handleMobileClick}
          className="md:hidden bg-brand-red text-white font-bold border-0 hover:bg-brand-red-hover p-4 rounded-full shadow-lg animate-pulse-scale"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Mobile Action Sheet */}
      <Sheet open={isMobileSheetOpen} onOpenChange={setIsMobileSheetOpen}>
        <SheetContent side="bottom" className="h-auto">
          <div className="p-4 space-y-3">
            <a 
              href="tel:+14077933446" 
              className="flex items-center justify-center bg-brand-red text-white font-bold border-0 py-3 px-6 rounded-lg hover:bg-brand-red-hover transition-all"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
            <Button
              onClick={() => {
                setIsMobileSheetOpen(false);
                setIsContactModalOpen(true);
              }}
              className="w-full bg-brand-red text-white font-bold border-0 hover:bg-brand-red-hover"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Fill Contact Form
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-gray-500" 
              onClick={() => setIsMobileSheetOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}
