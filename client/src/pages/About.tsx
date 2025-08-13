import { Handshake, Wrench, GraduationCap, Users, Target, Zap } from "lucide-react";

export default function About() {
  const milestones = [
    { year: "1993", event: "Founded", description: "Established in Winter Haven, FL" },
    { year: "2005", event: "Training Program", description: "Launched PDR certification courses" },
    { year: "2015", event: "Mobile Service", description: "Added mobile repair fleet" },
    { year: "2024", event: "Franchise Expansion", description: "Opening franchise opportunities" },
  ];

  const values = [
    {
      icon: Target,
      title: "Precision Excellence",
      description: "Every repair meets our exacting standards for quality and craftsmanship."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "We prioritize customer satisfaction and transparent communication."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously adopting the latest PDR techniques and technologies."
    },
  ];

  return (
    <div className="pt-28 md:pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6">
            About Dents Master Franchise
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            For over 30 years, Dents Master has been Central Florida's premier destination 
            for paintless dent repair services and professional PDR training.
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-dark-gray mb-8">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our mission is to deliver precision repairs that exceed expectations while training 
                the next generation of skilled PDR technicians. We combine decades of experience 
                with cutting-edge techniques to restore vehicles to their original condition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-dark-gray mb-4">Our Story</h3>
                <p className="text-gray-600 mb-4">
                  Founded in 1993 in Winter Haven, Florida, Dents Master began as a small family business 
                  with a passion for automotive restoration. What started as a local PDR service has grown 
                  into one of the most respected training facilities in the industry.
                </p>
                <p className="text-gray-600">
                  Over three decades, we've repaired thousands of vehicles and trained hundreds of 
                  technicians who now operate successful PDR businesses worldwide. Our commitment to 
                  excellence and innovation has made us the trusted choice for both customers and students.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h4 className="text-xl font-semibold text-dark-gray mb-6">By the Numbers</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Years in Business</span>
                    <span className="font-bold text-brand-red text-2xl">30+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Vehicles Repaired</span>
                    <span className="font-bold text-brand-red text-2xl">50,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Students Trained</span>
                    <span className="font-bold text-brand-red text-2xl">800+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Success Rate</span>
                    <span className="font-bold text-brand-red text-2xl">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center text-dark-gray mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center bg-white p-8 rounded-lg shadow-sm hover-lift">
                  <Icon className="w-12 h-12 text-brand-red mb-4 mx-auto" />
                  <h3 className="font-semibold text-dark-gray mb-4 text-xl">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center text-dark-gray mb-16">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Handshake className="w-16 h-16 text-brand-red mb-6 mx-auto" />
              <h3 className="font-semibold text-dark-gray mb-4 text-xl">Trusted Partnerships</h3>
              <p className="text-gray-600">
                Working with major insurance companies and dealerships throughout Florida, 
                we've built a reputation for reliability and quality that spans decades.
              </p>
            </div>
            <div className="text-center">
              <Wrench className="w-16 h-16 text-brand-red mb-6 mx-auto" />
              <h3 className="font-semibold text-dark-gray mb-4 text-xl">Advanced Techniques</h3>
              <p className="text-gray-600">
                We utilize the latest PDR technology and methods, continuously updating our 
                techniques to handle the most challenging repairs with superior results.
              </p>
            </div>
            <div className="text-center">
              <GraduationCap className="w-16 h-16 text-brand-red mb-6 mx-auto" />
              <h3 className="font-semibold text-dark-gray mb-4 text-xl">Training Excellence</h3>
              <p className="text-gray-600">
                Our comprehensive training programs have graduated hundreds of certified PDR 
                technicians who operate successful businesses worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-16">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className="bg-brand-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {milestone.year}
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{milestone.event}</h3>
                  <p className="text-gray-300 text-sm">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-montserrat font-bold text-dark-gray mb-8">
              Leadership Philosophy
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              "Our success isn't measured just by the dents we repair, but by the lives we impact through 
              quality training and exceptional service. Every student who graduates and every customer who 
              drives away satisfied represents our commitment to excellence."
            </p>
            <p className="text-lg text-gray-500 italic">
              — The Dents Master Team
            </p>
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center text-dark-gray mb-16">
            Industry Recognition
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="bg-gray-100 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-dark-gray">I-CAR</h3>
                <p className="text-sm text-gray-600">Certified Training Facility</p>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-dark-gray">ASE</h3>
                <p className="text-sm text-gray-600">Automotive Service Excellence</p>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-dark-gray">BBB</h3>
                <p className="text-sm text-gray-600">A+ Rating</p>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-dark-gray">Insurance</h3>
                <p className="text-sm text-gray-600">Preferred Provider</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
