import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import ContactModal from "@/components/ContactModal";

export default function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Training', href: '/training' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Mobile Call Bar */}
      <div className="mobile-call-bar md:hidden fixed top-0 left-0 right-0 z-50 py-2 px-4 text-center">
        <a href="tel:+14077933446" className="text-white font-semibold">
          <Phone className="inline-block w-4 h-4 mr-2" />
          Call Now: (407) 793-3446
        </a>
      </div>

      {/* Header */}
      <header 
        className={`fixed top-10 md:top-0 left-0 right-0 z-40 transition-all duration-300 bg-black/90 backdrop-blur-md ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
        style={{ marginTop: '0' }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo and Tagline */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="bg-black rounded-full p-3 border-2 border-brand-red">
              <div className="text-brand-red font-montserrat font-bold text-xl leading-tight">
                DENTS<br />MASTER
              </div>
            </div>
            <div className="hidden md:block">
              <div className="text-white font-montserrat font-semibold text-sm">
                Precision Repairs. World-Class Training.
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-white hover:text-brand-red transition-colors ${
                  location === item.href ? 'text-brand-red' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone and CTA */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+14077933446" 
              className="hidden md:flex items-center text-white hover:text-brand-red transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              (407) 793-3446
            </a>
            <Button 
              className="bg-brand-red text-white font-bold hover:bg-brand-red-hover border-0 animate-pulse-scale"
              onClick={() => setIsContactModalOpen(true)}
            >
              Get a Free Quote
            </Button>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-white">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black/95 border-gray-700">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-brand-red transition-colors text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}
