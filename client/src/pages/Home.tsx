import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Award, 
  Smartphone, 
  Tag, 
  Star,
  Clock,
  DollarSign,
  PaintBucket,
  Leaf,
  TrendingUp,
  CloudRain,
  Car,
  Wrench,
  Truck
} from "lucide-react";
import ContactModal from "@/components/ContactModal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import TrustBadges from "@/components/TrustBadges";
import { trackEvent } from "@/lib/analytics";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleGetQuoteClick = () => {
    trackEvent('cta_click', 'hero', 'get_quote');
    setIsContactModalOpen(true);
  };

  const handleLearnPDRClick = () => {
    trackEvent('cta_click', 'hero', 'learn_pdr');
  };

  return (
    <div className="pt-28 md:pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-black via-gray-900 to-black relative">
            <div className="absolute inset-0 hero-gradient"></div>
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcbd94a79ae4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
              alt="Professional PDR technician working on vehicle" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center lg:text-left mt-20">
          <div className="max-w-2xl animate-slideUp">
            <h1 className="text-5xl lg:text-7xl font-montserrat font-bold text-white mb-6 text-shadow">
              Precision Paintless Dent Repair
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 text-shadow">
              Serving Winter Haven & Central Florida for Over 30 Years — Mobile Service Available
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleGetQuoteClick}
                className="bg-brand-red text-white font-bold px-8 py-4 text-lg border-0 hover:bg-brand-red-hover animate-pulse-scale"
                size="lg"
              >
                Get a Free Quote
              </Button>
              <Link href="/training">
                <Button 
                  onClick={handleLearnPDRClick}
                  className="bg-brand-red text-white font-bold border-0 px-8 py-4 text-lg hover:bg-brand-red-hover animate-pulse-scale"
                  size="lg"
                >
                  Learn PDR
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fadeIn">
              <Award className="w-8 h-8 text-brand-red mb-2 mx-auto" />
              <p className="font-semibold text-dark-gray">30+ Years Experience</p>
            </div>
            <div className="animate-fadeIn">
              <Smartphone className="w-8 h-8 text-brand-red mb-2 mx-auto" />
              <p className="font-semibold text-dark-gray">Mobile Service</p>
            </div>
            <div className="animate-fadeIn">
              <Tag className="w-8 h-8 text-brand-red mb-2 mx-auto" />
              <p className="font-semibold text-dark-gray">Certified Training</p>
            </div>
            <div className="animate-fadeIn">
              <Star className="w-8 h-8 text-brand-red mb-2 mx-auto" />
              <p className="font-semibold text-dark-gray">5-Star Rated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why PDR Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center text-dark-gray mb-16">
            Why Paintless Dent Repair?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="text-center hover-lift">
              <Clock className="w-12 h-12 text-brand-red mb-4 mx-auto" />
              <h3 className="font-semibold text-dark-gray mb-2">Faster Repairs</h3>
              <p className="text-gray-600">Same-day service available</p>
            </div>
            <div className="text-center hover-lift">
              <DollarSign className="w-12 h-12 text-brand-red mb-4 mx-auto" />
              <h3 className="font-semibold text-dark-gray mb-2">Cost-Effective</h3>
              <p className="text-gray-600">Up to 70% savings vs traditional</p>
            </div>
            <div className="text-center hover-lift">
              <PaintBucket className="w-12 h-12 text-brand-red mb-4 mx-auto" />
              <h3 className="font-semibold text-dark-gray mb-2">Preserves Factory Paint</h3>
              <p className="text-gray-600">No repainting required</p>
            </div>
            <div className="text-center hover-lift">
              <Leaf className="w-12 h-12 text-brand-red mb-4 mx-auto" />
              <h3 className="font-semibold text-dark-gray mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">No harmful chemicals used</p>
            </div>
            <div className="text-center hover-lift">
              <TrendingUp className="w-12 h-12 text-brand-red mb-4 mx-auto" />
              <h3 className="font-semibold text-dark-gray mb-2">Retains Resale Value</h3>
              <p className="text-gray-600">Maintains original finish</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg hover-lift">
              <CloudRain className="w-12 h-12 text-brand-red mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Hail Damage Repair</h3>
              <p className="text-gray-300 mb-4">
                Precise hail dent removal with insurance-friendly estimates. Maintain factory finish.
              </p>
              <Link href="/services">
                <Button variant="link" className="text-brand-red p-0">
                  Learn More →
                </Button>
              </Link>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg hover-lift">
              <Car className="w-12 h-12 text-brand-red mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Door Ding Removal</h3>
              <p className="text-gray-300 mb-4">
                Quick, same-day fixes for parking lot dings and minor door damage.
              </p>
              <Link href="/services">
                <Button variant="link" className="text-brand-red p-0">
                  Learn More →
                </Button>
              </Link>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg hover-lift">
              <Wrench className="w-12 h-12 text-brand-red mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Crease & Panel Restoration</h3>
              <p className="text-gray-300 mb-4">
                Advanced crease removal using specialized tools and techniques.
              </p>
              <Link href="/services">
                <Button variant="link" className="text-brand-red p-0">
                  Learn More →
                </Button>
              </Link>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg hover-lift">
              <Truck className="w-12 h-12 text-brand-red mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Mobile PDR Service</h3>
              <p className="text-gray-300 mb-4">
                Fully-equipped mobile service — we come to your location.
              </p>
              <Link href="/services">
                <Button variant="link" className="text-brand-red p-0">
                  Learn More →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center text-dark-gray mb-16">
            See the Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1558618047-3c8c7d043ae6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                afterImage="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                altText="Car door with hail damage dents"
                className="h-64"
              />
              <div className="p-4">
                <p className="text-center text-gray-600 font-semibold">Hail Damage Restoration</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1558618047-3c8c7d043ae6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                afterImage="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                altText="Car panel with crease damage"
                className="h-64"
              />
              <div className="p-4">
                <p className="text-center text-gray-600 font-semibold">Crease Removal</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1558618047-3c8c7d043ae6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                afterImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                altText="Car door with parking lot dings"
                className="h-64"
              />
              <div className="p-4">
                <p className="text-center text-gray-600 font-semibold">Door Ding Repair</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-16">
            What Our Customers Say
          </h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}
