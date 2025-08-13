import { Link } from "wouter";

export default function Footer() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Training', href: '/training' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Information</h4>
            <p className="text-gray-300 mb-2">3411 Recker Hwy, Winter Haven, FL 33880</p>
            <a href="tel:+14077933446" className="text-brand-red hover:underline block mb-2">
              (407) 793-3446
            </a>
            <a href="mailto:info@dentsmasterfranchise.com" className="text-brand-red hover:underline block">
              info@dentsmasterfranchise.com
            </a>
            <div className="mt-4">
              <p className="text-gray-300 text-sm">
                <strong>Hours:</strong><br />
                Mon-Fri: 8am-6pm<br />
                Sat: 9am-2pm
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors block"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Service Area</h4>
            <p className="text-gray-300 text-sm">
              Serving Winter Haven, Lakeland, Auburndale, Haines City, and Central Florida. Mobile service available.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Dents Master Franchise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
