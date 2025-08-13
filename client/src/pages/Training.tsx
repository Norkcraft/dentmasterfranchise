import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  Search, 
  CloudRain, 
  Settings, 
  TrendingUp, 
  Shield,
  Users,
  Globe,
  Clock,
  Award
} from "lucide-react";
import ContactModal from "@/components/ContactModal";
import { trackEvent } from "@/lib/analytics";

export default function Training() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleTrainingInquiry = () => {
    trackEvent('cta_click', 'training', 'request_info');
    setIsContactModalOpen(true);
  };

  const learningTopics = [
    { icon: Wrench, title: "Tool Handling", description: "Master PDR tools and techniques" },
    { icon: Search, title: "Dent Assessment", description: "Learn to evaluate damage accurately" },
    { icon: CloudRain, title: "Hail Repairs", description: "Specialize in hail damage restoration" },
    { icon: Settings, title: "Crease Techniques", description: "Advanced crease removal methods" },
    { icon: TrendingUp, title: "Business Basics", description: "Pricing and customer relations" },
    { icon: Shield, title: "Safety Protocols", description: "Professional safety standards" },
  ];

  const enrollmentSteps = [
    { number: 1, title: "Submit Inquiry", description: "Complete training info request" },
    { number: 2, title: "Consultation", description: "Speak with our coordinator" },
    { number: 3, title: "Secure Spot", description: "Pay deposit to reserve" },
    { number: 4, title: "Training", description: "Hands-on learning in Winter Haven" },
    { number: 5, title: "Certification", description: "Graduate with credentials" },
  ];

  const faqs = [
    {
      question: "Do I need prior experience?",
      answer: "No prior PDR experience is required. Our comprehensive training program starts with the basics and progresses to advanced techniques."
    },
    {
      question: "How long is the training program?",
      answer: "Our intensive training program typically lasts 2-3 weeks, depending on your learning pace and chosen specialization."
    },
    {
      question: "Do you accept international students?",
      answer: "Yes! We welcome students from around the world. We can assist with visa documentation and local accommodation recommendations."
    },
    {
      question: "What certification do I receive?",
      answer: "Upon completion, you'll receive a Dents Master PDR certification recognized throughout the industry, along with ongoing support."
    },
    {
      question: "What tools are provided?",
      answer: "All training tools are provided during the course. We also offer tool packages for purchase at graduation with professional-grade equipment."
    }
  ];

  return (
    <div className="pt-28 md:pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6">
              Master the Art of Paintless Dent Repair
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Hands-on, in-person training taught by technicians with 30+ years experience. 
              Certification awarded on completion. International students welcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleTrainingInquiry}
                size="lg"
                className="bg-brand-red text-white font-bold border-0 hover:bg-brand-red-hover animate-pulse-scale"
              >
                Request Training Info
              </Button>
              <a 
                href="tel:+14077933446"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors rounded-lg font-semibold"
              >
                Call to Discuss: (407) 793-3446
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center text-dark-gray mb-16">
            What You'll Learn
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {learningTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <div key={index} className="text-center hover-lift">
                  <Icon className="w-12 h-12 text-brand-red mb-4 mx-auto" />
                  <h3 className="font-semibold text-dark-gray mb-2">{topic.title}</h3>
                  <p className="text-sm text-gray-600">{topic.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Highlights */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-montserrat font-bold text-dark-gray mb-6">
                Why Choose Our Training?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-dark-gray mb-2">Small Class Sizes</h3>
                    <p className="text-gray-600">Personalized attention with maximum 8 students per instructor.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-dark-gray mb-2">International Recognition</h3>
                    <p className="text-gray-600">Our certification is recognized worldwide in the PDR industry.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-dark-gray mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-600">Day and evening classes available to fit your schedule.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-dark-gray mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">Lifetime access to our alumni network and continued guidance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-dark-gray mb-6">Training Packages</h3>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold text-dark-gray mb-2">Basic PDR Certification</h4>
                  <p className="text-gray-600 text-sm mb-2">2-week intensive program covering fundamentals</p>
                  <p className="text-brand-red font-semibold">Starting at $2,995</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold text-dark-gray mb-2">Advanced PDR Master</h4>
                  <p className="text-gray-600 text-sm mb-2">3-week program including hail damage specialization</p>
                  <p className="text-brand-red font-semibold">Starting at $4,495</p>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray mb-2">Business Setup Package</h4>
                  <p className="text-gray-600 text-sm mb-2">Training + tools + business guidance</p>
                  <p className="text-brand-red font-semibold">Starting at $6,995</p>
                </div>
              </div>
              <Button 
                onClick={handleTrainingInquiry}
                className="w-full mt-6 bg-brand-red text-white font-bold border-0 hover:bg-brand-red-hover animate-pulse-scale"
              >
                Get Detailed Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center text-dark-gray mb-16">
            How to Enroll
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {enrollmentSteps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.number}
                  </div>
                  <h4 className="font-semibold text-dark-gray mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button 
                onClick={handleTrainingInquiry}
                size="lg"
                className="bg-brand-red text-white font-bold border-0 hover:bg-brand-red-hover animate-pulse-scale mr-4"
              >
                Start Your Application
              </Button>
              <Button 
                onClick={handleTrainingInquiry}
                size="lg"
                className="bg-brand-red text-white font-bold border-0 hover:bg-brand-red-hover animate-pulse-scale"
              >
                Schedule Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center text-dark-gray mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-dark-gray mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-16">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Carlos M. - Mexico</h3>
                <p className="text-gray-300 text-sm mb-4">
                  "Opened my PDR shop 6 months after graduation. Now I have 3 employees and growing!"
                </p>
                <p className="text-brand-red font-semibold">Class of 2023</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Sarah L. - Canada</h3>
                <p className="text-gray-300 text-sm mb-4">
                  "The training was incredibly thorough. I felt confident starting my mobile PDR business immediately."
                </p>
                <p className="text-brand-red font-semibold">Class of 2023</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Mike R. - Georgia</h3>
                <p className="text-gray-300 text-sm mb-4">
                  "Tripled my income within a year. The business guidance was as valuable as the technical training."
                </p>
                <p className="text-brand-red font-semibold">Class of 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        defaultInquiryType="Request Training Information"
      />
    </div>
  );
}
