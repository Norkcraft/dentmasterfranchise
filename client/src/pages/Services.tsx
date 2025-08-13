import { useState } from "react";
import { CloudRain, Car, Wrench, Truck, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ContactModal from "@/components/ContactModal";
import { trackEvent } from "@/lib/analytics";

export default function Services() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleBookRepairClick = (service: string) => {
    trackEvent('cta_click', 'services', service);
    setIsContactModalOpen(true);
  };

  return (
    <div className="pt-28 md:pt-16">
      {/* Hero Header */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6">
            Our Paintless Dent Repair Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional PDR services using advanced techniques to restore your vehicle's appearance
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hail Damage Repair */}
            <div className="bg-gray-50 p-8 rounded-lg hover-lift">
              <CloudRain className="w-12 h-12 text-brand-red mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-dark-gray">Hail Damage Repair</h3>
              <p className="text-gray-600 mb-6">
                Precise hail dent removal with insurance-friendly estimates. Our advanced techniques restore your 
                vehicle's appearance while maintaining the factory finish and maximizing your insurance claim value. 
                We work with all major insurance companies and provide detailed documentation.
              </p>
              <Button 
                onClick={() => handleBookRepairClick('hail_repair')}
                className="bg-brand-red text-white font-bold border-0 hover:bg-brand-red-hover animate-pulse-scale"
              >
                Book Hail Repair →
              </Button>
            </div>

            {/* Door Ding Removal */}
            <div className="bg-gray-50 p-8 rounded-lg hover-lift">
              <Car className="w-12 h-12 text-brand-red mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-dark-gray">Door Ding Removal</h3>
              <p className="text-gray-600 mb-6">
                Quick, same-day fixes for parking lot dings and minor door damage. Perfect for busy professionals 
                who need their vehicle restored quickly without the hassle of traditional bodywork. Most door 
                dings can be repaired in under 2 hours.
              </p>
              <Button 
                onClick={() => handleBookRepairClick('door_ding')}
                className="bg-brand-red text-white font-bold border-0 hover:bg-brand-red-hover animate-pulse-scale"
              >
                Book Ding Repair →
              </Button>
            </div>

            {/* Crease & Panel Restoration */}
            <div className="bg-gray-50 p-8 rounded-lg hover-lift">
              <Wrench className="w-12 h-12 text-brand-red mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-dark-gray">Crease & Panel Restoration</h3>
              <p className="text-gray-600 mb-6">
                Advanced crease removal and panel restoration using specialized tools and techniques. Our master 
                technicians can handle complex damage that others might consider impossible to repair. Each repair 
                is carefully assessed to ensure the best possible outcome.
              </p>
              <Button 
                onClick={() => handleBookRepairClick('crease_repair')}
                className="bg-brand-red text-white font-bold border-0 hover:bg-brand-red-hover animate-pulse-scale"
              >
                Book Panel Repair →
              </Button>
            </div>

            {/* Mobile PDR Service */}
            <div className="bg-gray-50 p-8 rounded-lg hover-lift">
              <Truck className="w-12 h-12 text-brand-red mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-dark-gray">Mobile PDR Service</h3>
              <p className="text-gray-600 mb-6">
                Fully-equipped mobile van service — we come to your home or workplace. Convenient scheduling 
                and professional results delivered right to your location throughout Central Florida. Our mobile 
                units carry all necessary tools and equipment for on-site repairs.
              </p>
              <Button 
                onClick={() => handleBookRepairClick('mobile_service')}
                className="bg-brand-red text-white font-bold border-0 hover:bg-brand-red-hover animate-pulse-scale"
              >
                Schedule Mobile Service →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PDR vs Traditional Comparison */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-montserrat font-bold text-center mb-12">
              PDR vs Traditional Repair
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="py-4 px-6 text-lg font-semibold">Factor</th>
                    <th className="py-4 px-6 text-lg font-semibold text-brand-red">PDR</th>
                    <th className="py-4 px-6 text-lg font-semibold text-gray-400">Traditional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-6 font-medium">Time</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-2" />
                        Same Day
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <X className="w-5 h-5 text-red-500 mr-2" />
                        1-2 Weeks
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-6 font-medium">Cost</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-2" />
                        70% Less
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <X className="w-5 h-5 text-red-500 mr-2" />
                        Expensive
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-6 font-medium">Paint</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-2" />
                        Original Factory
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <X className="w-5 h-5 text-red-500 mr-2" />
                        Repainted
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Resale Impact</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-2" />
                        Value Maintained
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <X className="w-5 h-5 text-red-500 mr-2" />
                        Value Reduced
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center text-dark-gray mb-16">
            Our Work Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <BeforeAfterSlider
                  beforeImage="https://images.unsplash.com/photo-1558618047-3c8c7d043ae6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  afterImage="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  altText={`PDR repair example ${index}`}
                  className="h-48"
                />
                <div className="p-4">
                  <p className="text-center text-gray-600 font-semibold">
                    Professional PDR Repair
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-montserrat font-bold mb-6">
            Ready to Restore Your Vehicle?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free quote today and see why thousands of customers trust Dents Master 
            for their paintless dent repair needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleBookRepairClick('cta_section')}
              size="lg" 
              className="bg-brand-red text-white font-bold border-0 hover:bg-brand-red-hover animate-pulse-scale"
            >
              Book Your Repair
            </Button>
            <a 
              href="tel:+14077933446"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-brand-red transition-colors rounded-lg font-semibold"
            >
              Call (407) 793-3446
            </a>
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        defaultInquiryType="Book Dent Repair Service"
      />
    </div>
  );
}
