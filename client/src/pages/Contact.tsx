import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { trackEvent } from "@/lib/analytics";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  inquiryType: z.enum(["Book Dent Repair Service", "Request Training Information", "Other Inquiry"]),
  serviceAddress: z.string().optional(),
  preferredDate: z.string().optional(),
  vehicle: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: "Book Dent Repair Service",
      serviceAddress: "",
      preferredDate: "",
      vehicle: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const utmData = {
        ...data,
        utmSource: new URLSearchParams(window.location.search).get('utm_source') || '',
        utmMedium: new URLSearchParams(window.location.search).get('utm_medium') || '',
        utmCampaign: new URLSearchParams(window.location.search).get('utm_campaign') || '',
      };
      
      const response = await apiRequest("POST", "/api/contact", utmData);
      return response.json();
    },
    onSuccess: () => {
      setIsSuccess(true);
      trackEvent('form_submit', 'contact', 'contact_page');
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  const inquiryType = form.watch("inquiryType");
  const showServiceFields = inquiryType === "Book Dent Repair Service";

  if (isSuccess) {
    return (
      <div className="pt-20 md:pt-16 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full mx-4 bg-white p-8 rounded-lg shadow-lg text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-dark-gray mb-4">Message Sent Successfully!</h2>
          <p className="text-gray-600 mb-6">
            We'll get back to you as soon as possible. For immediate assistance, give us a call.
          </p>
          <div className="space-y-3">
            <a 
              href="tel:+14077933446" 
              className="w-full bg-brand-red text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-all animate-pulse-scale inline-flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now: (407) 793-3446
            </a>
            <Button 
              variant="ghost" 
              onClick={() => setIsSuccess(false)}
              className="w-full"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 md:pt-16">
      {/* Hero Header */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to restore your vehicle or start your PDR career? Contact us today for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-dark-gray mb-6">Send us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="inquiryType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What can we help you with? *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Book Dent Repair Service">Book Dent Repair Service</SelectItem>
                            <SelectItem value="Request Training Information">Request Training Information</SelectItem>
                            <SelectItem value="Other Inquiry">Other Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone *</FormLabel>
                          <FormControl>
                            <Input type="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {showServiceFields && (
                    <>
                      <FormField
                        control={form.control}
                        name="serviceAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Address</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="preferredDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Date</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="vehicle"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Vehicle Make/Model</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </>
                  )}

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea {...field} rows={4} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-red hover:bg-red-700 animate-pulse-scale"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>

              <p className="text-sm text-gray-500 mt-4 text-center">
                We respect your privacy — we won't share your info.
              </p>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-dark-gray mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-dark-gray">Address</p>
                      <p className="text-gray-600">3411 Recker Hwy, Winter Haven, FL 33880</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-dark-gray">Phone</p>
                      <a href="tel:+14077933446" className="text-brand-red hover:underline">
                        (407) 793-3446
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-dark-gray">Email</p>
                      <a href="mailto:info@dentsmasterfranchise.com" className="text-brand-red hover:underline">
                        info@dentsmasterfranchise.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-dark-gray">Hours</p>
                      <p className="text-gray-600">
                        Mon-Fri: 8am-6pm<br />
                        Sat: 9am-2pm<br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="tel:+14077933446" 
                  className="w-full mt-6 bg-brand-red text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-all animate-pulse-scale inline-flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </div>

              {/* Google Map */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-300 relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.8447!2d-81.5331!3d28.0222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd49f7f5f8f8f8%3A0x123456789!2s3411%20Recker%20Hwy%2C%20Winter%20Haven%2C%20FL%2033880!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%" 
                    height="256" 
                    style={{ border: 0 }} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dents Master Franchise Location"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-600 text-center">
                    <strong>Service Area:</strong> Proudly serving Winter Haven, Lakeland, Auburndale, 
                    Haines City, and greater Central Florida. Mobile service available within 50 miles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
